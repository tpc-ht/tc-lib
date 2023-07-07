function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject, _templateObject2, _templateObject3;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import styled from 'styled-components';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  width: 100%;\n  flex-direction: ", "; // width: 1px;\n"])), function (p) {
  return p.direction;
});
var FormWrapper = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  width: 100%;\n  .ant-form-item-label {\n    width: ", ";\n  }\n  .ant-form-item {\n    margin-bottom: 10px;\n    width: ", ";\n  }\n  .ant-picker-range {\n    width: 100%;\n  }\n  .ant-form-item-control {\n    width: 1px;\n  }\n"])), function (p) {
  return p.width ? p.width + 'px' : 'auto';
}, function (p) {
  return p.flag ? '33.3333%' : '25%';
});
var SearchBar = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding-left: 10px;\n  padding-right: 10px;\n  overflow: hidden;\n"])));
export var TableForm = /*#__PURE__*/memo(function (_ref) {
  var list = _ref.list,
    labelW = _ref.labelW,
    search = _ref.search,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'row' : _ref$direction,
    _ref$minNum = _ref.minNum,
    minNum = _ref$minNum === void 0 ? 6 : _ref$minNum,
    _ref$maxNum = _ref.maxNum,
    maxNum = _ref$maxNum === void 0 ? 8 : _ref$maxNum;
  var resizeObserver = useRef(null);
  var _innerCont = useRef(null);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    width = _useState2[0],
    setWidth = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    show = _useState4[0],
    setShow = _useState4[1];
  var createObserver = function createObserver() {
    resizeObserver.current = new ResizeObserver(function (entries) {
      var _ref2 = entries[0] && entries[0].contentRect || {},
        _ref2$width = _ref2.width,
        width = _ref2$width === void 0 ? 0 : _ref2$width;
      setWidth(width);
    });
    resizeObserver.current.observe(_innerCont.current);
  };
  var destroyObserver = function destroyObserver() {
    if (resizeObserver.current) {
      var _resizeObserver$curre;
      (_resizeObserver$curre = resizeObserver.current) === null || _resizeObserver$curre === void 0 ? void 0 : _resizeObserver$curre.disconnect();
      resizeObserver.current = null;
    }
  };
  useEffect(function () {
    createObserver();
    return function () {
      return destroyObserver();
    };
  }, []);
  var childList = useMemo(function () {
    var len = list.length;
    var flag = width <= 1410;
    var o = {
      list: list,
      flag: flag,
      len: len
    };
    // if (len <= 4) return o;
    // 大屏幕
    if (width > 1410) {
      //多余8个
      if (len > maxNum) {
        if (show) return o;
        return _objectSpread(_objectSpread({}, o), {}, {
          list: list.slice(0, maxNum)
        });
      }
      return o;
    }
    if (len > minNum) {
      if (show) return o;
      return _objectSpread(_objectSpread({}, o), {}, {
        list: list.slice(0, minNum)
      });
    }
    return o;
  }, [list, width, minNum, maxNum, show]);
  var IsChangeType = useMemo(function () {
    return childList.flag && childList.len > minNum || !childList.flag && childList.len > maxNum;
  }, [childList]);
  return /*#__PURE__*/_jsxs(Wrapper, {
    ref: _innerCont,
    direction: direction,
    children: [/*#__PURE__*/_jsx(FormWrapper, {
      width: labelW,
      flag: childList.flag,
      children: childList.list
    }), /*#__PURE__*/_jsx(SearchBar, {
      style: direction === 'column' ? {
        width: '100%',
        textAlign: 'end'
      } : {},
      children: /*#__PURE__*/_jsxs(Space, {
        size: 6,
        style: {
          marginTop: 2
        },
        children: [/*#__PURE__*/_jsx(Button, {
          type: "primary",
          onClick: search === null || search === void 0 ? void 0 : search.submit,
          children: "\u67E5\u8BE2"
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx(Button, {
            onClick: search === null || search === void 0 ? void 0 : search.reset,
            children: "\u91CD\u7F6E"
          }), IsChangeType ? /*#__PURE__*/_jsx(Button, {
            size: "small",
            type: "link",
            onClick: function onClick() {
              return setShow(function (e) {
                return !e;
              });
            },
            children: !show ? /*#__PURE__*/_jsxs("span", {
              children: ["\u5C55\u5F00", /*#__PURE__*/_jsx(DownOutlined, {})]
            }) : /*#__PURE__*/_jsxs("span", {
              children: ["\u6536\u8D77", /*#__PURE__*/_jsx(UpOutlined, {})]
            })
          }) : null]
        })]
      })
    })]
  });
});