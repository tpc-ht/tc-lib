import { TreeSelectProps } from "antd";
import { ForwardRefExoticComponent, RefAttributes } from "react";
declare type SelectType = "radio" | "multiple" | "checkbox";
export interface IBaseTreeSelectProps extends TreeSelectProps {
    /** 接口函数 */
    serverFun: (params: any) => Promise<any>;
    /** 下拉数据 外部传递避免重复渲染出现的多次请求 */
    dataSource?: any[];
    /** 默认请求参数 */
    params?: {
        [key: string]: any;
    };
    /** 是否手动请求 默认false */
    manual?: boolean;
    /** 选择类型 */
    selectType?: SelectType;
}
export interface IBaseTreeSelectRef {
    refresh(): void;
    run(...params: any): void;
    mutate(data?: any | ((oldData?: any) => any | undefined)): void;
}
declare type CompoundedComponent = ForwardRefExoticComponent<IBaseTreeSelectProps & RefAttributes<any>>;
export declare const BaseTreeSelect: CompoundedComponent;
export {};
