
export const getType = (obj: any) => Object.prototype.toString.call(obj);
const isType =
  <T>(type: string | string[]) =>
    (obj: unknown): obj is T =>
      getType(obj) === `[object ${type}]`;
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFn = (val: any): val is Function => typeof val === 'function';
export const isArr = Array.isArray;
export const isPlainObj = isType<object>('Object');
export const isStr = isType<string>('String');
export const isBool = isType<boolean>('Boolean');
export const isNum = isType<number>('Number');
export const isPro = isType<number>('Promise');
export const isMap = (val: any): val is Map<any, any> =>
  val && val instanceof Map;
export const isSet = (val: any): val is Set<any> => val && val instanceof Set;
export const isWeakMap = (val: any): val is WeakMap<any, any> =>
  val && val instanceof WeakMap;
export const isWeakSet = (val: any): val is WeakSet<any> =>
  val && val instanceof WeakSet;
//检测是否为数字，字符串数字
export const isNumberLike = (index: any): index is number =>
  isNum(index) || /^\d+$/.test(index);
export const isObj = (val: unknown): val is object => typeof val === 'object';
export const isRegExp = isType<RegExp>('RegExp');
export const isReactElement = (obj: any): boolean =>
  obj && obj['$$typeof'] && obj['_owner'];
export const isHTMLElement = (target: any): target is EventTarget => {
  return Object.prototype.toString.call(target).indexOf('HTML') > -1;
};
export const isTrueObj = (obj: any) =>
  !!(isPlainObj(obj) && Reflect.ownKeys(obj).length);
export const isTrueArr = (arr: any): boolean =>
  !!(isArr(arr) && arr.length);

export const isFullObj = (obj: any) =>
  !!(isPlainObj(obj) && Reflect.ownKeys(obj).length);
export const isFullArr = (arr: any): boolean =>
  !!(isArr(arr) && arr.length);

export const isVoid = (v: any) => v === null || v === undefined;
