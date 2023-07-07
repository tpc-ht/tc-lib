import { ModalProps } from "antd";
import React, { FC, ReactNode } from "react";
import "./index.less";
export interface IDragModalProps extends ModalProps {
    title: string;
}
export declare const DragModal: FC<IDragModalProps>;
export interface IModalFooterProps {
    leftRender?: ReactNode;
    children?: ReactNode;
}
export declare const ModalFooter: ({ leftRender, children }: IModalFooterProps) => React.JSX.Element;
