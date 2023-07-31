import { Key } from "react";
import { ObjAny } from "../type";
import { isArr, isFullArr, isStr } from "./check";
/** 基础函数 变量处理 */

/** 数组去重 */
export const uniqueArr = (arr: string[] | number[]) =>
  isFullArr(arr) ? [...new Set(arr as any)] : arr;
/** 对象数组去重 */
export const uniqueObjArr = (arr: { [key: string]: any }[], uniId: string) => {
  if (!isFullArr(arr)) return arr;
  const res = new Map();
  return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
};

/** 对象数组交集 */
export const intersect = (arr1: any[], arr2: any[], filed: string) => {
  if (!isArr(arr1) || !isArr(arr2)) return [];
  return (
    arr1.filter((item) =>
      arr2.find((bItem) => item?.[filed] == bItem?.[filed])
    ) || []
  );
};

/** 对象数组差集 */
export const minus = (arr1: any[], arr2: any[], filed: string) => {
  if (!isArr(arr1) || !isArr(arr2)) return [];
  return arr1.filter(
    (item) => !arr2.find((aItem) => item?.[filed] == aItem?.[filed])
  );
};

/** 对象数组补集 */
export const complement = (arr1: any[], arr2: any[], filed: string) => {
  if (!isArr(arr1) || !isArr(arr2)) return [];
  return [
    ...arr1.filter(
      (item) => !arr2.find((aItem) => item?.[filed] == aItem?.[filed])
    ),
    ...arr2.filter(
      (item) => !arr1.find((aItem) => item?.[filed] == aItem?.[filed])
    ),
  ];
};

/** 对象数组并集 */
export const unionSet = (arr1: any[], arr2: any[], filed: string) => {
  if (!isArr(arr1) || !isArr(arr2)) return [];
  let map = new Map();
  return arr1
    .concat(arr2)
    .filter((item) => !map.has(item?.[filed]) && map.set(item?.[filed], 1));
};

/** 获取对象数组匹配的节点对象 */
export const getArrNodes = (data: any[], value: Key[] | Key, key: string) => {
  if (!isArr(data)) return [];
  if (isArr(value)) {
    return data.filter((e) => value.includes(e[key]));
  }
  let item = data.find((e) => e[key] === value);
  return item ? [item] : [];
};
/** 快速匹配数组中指定节点中的值 */
export const getArrNode = (
  data: any[],
  value: Key,
  key: string,
  field?: string
) => {
  if (!isArr(data)) return undefined;
  let item = data.find((e) => e[key] === value);
  return field && isStr(field) ? item?.[field] : item;
};

export interface FieldNames {
  value?: string;
  label?: string;
  children?: string;
}
/**获取tree结构匹配的节点对象 */
export const getTreeNodes = (
  data: any[],
  val: Key[] | Key,
  fieldNames?: FieldNames //= { label: 'label', value: 'value', children: 'children' },
) => {
  const {
    // label = 'label',
    value = "value",
    children = "children",
  } = fieldNames || {};
  if (!isArr(data)) return [];
  let nodes: any[] = [];
  const getTreeItem = (data: any[], val: Key[] | Key) => {
    const isValArr = isArr(val);
    for (let index = 0; index < data.length; index++) {
      const e = data[index];
      if (isValArr) {
        if (val.includes(e?.[value])) {
          nodes.push(e);
        }
      } else {
        if (e?.[value] === val) {
          nodes.push(e);
          break;
        }
      }
      if (isArr(e?.[children])) {
        getTreeItem(e?.[children], val);
      }
    }
  };
  getTreeItem(data, val);
  return nodes;
};

/** 获取对象数组指定字段值 */
export const getAttrFromArr = (
  array: ObjAny,
  attr: string,
  separator?: string
) => {
  if (!isArr(array)) return [];
  let values = [];
  for (let index = 0; index < array.length; index++) {
    const ele = array[index];
    values.push(ele[attr]);
  }
  if (isStr(separator) && separator) return values.join(separator);
  return values;
};

/** 生成指定长度的数组 */
export const makeArray = (size: number): number[] => new Array(size).fill("");

/**
 * 获取数组最大值
 * @param data
 * @param num
 * @returns
 */
export const getArrMax = (data: number[], num = 1) =>
  data.sort((a, b) => a - b).slice(-num);
