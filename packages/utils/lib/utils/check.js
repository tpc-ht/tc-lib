"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVoid = exports.isFullArr = exports.isFullObj = exports.isTrueArr = exports.isTrueObj = exports.isHTMLElement = exports.isReactElement = exports.isRegExp = exports.isObj = exports.isNumberLike = exports.isWeakSet = exports.isWeakMap = exports.isSet = exports.isMap = exports.isPro = exports.isNum = exports.isBool = exports.isStr = exports.isPlainObj = exports.isArr = exports.isFn = exports.getType = void 0;
var isType = function (type) {
    return function (obj) {
        return (0, exports.getType)(obj) === "[object ".concat(type, "]");
    };
};
var getType = function (obj) { return Object.prototype.toString.call(obj); };
exports.getType = getType;
var isFn = function (val) { return typeof val === 'function'; };
exports.isFn = isFn;
exports.isArr = Array.isArray;
exports.isPlainObj = isType('Object');
exports.isStr = isType('String');
exports.isBool = isType('Boolean');
exports.isNum = isType('Number');
exports.isPro = isType('Promise');
var isMap = function (val) {
    return val && val instanceof Map;
};
exports.isMap = isMap;
var isSet = function (val) { return val && val instanceof Set; };
exports.isSet = isSet;
var isWeakMap = function (val) {
    return val && val instanceof WeakMap;
};
exports.isWeakMap = isWeakMap;
var isWeakSet = function (val) {
    return val && val instanceof WeakSet;
};
exports.isWeakSet = isWeakSet;
//检测是否为数字，字符串数字
var isNumberLike = function (index) {
    return (0, exports.isNum)(index) || /^\d+$/.test(index);
};
exports.isNumberLike = isNumberLike;
var isObj = function (val) { return typeof val === 'object'; };
exports.isObj = isObj;
exports.isRegExp = isType('RegExp');
var isReactElement = function (obj) {
    return obj && obj['$$typeof'] && obj['_owner'];
};
exports.isReactElement = isReactElement;
var isHTMLElement = function (target) {
    return Object.prototype.toString.call(target).indexOf('HTML') > -1;
};
exports.isHTMLElement = isHTMLElement;
var isTrueObj = function (obj) {
    return (0, exports.isPlainObj)(obj) && Reflect.ownKeys(obj).length;
};
exports.isTrueObj = isTrueObj;
var isTrueArr = function (arr) {
    return !!((0, exports.isArr)(arr) && arr.length);
};
exports.isTrueArr = isTrueArr;
var isFullObj = function (obj) {
    return (0, exports.isPlainObj)(obj) && Reflect.ownKeys(obj).length;
};
exports.isFullObj = isFullObj;
var isFullArr = function (arr) {
    return !!((0, exports.isArr)(arr) && arr.length);
};
exports.isFullArr = isFullArr;
var isVoid = function (v) { return v === null || v === undefined; };
exports.isVoid = isVoid;
