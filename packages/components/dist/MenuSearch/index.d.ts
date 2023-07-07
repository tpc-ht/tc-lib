import type { AutoCompleteProps } from 'antd';
import React from 'react';
import './index.less';
export declare type MenuSearchProps = {
    className?: string;
    placeholder?: string;
    options?: AutoCompleteProps['options'];
    onSelect?: (value: string, option: any) => void;
};
export declare const MenuSearch: React.FC<MenuSearchProps>;
