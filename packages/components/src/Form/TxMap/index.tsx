import { AimOutlined } from "@ant-design/icons";
import { debounce } from "@tc-lib/utils";
import { Select, Typography, message } from "antd";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import "./index.less";
const { Text } = Typography;

let MapKey: string = "";
/**
 * 动态添加腾讯地图 SDK
 * @param MapKey KEY
 * @param id 资源标签Id，用于script标签中src更换
 * @returns
 */
export const AddMapJs = (key: string, id = "TxMapJs") => {
  MapKey = key;
  return new Promise(function (resolve, reject) {
    let MapDom = document.getElementById(id);
    if (MapDom) {
      // @ts-ignore
      MapDom.src = `https://map.qq.com/api/gljs?v=1.exp&libraries=service&key=${key}`;
      resolve(true);
      return;
    }
    let script = document.createElement("script");
    document.body.appendChild(script);
    script.id = id;
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://map.qq.com/api/gljs?v=1.exp&libraries=service&key=${key}`;
    script.onerror = (err) => reject(err);
    script.onload = (e) => resolve(e);
  });
};
interface LocationType {
  lat: number;
  lng: number;
}
export interface IMapValueType extends LocationType {
  address: string;
}
export interface ITXMapPropsType extends Partial<LocationType> {
  id?: string;
  disabled?: boolean;
  mapConfig?: any;
  height?: string | number;
  onChange?: (value: IMapValueType) => void;
  value?: IMapValueType;
}

export const TxMap = memo(
  ({
    height = 300,
    onChange,
    disabled,
    mapConfig,
    id = "TxMapContainer",
    value,
    ...e
  }: ITXMapPropsType) => {
    const markerLayerRef = useRef<any>(null);
    const mapRef = useRef<any>(null);
    const [location, setLocation] = useState<any>();
    const [suggestions, setSuggestions] = useState([]);
    const LatLng = useCallback((lat, lng) => {
      const TMap = (window as any).TMap;
      if (!TMap) return () => ({ lat, lng, height: 0 });
      return new TMap.LatLng(lat, lng);
    }, []);

    /**点击地图获取地址信息*/
    const ClickMap = debounce(async (latLng: LocationType) => {
      const TMap = (window as any).TMap;
      if (!TMap) return;
      const location = new TMap.LatLng(latLng.lat, latLng.lng);
      const geocoder = new TMap.service.Geocoder();
      return geocoder
        .getAddress({ location }) // 将给定的坐标位置转换为地址
        .then(({ result: { location, address } }: any) => {
          onChange?.({
            ...location,
            address,
          });
        });
    }, 500);

    const mapClick = async ({ latLng }: any, markerLayer: any) => {
      const point = {
        id: Date.now(),
        position: LatLng(latLng.lat, latLng.lng),
      };
      markerLayer.setGeometries([point]);
      ClickMap(latLng);
    };

    useEffect(() => {
      let qq = (window as any).qq;
      if (qq) setLocation(new qq.maps.Geolocation(MapKey, MapKey));
    }, []);

    useEffect(() => {
      const TMap = (window as any).TMap;
      if (!TMap) return;
      const _temp = document.getElementById(id);
      const option = {
        // center, // 设置地图中心点坐标
        viewMode: "2D",
        pitch: 0, // 设置俯仰角
        rotation: 0, // 设置地图旋转角度
        zoom: 13, // 设置地图缩放级别
        ...mapConfig,
      };
      const map = new TMap.Map(_temp, option);

      const _markerLayer = new TMap.MultiMarker({
        id: "marker-layer",
        styles: {
          highlight: new TMap.MarkerStyle({
            src: "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/marker-pink.png",
          }),
        },
        map,
      });
      /*添加点击事件*/
      if (!disabled) map.on("click", (e: any) => mapClick(e, _markerLayer));
      markerLayerRef.current = _markerLayer;
      mapRef.current = map;
    }, []);
    //构建失败
    // if (!TMap) {
    //   onBuildBreak?.();
    //   return (
    //     <Card>
    //       <Empty
    //         image={Empty.PRESENTED_IMAGE_SIMPLE}
    //         description={'地图构建失败，请检查地图初始化配置！'}
    //       />
    //     </Card>
    //   );
    // }

    const handleSearchByKeyword = debounce((keyword: string) => {
      // 使用者在搜索框中输入文字时触发
      if (keyword) {
        const TMap = (window as any).TMap;
        if (!TMap) return;
        const suggest = new TMap.service.Suggestion({
          // 新建一个关键字输入提示类
          pageSize: 10, // 返回结果每页条目数
        });
        suggest
          .getSuggestions({
            keyword: keyword,
            location: mapRef.current?.getCenter(),
          })
          .then((result: any) => {
            const list = result.data?.map((item: any) => {
              const { title, location, address } = item;
              return {
                label: (
                  <div>
                    <div>{title}</div>
                    <Text type="secondary">{address}</Text>
                  </div>
                ),
                value: JSON.stringify(location),
                text: address,
                location,
                address,
              };
            });
            setSuggestions(list);
          })
          .catch((error: any) => {
            console.error(error);
          });
      }
    }, 500);

    /**获取当前定位*/
    const getAtLocation = () => {
      /*获取当前定位*/
      location?.getLocation(
        (position: LocationType) => {
          const { lat, lng } = position;
          /**设置地图标点*/
          markerLayerRef?.current?.setGeometries([
            {
              id: Date.now(),
              position: LatLng(lat, lng),
            },
          ]);

          /**设置地图中心经纬度*/
          mapRef?.current?.setCenter({ lat, lng });
          ClickMap(position);
        },
        () => {
          message.error("获取当前定位失败");
        }
      );
    };

    useEffect(() => {
      if (value && Object.keys(value).length) {
        const { lat, lng } = value;
        const latLng = {
          lat,
          lng,
        };
        markerLayerRef?.current?.setGeometries([
          {
            id: Date.now(),
            position: LatLng(lat, lng),
          },
        ]);
        mapRef?.current?.setCenter(latLng);
      } else {
        markerLayerRef?.current?.setGeometries([]);
      }
    }, [value]);

    return (
      <div
        className="tc-lib-map-main"
        style={{ height, minHeight: 200 }}
        {...e}
      >
        {!disabled ? (
          <div className="map-search">
            <Select
              showSearch
              placeholder="请输入地址"
              style={{ width: 200 }}
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              onSearch={handleSearchByKeyword}
              onChange={(_, option: any) => {
                const { location, address } = option;
                const point = {
                  id: Date.now(),
                  position: LatLng(location.lat, location.lng),
                };
                markerLayerRef?.current?.setGeometries([point]);
                mapRef?.current?.setCenter(location);
                onChange?.({
                  lat: location.lat,
                  lng: location.lng,
                  address: address,
                });
              }}
              notFoundContent={null}
              options={suggestions}
            />
          </div>
        ) : null}
        <div id={id} className="map-content" />
        {/*定位*/}
        {location ? (
          <div
            className="map-location"
            onClick={(e) => {
              e.stopPropagation();
              getAtLocation();
            }}
            title={"定位到当前"}
          >
            <AimOutlined style={{ fontSize: 30 }} />
          </div>
        ) : null}
      </div>
    );
  }
);
