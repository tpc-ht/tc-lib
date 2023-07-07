import { FC } from "react";
import "./index.less";
interface IProps {
    value?: number;
    onChange?: (percent: number) => void;
    min?: number;
    suffix?: string;
}
export declare const ProgressBar: FC<IProps>;
export {};
