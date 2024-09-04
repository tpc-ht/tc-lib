import numeral from 'numeral';
import { isNum } from './check';
import { repeat } from './string';

/**数值格式化*/
export const toNum = (num: number, addonAfter = ''): string =>
  `${numeral(num).format('0,00')}${addonAfter ? ' ' + addonAfter : ''}`;

/**浮点数值格式化*/
export const toFloat = (
  num: number,
  addonAfter = '',
  precision = 2,
): string => {
  const pre = `0,0.${repeat('0', precision)}`;
  return `${numeral(num).format(pre)}${addonAfter ? ' ' + addonAfter : ''}`;
};

/**
 * 计算分页序号，主要用于删除
 * @param total 总页数
 * @param pageNumber 当前页
 * @param pageSize 页面大小
 * @param removeNum 删除数
 * @returns
 */
export const calcPageNo = (
  total: number,
  pageNumber: number,
  pageSize: number,
  removeNum = 1,
) => {
  const restNum = total - pageSize * (pageNumber - 1);
  if (restNum > removeNum) {
    return pageNumber;
  }
  return pageNumber - 1;
};

/**
 * 金额格式化
 * @param num
 * @returns
 */
export function amountFormat(num: number, addonAfter = '万') {
  const n = Number(num);
  if (!isNum(n)) return 0;
  if (n < 10000) {
    return toFloat(n);
  } else {
    return toFloat(n / 10000) + addonAfter;
  }
}

/**
 * 字符串转数值
 * @param num
 * @returns
 */
export function strToNum(num: string, defaultValue: any = 0) {
  if (num) {
    const n = Number(num);
    return isNaN(n) ? defaultValue : n;
  }
  return defaultValue;
}
