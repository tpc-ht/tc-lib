---
toc: content
---

```jsx
import { Loading, PageLayout } from '@tc-lib/components';
import { Space, Button } from 'antd';
import { useState } from 'react';

export default () => {
    const [loading,setLoading] = useState(false)
    return <PageLayout
        style={{
            height:600,border: '1px solid #f0f0f0'
        }}
        
        aside={
        <div>侧边栏</div>
        }
        header={
        <Space>
            <Button onClick={()=>setLoading(true)}>刷新</Button>
            <Button onClick={()=>setLoading(false)}>停止</Button>
        </Space>
        }
    >
        <Loading loading={loading}>
            <div>主表</div>
        </Loading>
    </PageLayout>
}
```

## API
| 属性 | 说明 | 类型  | 默认值 |
| --- | --- | --- | --- |
| loading   | 是否加载      | `boolean` | false |
| error     | 报错状态      | `any`    | - |
| empty     | 为空状态      | `boolean`    | - |
| refresh   | 重新加载      | `() => void` | - |
| size      | 加载图标大小  | `small` `default` `large` | default |
| children  | 主体          | `any` | - |

参考 [https://4x.ant.design/components/spin-cn/](https://4x.ant.design/components/spin-cn/)