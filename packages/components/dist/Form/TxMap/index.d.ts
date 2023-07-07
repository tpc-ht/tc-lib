import React from "react";
import "./index.less";
/**
 * 动态添加腾讯地图 SDK
 * @param MapKey KEY
 * @param id 资源标签Id，用于script标签中src更换
 * @returns
 */
export declare const AddMapJs: (key: string, id?: string) => Promise<unknown>;
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
export declare const TxMap: React.MemoExoticComponent<({ height, onChange, disabled, mapConfig, id, value, ...e }: ITXMapPropsType) => React.JSX.Element>;
export {};
