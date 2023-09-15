---
toc: content
---
# TableForm

## 默认
```jsx
import { PageLayout,TableForm } from '@tc-lib/components';
import { Space, Button, Form, Input } from 'antd';
import 'antd/dist/antd.less';
const FormItem = Form.Item;
export default () => {
    
  const [form] = Form.useForm();
    return <Form form={form}>
            <TableForm
              list={[
                <FormItem name="Input2" key="Input2" label="Input2">
                    <Input placeholder="请输入" allowClear />
                </FormItem>,
                <FormItem name="Input3" key="Input3" label="Input3">
                    <Input placeholder="请输入" allowClear />
                </FormItem>,
                <FormItem name="Input4" key="Input4" label="Input4">
                    <Input placeholder="请输入" allowClear />
                </FormItem>,
                <FormItem name="Input5" key="Input5" label="Input5">
                    <Input placeholder="请输入" allowClear />
                </FormItem>,
                <FormItem name="Input6" key="Input6" label="Input6">
                    <Input placeholder="请输入" allowClear />
                </FormItem>,
                <FormItem name="Input7" key="Input7" label="Input7">
                    <Input placeholder="请输入" allowClear />
                </FormItem>,
                <FormItem name="Input8" key="Input8" label="Input8">
                    <Input placeholder="请输入" allowClear />
                </FormItem>,
              ]}
              labelW={70}
              
            />
        </Form>
}
```
## 方向
```jsx
import { PageLayout,TableForm } from '@tc-lib/components';
import { Space, Button, Form, Input } from 'antd';
const FormItem = Form.Item;
export default () => {
    
  const [form] = Form.useForm();
    return <Form form={form}>
            <TableForm
              direction='column'
              list={[
                <FormItem noStyle key="as12">
                  <FormItem name="Input1" key="Input1" label="Input1">
                    <Input placeholder="请输入" allowClear />
                  </FormItem>
                  <FormItem hidden key="Input0" name="Input0">
                    <Input />
                  </FormItem>
                </FormItem>,
                <FormItem name="Input2" key="Input2" label="Input2">
                    <Input placeholder="请输入" allowClear />
                </FormItem>,
                <FormItem name="Input3" key="Input3" label="Input3">
                    <Input placeholder="请输入" allowClear />
                </FormItem>,
                <FormItem name="Input4" key="Input4" label="Input4">
                    <Input placeholder="请输入" allowClear />
                </FormItem>,
                <FormItem name="Input5" key="Input5" label="Input5">
                    <Input placeholder="请输入" allowClear />
                </FormItem>,
                <FormItem name="Input6" key="Input6" label="Input6">
                    <Input placeholder="请输入" allowClear />
                </FormItem>,
                <FormItem name="Input7" key="Input7" label="Input7">
                    <Input placeholder="请输入" allowClear />
                </FormItem>,
                <FormItem name="Input8" key="Input8" label="Input8">
                    <Input placeholder="请输入" allowClear />
                </FormItem>,
              ]}
              labelW={70}
              
            />
        </Form>
}
```

## API
| 属性 | 说明 | 类型  | 默认值 |
| --- | --- | --- | --- |
| list   | 筛选条件      | `ReactNode[]` | [] |
| labelW | label宽度  | `number`    | - |
| search | 查询回调函数  | `{submit: () => void;reset: () => void;}`    | - |
| minNum  | 最小显示        | `ReactNode` | 6 |
| maxNum  | 最大显示        | `ReactNode` | 8 |
| direction  | 方向        | `ReactNode` | row |
