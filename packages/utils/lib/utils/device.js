"use strict";
/** 设备 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.judgeDeviceType = exports.isTabActive = void 0;
/** 检查当前窗口是否可见 */
var isTabActive = function () { return !document.hidden; };
exports.isTabActive = isTabActive;
/** 设备监测 */
var judgeDeviceType = function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)
        ? 'Mobile'
        : 'PC';
};
exports.judgeDeviceType = judgeDeviceType;
