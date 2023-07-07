function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["height", "onChange", "disabled", "mapConfig", "id", "value"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { AimOutlined } from "@ant-design/icons";
import { debounce } from "@tc-lib/test";
import { Select, Typography, message } from "antd";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Text = Typography.Text;
var MapKey = "";
/**
 * 动态添加腾讯地图 SDK
 * @param MapKey KEY
 * @param id 资源标签Id，用于script标签中src更换
 * @returns
 */
export var AddMapJs = function AddMapJs(key) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "TxMapJs";
  MapKey = key;
  return new Promise(function (resolve, reject) {
    var MapDom = document.getElementById(id);
    if (MapDom) {
      // @ts-ignore
      MapDom.src = "https://map.qq.com/api/gljs?v=1.exp&libraries=service&key=".concat(key);
      resolve(true);
      return;
    }
    var script = document.createElement("script");
    document.head.appendChild(script);
    script.id = id;
    script.type = "text/javascript";
    script.src = "https://map.qq.com/api/gljs?v=1.exp&libraries=service&key=".concat(key);
    script.onerror = function (err) {
      return reject(err);
    };
    script.onload = function (e) {
      return resolve(e);
    };
  });
};
export var TxMap = /*#__PURE__*/memo(function (_ref) {
  var _ref$height = _ref.height,
    height = _ref$height === void 0 ? 300 : _ref$height,
    _onChange = _ref.onChange,
    disabled = _ref.disabled,
    mapConfig = _ref.mapConfig,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? "TxMapContainer" : _ref$id,
    value = _ref.value,
    e = _objectWithoutProperties(_ref, _excluded);
  var markerLayerRef = useRef(null);
  var mapRef = useRef(null);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    location = _useState2[0],
    setLocation = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    suggestions = _useState4[0],
    setSuggestions = _useState4[1];
  var LatLng = useCallback(function (lat, lng) {
    var TMap = window.TMap;
    if (!TMap) return function () {
      return {
        lat: lat,
        lng: lng,
        height: 0
      };
    };
    return new TMap.LatLng(lat, lng);
  }, []);

  /**点击地图获取地址信息*/
  var ClickMap = debounce( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(latLng) {
      var TMap, location, geocoder;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            TMap = window.TMap;
            if (TMap) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            location = new TMap.LatLng(latLng.lat, latLng.lng);
            geocoder = new TMap.service.Geocoder();
            return _context.abrupt("return", geocoder.getAddress({
              location: location
            }) // 将给定的坐标位置转换为地址
            .then(function (_ref3) {
              var _ref3$result = _ref3.result,
                location = _ref3$result.location,
                address = _ref3$result.address;
              _onChange === null || _onChange === void 0 ? void 0 : _onChange(_objectSpread(_objectSpread({}, location), {}, {
                address: address
              }));
            }));
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }(), 500);
  var mapClick = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref4, markerLayer) {
      var latLng, point;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            latLng = _ref4.latLng;
            point = {
              id: Date.now(),
              position: LatLng(latLng.lat, latLng.lng)
            };
            markerLayer.setGeometries([point]);
            ClickMap(latLng);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function mapClick(_x3, _x4) {
      return _ref5.apply(this, arguments);
    };
  }();
  useEffect(function () {
    var qq = window.qq;
    if (qq) setLocation(new qq.maps.Geolocation(MapKey, MapKey));
  }, []);
  useEffect(function () {
    var TMap = window.TMap;
    if (!TMap) return;
    var _temp = document.getElementById(id);
    var option = _objectSpread({
      // center, // 设置地图中心点坐标
      viewMode: "2D",
      pitch: 0,
      // 设置俯仰角
      rotation: 0,
      // 设置地图旋转角度
      zoom: 13
    }, mapConfig);
    var map = new TMap.Map(_temp, option);
    var _markerLayer = new TMap.MultiMarker({
      id: "marker-layer",
      styles: {
        highlight: new TMap.MarkerStyle({
          src: "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/marker-pink.png"
        })
      },
      map: map
    });
    /*添加点击事件*/
    if (!disabled) map.on("click", function (e) {
      return mapClick(e, _markerLayer);
    });
    markerLayerRef.current = _markerLayer;
    mapRef.current = map;
  }, []);
  //构建失败
  // if (!TMap) {
  //   onBuildBreak?.();
  //   return (
  //     <Card>
  //       <Empty
  //         image={Empty.PRESENTED_IMAGE_SIMPLE}
  //         description={'地图构建失败，请检查地图初始化配置！'}
  //       />
  //     </Card>
  //   );
  // }

  var handleSearchByKeyword = debounce(function (keyword) {
    // 使用者在搜索框中输入文字时触发
    if (keyword) {
      var _mapRef$current;
      var TMap = window.TMap;
      if (!TMap) return;
      var suggest = new TMap.service.Suggestion({
        // 新建一个关键字输入提示类
        pageSize: 10 // 返回结果每页条目数
      });

      suggest.getSuggestions({
        keyword: keyword,
        location: (_mapRef$current = mapRef.current) === null || _mapRef$current === void 0 ? void 0 : _mapRef$current.getCenter()
      }).then(function (result) {
        var _result$data;
        var list = (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.map(function (item) {
          var title = item.title,
            location = item.location,
            address = item.address;
          return {
            label: /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("div", {
                children: title
              }), /*#__PURE__*/_jsx(Text, {
                type: "secondary",
                children: address
              })]
            }),
            value: JSON.stringify(location),
            text: address,
            location: location,
            address: address
          };
        });
        setSuggestions(list);
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, 500);

  /**获取当前定位*/
  var getAtLocation = function getAtLocation() {
    /*获取当前定位*/
    location === null || location === void 0 ? void 0 : location.getLocation(function (position) {
      var _markerLayerRef$curre, _mapRef$current2;
      var lat = position.lat,
        lng = position.lng;
      /**设置地图标点*/
      markerLayerRef === null || markerLayerRef === void 0 ? void 0 : (_markerLayerRef$curre = markerLayerRef.current) === null || _markerLayerRef$curre === void 0 ? void 0 : _markerLayerRef$curre.setGeometries([{
        id: Date.now(),
        position: LatLng(lat, lng)
      }]);

      /**设置地图中心经纬度*/
      mapRef === null || mapRef === void 0 ? void 0 : (_mapRef$current2 = mapRef.current) === null || _mapRef$current2 === void 0 ? void 0 : _mapRef$current2.setCenter({
        lat: lat,
        lng: lng
      });
      ClickMap(position);
    }, function () {
      message.error("获取当前定位失败");
    });
  };
  useEffect(function () {
    if (value && Object.keys(value).length) {
      var _markerLayerRef$curre2, _mapRef$current3;
      var lat = value.lat,
        lng = value.lng;
      var latLng = {
        lat: lat,
        lng: lng
      };
      markerLayerRef === null || markerLayerRef === void 0 ? void 0 : (_markerLayerRef$curre2 = markerLayerRef.current) === null || _markerLayerRef$curre2 === void 0 ? void 0 : _markerLayerRef$curre2.setGeometries([{
        id: Date.now(),
        position: LatLng(lat, lng)
      }]);
      mapRef === null || mapRef === void 0 ? void 0 : (_mapRef$current3 = mapRef.current) === null || _mapRef$current3 === void 0 ? void 0 : _mapRef$current3.setCenter(latLng);
    } else {
      var _markerLayerRef$curre3;
      markerLayerRef === null || markerLayerRef === void 0 ? void 0 : (_markerLayerRef$curre3 = markerLayerRef.current) === null || _markerLayerRef$curre3 === void 0 ? void 0 : _markerLayerRef$curre3.setGeometries([]);
    }
  }, [value]);
  return /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
    className: "tc-lib-map-main",
    style: {
      height: height,
      minHeight: 200
    }
  }, e), {}, {
    children: [!disabled ? /*#__PURE__*/_jsx("div", {
      className: "map-search",
      children: /*#__PURE__*/_jsx(Select, {
        showSearch: true,
        placeholder: "\u8BF7\u8F93\u5165\u5730\u5740",
        style: {
          width: 200
        },
        defaultActiveFirstOption: false,
        showArrow: false,
        filterOption: false,
        onSearch: handleSearchByKeyword,
        onChange: function onChange(_, option) {
          var _markerLayerRef$curre4, _mapRef$current4;
          var location = option.location,
            address = option.address;
          var point = {
            id: Date.now(),
            position: LatLng(location.lat, location.lng)
          };
          markerLayerRef === null || markerLayerRef === void 0 ? void 0 : (_markerLayerRef$curre4 = markerLayerRef.current) === null || _markerLayerRef$curre4 === void 0 ? void 0 : _markerLayerRef$curre4.setGeometries([point]);
          mapRef === null || mapRef === void 0 ? void 0 : (_mapRef$current4 = mapRef.current) === null || _mapRef$current4 === void 0 ? void 0 : _mapRef$current4.setCenter(location);
          _onChange === null || _onChange === void 0 ? void 0 : _onChange({
            lat: location.lat,
            lng: location.lng,
            address: address
          });
        },
        notFoundContent: null,
        options: suggestions
      })
    }) : null, /*#__PURE__*/_jsx("div", {
      id: id,
      className: "map-content"
    }), location ? /*#__PURE__*/_jsx("div", {
      className: "map-location",
      onClick: function onClick(e) {
        e.stopPropagation();
        getAtLocation();
      },
      title: "定位到当前",
      children: /*#__PURE__*/_jsx(AimOutlined, {
        style: {
          fontSize: 30
        }
      })
    }) : null]
  }));
});