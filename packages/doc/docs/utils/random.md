---
toc: content
---
# 随机
## randomHexColor 随机16进制颜色
```jsx
import { randomHexColor } from '@tc-lib/test';
export default ()=>{
    return <div style={{display: 'flex'}}>
        {
            [1,2,3,4,5].map(e=>(
                <div key={e} style={{width:100,height:100,backgroundColor:randomHexColor()}}/>
            ))
        }
    </div>
}
```
## getUid Uid
默认11位
```jsx
import { uid } from '@tc-lib/test';
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