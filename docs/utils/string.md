---
toc: content
nav:
  title: 配置项
  order: -21
---

# 字符串

## reverse 字符串反转

```javascript
import { reverse } from '@tc-lib/utils';
reverse('abc'); // cda
```

## parsePathParams URL 参数解析

```javascript
parsePathParams('https://cn.bing.com//search?q=掘金&qs=HS');
// {q: '掘金', qs: 'HS'}
```

## JSON 转换

```javascript
toJSON({ arr: [] });
```

## JSON 解析

```javascript
fromJSON('{"arr":[]}'); //{arr:[]}
fromJSON(''); //{}
fromJSON('', { a: 1 }); //{a:1}
```

## 驼峰转换下划线

```javascript
// toHyphen(str: string, join?:string)
toHyphen('arrObj'); //arr_obj
toHyphen('ArrObj'); //arr_obj
toHyphen('ArrObj', '-'); //arr-obj
```

## 对象转路径参数

```javascript
// toPathParams(str: { [key: string]: any }, join?:string)
toPathParams({ name: '小明', id: 1 }); //name=小明&id=1
toPathParams({ name: '小明', id: 1 }, '-'); //name=小明-id=1
```

## 对象转 FormData 参数

```javascript
toFormDate({ name: '小明', id: 1 });
```

## 重复生成字符串

`const repeat = (str: string, times: number)`

```javascript
repeat('0', 4); //0000
```

## 获取文件后缀 默认小写

`const getFileSuffix = (fileName: string, convert = true)`

```javascript
getFileSuffix('image.png.jpg'); //jpg
getFileSuffix('image.png.JPG'); //jpg
getFileSuffix('image.png.JPG', false); //JPG
```

## 获取文件名

`const getFileName = (fileName: string)`

```javascript
getFileName('image.jpg'); //'image'
getFileName('image.png.jpg'); //'image.png'
```
