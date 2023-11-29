---
nav: 
  title: npm
  order: 1
toc: content
---
# 基础
## 镜像源切换
### 1. 根目录创建 `.npmrc` 文件
```shell
registry=https://registry.npmmirror.com
```
### 2. yarn 配置修改
```shell
yarn config set registry https://registry.npmmirror.com
```
## npm相关指令
### 登录
```shell
npm logout
```
### 包发布
```shell
npm publish
```
## 依赖新版发布淘宝镜像缓存处理
在 [淘宝镜像](https://npmmirror.com/) 中对指定包进行更新！

## webgl相关
1. `cannon-es`: 碰撞监测