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
export default () => {
  let value = [
    '小黑a小黑a小黑a小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑',
    2,
    3,
    4,
    5,
  ];
  return (
    <Space direction="column">
      <Disabled value="小黑a小黑" copyable />
      <Disabled
        value="小黑a小黑a小黑a小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑"
        copyable
        ellipsis
      />
      <Disabled value={value} />
      <Disabled value={['小黑', '小红', '小黄']} type="tag" />
      <Disabled value={"<div style='color:red'>html</div>"} type="html" />
      <Disabled value={value} gap="~" ellipsis copyable />
      <Disabled value={'无边框背景'} bordered={false} />
    </Space>
  );
};
```

<!-- <code src="./demo/Disabled.tsx"></code> -->

## BooleanDisable 真假值禁用

```jsx
import { BooleanDisable, FlexSpace } from '@tc-lib/components';
export default () => (
  <FlexSpace direction="column">
    <BooleanDisable value />
    <BooleanDisable />
    <BooleanDisable bordered={false} />
  </FlexSpace>
);
```

<!-- <code src="./demo/Disabled.tsx"></code> -->

## Disabled API

| 属性      | 说明                   | 类型                 | 默认值 |
| --------- | ---------------------- | -------------------- | ------ |
| value     | value                  | `any`                | -      |
| type      | value 渲染类型         | `text` ` tag` `html` | `text` |
| tagProps  | tag 参数               | `TagProps`           |
| gap       | value 为数组时的间隔符 | `string`             |        |
| copyable  | 是否复制               | `boolean`            | false  |
| ellipsis  | 是否超出省略行         | `boolean`            | false  |
| className | class                  | `string`             | -      |
| style     | 样式                   | `CSSProperties`      | -      |
| bordered  | 边框与背景             | `boolean`            | true   |

## BooleanDisable API

| 属性              | 说明           | 类型            | 默认值 |
| ----------------- | -------------- | --------------- | ------ |
| value             | value          | `any`           | -      |
| checkedChildren   | true 显示文字  | `string`        | 是     |
| unCheckedChildren | false 显示文字 | `string`        | 否     |
| className         | class          | `string`        | -      |
| style             | 样式           | `CSSProperties` | -      |
| bordered          | 边框与背景     | `boolean`       | true   |
