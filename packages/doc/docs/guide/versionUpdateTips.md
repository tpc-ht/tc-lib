---
toc: content
---
# VersionUpdateTips 版本验证
umi 配置:
1. 在HTML中添加版本标签 `<meta/>` 
```javascript
//文件： config/config.ts
export default defineConfig({
  //....
  metas: [
    {
      name: 'web_version',
      content: +new Date(),
    },
  ]
  //...
})
```
2. 入口文件中调用
```javascript
//文件： src/layouts/index.tsx
<CheckVersion />
```


## API
| 属性 | 说明 | 类型  | 必填 | 默认值 |
| --- | --- | --- | ---| --- |
| pollingTime   | 轮询间隔       | `number` |-| 每次检查更新间隔，单位：秒。默认值：60 |
| title | 标题  | `string`    |-| 发现新版本！！！ |
| children | 描述/内容  | `ReactNode`    |-| 发现新版本，为避免造成数据错误，请刷新后使用! |
| metaName  | meta标签名称        | `string` |-| web_version |


