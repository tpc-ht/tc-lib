/**
 * 侧边树状图收缩按钮
 * */

import classNames from 'classnames';
import React from 'react';
import sidebarHide from "../assets/side-bar-hide.svg";
import sidebarOpen from "../assets/side-bar-open.svg";
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var SideBar = function SideBar(props) {
  var visible = props.visible,
    onClick = props.onClick;
  return /*#__PURE__*/_jsxs("div", {
    className: 'side-handle-bar',
    onClick: onClick,
    children: [/*#__PURE__*/_jsx("img", {
      src: sidebarHide,
      alt: "\u70B9\u51FB\u5C55\u5F00",
      title: "\u70B9\u51FB\u5C55\u5F00",
      className: classNames({
        hide: visible
      })
    }), /*#__PURE__*/_jsx("img", {
      src: sidebarOpen,
      alt: "\u70B9\u51FB\u6536\u7F29",
      title: "\u70B9\u51FB\u6536\u7F29",
      style: {
        marginLeft: -14
      },
      className: classNames({
        hide: !visible
      })
    })]
  });
};
export default SideBar;