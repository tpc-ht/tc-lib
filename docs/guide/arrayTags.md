---
toc: content
group:
  title: form
  order: 0
order: 0
---

# ArrayTags

## 基础

```jsx
import { ArrayTags } from '@tc-lib/components';
import { useState } from 'react';
import { Space } from 'antd';
export default () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <ArrayTags />
      <ArrayTags value={['标签一', '标签二']} disabled />
      <ArrayTags disabled />
      <ArrayTags disabled value={[]} />
    </Space>
  );
};
```

## 数字

```jsx
import { ArrayTags } from '@tc-lib/components';
import { useState } from 'react';
import { Space } from 'antd';
export default () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <ArrayTags type="number" />
      <ArrayTags value={[1, 2]} disabled />
    </Space>
  );
};
```

## 时间

```jsx
import { ArrayTags } from '@tc-lib/components';
import { useState } from 'react';
import { Space } from 'antd';
export default () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <ArrayTags type="time" value={['01:00', '02:00']} />
      <ArrayTags value={['01:00', '02:00']} disabled />
    </Space>
  );
};
```

## 时间范围

```jsx
import { ArrayTags } from '@tc-lib/components';
import { useState } from 'react';
import { Space } from 'antd';
export default () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <ArrayTags type="timeRange" value={['00:00-00:00', '01:00-01:00']} />
      <ArrayTags value={['09:00-12:00', '14:00-18:00']} disabled />
    </Space>
  );
};
```

## API

```ts
import { InputProps } from 'antd';
export interface ITagArrayItemsProps {
  value?: string[];
  onChange?: any;
  /** 类型 */
  type: 'input' | 'number' | 'time' | 'timeRange';
  /** 禁用 */
  disabled?: boolean;
  /** 输入框属性 详见 antd */
  inputProps?: InputProps;
}
```
