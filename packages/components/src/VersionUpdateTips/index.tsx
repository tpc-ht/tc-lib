import { Button, Modal } from "antd";
import React, {
  FC,
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
const awaitWrap = (promise: Promise<any>): Promise<any> => {
  return promise.then((res: any) => res).catch(() => {});
};
export interface IVersionUpdateTips {
  pollingTime?: number; //每次检查更新间隔，单位：秒。默认值：60
  title?: string; //发现新版本！！！
  children?: ReactNode; //发现新版本，为避免造成数据错误，请刷新后使用!
  metaName?: string; // meta标签名称，默认：web_version
}
/** 检测版本更新 */
export const VersionUpdateTips: FC<IVersionUpdateTips> = memo(
  ({
    pollingTime = 60,
    title = "发现新版本！！！",
    children = "发现新版本，为避免造成数据错误，请刷新后使用!",
    metaName = "web_version",
  }) => {
    /** 当前版本号 */
    const curVersion = useRef<any>(null);
    /** 上次访问时间 */
    const preTime = useRef<any>(0);
    /** 定时器 */
    const timer = useRef<any>(null);
    const [visible, setVisible] = useState(false);
    const getHtml = async () => {
      const timestamp = new Date().getTime();
      const res = await awaitWrap(
        fetch(`${window.location.origin}?time=${timestamp}`)
          .then(function (res) {
            console.log("res", res);
            return res.text();
          })
          .then(function (text) {
            return text;
          })
      );
      return res;
    };
    /** 轮询间隔  1分钟*/
    const pTime = useMemo(() => {
      return pollingTime * 1000;
    }, [pollingTime]);

    /** 获取最新版本号
     * timestamp-时间戳防止请求缓存
     */
    const fetchNewVersion = useCallback(async () => {
      // 在 js 中请求首页地址不会更新页面
      const response = await getHtml();
      // 返回的是字符串，需要转换为 html
      const el = document.createElement("html");
      el.innerHTML = response;
      let newVersion = "";
      // 拿到 版本号
      const metaList = el.querySelectorAll("meta");
      if (metaList.length) {
        metaList.forEach((item) => {
          if (item.name === metaName) {
            newVersion = item.content;
          }
        });
      }
      if (newVersion && newVersion !== curVersion.current && !visible) {
        // 版本更新，弹出提示
        setVisible(true);
      } else if (newVersion && newVersion === curVersion.current && visible) {
        setVisible(false);
      }
    }, [visible]);

    /** 开启定时器 */
    const setTimer = useCallback(() => {
      timer.current = setInterval(fetchNewVersion, pTime);
    }, [fetchNewVersion, pTime]);

    /** 清除定时器 */
    const clearTimer = useCallback(() => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    }, []);

    /** 获取当前版本号 */
    const getCurrentVersion = useCallback(() => {
      let version = "";
      const metaList = document.querySelectorAll("meta");
      if (metaList.length) {
        metaList.forEach((item) => {
          if (item.name === metaName) {
            version = item.content;
          }
        });
      }
      curVersion.current = version;
    }, []);

    /** 获取当前版本号 */
    const getVersion = useCallback(() => {
      getCurrentVersion();
      fetchNewVersion();
    }, [fetchNewVersion, getCurrentVersion]);

    /** 浏览器窗口是否显示隐藏 */
    const onVisibilityChange = useCallback(() => {
      if (!document.hidden) {
        const currTime = +new Date();
        // 防止10秒之内频繁切换
        if (currTime - preTime.current > 1000 * 10) {
          setTimer();
          getVersion();
        }
      } else {
        preTime.current = +new Date();
        clearTimer();
      }
    }, [clearTimer, getVersion, setTimer]);

    useEffect(() => {
      getVersion();
      setTimer();
      return () => {
        clearTimer();
      };
    }, []);

    useEffect(() => {
      document.addEventListener("visibilitychange", onVisibilityChange);
      return () => {
        document.removeEventListener("visibilitychange", onVisibilityChange);
      };
    }, []);

    /** 立即刷新 */
    const handleConfirm = useCallback(() => {
      setVisible(false);
      window.location.reload();
    }, []);

    return (
      <Modal
        width={400}
        open={visible}
        maskClosable={false}
        mask={false}
        closable={false}
        title={title}
        footer={[
          <Button key="refresh" onClick={handleConfirm} type="primary" ghost>
            立即刷新
          </Button>,
        ]}
      >
        {children}
      </Modal>
    );
  }
);
