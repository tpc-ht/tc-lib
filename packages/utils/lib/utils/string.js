"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileName = exports.getFileSuffix = exports.repeat = exports.toPathParams = exports.toHyphen = exports.fromJSON = exports.toJSON = exports.reverse = exports.getPathParams = void 0;
var check_1 = require("./check");
/** 路径参数解析 */
var getPathParams = function (url) {
    return (0, check_1.isStr)(url)
        ? JSON.parse("{\"".concat(decodeURI(url.split('?')[1])
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"'), "\"}"))
        : url;
};
exports.getPathParams = getPathParams;
/** 字符串反转 */
var reverse = function (str) {
    return (0, check_1.isStr)(str) ? str.split('').reverse().join('') : str;
};
exports.reverse = reverse;
/** JSON 转换 */
var toJSON = function (obj) { return JSON.stringify(obj); };
exports.toJSON = toJSON;
/** JSON 解析 拦截解析异常 */
var fromJSON = function (str) {
    try {
        return JSON.parse(str);
    }
    catch (error) { }
};
exports.fromJSON = fromJSON;
/**驼峰转换下划线 */
var toHyphen = function (str, join) {
    if (join === void 0) { join = '_'; }
    if (!str)
        return '';
    var lineName = str.replace(/([A-Z])/g, "".concat(join, "$1")).toLowerCase();
    if (lineName && lineName[0] === join)
        return lineName.slice(1);
    return lineName;
};
exports.toHyphen = toHyphen;
/**
 * 对象转路径参数
 */
var toPathParams = function (obj, join) {
    if (join === void 0) { join = '&'; }
    if (!(0, check_1.isFullObj)(obj))
        return '';
    var _result = [];
    var keys = Object.keys(obj);
    var _loop_1 = function (index) {
        var key = keys[index];
        var value = obj[key];
        if ((0, check_1.isArr)(value)) {
            value.forEach(function (_value) {
                _result.push(key + '=' + _value);
            });
        }
        else {
            _result.push(key + '=' + value);
        }
    };
    for (var index = 0; index < keys.length; index++) {
        _loop_1(index);
    }
    return _result.join(join);
};
exports.toPathParams = toPathParams;
/** 重复生成字符串 */
var repeat = function (str, times) { return ''.padStart(times, str); };
exports.repeat = repeat;
/**
 * 获取文件名后缀 默认转小写
 * @param fileName
 * @returns
 */
var getFileSuffix = function (fileName, convert) {
    if (convert === void 0) { convert = true; }
    if ((0, check_1.isStr)(fileName)) {
        var fileSuffix = fileName.replace(/.+\./, '');
        return convert ? fileSuffix.toLowerCase() : fileSuffix;
    }
    return '';
};
exports.getFileSuffix = getFileSuffix;
/**
 * 获取文件名
 * @param fileName
 * @returns
 */
var getFileName = function (fileName) {
    if ((0, check_1.isStr)(fileName))
        return fileName.replace(/\.\w+$/, '');
    return '';
};
exports.getFileName = getFileName;
