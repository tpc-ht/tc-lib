import { SelectProps } from "antd";
import { TextProps } from "antd/lib/typography/Text";
import React, { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
export interface IBaseSelectProps extends SelectProps {
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
    /** 是否多选 */
    isMultiple?: boolean;
    /** 每一项描述 */
    description?: string | ((row: any, index: number) => ReactNode);
    /** 自定义lobel */
    labelFormat?: (row: any, index: number) => ReactNode;
}
export interface IBaseSelectRef {
    refresh(): void;
    run(...params: any): void;
    mutate(data?: any | ((oldData?: any) => any | undefined)): void;
}
export declare const DescriptionText: (props: TextProps) => React.JSX.Element;
declare type CompoundedComponent = ForwardRefExoticComponent<IBaseSelectProps & RefAttributes<any>> & {
    DescriptionText: typeof DescriptionText;
};
export declare const BaseSelect: CompoundedComponent;
export {};
