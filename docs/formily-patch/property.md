---
toc: content
---

# 自定义属性

为了更快速更方便的设置组件属性，可以自定义 Schema 属性，绑定对于组件属性！

自定义属性值设置分为公共属性配置，组件属性配置
公共属性配置由 `public` 区分，例如：`public:x-component-props.placeholder`
组件属性配置分为 1 对 1 和 1 对 n
1 对 1 例如：`grid.x-component-props.maxColumns`
1 对多 例如：`{select:{...},treeSelect:{...}}`

目前预制的 Schema 有：

1. `x-grid-span` 设置 grid 中元素所占列数，`public:x-decorator-props.gridSpan`
2. `x-grid-cols` 设置 grid 列数，`grid.x-component-props.maxColumns`
3. `x-multiple` 设置多选，支持：Select，

```ts
{
    select: {
        'x-component-props': {
            maxTagCount: 'responsive',
            mode: 'multiple',
        },
    },
}
```

## 实现

```ts
import { customSchemaProperty } from '@tc-lib/formily-patch';
customSchemaProperty.append({
  'x-grid-span': `public:x-decorator-props.gridSpan`,
  'x-grid-cols': 'grid.x-component-props.maxColumns',
  'x-multiple': {
    select: {
      'x-component-props': {
        maxTagCount: 'responsive',
        mode: 'multiple',
      },
    },
  },
});
```

## 类型

`append(newProperty: CustomSchemaPropertyType) {}`

```ts
type CustomSchemaPropertyType = {
  [key: string]:
    | {
        [key: string]: { 'x-component-props'?: any; 'x-decorator-props'?: any };
      }
    | string;
};
```
