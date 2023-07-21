function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input, Space } from 'antd';
import classNames from 'classnames';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';
import { usePrefix } from "../hooks";
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var HighWrapper = styled(Highlighter).withConfig({
  displayName: "HighWrapper",
  componentId: "components-6f0d__sc-qav6kx-0"
})([".highlight-text{background-color:#ffd63f;}"]);
export var MenuSearch = function MenuSearch(props) {
  var className = props.className,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _onSelect = props.onSelect,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? '搜索' : _props$placeholder;
  var prefix = usePrefix('menu-search');
  var inputRef = useRef(null);
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    searchMode = _useState4[0],
    setSearchMode = _useState4[1];
  var getShowOptions = useCallback(function (menuData, keyWord) {
    if (!keyWord) return [];
    var children = [];
    menuData.forEach(function (item) {
      if (item.label.includes(keyWord)) {
        children.push({
          label: /*#__PURE__*/_jsx(HighWrapper, {
            highlightClassName: "highlight-text",
            searchWords: [keyWord],
            autoEscape: true,
            textToHighlight: item.label
          }),
          value: item.value
        });
      }
    });
    return children;
  }, []);
  var optionsData = useMemo(function () {
    return getShowOptions(options, value);
  }, [value, options]);
  var inputClass = classNames("".concat(prefix, "-input"), _defineProperty({}, "".concat(prefix, "-show"), searchMode));
  return /*#__PURE__*/_jsxs("div", {
    className: classNames(className, prefix),
    onClick: function onClick() {
      setSearchMode(true);
    },
    children: [/*#__PURE__*/_jsxs(Space, {
      size: 4,
      children: [/*#__PURE__*/_jsx(SearchOutlined, {
        style: {
          fontSize: 14
        }
      }), !searchMode && /*#__PURE__*/_jsx("span", {
        children: "\u641C\u7D22"
      })]
    }), /*#__PURE__*/_jsx(AutoComplete, {
      className: inputClass,
      value: value,
      options: optionsData,
      backfill: false,
      onSearch: function onSearch(completeValue) {
        setValue(completeValue);
      },
      onSelect: function onSelect(value, option) {
        _onSelect === null || _onSelect === void 0 ? void 0 : _onSelect(value, option);
      },
      children: /*#__PURE__*/_jsx(Input, {
        ref: inputRef,
        "aria-label": placeholder,
        placeholder: placeholder,
        onBlur: function onBlur() {
          setSearchMode(false);
        }
      })
    }, "AutoComplete")]
  });
};