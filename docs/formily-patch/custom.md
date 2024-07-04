---
toc: content
---

# 自定义 Patches

如当前 patches 无法满足你的需求，你可以通过自定义 patches 来实现。

使用 `componentTypeConfig.append(patches: PatchesConfigType)` 实现, 如设置的 type 与内置的相同时则覆盖！

## 使用

```ts
import { componentTypeConfig } from '@tc-lib/formily-patch';
componentTypeConfig.append({
  select: {
    component: 'Select',
    props: {
      placeholder: '请选择',
      allowClear: true,
    },
  },
});
```

## 类型

`append(e: PatchesConfigType) {}`

```ts
type PatchesConfigType = {
  component?: string;
  props?: any;
  decoratorProps?: typeof FormItem | any;
  validator?: FieldValidator[];
  // 禁止为 x-decorator 设置 FormItem 组件，一般用于布局组件，例如：layout
  noDecorator?: boolean;
};
```
