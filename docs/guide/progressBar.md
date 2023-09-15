---
toc: content
group:
  title: form
  order: 0
order: 0
---
# ProgressBar
```jsx
import { ProgressBar } from '@tc-lib/components';
import { useEffect,useState } from 'react';
export default ()=>{
  const [value,setValue] = useState()
  return <ProgressBar value={value} onChange={setValue} suffix="像素"/>
}
```
## API
| 属性 | 说明 | 类型  | 必填 | 默认值 |
| ---- | --- | --- | --- | --- |
| value   | 值      | `number` | - | - |
| onChange | 变更回调  | `(color: number) => void`    | - | - |
| min | 最小值  | `number`    | - | 0 |
| suffix | 后缀单位  | `string`    | - | - |