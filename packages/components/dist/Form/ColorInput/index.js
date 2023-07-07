import { usePrefix } from "@tc-lib/components";
import { Input, Popover } from "antd";
import React, { useRef } from "react";
import { SketchPicker } from "react-color";
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
export var ColorInput = function ColorInput(props) {
  var container = useRef();
  var prefix = usePrefix("color-input");
  var color = props.value;
  return /*#__PURE__*/_jsx("div", {
    ref: container,
    className: prefix,
    children: /*#__PURE__*/_jsx(Input, {
      value: props.value,
      onChange: function onChange(e) {
        var _props$onChange;
        (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, e.target.value);
      },
      allowClear: true,
      placeholder: "\u989C\u8272",
      prefix: /*#__PURE__*/_jsx(Popover, {
        autoAdjustOverflow: true,
        trigger: "click",
        overlayInnerStyle: {
          padding: 0
        },
        getPopupContainer: function getPopupContainer() {
          return container.current;
        },
        content: /*#__PURE__*/_jsx(SketchPicker, {
          color: color,
          onChange: function onChange(_ref) {
            var _props$onChange2;
            var rgb = _ref.rgb;
            (_props$onChange2 = props.onChange) === null || _props$onChange2 === void 0 ? void 0 : _props$onChange2.call(props, "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
          }
        }),
        children: /*#__PURE__*/_jsx("div", {
          className: prefix + "-color-tips",
          style: {
            backgroundColor: color
          }
        })
      })
    })
  });
};