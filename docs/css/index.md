---
nav:
  title: CSS
  order: 4
toc: content
---

# CSS

## 文本强制换行

```css
word-break: break-all;
```

## 设置小于 12px 的字体

1. `zoom` 非标属性，有兼容问题，缩放会改变了元素占据的空间大小，触发重排

```css
zoom: 0.5;
zoom: 50%;
```

2. `transform:scale()` 大部分现代浏览器支持，并且对英文、数字、中文也能够生效，缩放不会改变了元素占据的空间大小，页面布局不会发生变化

```css
transform: scale(0.5);
transform: scale(50%);
```

## 解决 div 拖动出现禁止图标

```html
<div onMouseDown={(e) => { e?.preventDefault(); }} />
```

## 背景图片居中显示防变形

```css
width: 200px;
height: 120px;

background-image: url(https://----.png);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
```

## 吸顶

```css
position: sticky;
top: 0;
```

## 解决 Flex 布局下文本溢出省略号失效

```css
flex: 1;
min-width: 0;
```
