import React, { CSSProperties, Key } from "react";
import "./index.less";
export interface IDisabledProps {
    value?: any;
    isCopy?: boolean;
    ellipsisRows?: number;
    className?: string;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
    style?: React.CSSProperties;
}
export declare const Disabled: React.MemoExoticComponent<({ value, isCopy, ellipsisRows, dangerouslySetInnerHTML, className, ...e }: IDisabledProps) => React.JSX.Element>;
interface IBooleanDisableProps {
    value?: string;
    checkedChildren?: string;
    unCheckedChildren?: string;
    className?: string;
    style?: CSSProperties;
    checkedValue?: [Key, Key];
}
export declare const BooleanDisable: React.MemoExoticComponent<({ value, className, checkedValue, checkedChildren, unCheckedChildren, ...e }: IBooleanDisableProps) => React.JSX.Element>;
export {};
