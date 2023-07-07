import numeral from 'numeral';
import { isNum } from './check';
import { repeat } from './string';
/**小数格式化*/
export const numberFormat = (num: number, precision = 2, addonAfter = '') => {
  const pre = `0,0.${repeat('0', precision)}`;
  if (isNum(num)) {
    return `${numeral(num).format(pre)}${addonAfter ? ' ' + addonAfter : ''}`;
  }
  return '';
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
