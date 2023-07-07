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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeCount = exports.DisabledDateTime = exports.formatDates = exports.dayDiff = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
var check_1 = require("./check");
/** 两日期之间相差的天数 */
var dayDiff = function (date1, date2) {
    var startDate = date1 ? new Date(date1) : null;
    var endDate = date1 ? new Date(date2) : null;
    if (startDate && endDate)
        return Math.ceil(Math.abs(startDate.getTime() - endDate.getTime()) / 86400000);
    return 0;
};
exports.dayDiff = dayDiff;
/** 查询日期格式化 */
var formatDates = function (_a) {
    var date = _a.date, _b = _a.names, names = _b === void 0 ? ['startDate', 'endDate'] : _b, _c = _a.showTime, showTime = _c === void 0 ? false : _c, _d = _a.stamp, stamp = _d === void 0 ? false : _d;
    var params = {};
    if ((0, check_1.isArr)(date) && date.length) {
        var _e = __read(date, 2), s = _e[0], e = _e[1];
        var time = showTime ? ' HH:mm' : '';
        params[names[0]] = stamp
            ? (0, dayjs_1.default)(s).valueOf()
            : (0, dayjs_1.default)(s).format("YYYY-MM-DD".concat(time ? time : '')) + (time ? ':00' : '');
        params[names[1]] = stamp
            ? (0, dayjs_1.default)(e).valueOf()
            : (0, dayjs_1.default)(e).format("YYYY-MM-DD".concat(time ? time : '')) + (time ? ':59' : '');
    }
    return params;
};
exports.formatDates = formatDates;
/**antd日期 + 时间 单边禁用*/
var DisabledDateTime = function (type) {
    if (type === void 0) { type = 'start'; }
    function range(start, end) {
        var result = [];
        for (var i = start; i < end; i += 1) {
            result.push(i);
        }
        return result;
    }
    var disabledTime = function (current) {
        var hours = (0, dayjs_1.default)().hour(), minutes = (0, dayjs_1.default)().minute(), seconds = (0, dayjs_1.default)().second();
        var disabledHoursVal = [], disabledMinutesVal = [], disabledSeconds = [];
        var currentDateTime = (0, dayjs_1.default)(current).format('YYYY-MM-DD HH:MM').valueOf(), dateTime = (0, dayjs_1.default)().format('YYYY-MM-DD HH:MM').valueOf(), currentDate = (0, dayjs_1.default)(current).format('YYYY-MM-DD').valueOf(), date = (0, dayjs_1.default)().format('YYYY-MM-DD').valueOf();
        if (type === 'start') {
            if (current && currentDate === date) {
                disabledHoursVal = range(0, 24).splice(0, hours);
            }
            if (current && currentDateTime <= dateTime) {
                disabledMinutesVal = range(0, 60).splice(0, minutes + 1);
                disabledSeconds = range(0, 60).splice(0, seconds + 1);
            }
            return {
                disabledHours: function () { return disabledHoursVal; },
                disabledMinutes: function () { return disabledMinutesVal; },
                disabledSeconds: function () { return disabledSeconds; },
            };
        }
        if (current && currentDate === date) {
            disabledHoursVal = range(0, 24).splice(hours + 1);
        }
        if (current && currentDateTime >= dateTime) {
            disabledMinutesVal = range(0, 60).splice(minutes + 1);
            disabledSeconds = range(0, 60).splice(seconds + 1);
        }
        return {
            disabledHours: function () { return disabledHoursVal; },
            disabledMinutes: function () { return disabledMinutesVal; },
            disabledSeconds: function () { return disabledSeconds; },
        };
    };
    var disabledDate = function (current) {
        var currentDate = (0, dayjs_1.default)(current).format('YYYY-MM-DD').valueOf(), date = (0, dayjs_1.default)().format('YYYY-MM-DD').valueOf();
        var isPastDate = type === 'start' ? currentDate < date : currentDate > date;
        return current && isPastDate;
    };
    return {
        disabledDate: disabledDate,
        disabledTime: disabledTime,
    };
};
exports.DisabledDateTime = DisabledDateTime;
/**
 * 时间倒计时
 * @param date1 开始时间
 * @param date2 结束时间
 * @returns
 */
var timeCount = function (startDate, endDate) {
    if (!startDate || !endDate)
        return {};
    var diff = Math.abs(new Date(startDate).getTime() - new Date(endDate).getTime());
    var year = Math.floor(diff / 31536000000); // 一年 = 31536000000 毫秒
    var month = Math.floor((diff % 31536000000) / 2592000000); // 一个月 = 2592000000 毫秒
    var day = Math.floor((diff % 2592000000) / 86400000); // 一天 = 86400000 毫秒
    var hour = Math.floor((diff % 86400000) / 3600000); // 一小时 = 3600000 毫秒
    var minute = Math.floor((diff % 3600000) / 60000); // 一分钟 = 60000 毫秒
    var second = Math.floor((diff % 60000) / 1000); // 一秒 = 1000 毫秒
    return {
        year: year.toString().padStart(2, '0'),
        month: month.toString().padStart(2, '0'),
        day: day.toString().padStart(2, '0'),
        hour: hour.toString().padStart(2, '0'),
        minute: minute.toString().padStart(2, '0'),
        second: second.toString().padStart(2, '0'),
    };
};
exports.timeCount = timeCount;
