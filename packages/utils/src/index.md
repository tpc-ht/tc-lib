---
title: x6-react - 基于react的图编辑框架
group:
  path: /
nav:
  title: 组件
  path: /components
---
## getUid Uid
默认11位1111
```jsx
import { uid } from '../packages/utils/src';
import { Space } from 'antd';
export default ()=>{
    return <Space direction='vertical'>
        {uid()}
        {uid()}
        {uid()}
        {uid()}
    </Space>
}
```
