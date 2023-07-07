import { FC, ReactNode } from "react";
export interface IVersionUpdateTips {
    pollingTime?: number;
    title?: string;
    children?: ReactNode;
    metaName?: string;
}
/** 检测版本更新 */
export declare const VersionUpdateTips: FC<IVersionUpdateTips>;
