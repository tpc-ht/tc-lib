---
toc: content
group:
  title: form
  order: 1
order: 1
---
# ColorInput
```jsx
import { ColorInput } from '@tc-lib/components';
import { useEffect,useState } from 'react';
export default ()=>{
  const [value,setValue] = useState()
  return <ColorInput value={value} onChange={setValue}/>
}
```
### API
| 属性 | 说明 | 类型  | 必填 | 默认值 |
| ---- | --- | --- | --- | --- |
| value   | 值      | `number` | - | - |
| onChange | 变更回调  | `(color: number) => void`    | - | - |
| disabled | 禁用  | `boolean`    | - | - |
