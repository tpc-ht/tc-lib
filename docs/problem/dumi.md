---
---

# Dumi
## docs中访问packages下的子包报 Module not found
配置项目别名
```javascript
import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  // ...
  alias: {
    '@***/components': path.join(__dirname, 'packages/***/src'),
    '@***/utils': path.join(__dirname, 'packages/***/src'),
  },
  // ...
});

```
## antd全局样式引入
`.dumirc.ts` 配置文件中添加
```javascript
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ]
```

## father build 打包后antd样式丢失
`.fatherrc.ts` 配置文件中添加
```javascript
  extraBabelPlugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
      },
    ],
  ],
```
