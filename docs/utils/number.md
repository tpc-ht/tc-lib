---
toc: content
nav:
  title: 数值
  order: 3
---

# 数值

## 数值格式化

`toNum(num: number, addonAfter = '')`

```javascript
toNum(6); //6
toNum(6.556); //7
toNum(69.567, '%'); //70 %
```

## 浮点数值格式化

`toFloat(num: number, addonAfter = '', precision = 2)`

```javascript
toFloat(6.561); //6.56
toFloat(6); //6.00
toFloat(6.561, '', 1); //6.6
toFloat(6.561, '%', 2); //6.56 %
```


## 分页序号计算

`calcPageNo(total: number, pageNumber: number, pageSize: number, removeNum = 1)`

### 场景描述：列表数据删除时

1. 你不知道用户删除的是不是最后一条数据，是跳转第一页还是当页刷新了？
2. 因此通过计算当前页是否还有数据，返回当期页还是上一页！

```javascript
calcPageNo(41, 3, 20); // 2
calcPageNo(42, 3, 20); // 3
calcPageNo(42, 3, 20, 2); // 2
```

## 金额格式化

`amountFormat(num: number, addonAfter = '万')`
第二个参数在大于 1w 的时候有效

```javascript
amountFormat(-2000); //-2,000.00
amountFormat(2000); //2,000.00
amountFormat(20000); //2.00万
amountFormat(20000, '万元'); //2.00万元
amountFormat(20000000, '万元'); //2,000.00万元
```

## 字符串转数字

`strToNum(num: string, defaultValue = 0):number`

```javascript
strToNum('100'); //100
strToNum('1A'); //0
strToNum('A1', 2); //2
strToNum(''); //0
strToNum('', null); //null
// 如果想默认为空请设置 null
strToNum('', undefined); //0
```
