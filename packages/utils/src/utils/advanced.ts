/**
 * 防抖
 * @param func 执行函数
 * @param wait 间隔时间
 * @param immediate 是否立即执行
 * @returns
 */
export const debounce = (func: any, wait: number, immediate?: boolean) => {
  let timeout: any;
  return function (...e) {
    const later = function () {
      timeout = null;
      if (!immediate) func.call(this, ...e);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.call(this, ...e);
  };
};

/**
 * 节流
 * @param func 执行函数
 * @param wait 间隔时间
 * @param immediate 是否立即执行
 * @returns
 */
export const throttle = (func: any, wait: number, immediate?: boolean) => {
  let timeoutId: any;
  let last: any = 0;
  return function (...e) {
    const now = +new Date();
    if (immediate) {
      if (now - last > wait) {
        func.call(this, ...e);
        last = now;
      }
    } else {
      if (!timeoutId) {
        timeoutId = setTimeout(function () {
          timeoutId = null;
          func.call(timeoutId, ...e);
        }, wait);
      }
    }
  };
};

/** 复制 */
export const copyText = async (text: any) => {
  try {
    return await navigator.clipboard.writeText(text);
  } catch (e) {
    return await new Promise((resolve) => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.setAttribute('value', text);
      input.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
      }
      document.body.removeChild(input);
      resolve(undefined);
    });
  }
};

/**
 * 发布订阅
 */
export class EventEmitter {
  events = {};
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName, ...args) {
    const callbacks = this.events[eventName];
    if (callbacks && callbacks.length > 0) {
      const argsList = [...args];
      argsList.splice(1, 0, eventName);
      callbacks.forEach((callback) => callback.apply(null, argsList));
    }
  }

  off(eventName, callback?: any) {
    if (!callback) {
      this.events[eventName] = undefined;
      delete this.events[eventName]
      return
    }
    const callbacks = this.events[eventName];
    if (callbacks && callbacks.length > 0) {
      this.events[eventName] = callbacks.filter((cb) => cb !== callback);
    }
  }
}

/** 延迟加载 */
export const sleep = async (time = 0, callback?: any) => {
  return await new Promise(e => {
    setTimeout(() => {
      callback?.();
      e(true)
    }, time)
  })
}
