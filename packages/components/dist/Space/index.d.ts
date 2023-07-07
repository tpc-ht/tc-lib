import React, { FC } from "react";
interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "end" | "center" | "baseline";
    justify?: "start" | "end" | "center" | "space-between" | "space-around";
    direction?: "column" | "row";
    size?: number;
    wrap?: boolean;
}
export declare const Space: FC<SpaceProps>;
export {};
