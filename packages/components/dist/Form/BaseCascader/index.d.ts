import { CascaderProps } from "antd/lib/cascader";
import { ForwardRefExoticComponent, RefAttributes } from "react";
export declare type IBaseCascaderProps = {
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
} & CascaderProps<any>;
export interface IBaseCascaderRef {
    refresh(): void;
    run(...params: any): void;
    mutate(data?: any | ((oldData?: any) => any | undefined)): void;
}
declare type CompoundedComponent = ForwardRefExoticComponent<IBaseCascaderProps & RefAttributes<any>>;
export declare const BaseCascader: CompoundedComponent;
export {};
