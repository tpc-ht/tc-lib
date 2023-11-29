---
toc: content
group:
  title: form
  order: 0
order: 0
---
# Disabled

## Disabled 禁用
```jsx
import { Disabled, Space } from '@tc-lib/components';
export default ()=>{
  return <Space direction="column">
    <Disabled value="禁用组件" isCopy/>
    <Disabled value={'无边框背景'} bordered={false}/>  
  </Space>
}
```
<!-- <code src="./demo/Disabled.tsx"></code> -->


## BooleanDisable 真假值禁用
```jsx
import { BooleanDisable, Space } from '@tc-lib/components';
export default ()=><Space direction="column">
    <BooleanDisable value/>
    <BooleanDisable />
  <BooleanDisable bordered={false}/>  
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
| bordered  | 边框与背景        | `boolean` | true |

## BooleanDisable API
| 属性 | 说明 | 类型  | 默认值 |
| --- | --- | --- | --- |
| value   | value      | `any` | - |
| checkedChildren | true显示文字  | `string`    | 是 |
| unCheckedChildren | false显示文字  | `string`    | 否 |
| className  | class        | `string` | - |
| style  | 样式        | `CSSProperties` | - |
| bordered  | 边框与背景        | `boolean` | true |