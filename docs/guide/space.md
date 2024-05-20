---
toc: content
---

# Space

基于 flex 实现的布局组件。比 antd 的 Space 更灵活！

## 默认

```jsx
import { FlexSpace } from '@tc-lib/components';
export default () => (
  <FlexSpace wrap style={{ flexWrap: 'wrap' }}>
    名称
    <span>小花</span>
    <div style={{ flexWrap: 'wrap' }}>6666666</div>
  </FlexSpace>
);
```

## 省略

与 `Typography` 结合实现单行省略。

```jsx
import { FlexSpace } from '@tc-lib/components';
import { Typography, Space as AntSpace } from 'antd';
const { Text } = Typography;
export default () => (
  <div style={{ width: 200, border: '1px solid #CCC' }}>
    <FlexSpace>
      <div style={{ flexShrink: 0 }}>小明</div>
      <Text ellipsis>毁掉一首好歌最好的方法，就是把它设为起床闹铃。</Text>
    </FlexSpace>
    <AntSpace>
      <div style={{ width: 28 }}>小明</div>
      <Text ellipsis>毁掉一首好歌最好的方法，就是把它设为起床闹铃。</Text>
    </AntSpace>
  </div>
);
```

## API

| 属性      | 说明     | 类型                                                      | 默认值   |
| --------- | -------- | --------------------------------------------------------- | -------- |
| align     | 对齐方式 | `start \| end \| center \| baseline`                      | -        |
| justify   | 布局     | `start \| end \| center \| space-between \| space-around` | `start`  |
| direction | 方向     | `column \| row`                                           | `column` |
| size      | 间距大小 | `number`                                                  | 8        |
| wrap      | 是否换行 | `boolean`                                                 | false    |
