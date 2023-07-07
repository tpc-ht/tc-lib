"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uid = exports.randomHexColor = void 0;
/** 生成随机十六进制 颜色 */
var randomHexColor = function () {
    return "#".concat(Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, '0'));
};
exports.randomHexColor = randomHexColor;
var IDX = 36, HEX = '';
while (IDX--)
    HEX += IDX.toString(36);
var uid = function (len) {
    if (len === void 0) { len = 11; }
    var str = '', num = len;
    while (num--)
        str += HEX[(Math.random() * 36) | 0];
    return str;
};
exports.uid = uid;
