---
toc: content
group:
  title: form
  order: 0
order: 0
---

# ConfigProvider

基于 antd ConfigProvider 二次封装的全局配置组件

## 基本用法

支持阅读态的样式修改

```jsx
import {
  Disabled,
  ConfigProvider,
  BooleanDisable,
  FlexSpace,
} from '@tc-lib/components';
export default () => {
  let value = [
    '小黑a小黑a小黑a小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑',
    2,
    3,
    4,
    5,
  ];
  return (
    <ConfigProvider
      disableStyle={{
        body: {
          color: 'red',
          backgroundColor: '#FFDEAD',
          border: '1px solid red',
        },
        node: { color: 'red' },
      }}
    >
      <FlexSpace direction="column">
        <Disabled value="小黑a小黑" copyable />
        <Disabled
          value="小黑a小黑a小黑a小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑小黑"
          copyable
          ellipsis
        />
        <Disabled value={value} />
        <Disabled value={['小黑', '小红', '小黄']} type="tag" />
        <Disabled value={"<div style='color:#FF69B4'>html</div>"} type="html" />
        <Disabled value={value} gap="~" ellipsis copyable />
        <Disabled value={'无边框背景'} bordered={false} />
        <Disabled value={['小黑', '小红', '小黄']} bordered={false} />

        <BooleanDisable value />
        <BooleanDisable />
        <BooleanDisable bordered={false} />
      </FlexSpace>
    </ConfigProvider>
  );
};
```

## API

| 属性         | 说明             | 类型                                                             | 默认值 |
| ------------ | ---------------- | ---------------------------------------------------------------- | ------ |
| disableStyle | 预览组件样式修改 | `CSSProperties` `{ body?: CSSProperties; node?: CSSProperties }` | -      |

其中 `body` 标识组件外部容器，`node` 标识组件内部当 tag 容器

更多：[https://4x.ant.design/components/config-provider-cn/](https://4x.ant.design/components/config-provider-cn/)
