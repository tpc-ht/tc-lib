---
nav: 
  title: CSS
  order: -1
toc: content
---
# CSS
## 文本
### 文本强制换行
``` css
word-break: break-all;
```
## 事件
### 解决div拖动出现禁止图标
``` text
<div 
  onMouseDown={(e) => {
    e?.preventDefault();
  }}
/>
```
## 背景
### 背景图片居中显示防变形
``` css
width: 200px;
height: 120px;

background-image: url(https://----.png);
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
```
