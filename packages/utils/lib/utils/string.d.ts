/** 路径参数解析 */
export declare const getPathParams: (url: string) => any;
/** 字符串反转 */
export declare const reverse: (str: string) => string;
/** JSON 转换 */
export declare const toJSON: (obj: any) => string;
/** JSON 解析 拦截解析异常 */
export declare const fromJSON: (str: string) => any;
/**驼峰转换下划线 */
export declare const toHyphen: (str: string, join?: string) => string;
/**
 * 对象转路径参数
 */
export declare const toPathParams: (obj: {
    [key: string]: any;
}, join?: string) => string;
/** 重复生成字符串 */
export declare const repeat: (str: string, times: number) => string;
/**
 * 获取文件名后缀 默认转小写
 * @param fileName
 * @returns
 */
export declare const getFileSuffix: (fileName: string, convert?: boolean) => string;
/**
 * 获取文件名
 * @param fileName
 * @returns
 */
export declare const getFileName: (fileName: string) => string;
