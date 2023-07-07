import { SpinProps } from "antd";
import React from "react";
export interface ILoadingProps extends SpinProps {
    loading: boolean;
    error?: any;
    empty?: boolean;
    refresh?: () => void;
    size?: "small" | "default" | "large";
    children?: any;
}
export declare const Loading: React.MemoExoticComponent<({ loading, error, empty, refresh, className, children, size, ...e }: ILoadingProps) => React.JSX.Element>;
