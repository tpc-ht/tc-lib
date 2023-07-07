import React, { CSSProperties, FC, ReactNode } from 'react';
import './index.less';
export interface IPageMainProps {
    header?: ReactNode;
    children: ReactNode;
    style?: CSSProperties;
    headStyle?: CSSProperties;
}
export declare const PageMain: ({ children, ...e }: IPageMainProps) => React.JSX.Element;
export interface IPageLayoutProps {
    aside?: ReactNode;
    minSize?: number;
    maxSize?: number;
    header?: ReactNode;
    children: ReactNode;
    style?: CSSProperties;
    bodyStyle?: CSSProperties;
    asideStyle?: CSSProperties;
    headStyle?: CSSProperties;
}
export declare const PageLayout: FC<IPageLayoutProps>;
