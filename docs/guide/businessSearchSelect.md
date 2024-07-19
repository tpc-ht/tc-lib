---
toc: content
group:
  title: form
  order: 0
order: 0
---

# SearchSelect

<code src='./demos/BusinessSearchSelectDemo.tsx'></code>

## API

```ts
import { SelectProps } from 'antd';
export interface IBaseSearchSelectProps extends SelectProps {
  /** 接口函数 */
  serverFun: (params: any) => Promise<any>;
  dataSource?: any[];
  /** 默认请求参数 */
  params?: { [key: string]: any };
  /** 是否多选 默认 true */
  isMultiple?: boolean;
  /** 防抖 默认500*/
  debounceWait?: number;
  /** 每一项描述 */
  description?: string | ((row: any, index: number) => ReactNode);
  /** 自定义label */
  labelFormat?: (row: any, index: number) => ReactNode;
}
```

更多参考: [select](https://ant.design/components/select-cn)
