---
toc: content
group:
  title: form
  order: 0
order: 0
---

# Cascader

<code src='./demos/BusinessCascader.tsx'></code>

## API
```typeScript
import { CascaderProps } from "antd";
export type IBaseCascaderProps<T> = {
  /** 接口函数 */
  serverFun: (params: any) => Promise<any>;
  /** 下拉数据 外部传递避免重复渲染出现的多次请求 */
  dataSource?: any[];
  /** 默认请求参数 */
  params?: { [key: string]: any };
  /** 是否手动请求 默认false */
  manual?: boolean;
} & CascaderProps<T>;
```

更多参考: [Cascader](https://ant.design/components/Cascader-cn)