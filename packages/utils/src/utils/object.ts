export const assignObj = (target = {}, sources = {}) => {
    let obj = target;
    if (typeof target != 'object' || typeof sources != 'object') {
        return sources; // 如果其中一个不是对象 就返回sources
    }
    for (let key in sources) {
        // 如果target也存在 那就再次合并
        if (target.hasOwnProperty(key)) {
            obj[key] = assignObj(target[key], sources[key]);
        } else {
            // 不存在就直接添加
            obj[key] = sources[key];
        }
    }
    return obj;
}