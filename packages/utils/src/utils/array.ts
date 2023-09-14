import { Key } from "react";
import { ObjAny } from "../type";
import { isArr, isFullArr, isNum, isStr } from "./check";
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

/**
 * 元素位置移动
 * @param arr 目标数组
 * @param fromIndex 开始坐标
 * @param toIndex 结束坐标
 */
export const moveEle = (arr: any[], fromIndex: number, toIndex: number) => {
  if (!isArr(arr)) return arr;
  // 使用splice()方法删除元素并在指定位置插入新元素
  arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
  return arr;
};
/**
 * 元素互换
 * @param arr
 * @param index1
 * @param index2
 * @returns
 */
export const swapEle = (arr: any[], index1: number, index2: number) => {
  if (!isArr(arr)) return arr;
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
};
/**
 * 上移动一格
 * @param fieldData
 * @param index
 */
export const upEle = (arr: any[], index: number) => {
  if (!isArr(arr)) return arr;
  if (index != 0) {
    arr[index] = arr.splice(index - 1, 1, arr[index])[0];
  } else {
    arr.push(arr.shift());
  }
  return arr;
};
/**
 * 下移动一格
 * @param fieldData
 * @param index
 */
export const downEle = (arr: any[], index: number) => {
  if (!isArr(arr)) return arr;
  if (index != arr.length - 1) {
    arr[index] = arr.splice(index + 1, 1, arr[index])[0];
  } else {
    arr.unshift(arr.splice(index, 1)[0]);
  }
  return arr;
};

/**
 * 拆分数组为指定长度元组
 */
export const splitArr = (arr: any[], len: number, isFill = false) => {
  if (!isArr(arr) || !isNum(len)) return [];
  const tuples = [];
  for (let i = 0; i < arr.length; i += len) {
    const subArray = arr.slice(i, i + len);
    const diff = len - subArray.length;
    if (diff && isFill) {
      subArray.push(...Array(diff));
    }
    tuples.push(subArray);
  }
  return tuples;
};

/**
 * 树节点数据格式化
 * @param data
 * @param nodeCallback
 * @param childrenName
 * @returns
 */
export const treeFormat = (
  data: any[],
  nodeCallback: (e: any) => any,
  childrenName = "children"
) => {
  return data?.map((item) => {
    let row = {
      ...item,
      ...nodeCallback?.(item),
      children: null,
    };
    if (isArr(item[childrenName]) && item[childrenName].length) {
      row.children = treeFormat(item[childrenName], nodeCallback, childrenName);
    }
    return row;
  });
};
