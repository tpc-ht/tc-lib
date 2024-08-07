---
toc: content
---

# 数组

## 数组去重

```javascript
import { uniqueArr } from '@tc-lib/utils';
uniqueArr([1, 3, 1, 2, 2]);
// [1,3,2]
```

## 对象数组去重

```javascript
import { uniqueObjArr } from '@tc-lib/utils';
uniqueObjArr([{ a: 1 }, { a: 1, b: 1 }, { a: 2 }, { a: 3 }], 'a');
// [{a:1},{a:2},{a:3}]
```

## 交集

```javascript
import { intersect } from '@tc-lib/utils';
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
intersect(A, B, 'id');
/**
 [
    { id: 2, name: '小2' },
    { id: 2, name: '小3' },
    { id: 3, name: '小4' },
 ]
*/
```

## 差集

```javascript
import { minus } from '@tc-lib/utils';
minus(A, B, 'id');
/**
 [
    { id: 0, name: '小0' },
    { id: 1, name: '小1' },
 ]
*/
```

## 补集

```javascript
import { complement } from '@tc-lib/utils';
complement(A, B, 'id');
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
import { getArrNodes, getArrNode } from '@tc-lib/utils';

getArrNodes([{ a: 0 }, { a: 1, b: 1 }, { a: 2 }, { a: 3 }], 2, 'a'); //[{a:2}]
getArrNodes([{ a: 0 }, { a: 1, b: 1 }, { a: 2 }, { a: 3 }], [2, 3], 'a'); //[{a:2},{a:3}]
getArrNode([{ a: 0 }, { a: 1, b: 1 }, { a: 2 }, { a: 3 }], 1, 'a'); //{ a: 1, b: 1 }
getArrNode([{ a: 0 }, { a: 1, b: 9 }, { a: 2 }, { a: 3 }], 1, 'a', 'b'); //9
```

## 获取对象数组指定字段值

```javascript
import { getAttrFromArr } from '@tc-lib/utils';
console.log(
  getAttrFromArr([{ a: 1 }, { a: 1, b: 1 }, { a: 2 }, { a: 3 }], 'a'),
); //[1, 1, 2, 3]
getAttrFromArr([{ a: 1 }, { a: 1, b: 1 }, { a: 2 }, { a: 3 }], 'a', ','); //1,1,2,3
```

## 获取 tree 结构匹配的节点对象

```javascript
import { getAttrFromArr } from '@tc-lib/utils';
console.log(
  getTreeNodes([{ value: 1, children: [{ value: 2 }, { value: 3 }] }], 2),
); //[{value:2}]
getTreeNodes([{ value: 1, children: [{ value: 2 }, { value: 3 }] }], [2, 3]); //[{ value: 2 }, { value: 3 }]
```

## 生成指定长度的数组

```javascript
import { makeArray } from '@tc-lib/utils';
console.log(makeArray(2)); //['','']
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
import { getArrMax } from '@tc-lib/utils';
console.log(getArrMax([1, 2, 3, 4, 5])); // [5]
console.log(getArrMax([1, 2, 3, 4, 5], 3)); // [5,4,3]
```

## 数组元素移动

```javascript
import { moveEle, swapEle, upEle, downEle } from '@tc-lib/utils';
let arr = [1, 2, 3, 4, 5];
// 元素移动
moveEle(arr, 3, 0); //[4, 1, 2, 3, 5]
// 元素互换
swapEle(arr, 0, 4); //[5, 1, 2, 3, 4]
// 元素上移
upEle(arr, 0); //[1, 2, 3, 4, 5]
// 元素下移
downEle(arr, 0); //[2, 1, 3, 4, 5]
```

## 拆分数组为指定元组

```javascript
import { equalTuple } from '@tc-lib/utils';
let arr = [1, 2, 3, 4, 5];
// 基础
equalTuple(arr, 3); //[[1, 2, 3], [4, 5]]
// 空隙填充
equalTuple(arr, 3, true); //[[1, 2, 3], [4, 5, undefined]]
```

## 树节点数据格式化 treeFormat

```javascript
import { treeFormat } from '@tc-lib/utils'
import {
    BugTwoTone,
    CarTwoTone
} from '@ant-design/icons';
const treeData = [
  {
    value: 'parent 1',0.
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        type: 0,
        children: [
          {
            value: 'leaf3',
            title: <b style={{ color: '#08c' }}>leaf3</b>,
          },
        ],
      },
    ],
  },
];
const data = useMemo(()=>treeFormat(
    treeData,
    (item) => {
      return {
        label: item.title,
        disabled: item.type === 0,
        icon: item.type ? <BugTwoTone />:<CarTwoTone />,
      };
    }
  ),[])
```

```js
treeFormat = (
  data: any[],
  nodeCallback: (e: any) => any,
  childrenName = "children"
)
```

## 数字数组连号处理 continuousNumber

```javascript
import { continuousNumber } from '@tc-lib/utils';
let arr = [1, 3, 12, 2, 99, 98, 7, 9, 6, 10];
continuousNumber(arr); //'1-3,6-7,9-10,12,98-99'
```

<!-- ## 枚举格式化 EnumController -->
