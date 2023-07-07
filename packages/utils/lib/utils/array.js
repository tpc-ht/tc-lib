"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrMax = exports.makeArray = exports.getAttrFromArr = exports.getTreeNodes = exports.getArrNodes = exports.unionSet = exports.complement = exports.minus = exports.intersect = exports.uniqueObjArr = exports.uniqueArr = void 0;
var check_1 = require("./check");
/** 基础函数 变量处理 */
/** 数组去重 */
var uniqueArr = function (arr) {
    return (0, check_1.isFullArr)(arr) ? __spreadArray([], __read(new Set(arr)), false) : arr;
};
exports.uniqueArr = uniqueArr;
/** 对象数组去重 */
var uniqueObjArr = function (arr, uniId) {
    if (!(0, check_1.isFullArr)(arr))
        return arr;
    var res = new Map();
    return arr.filter(function (item) { return !res.has(item[uniId]) && res.set(item[uniId], 1); });
};
exports.uniqueObjArr = uniqueObjArr;
/** 对象数组交集 */
var intersect = function (arr1, arr2, filed) {
    if (!(0, check_1.isArr)(arr1) || !(0, check_1.isArr)(arr2))
        return [];
    return (arr1.filter(function (item) {
        return arr2.find(function (bItem) { return (item === null || item === void 0 ? void 0 : item[filed]) == (bItem === null || bItem === void 0 ? void 0 : bItem[filed]); });
    }) || []);
};
exports.intersect = intersect;
/** 对象数组差集 */
var minus = function (arr1, arr2, filed) {
    if (!(0, check_1.isArr)(arr1) || !(0, check_1.isArr)(arr2))
        return [];
    return arr1.filter(function (item) { return !arr2.find(function (aItem) { return (item === null || item === void 0 ? void 0 : item[filed]) == (aItem === null || aItem === void 0 ? void 0 : aItem[filed]); }); });
};
exports.minus = minus;
/** 对象数组补集 */
var complement = function (arr1, arr2, filed) {
    if (!(0, check_1.isArr)(arr1) || !(0, check_1.isArr)(arr2))
        return [];
    return __spreadArray(__spreadArray([], __read(arr1.filter(function (item) { return !arr2.find(function (aItem) { return (item === null || item === void 0 ? void 0 : item[filed]) == (aItem === null || aItem === void 0 ? void 0 : aItem[filed]); }); })), false), __read(arr2.filter(function (item) { return !arr1.find(function (aItem) { return (item === null || item === void 0 ? void 0 : item[filed]) == (aItem === null || aItem === void 0 ? void 0 : aItem[filed]); }); })), false);
};
exports.complement = complement;
/** 对象数组并集 */
var unionSet = function (arr1, arr2, filed) {
    if (!(0, check_1.isArr)(arr1) || !(0, check_1.isArr)(arr2))
        return [];
    var map = new Map();
    return arr1
        .concat(arr2)
        .filter(function (item) { return !map.has(item === null || item === void 0 ? void 0 : item[filed]) && map.set(item === null || item === void 0 ? void 0 : item[filed], 1); });
};
exports.unionSet = unionSet;
/** 获取对象数组匹配的节点对象 */
var getArrNodes = function (data, value, key) {
    if (!(0, check_1.isArr)(data))
        return [];
    if ((0, check_1.isArr)(value)) {
        return data.filter(function (e) { return value.includes(e[key]); });
    }
    var item = data.find(function (e) { return e[key] === value; });
    return item ? [item] : [];
};
exports.getArrNodes = getArrNodes;
/**获取tree结构匹配的节点对象 */
var getTreeNodes = function (data, val, fieldNames) {
    var _a = fieldNames || {}, 
    // label = 'label',
    _b = _a.value, 
    // label = 'label',
    value = _b === void 0 ? 'value' : _b, _c = _a.children, children = _c === void 0 ? 'children' : _c;
    if (!(0, check_1.isArr)(data))
        return [];
    var nodes = [];
    var getTreeItem = function (data, val) {
        var isValArr = (0, check_1.isArr)(val);
        for (var index = 0; index < data.length; index++) {
            var e = data[index];
            if (isValArr) {
                if (val.includes(e === null || e === void 0 ? void 0 : e[value])) {
                    nodes.push(e);
                }
            }
            else {
                if ((e === null || e === void 0 ? void 0 : e[value]) === val) {
                    nodes.push(e);
                    break;
                }
            }
            if ((0, check_1.isArr)(e === null || e === void 0 ? void 0 : e[children])) {
                getTreeItem(e === null || e === void 0 ? void 0 : e[children], val);
            }
        }
    };
    getTreeItem(data, val);
    return nodes;
};
exports.getTreeNodes = getTreeNodes;
/** 获取对象数组指定字段值 */
var getAttrFromArr = function (array, attr, separator) {
    if (!(0, check_1.isArr)(array))
        return [];
    var values = [];
    for (var index = 0; index < array.length; index++) {
        var ele = array[index];
        values.push(ele[attr]);
    }
    if ((0, check_1.isStr)(separator) && separator)
        return values.join(separator);
    return values;
};
exports.getAttrFromArr = getAttrFromArr;
/** 生成指定长度的数组 */
var makeArray = function (size) { return new Array(size).fill(''); };
exports.makeArray = makeArray;
/**
 * 获取数组最大值
 * @param data
 * @param num
 * @returns
 */
var getArrMax = function (data, num) {
    if (num === void 0) { num = 1; }
    return data.sort(function (a, b) { return a - b; }).slice(-num);
};
exports.getArrMax = getArrMax;
