function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["serverFun", "params", "manual", "fieldNames", "dataSource", "selectType", "loading", "value", "disabled"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Disabled } from "@tc-lib/components";
import { getAttrFromArr, getTreeNodes, isArr } from "@tc-lib/utils";
import { useRequest } from "ahooks";
import { TreeSelect } from "antd";
import React, { useImperativeHandle, useMemo } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
var required = function required() {
  throw new Error("This component requires an interface function.");
};
var getMultiple = function getMultiple(type) {
  switch (type) {
    case "radio":
      return {};
    case "multiple":
      return {
        multiple: true,
        mode: "multiple",
        maxTagCount: "responsive"
      };
    case "checkbox":
      return {
        treeCheckable: true,
        maxTagCount: "responsive",
        showCheckedStrategy: TreeSelect.SHOW_PARENT
      };
  }
};

// @ts-ignore
export var BaseTreeSelect = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$serverFun = _ref.serverFun,
    serverFun = _ref$serverFun === void 0 ? required() : _ref$serverFun,
    params = _ref.params,
    _ref$manual = _ref.manual,
    manual = _ref$manual === void 0 ? false : _ref$manual,
    fieldNames = _ref.fieldNames,
    dataSource = _ref.dataSource,
    _ref$selectType = _ref.selectType,
    selectType = _ref$selectType === void 0 ? "radio" : _ref$selectType,
    load = _ref.loading,
    value = _ref.value,
    disabled = _ref.disabled,
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
    run = _useRequest.run,
    refresh = _useRequest.refresh,
    mutate = _useRequest.mutate;
  var expandedKeys = useMemo(function () {
    var _data$, _data$2;
    return data !== null && data !== void 0 && (_data$ = data[0]) !== null && _data$ !== void 0 && _data$.value ? [data === null || data === void 0 ? void 0 : (_data$2 = data[0]) === null || _data$2 === void 0 ? void 0 : _data$2.value] : [];
  }, [data]);
  useImperativeHandle(ref, function () {
    return {
      run: function (_run) {
        function run(_x) {
          return _run.apply(this, arguments);
        }
        run.toString = function () {
          return _run.toString();
        };
        return run;
      }(function (e) {
        mutate([]);
        run(e);
      }),
      refresh: function (_refresh) {
        function refresh() {
          return _refresh.apply(this, arguments);
        }
        refresh.toString = function () {
          return _refresh.toString();
        };
        return refresh;
      }(function () {
        mutate([]);
        refresh === null || refresh === void 0 ? void 0 : refresh();
      }),
      mutate: mutate
    };
  }, [run, refresh, mutate]);
  var disValue = useMemo(function () {
    if (disabled) {
      var text = getAttrFromArr(getTreeNodes(isOpt ? dataSource : data, value, fieldNames), (fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.label) || "label", ",");
      return text || value;
    }
  }, [isOpt, dataSource, data, disabled, value]);
  return disabled ? /*#__PURE__*/_jsx(Disabled, {
    value: disValue
  }) : /*#__PURE__*/_jsx(TreeSelect, _objectSpread(_objectSpread({
    allowClear: true,
    showSearch: true,
    getCalendarContainer: function getCalendarContainer(triggerNode) {
      return triggerNode.parentNode;
    },
    fieldNames: fieldNames,
    value: value,
    loading: load || loading,
    style: {
      width: "100%"
    },
    placeholder: "\u8BF7\u9009\u62E9",
    treeDefaultExpandAll: true,
    treeData: isOpt ? dataSource : data,
    treeIcon: true //
    ,
    treeNodeFilterProp: "label",
    treeLine: {
      showLeafIcon: false
    },
    treeDefaultExpandedKeys: expandedKeys
  }, getMultiple(selectType)), extra));
});