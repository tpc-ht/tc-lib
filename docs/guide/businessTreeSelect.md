---
toc: content
group:
  title: form
  order: 0
order: 0
---

# TreeSelect
默认展开树的第一个节点
<code src='./demos/BusinessTreeSelectDemo.tsx'></code>

## API
```ts 
import { TreeSelectProps } from "antd";
export interface IBaseTreeSelectProps extends TreeSelectProps {
  /** 接口函数 */
  serverFun: (params: any) => Promise<any>;
  /** 下拉数据 外部传递避免重复渲染出现的多次请求 */
  dataSource?: any[];
  /** 默认请求参数 */
  params?: { [key: string]: any };
  /** 是否手动请求 默认false */
  manual?: boolean;
  /** 选择类型 "multiple" | "radio" | "checkbox" */
  selectType?: SelectType;
  /** 顶端开启 默认 true */
  topExpanded?: boolean;
}
```

更多参考: [tree-select](https://ant.design/components/tree-select-cn)