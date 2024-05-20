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

## npm 相关指令

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

## react

| 名称    | 描述                            |
| ------- | ------------------------------- |
| `jotai` | 原始且灵活的 `React` 状态管理库 |

## webgl 相关

| 名称        | 描述     |
| ----------- | -------- |
| `cannon-es` | 碰撞监测 |

## 浏览器相关

| 名称       | 描述                            |
| ---------- | ------------------------------- |
| `dexie.js` | 浏览器数据库 `IndexedDB` 的封装 |
