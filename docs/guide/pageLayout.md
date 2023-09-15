---
toc: content
---
# PageLayout

## 带边栏目
```jsx
import { PageLayout } from '@tc-lib/components';
import { Space, Button } from 'antd';

export default () => {
    return <PageLayout
    style={{
        height:600,border: '1px solid #f0f0f0'
    }}
      aside={
        <div>侧边栏</div>
      }
      header={
        <Space>
            <Button>新增</Button>
            <Button>编辑</Button>
            <Button>删除</Button>
        </Space>
      }
    >
       <div>主表</div>
    </PageLayout>
}
```
## 不带边栏目
```jsx
import { PageLayout } from '@tc-lib/components';
import { Space, Button } from 'antd';

export default () => {
    return <PageLayout
    style={{
        height:600,border: '1px solid #f0f0f0'
    }}
      header={
        <Space>
            <Button>新增</Button>
            <Button>编辑</Button>
            <Button>删除</Button>
        </Space>
      }
    >
       <div>主表</div>
    </PageLayout>
}
```

## API
| 属性 | 说明 | 类型  | 默认值 |
| --- | --- | --- | --- |
| aside     | 侧边栏代码      | `ReactNode` | - |
| minSize   | 侧边栏最小宽度  | `number`    | 200 |
| maxSize   | 侧边栏最大宽度  | `number`    | 400 |
| header    | 头部代码        | `ReactNode` | - |
| children  | 头部代码        | `ReactNode` | - |
| style     | 外层样式        | `CSSProperties` | - |
| bodyStyle | 主体样式        | `CSSProperties` | - |
| asideStyle  | 侧边栏样式    | `CSSProperties` | - |
| headStyle   | 头部样式      | `CSSProperties` | - |

## 拖拽样式设置
``` css
:root {
  --focus-border: #1890ff;
  --separator-border: rgb(240, 240, 240);
}
```
更多层叠样式参考: [allotment](https://www.npmjs.com/package/allotment)


