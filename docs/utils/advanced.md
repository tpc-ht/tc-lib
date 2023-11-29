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


import { copyText } from '@tc-lib/utils';
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
import { EventEmitter } from '@tc-lib/utils';
import { Button, Input, message } from 'antd';
import { useEffect, useState } from 'react';
const event = new EventEmitter()
const TestButton = (props:any)=>{
  const eventEmit = () => {
    event.emit('test','子组件调用了')
  }
  return <Button {...props} onClick={eventEmit}>触发事件</Button>
}
export default ()=>{
  const eventBind = ()=>{
    message.success(`绑定成功`)
    event.on('test',onEmit)
  }
  const eventClear = ()=>{
    message.success(`清理成功`)
    event.off('test')
    // event.off('test',onEmit)
  }
  const onEmit = (text:string)=>{
    message.success(`事件触发：${text}`)
  }
  return <div style={{display: 'flex'}}>
    <Button onClick={eventBind}>绑定事件</Button>
    <TestButton/>
    <Button onClick={eventClear}>清理事件</Button>
  </div>
}
```
## 流程阻塞
```javascript
(async function sleepTest() {
   await sleep(1000,()=>{
    console.log('1s后执行01')
   })
   console.log('1s后执行02')
})()
```