---
toc: content
group:
  title: form
  order: 0
order: 0
---

# Select

<code src='./demos/BusinessSelectDemo.tsx'></code>

## API

```ts
import { SelectProps } from 'antd';
export interface IBaseSelectProps extends SelectProps {
  /** 接口函数 */
  serverFun: (params?: any) => Promise<any>;
  /** 下拉数据 外部传递避免重复使用出现的多次请求 */
  dataSource?: any[];
  /** 默认请求参数 */
  params?: { [key: string]: any };
  /** 是否手动请求 默认false */
  manual?: boolean;
  /** 是否多选 */
  isMultiple?: boolean;
  /** 是否唯一选中 */
  isUniqueSelect?: boolean;
  /** 每一项描述 */
  description?: string | ((row: any, index: number) => ReactNode);
  /** 自定义lobel */
  labelFormat?: (row: any, index: number) => ReactNode;
}
```

更多参考: [select](https://ant.design/components/select-cn)
