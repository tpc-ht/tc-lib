import React, { ReactNode } from 'react';
export interface ITableFormProps {
    list: ReactNode[];
    labelW?: number;
    search?: {
        submit: () => void;
        reset: () => void;
    };
    minNum?: number;
    maxNum?: number;
    direction?: 'row' | 'column';
}
export declare const TableForm: React.MemoExoticComponent<({ list, labelW, search, direction, minNum, maxNum, }: ITableFormProps) => React.JSX.Element>;
