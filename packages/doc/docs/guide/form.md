---
toc: content
group:
  title: form
  order: 0
order: 0
---
# 禁用

## Disabled 禁用
```jsx
import { Disabled } from '@tc-lib/components';
export default ()=>{

  return <>
  <Disabled value="禁用组件" isCopy/>
  <div style={{height:10}}/>
  <Disabled value={[1,2,3,45,6]} isCopy/>  

  </>
}
```
<!-- <code src="./demo/Disabled.tsx"></code> -->


## BooleanDisable 真假值禁用
```jsx
import { BooleanDisable } from '@tc-lib/components';
import { Space } from 'antd';
export default ()=><Space direction="vertical">
    <BooleanDisable value/>
    <BooleanDisable />
</Space>
```
<!-- <code src="./demo/Disabled.tsx"></code> -->

## Disabled API
| 属性 | 说明 | 类型  | 默认值 |
| --- | --- | --- | --- |
| value   | value      | `any` | - |
| gap | value为数组时的间隔符  | `string`    | ~ |
| isCopy | 是否复制  | `boolean`    | false |
| ellipsisRows  | 超出省略行数        | `number` | 1 |
| className  | class        | `string` | - |
| style  | 样式        | `CSSProperties` | - |
## BooleanDisable API
| 属性 | 说明 | 类型  | 默认值 |
| --- | --- | --- | --- |
| value   | value      | `any` | - |
| checkedChildren | true显示文字  | `string`    | 是 |
| unCheckedChildren | false显示文字  | `string`    | 否 |
| className  | class        | `string` | - |
| style  | 样式        | `CSSProperties` | - |