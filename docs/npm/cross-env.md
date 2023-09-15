---
nav: 
  title: npm
  order: 6
toc: content
---
# cross-env
## 安装
```
yarn add cross-env --dev
```
运行时修改环境变量
```json
    "scripts": {
        "start": "max dev",
        "start:dev": "cross-env REACT_APP_ENV=dev max dev",
        "start:test": "cross-env REACT_APP_ENV=test max dev",
    }
```