/**
 * 防抖
 * @param func 执行函数
 * @param wait 间隔时间
 * @param immediate 是否立即执行
 * @returns
 */
export declare const debounce: (func: any, wait: number, immediate?: boolean) => (...e: any[]) => void;
/**
 * 节流
 * @param func 执行函数
 * @param wait 间隔时间
 * @param immediate 是否立即执行
 * @returns
 */
export declare const throttle: (func: any, wait: number, immediate?: boolean) => (...e: any[]) => void;
/** 复制 */
export declare const copyText: (text: any) => Promise<unknown>;
export declare class EventEmitter {
    events: {};
    constructor();
    on(eventName: any, callback: any): void;
    emit(eventName: any, ...args: any[]): void;
    off(eventName: any, callback: any): void;
}
