import dayjs from 'dayjs';
import { isArr } from './check';

/** 两日期之间相差的天数 */
export const dayDiff = (date1: string | Date, date2: string | Date) => {
  let startDate = date1 ? new Date(date1) : null;
  let endDate = date1 ? new Date(date2) : null;
  if (startDate && endDate)
    return Math.ceil(
      Math.abs(startDate.getTime() - endDate.getTime()) / 86400000,
    );
  return 0;
};
/** 查询日期格式化 */
export interface IFormatDatesProps {
  date: any[];
  names?: string[];
  showTime?: boolean;
  stamp?: boolean;
}
/** 查询日期格式化 */
export const formatDates = ({
  date,
  names = ['startDate', 'endDate'],
  showTime = false,
  stamp = false,
}: IFormatDatesProps) => {
  let params = {};
  if (isArr(date) && date.length) {
    const [s, e] = date;
    let time = showTime ? ' HH:mm' : '';
    params[names[0]] = stamp
      ? dayjs(s).valueOf()
      : dayjs(s).format(`YYYY-MM-DD${time ? time : ''}`) + (time ? ':00' : '');
    params[names[1]] = stamp
      ? dayjs(e).valueOf()
      : dayjs(e).format(`YYYY-MM-DD${time ? time : ''}`) + (time ? ':59' : '');
  }
  return params;
};

/**antd日期 + 时间 单边禁用*/
export const DisabledDateTime = (type: 'start' | 'end' = 'start') => {
  function range(start: number, end: number) {
    const result = [];
    for (let i = start; i < end; i += 1) {
      result.push(i);
    }
    return result;
  }
  const disabledTime = (current: any) => {
    const hours = dayjs().hour(),
      minutes = dayjs().minute(),
      seconds = dayjs().second();

    let disabledHoursVal: any[] = [],
      disabledMinutesVal: any[] = [],
      disabledSeconds: any[] = [];
    let currentDateTime = dayjs(current).format('YYYY-MM-DD HH:MM').valueOf(),
      dateTime = dayjs().format('YYYY-MM-DD HH:MM').valueOf(),
      currentDate = dayjs(current).format('YYYY-MM-DD').valueOf(),
      date = dayjs().format('YYYY-MM-DD').valueOf();

    if (type === 'start') {
      if (current && currentDate === date) {
        disabledHoursVal = range(0, 24).splice(0, hours);
      }
      if (current && currentDateTime <= dateTime) {
        disabledMinutesVal = range(0, 60).splice(0, minutes + 1);
        disabledSeconds = range(0, 60).splice(0, seconds + 1);
      }
      return {
        disabledHours: () => disabledHoursVal,
        disabledMinutes: () => disabledMinutesVal,
        disabledSeconds: () => disabledSeconds,
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
      disabledHours: () => disabledHoursVal,
      disabledMinutes: () => disabledMinutesVal,
      disabledSeconds: () => disabledSeconds,
    };
  };
  const disabledDate = (current: any) => {
    let currentDate = dayjs(current).format('YYYY-MM-DD').valueOf(),
      date = dayjs().format('YYYY-MM-DD').valueOf();
    const isPastDate =
      type === 'start' ? currentDate < date : currentDate > date;
    return current && isPastDate;
  };
  return {
    disabledDate,
    disabledTime,
  };
};

/**
 * 时间倒计时
 * @param date1 开始时间
 * @param date2 结束时间
 * @returns
 */
export const timeCount = (
  startDate: Date | number | string,
  endDate: Date | number | string,
) => {
  if (!startDate || !endDate) return {};
  const diff = Math.abs(
    new Date(startDate).getTime() - new Date(endDate).getTime(),
  );
  const year = Math.floor(diff / 31536000000); // 一年 = 31536000000 毫秒
  const month = Math.floor((diff % 31536000000) / 2592000000); // 一个月 = 2592000000 毫秒
  const day = Math.floor((diff % 2592000000) / 86400000); // 一天 = 86400000 毫秒
  const hour = Math.floor((diff % 86400000) / 3600000); // 一小时 = 3600000 毫秒
  const minute = Math.floor((diff % 3600000) / 60000); // 一分钟 = 60000 毫秒
  const second = Math.floor((diff % 60000) / 1000); // 一秒 = 1000 毫秒
  return {
    year: year.toString().padStart(2, '0'),
    month: month.toString().padStart(2, '0'),
    day: day.toString().padStart(2, '0'),
    hour: hour.toString().padStart(2, '0'),
    minute: minute.toString().padStart(2, '0'),
    second: second.toString().padStart(2, '0'),
  };
};
