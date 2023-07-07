"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcPageNo = exports.numberFormat = void 0;
var numeral_1 = __importDefault(require("numeral"));
var check_1 = require("./check");
var string_1 = require("./string");
/**小数格式化*/
var numberFormat = function (num, precision, addonAfter) {
    if (precision === void 0) { precision = 2; }
    if (addonAfter === void 0) { addonAfter = ''; }
    var pre = "0,0.".concat((0, string_1.repeat)('0', precision));
    if ((0, check_1.isNum)(num)) {
        return "".concat((0, numeral_1.default)(num).format(pre)).concat(addonAfter ? ' ' + addonAfter : '');
    }
    return '';
};
exports.numberFormat = numberFormat;
/**
 * 计算分页序号，主要用于删除
 * @param total 总页数
 * @param pageNumber 当前页
 * @param pageSize 页面大小
 * @param removeNum 删除数
 * @returns
 */
var calcPageNo = function (total, pageNumber, pageSize, removeNum) {
    if (removeNum === void 0) { removeNum = 1; }
    var restNum = total - pageSize * (pageNumber - 1);
    if (restNum > removeNum) {
        return pageNumber;
    }
    return pageNumber - 1;
};
exports.calcPageNo = calcPageNo;
