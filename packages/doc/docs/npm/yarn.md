---
order: 3
toc: content
---
# yarn
## 安装
```
npm install -g yarn
```
### 依赖初始化
```
yarn
```
### 运行package.json文件中定义的脚本命令
```
yarn run [command]
```
### 安装依赖包
```
yarn add [package]
yarn add [package]@[version]
```
### 安装全局依赖包
```
yarn global add [package]
```
### 升级依赖包
```
yarn upgrade [package]
yarn upgrade [package]@[version]
```
### 删除依赖包
```
yarn remove [package]
```
### 查看与设置配置信息
```
yarn config list
yarn config set 
// 例如 修改镜像地址
yarn config set registry https://registry.npmmirror.com
```