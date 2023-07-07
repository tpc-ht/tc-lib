import React, { FC, UIEventHandler } from 'react';
export interface WaterfallProps extends React.HTMLAttributes<HTMLDivElement> {
    col?: number;
    width?: number;
    space?: number | number[];
    bufferHeight?: number;
    concurrent?: number;
    extraItemHeight?: number;
    onScroll?: UIEventHandler<HTMLDivElement>;
}
export declare const Waterfall: FC<WaterfallProps>;
