---
toc: content
---
# Space
比antd的Space更灵活！
## 默认
```jsx
import { Space } from '@tc-lib/components';
export default () => (
    <Space>
        名称
        <span>小花</span>
    </Space>
)
```
## 省略
与 `Typography` 结合实现单行省略。
```jsx
import { Space } from '@tc-lib/components';
import { Typography, Space as AntSpace } from 'antd';
const { Text } = Typography
export default () => (
    <div style={{width:200,border:'1px solid #CCC'}}>
        <Space>
            <div style={{flexShrink: 0}}>小明</div>
            <Text ellipsis>毁掉一首好歌最好的方法，就是把它设为起床闹铃。</Text>
        </Space>
        <AntSpace>
            <div style={{width: 28}}>小明</div>
            <Text ellipsis>毁掉一首好歌最好的方法，就是把它设为起床闹铃。</Text>
        </AntSpace>
    </div>
)
```


## API
| 属性 | 说明 | 类型  | 默认值 |
| --- | --- | --- | --- |
| align   | 对齐方式      | `start \| end \| center \| baseline` | - |
| justify | 布局  | `start \| end \| center \| space-between \| space-around`    | `start` |
| direction | 方向  | `column \| row`    | `column` |
| size  | 间距大小        | `number` | 8 |
| wrap  | 是否换行        | `boolean` | false |