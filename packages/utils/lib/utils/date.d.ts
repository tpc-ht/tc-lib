/** 两日期之间相差的天数 */
export declare const dayDiff: (date1: string | Date, date2: string | Date) => number;
/** 查询日期格式化 */
export interface IFormatDatesProps {
    date: any[];
    names?: string[];
    showTime?: boolean;
    stamp?: boolean;
}
/** 查询日期格式化 */
export declare const formatDates: ({ date, names, showTime, stamp, }: IFormatDatesProps) => {};
/**antd日期 + 时间 单边禁用*/
export declare const DisabledDateTime: (type?: 'start' | 'end') => {
    disabledDate: (current: any) => boolean;
    disabledTime: (current: any) => {
        disabledHours: () => any[];
        disabledMinutes: () => any[];
        disabledSeconds: () => any[];
    };
};
/**
 * 时间倒计时
 * @param date1 开始时间
 * @param date2 结束时间
 * @returns
 */
export declare const timeCount: (startDate: Date | number | string, endDate: Date | number | string) => {
    year?: undefined;
    month?: undefined;
    day?: undefined;
    hour?: undefined;
    minute?: undefined;
    second?: undefined;
} | {
    year: string;
    month: string;
    day: string;
    hour: string;
    minute: string;
    second: string;
};
