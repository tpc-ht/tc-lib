function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children"],
  _excluded2 = ["aside", "header", "children", "minSize", "maxSize", "bodyStyle", "asideStyle", "headStyle"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { memo, useState } from 'react';
import SplitPane from 'react-split-pane';
import "./index.less";
import SideBar from "./SideBar";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var RSplitPane = SplitPane;
export var PageMain = function PageMain(_ref) {
  var children = _ref.children,
    e = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
    className: "y-layout-main"
  }, e), {}, {
    children: children
  }));
};
export var PageLayout = /*#__PURE__*/memo(function (_ref2) {
  var aside = _ref2.aside,
    header = _ref2.header,
    children = _ref2.children,
    minSize = _ref2.minSize,
    maxSize = _ref2.maxSize,
    bodyStyle = _ref2.bodyStyle,
    asideStyle = _ref2.asideStyle,
    headStyle = _ref2.headStyle,
    extra = _objectWithoutProperties(_ref2, _excluded2);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
    className: "y-layout"
  }, extra), {}, {
    children: aside ? /*#__PURE__*/_jsxs(RSplitPane, {
      split: "vertical",
      allowResize: !visible,
      size: visible ? 0 : minSize || 200,
      minSize: visible ? 0 : minSize || 200,
      maxSize: maxSize || 400,
      children: [/*#__PURE__*/_jsxs("div", {
        className: "y-layout-aside",
        style: asideStyle,
        children: [/*#__PURE__*/_jsx(SideBar, {
          visible: visible,
          onClick: function onClick() {
            return setVisible(function (e) {
              return !e;
            });
          }
        }), aside]
      }), /*#__PURE__*/_jsxs(PageMain, {
        children: [header ? /*#__PURE__*/_jsx("div", {
          className: "y-layout-header",
          style: headStyle,
          children: header
        }) : null, /*#__PURE__*/_jsx("div", {
          className: "y-layout-app",
          style: bodyStyle,
          children: children
        })]
      })]
    }) : /*#__PURE__*/_jsxs(PageMain, {
      children: [header ? /*#__PURE__*/_jsx("div", {
        className: "y-layout-header",
        style: headStyle,
        children: header
      }) : null, /*#__PURE__*/_jsx("div", {
        className: "y-layout-app",
        style: bodyStyle,
        children: children
      })]
    })
  }));
});