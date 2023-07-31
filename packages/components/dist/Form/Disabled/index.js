function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["value", "isCopy", "ellipsisRows", "dangerouslySetInnerHTML", "className"],
  _excluded2 = ["value", "className", "checkedValue", "checkedChildren", "unCheckedChildren"];
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
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { isFullArr, isFullObj, isStr } from "@tc-lib/utils";
import { Space, Tag, Typography } from "antd";
import csn from "classnames";
import React, { memo, useMemo } from "react";
import "./index.less";
import { usePrefix } from "../../hooks";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Paragraph = Typography.Paragraph;
var getTag = function getTag(arr, name) {
  return (arr === null || arr === void 0 ? void 0 : arr.map(function (e) {
    return /*#__PURE__*/_jsx(Tag, {
      color: "processing",
      children: name ? e[name] : e
    }, name ? e[name] : e);
  })) || "-";
};
export var Disabled = /*#__PURE__*/memo(function (_ref) {
  var value = _ref.value,
    isCopy = _ref.isCopy,
    ellipsisRows = _ref.ellipsisRows,
    dangerouslySetInnerHTML = _ref.dangerouslySetInnerHTML,
    className = _ref.className,
    e = _objectWithoutProperties(_ref, _excluded);
  var prefix = usePrefix("preview-text");
  var valStr = useMemo(function () {
    switch (Object.prototype.toString.call(value)) {
      case "[object Array]":
        return getTag(value);
      default:
        return value;
    }
  }, [value]);
  if (isFullObj(dangerouslySetInnerHTML)) return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
    className: csn("form-preview-text", prefix + "-html", className)
  }, e), {}, {
    dangerouslySetInnerHTML: dangerouslySetInnerHTML || {
      __html: ""
    }
  }));
  return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
    className: csn(prefix, className)
  }, e), {}, {
    children: /*#__PURE__*/_jsx(Paragraph, {
      copyable: isCopy && isStr(value) ? {
        text: value
      } : false,
      style: {
        marginBottom: 0,
        width: "99.9%",
        lineHeight: "inherit"
      },
      ellipsis: {
        rows: ellipsisRows || 1,
        expandable: true
      },
      children: valStr || "-"
    })
  }));
});
export var BooleanDisable = /*#__PURE__*/memo(function (_ref2) {
  var value = _ref2.value,
    className = _ref2.className,
    checkedValue = _ref2.checkedValue,
    _ref2$checkedChildren = _ref2.checkedChildren,
    checkedChildren = _ref2$checkedChildren === void 0 ? "是" : _ref2$checkedChildren,
    _ref2$unCheckedChildr = _ref2.unCheckedChildren,
    unCheckedChildren = _ref2$unCheckedChildr === void 0 ? "否" : _ref2$unCheckedChildr,
    e = _objectWithoutProperties(_ref2, _excluded2);
  var prefix = usePrefix("preview-text");
  var switchValue = useMemo(function () {
    if (isFullArr(checkedValue)) {
      var _checkedValue = _slicedToArray(checkedValue, 1),
        v1 = _checkedValue[0];
      return value === v1;
    }
    return value;
  }, [checkedValue, value]);
  return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
    className: csn(prefix, className)
  }, e), {}, {
    children: switchValue ? /*#__PURE__*/_jsxs(Space, {
      align: "baseline",
      size: 6,
      children: [/*#__PURE__*/_jsx(CheckCircleFilled, {
        style: {
          color: "#6abf40",
          fontSize: 14
        }
      }), /*#__PURE__*/_jsx("span", {
        children: checkedChildren
      })]
    }) : /*#__PURE__*/_jsxs(Space, {
      align: "start",
      size: 6,
      children: [/*#__PURE__*/_jsx(CloseCircleFilled, {
        style: {
          color: "#ff4d4f",
          fontSize: 14
        }
      }), /*#__PURE__*/_jsx("span", {
        children: unCheckedChildren
      })]
    })
  }));
});