var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import { Space } from "@tc-lib/components";
import { InputNumber } from "antd";
import React, { useRef } from "react";
import styled from "styled-components";
import { usePrefix } from "../../hooks";
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var InputContent = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .ant-input-number {\n    width: ", "px;\n    position: relative;\n    input {\n      padding: 0 ", "px 0 4px;\n    }\n    &::after {\n      position: absolute;\n      content: \"", "\";\n      right: 4px;\n      top: 0;\n      bottom: 0;\n      line-height: 30px;\n      font-size: 12px;\n      color: #bbb;\n    }\n  }\n"])), function (e) {
  return e.suffix ? 70 : 50;
}, function (e) {
  return e.suffix ? 26 : 4;
}, function (e) {
  return e.suffix;
});
export var ProgressBar = function ProgressBar(_ref) {
  var _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? 0 : _ref$value,
    suffix = _ref.suffix,
    onChange = _ref.onChange;
  var totalRef = useRef(null);
  var prefix = usePrefix("progress-bar");
  return /*#__PURE__*/_jsxs(Space, {
    align: "center",
    style: {
      width: "100%"
    },
    children: [/*#__PURE__*/_jsxs("div", {
      className: prefix,
      children: [/*#__PURE__*/_jsx("div", {
        ref: totalRef,
        children: /*#__PURE__*/_jsx("div", {
          style: {
            width: value + "%"
          }
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "".concat(prefix, "-handle"),
        onMouseDown: function onMouseDown(e) {
          e === null || e === void 0 ? void 0 : e.preventDefault();
          var _ref2 = totalRef.current,
            offsetWidth = _ref2.offsetWidth;
          var stop = e.currentTarget;
          var offsetLeft = stop.offsetLeft;
          stop.style["left"] = offsetLeft + "px";
          var start = e.pageX;
          var move = function move(e) {
            var val = offsetLeft + e.pageX - start;
            if (val <= 0) val = 0;
            if (val >= offsetWidth) val = offsetWidth;
            var tVal = val / offsetWidth * 100;
            onChange === null || onChange === void 0 ? void 0 : onChange(tVal < min ? min : tVal);
          };
          var mouseup = function mouseup() {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", clear);
            document.removeEventListener("mouseleave", clear);
          };
          var clear = function clear() {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", clear);
            document.removeEventListener("mouseleave", clear);
          };
          document.addEventListener("mousemove", move);
          document.addEventListener("mouseup", mouseup);
          document.addEventListener("mouseleave", clear);
        },
        style: {
          left: value + "%"
        }
      })]
    }), /*#__PURE__*/_jsx(InputContent, {
      suffix: suffix,
      children: /*#__PURE__*/_jsx(InputNumber, {
        value: value,
        controls: false,
        precision: 0,
        max: 100,
        min: min,
        onChange: onChange
      })
    })]
  });
};