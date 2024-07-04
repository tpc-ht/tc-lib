---
nav:
  title: Formily Patches
  order: 3
toc: content
---

# 开始

formily Schema 提供了一个 Schema.registerPatches api 可以预制一些 patches，以实现一些特殊的效果

当 x-decorator 和 x-component 存在时，将不启用该功能（兼容）

当设置 required 为 true 时，会自动添加 required 校验规则，错误信息为 `请输入${title}` 或 `请选择${title}`

type 为空时默认为 string 类型，根据内置的类型自动将 x-component 设置为对应组件，将 schema x-decorator 设置为 FormItem

## 示例

```ts
{
  input: { type: 'string', title: '输入框', required: true },
  password: { type: 'password', title: '密码', required: true },
  textarea: { type: 'textarea', title: '文本输入框', required: true }
  number: { type: 'number', title: '数字输入框', required: true },
  float: { type: 'float', title: '浮点数字输入框', required: true },
  select: { type: 'select', title: '选择框', required: true, enum: [1, 2, 3], 'x-multiple': true },
  radio: { type: 'radio', title: '单选框', required: true },
  radioG: { type: 'radio', title: '单选框', required: true, enum: [1, 2, 3] },
  checkbox: { type: 'checkbox', title: '复选框', required: true },
  checkboxG: { type: 'checkbox', title: '复选框', required: true, enum: [1, 2, 3] },
  boolean: { type: 'boolean', title: '开关', required: true },
  date: { type: 'date', title: '日期', required: true },
  month: { type: 'month', title: '日期 - 月', required: true },
  dateRange: { type: 'date-range', title: '日期 - 范围', required: true },
  time: { type: 'time', title: '时间', required: true },
  timeRange: { type: 'time-range', title: '时间 - 范围', required: true },
}

```

## 内置的 patches

| 类型            | 对应组件               | 说明                           |
| --------------- | ---------------------- | ------------------------------ |
| string          | Input                  | -                              |
| password        | Password               | 开启密码强度检查               |
| textarea        | Input.TextArea         | -                              |
| number          | NumberPicker           | 整数                           |
| float           | NumberPicker           | 浮点数                         |
| select          | Select                 | 浮点数                         |
| radio           | Radio                  | enum 存在时，为 Radio.Group    |
| checkbox        | Checkbox               | enum 存在时，为 Checkbox.Group |
| boolean         | Switch                 | -                              |
| date            | DatePicker             | 日期选择器                     |
| month           | DatePicker             | 月选择器                       |
| date-range      | DatePicker.RangePicker | 日期范围选择器                 |
| date-time-range | DatePicker.RangePicker | 日期+时间范围选择器            |
| time            | TimePicker             | 时间选择器                     |
| time-range      | TimePicker.RangePicker | 时间范围选择器                 |

## 布局类 patches

| 类型        | 对应组件            | 说明                                |
| ----------- | ------------------- | ----------------------------------- |
| layout      | FormLayout          | 默认 labelWidth 为 120，padding: 10 |
| grid        | FormGrid            | 默认 maxColumns 为 4，minWidth：300 |
| grid-column | FormGrid.GridColumn | -                                   |
