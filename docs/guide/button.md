---
toc: content
---
# Button

## 识别Promise按钮加载
```jsx
import { Button } from '@tc-lib/components';

export default () => {
    const onClick = ()=>new Promise((reject)=>{
      setTimeout(()=>{
        reject(1)
      },[1000])
    })
    return <Button onClick={onClick}>按钮</Button>
}
```
## API
参考 [https://4x.ant.design/components/button-cn/](https://4x.ant.design/components/button-cn/)




