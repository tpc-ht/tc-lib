---
toc: content
nav:
  title: 数值
  order: 3
---
# 数值
## 小数格式化
`numberFormat(num: number, precision = 2, addonAfter = '')`


### 返回
String
```javascript
numberFormat(6)//6.00
numberFormat(6, 1)//6.0
numberFormat(69.567, 2, '%')//69.57 %
```
## 分页序号计算
`calcPageNo(total: number, pageNumber: number, pageSize: number, removeNum = 1)`
### 场景描述：列表数据删除时
1. 你不知道用户删除的是不是最后一条数据，是跳转第一页还是当页刷新了？
2. 因此通过计算当前页是否还有数据，返回当期页还是上一页！
### 返回
Number
```javascript
calcPageNo(41, 3, 20)// 2
calcPageNo(42, 3, 20)// 3
calcPageNo(42, 3, 20, 2)// 2
```

