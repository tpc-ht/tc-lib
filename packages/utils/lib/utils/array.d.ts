import { Key } from 'react';
import { ObjAny } from '../type';
/** 基础函数 变量处理 */
/** 数组去重 */
export declare const uniqueArr: (arr: string[] | number[]) => unknown[];
/** 对象数组去重 */
export declare const uniqueObjArr: (arr: {
    [key: string]: any;
}[], uniId: string) => {
    [key: string]: any;
}[];
/** 对象数组交集 */
export declare const intersect: (arr1: any[], arr2: any[], filed: string) => any[];
/** 对象数组差集 */
export declare const minus: (arr1: any[], arr2: any[], filed: string) => any[];
/** 对象数组补集 */
export declare const complement: (arr1: any[], arr2: any[], filed: string) => any[];
/** 对象数组并集 */
export declare const unionSet: (arr1: any[], arr2: any[], filed: string) => any[];
/** 获取对象数组匹配的节点对象 */
export declare const getArrNodes: (data: any[], value: Key[] | Key, key: string) => any[];
export interface FieldNames {
    value?: string;
    label?: string;
    children?: string;
}
/**获取tree结构匹配的节点对象 */
export declare const getTreeNodes: (data: any[], val: Key[] | Key, fieldNames?: FieldNames) => any[];
/** 获取对象数组指定字段值 */
export declare const getAttrFromArr: (array: ObjAny, attr: string, separator?: string) => string | any[];
/** 生成指定长度的数组 */
export declare const makeArray: (size: number) => number[];
/**
 * 获取数组最大值
 * @param data
 * @param num
 * @returns
 */
export declare const getArrMax: (data: number[], num?: number) => number[];
