/**
 * 侧边树状图收缩按钮
 * */

import classNames from "classnames";
import React from "react";
import sidebarHide from "../assets/side-bar-hide.svg";
import sidebarOpen from "../assets/side-bar-open.svg";

interface SideBarProps {
  className: string;
  visible: boolean;
  onClick: () => void;
}

const SideBar: React.FC<SideBarProps> = (props) => {
  const { visible, onClick, className } = props;
  return (
    <div className={className} onClick={onClick}>
      <img
        src={sidebarHide}
        alt="点击展开"
        title="点击展开"
        className={classNames({
          hide: visible,
        })}
      />
      <img
        src={sidebarOpen}
        alt="点击收缩"
        title="点击收缩"
        style={{ marginLeft: -14 }}
        className={classNames({
          hide: !visible,
        })}
      />
    </div>
  );
};

export default SideBar;
