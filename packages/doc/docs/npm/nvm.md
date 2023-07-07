---
order: 2
title: nvm
toc: content
---
# node版本管理
## 安装前的准备
- 安装前卸载之前的node，避免安装后出错
## 安装
### Windows
下载 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) 最新安装包，直接安装即可
- nvm-noinstall.zip：绿色免安装版，但使用时需进行配置。
- nvm-setup.zip：安装版，推荐使用
### OSX/Linux 安装
- curl -o- raw.githubusercontent.com/creationix/… | bash
- wget -qO- raw.githubusercontent.com/creationix/… | bash

## 查看本地安装的所有版本
```shell
nvm list 
nvm ls
```
### 查看可用版本
```shell
nvm ls available
```
## 安装
```shell
nvm install 16.14.2
```
## 使用
```shell
nvm use 16.14.2
```
## 卸载
```shell
nvm uninstall 16.14.2
```
