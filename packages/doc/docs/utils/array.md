---
toc: content
---
# 数组
## 数组去重
```javascript
import {uniqueArr} from '@tc-lib/utils'
uniqueArr([1,3,1,2,2]);
// [1,3,2]
```
## 对象数组去重
```javascript
import {uniqueObjArr} from '@tc-lib/utils'
uniqueObjArr([{a:1},{a:1,b:1},{a:2},{a:3}],'a');
// [{a:1},{a:2},{a:3}]
```
## 交集 差集 补集
```javascript
import {intersect, minus, complement} from '@tc-lib/utils'
let A = [
  { id: 0, name: '小0' },
  { id: 1, name: '小1' },
  { id: 2, name: '小2' },
  { id: 2, name: '小3' },
  { id: 3, name: '小4' },
];
let B = [
  { id: 2, name: '小5' },
  { id: 3, name: '小6' },
  { id: 3, name: '小7' },
  { id: 4, name: '小8' },
];
intersect(A, B, 'id') 
/**
 [
    { id: 2, name: '小2' },
    { id: 2, name: '小3' },
    { id: 3, name: '小4' },
 ]
*/
minus(A, B, 'id') 
/**
 [
    { id: 0, name: '小0' },
    { id: 1, name: '小1' },
 ]
*/
complement(A, B, 'id') 
/**
 [
    { id: 0, name: '小0' },
    { id: 1, name: '小1' },
    { id: 4, name: '小8' },
 ]
*/

```
## 获取对象匹配的节点对象
```javascript
import { getArrNodes } from '@tc-lib/utils'
console.log(
getArrNodes([{ a: 0 }, { a: 1, b: 1 }, { a: 2 }, { a: 3 }], 2, 'a')//[{a:2}]
getArrNodes([{ a: 0 }, { a: 1, b: 1 }, { a: 2 }, { a: 3 }], [2, 3], 'a')//[{a:2},{a:3}]
```
## 获取对象数组指定字段值
```javascript
import { getAttrFromArr } from '@tc-lib/utils'
console.log(
getAttrFromArr([{a:1},{a:1,b:1},{a:2},{a:3}],'a'))//[1, 1, 2, 3]
getAttrFromArr([{a:1},{a:1,b:1},{a:2},{a:3}],'a',',')//1,1,2,3
```

## 获取tree结构匹配的节点对象
```javascript
import { getAttrFromArr } from '@tc-lib/utils'
console.log(
getTreeNodes([{value:1,children:[{value:2},{value:3}]}],2))//[{value:2}]
getTreeNodes([{value:1,children:[{value:2},{value:3}]}],[2,3])//[{ value: 2 }, { value: 3 }]
```
## 生成指定长度的数组
```javascript
import { makeArray } from '@tc-lib/utils'
console.log(makeArray(2))//['','']
```
<!-- 
```jsx
import { getAttrFromArr } from '@tc-lib/utils';
export default ()=>{
    const val = getAttrFromArr([{a:1},{a:1,b:1},{a:2},{a:3}],'a')
    const val2 = getAttrFromArr([{a:1},{a:1,b:1},{a:2},{a:3}],'a',',')
    console.log('val',val)
    console.log('val',val2)
    return <div>
        <div>当前设备：{val}</div>
        <div>当前设备：{val2}</div>
    </div>
}
``` -->
## 获取数组最大值<数组>
如获取数组中单个最大值可以使用`Math.max(...[1,2,4])`
```javascript
import { getArrMax } from '@tc-lib/utils'
console.log(getArrMax([1,2,3,4,5]))// [5]
console.log(getArrMax([1,2,3,4,5], 3))// [5,4,3]
```