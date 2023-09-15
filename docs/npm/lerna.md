---
order: 4
toc: content
---
# lerna
## 安装
```shell
yarn global add lerna
npm install -g lerna
```
## 创建子应用
```shell
lerna create <name> [loc(指定目录)]
```
## 链接子包与子包之间的依赖(本地)
```shell
lerna link
```
## 依赖初始化
```shell
lerna bootstrap
```
## 安装依赖
```shell
lerna add lodash
```
### 指定包安装依赖
```shell
lerna add lodash --scope=@xxxx/utils
```
## 更新公共依赖
- 需要借助 [lerna-update-wizard](https://github.com/Anifacted/lerna-update-wizard)
### 安装 lerna-update-wizard
```shell
yarn add --dev lerna-update-wizard
yarn global add lerna-update-wizard
```
### 启动 lerna-update-wizard
```shell
npx lerna-update-wizard
```

## 运行 
```shell
lerna run 
```
## 版本发布
```shell
lerna publish
```
## 查看包的本地修改
```shell
lerna diff
```
## 清空子项目 `node_modules`
```shell
lerna clean
```
## 发布流程
`lerna`必须先与git链接。发布时会去判断git和npm的区别进行比较。(也就是先传代码到git仓库，在发布)
### 步骤如下：
- 使用 lerna 创建项目
- 创建git
- 创建npm组
- 在创建lerna的子应用（这里会自动生成对应的git地址）
- <font color=red>子应用创建默认为私有的，需要给每个子应用的 package.json 设置，（私有收费的）</font>
```json
"publishConfig": {
  "access": "public",
  "registry": "https://registry.npmjs.org/"
}
```
- 发布
```shell
lerna publish
```
## 异常
`Working tree has uncommitted changes, please commit or remove the following changes before continuing`
直接方案：删除 `.git`，在生成一个对应库的 `.git`
