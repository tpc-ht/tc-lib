/**
 * 侧边树状图收缩按钮
 * */
import React from 'react';
import './index.less';
interface SideBarProps {
    visible: boolean;
    onClick: () => void;
}
declare const SideBar: React.FC<SideBarProps>;
export default SideBar;
