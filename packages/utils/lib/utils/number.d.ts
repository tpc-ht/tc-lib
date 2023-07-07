/**小数格式化*/
export declare const numberFormat: (num: number, precision?: number, addonAfter?: string) => string;
/**
 * 计算分页序号，主要用于删除
 * @param total 总页数
 * @param pageNumber 当前页
 * @param pageSize 页面大小
 * @param removeNum 删除数
 * @returns
 */
export declare const calcPageNo: (total: number, pageNumber: number, pageSize: number, removeNum?: number) => number;
