import { isArr, isFullObj, isStr } from './check';

/** 路径参数解析 */
export const getPathParams = (url: string) =>
  isStr(url)
    ? JSON.parse(
        `{"${decodeURI(url.split('?')[1])
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"')}"}`,
      )
    : url;

/** 字符串反转 */
export const reverse = (str: string) =>
  isStr(str) ? str.split('').reverse().join('') : str;

/** JSON 转换 */
export const toJSON = (obj: any) => JSON.stringify(obj);

/** JSON 解析 拦截解析异常 */
export const fromJSON = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (error) {}
};

/**驼峰转换下划线 */
export const toHyphen = (str: string, join = '_') => {
  if (!str) return '';
  const lineName = str.replace(/([A-Z])/g, `${join}$1`).toLowerCase();
  if (lineName && lineName[0] === join) return lineName.slice(1);
  return lineName;
};

/**
 * 对象转路径参数
 */
export const toPathParams = (obj: { [key: string]: any }, join = '&') => {
  if (!isFullObj(obj)) return '';
  let _result = [];
  let keys = Object.keys(obj);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const value = obj[key];
    if (isArr(value)) {
      value.forEach((_value) => {
        _result.push(key + '=' + _value);
      });
    } else {
      _result.push(key + '=' + value);
    }
  }
  return _result.join(join);
};

/** 重复生成字符串 */
export const repeat = (str: string, times: number) => ''.padStart(times, str);
/**
 * 获取文件名后缀 默认转小写
 * @param fileName
 * @returns
 */
export const getFileSuffix = (fileName: string, convert = true) => {
  if (isStr(fileName)) {
    const fileSuffix = fileName.replace(/.+\./, '');
    return convert ? fileSuffix.toLowerCase() : fileSuffix;
  }
  return '';
};
/**
 * 获取文件名
 * @param fileName
 * @returns
 */
export const getFileName = (fileName: string) => {
  if (isStr(fileName)) return fileName.replace(/\.\w+$/, '');
  return '';
};
