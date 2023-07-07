var _excluded = ["serverFun", "params", "manual", "fieldNames", "description", "labelFormat", "disabled", "isMultiple", "value", "dataSource", "loading"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { Disabled } from "@tc-lib/components";
import { getArrNodes, getAttrFromArr, isArr, isFn, isStr } from "@tc-lib/test";
import { useRequest } from "ahooks";
import { Select, Typography } from "antd";
import React, { forwardRef, useImperativeHandle, useMemo } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var required = function required() {
  throw new Error("This component requires an interface function.");
};
var Option = Select.Option;
var Text = Typography.Text;
export var DescriptionText = function DescriptionText(props) {
  return /*#__PURE__*/_jsx(Text, _objectSpread({
    type: "secondary"
  }, props));
};
var getMultiple = function getMultiple() {
  var isMultiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return isMultiple ? {
    mode: "multiple",
    maxTagCount: "responsive"
  } : undefined;
};
// @ts-ignore
export var BaseSelect = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref2;
  var _ref$serverFun = _ref.serverFun,
    serverFun = _ref$serverFun === void 0 ? required() : _ref$serverFun,
    params = _ref.params,
    _ref$manual = _ref.manual,
    manual = _ref$manual === void 0 ? false : _ref$manual,
    _ref$fieldNames = _ref.fieldNames,
    fieldNames = _ref$fieldNames === void 0 ? {
      label: "label",
      value: "value",
      options: "options"
    } : _ref$fieldNames,
    description = _ref.description,
    labelFormat = _ref.labelFormat,
    disabled = _ref.disabled,
    _ref$isMultiple = _ref.isMultiple,
    isMultiple = _ref$isMultiple === void 0 ? true : _ref$isMultiple,
    value = _ref.value,
    dataSource = _ref.dataSource,
    load = _ref.loading,
    extra = _objectWithoutProperties(_ref, _excluded);
  var isOpt = useMemo(function () {
    return isArr(dataSource);
  }, [dataSource]);
  var _useRequest = useRequest(function (e) {
      return serverFun(_objectSpread(_objectSpread({}, params), e));
    }, {
      manual: isOpt || manual
    }),
    loading = _useRequest.loading,
    data = _useRequest.data,
    _run = _useRequest.run,
    _refresh = _useRequest.refresh,
    mutate = _useRequest.mutate;
  useImperativeHandle(ref, function () {
    return {
      run: function run(e) {
        mutate([]);
        _run(e);
      },
      refresh: function refresh() {
        mutate([]);
        _refresh === null || _refresh === void 0 ? void 0 : _refresh();
      },
      mutate: mutate
    };
  }, [_run, _refresh, mutate]);
  var _useMemo = useMemo(function () {
      return fieldNames;
    }, [fieldNames]),
    _useMemo$label = _useMemo.label,
    label = _useMemo$label === void 0 ? "label" : _useMemo$label,
    _useMemo$value = _useMemo.value,
    val = _useMemo$value === void 0 ? "value" : _useMemo$value;
  var getDescriptionText = function getDescriptionText(e, index) {
    if (isStr(description)) return e === null || e === void 0 ? void 0 : e[description];
    if (isFn(description)) return description(e, index);
  };
  var disValue = useMemo(function () {
    if (disabled) {
      var text = getAttrFromArr(getArrNodes(isOpt ? dataSource : data, value, val), label, ",");
      return text || value;
    }
  }, [isOpt, dataSource, data, disabled, value]);
  return disabled ? /*#__PURE__*/_jsx(Disabled, {
    value: disValue
  }) : /*#__PURE__*/_jsx(Select, _objectSpread(_objectSpread(_objectSpread({
    loading: load || loading,
    optionLabelProp: "label",
    style: {
      width: "100%"
    },
    placeholder: "\u8BF7\u9009\u62E9",
    allowClear: true,
    showSearch: true,
    filterOption: function filterOption(input, option) {
      var _option$label;
      return ((_option$label = option === null || option === void 0 ? void 0 : option.label) !== null && _option$label !== void 0 ? _option$label : "").toLowerCase().includes(input.toLowerCase());
    },
    value: value,
    disabled: disabled
  }, getMultiple(isMultiple)), extra), {}, {
    children: (_ref2 = isOpt ? dataSource : data) === null || _ref2 === void 0 ? void 0 : _ref2.map(function (e, index) {
      var v = e[val];
      var l = labelFormat ? labelFormat(e, index) : e[label];
      return /*#__PURE__*/_jsxs(Option, _objectSpread(_objectSpread({
        value: v,
        label: l
      }, e), {}, {
        children: [/*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsx(Text, {
            children: l
          })
        }), description ? /*#__PURE__*/_jsx(DescriptionText, {
          children: getDescriptionText(e, index)
        }) : null]
      }), v);
    })
  }));
});