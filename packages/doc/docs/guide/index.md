---
nav: 
  title: 组件
  order: -1
toc: content
---

# 约定

## TS约定

1. 对象类型使用 `interface` 进行定义，其他类型使用 `type` 定义;
2. 对象类型名字前缀以 `I` 开头（不成文，一般用于区分）

## 解构赋值细节记录
```javascript
const { a,...extra } = obj
// 正确的 
const obj1 = { ...extra, a }
// 错误的
const obj1 = { a, ...extra }
```
## ant弹窗开启规范
使用 `@tc-lib/utils` 的 `useModalProps`

## 组件封装约定
1. formily组件封装，拆分一个通用纯组件，基于formily规范二次封装（接口业务）

## formily JSON-Schema 使用规范
纯粹的JSON更利于跨平台
```js
const SchemaField = createSchemaField({
  components: {
    Input,Select
  }
})
const createSchema: ISchema = {
  type: 'object',
  properties: {
    sel: {
      type: 'string',
      title: '备注',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        placeholder: '{{placeholder}}',
      },
      enum: '{{enums}}',
      name: 'sel',
    },
  }
}
export default (
  <Form
    form={form}
    feedbackLayout="terse"
    labelWidth={90}
    style={{ padding: '18px 18px 0' }}
    previewTextPlaceholder="-"
  >
    <SchemaField
      schema={createSchema}
      scope={{
        enums: [{ label: '小明', value: 1 }],
        placeholder: '请输入'
      }}
    />
  </Form>
)
```
关联操作
```
x-reactions={{
  dependencies: ['compId'],
  fulfill: {
    run: `{{$self.value=undefined;$deps[0] && $self.invoke('run',{orgPath:[$deps[0]]});}}`,
  },
}}
```
## 针对也没缓存对话框挂载在根节点，浏览器路由后退，未关闭处理
例如 `react-activation` 监听
```
useUnactivate(() => {
  handleModalVisible?.();
});
```
## antd
### 4.x className 前缀修改
```css
@import '~antd/lib/style/themes/default.less';
  .@{ant-prefix}-xxxxx {
    border: none;
  }
```
