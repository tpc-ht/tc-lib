import React from "react";
import "./index.less";
export interface IColorInputProps {
    value?: string;
    onChange?: (color: string) => void;
}
export declare const ColorInput: React.FC<IColorInputProps>;
