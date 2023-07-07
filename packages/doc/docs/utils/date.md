---
toc: content
---
# 时间
## reverse 相差天数
```jsx
import { dayDiff } from '@tc-lib/test';
import 'antd/dist/antd.css';
import { DatePicker,Space } from 'antd';
import { useState } from 'react';
const { RangePicker } = DatePicker;
export default ()=>{
    const [day,setDay] = useState()
    const DateChange = (e) =>{
        setDay(dayDiff(...e) )  
    }
    return <Space>
            <RangePicker onChange={DateChange}/>
            <div>相差：{day}天</div>
        </Space>
}
```
## 快速格式化时间数组 
```javascript
formatDates({
    date: [new Date(),new Date()],
    names: ['recordAtStart', 'recordAtEnd'],
})
//{recordAtEnd: "2023-05-17",recordAtStart: "2023-05-17"}
formatDates({
    date: [new Date(),new Date()],
    names: ['recordAtStart', 'recordAtEnd'],
    showTime: true
})
//{recordAtEnd: "2023-05-17 15:47:59",recordAtStart: "2023-05-17 15:47:00"}
formatDates({
    date: [new Date(),new Date()],
    names: ['recordAtStart', 'recordAtEnd'],
    stamp: true
})
//{recordAtEnd: 1684309785043,recordAtStart: 1684309785043}
```
## 时间倒计时 
```javascript
timeCount(new Date(),'2040-12-31 23:59:59')
```
### 返回值
```typescript
 {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
  }
```