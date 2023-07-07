---
toc: content
nav:
  title: 进阶
  order: 10
---
# 进阶

## copyText 复制
```jsx
import 'antd/dist/antd.css';
import { Button, message } from 'antd';


import { copyText } from '@tc-lib/test';
export default ()=>{
    const onCopy = async ()=>{
        const s = await copyText('Hello World');
        message.success('复制成功');
    }
    return <Button onClick={onCopy}>复制</Button>
}
```
## 防抖
```javascript
function doSomething() {
  // ...
}
// 后执行
const debounceFunA = debounce(doSomething, 1000);
// 前执行
const debounceFunB = debounce(doSomething, 1000, true);
```
## 节流

```javascript
function doSomething() {
  // ...
}

// 后执行
const throttleFunA = throttle(doSomething, 1000);
// 前执行
const debounceFunB = throttle(doSomething, 1000, true);
```

## 发布订阅
```jsx
import { EventEmitter } from '@tc-lib/test';
import { Button, Input, message } from 'antd';
import { useEffect, useState } from 'react';
const event = new EventEmitter()
export default ()=>{
  const [ value, setValue ] = useState();
  useEffect(()=>{
    event.on('test',onEmit)
    return ()=>event.off('test',onEmit)
  },[])
  const onEmit = (text:string)=>{
    message.success(`事件触发：${text}`)
  }
  return <div style={{display: 'flex'}}>
    <Input value={value} onChange={e=>setValue(e.target.value)}/>
    <Button onClick={()=>event.emit('test',value)}>事件触发</Button>
  </div>
}
```