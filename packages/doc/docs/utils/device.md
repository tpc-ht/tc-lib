---
toc: content
---
# 设备
## isTabActive 检查当前窗口是否可见
```javascript
import { isTabActive } from '@tc-lib/utils';
// 监听窗口切换
document.addEventListener("visibilitychange", ()=>{
    console.log(isTabActive());
});
```
## judgeDeviceType 设备监测
```jsx
import { judgeDeviceType } from '@tc-lib/utils';
export default ()=><div>当前设备：{judgeDeviceType()}</div>
```