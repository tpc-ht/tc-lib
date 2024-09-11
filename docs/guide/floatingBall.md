---
toc: content
---
# FloatingBall
基于 `react-draggable` 实现的浮动球
<code src='./demos/FloatingBallDemo.tsx' />

## API

```ts
export type FloatingBallProps = {
  // 容器与边框的距离，默认为：8
  space?: number;
  // 悬浮球的位置，默认为：free
  type: 'free' | 'right' | 'left';
  // 悬浮球球的内容
  children: React.ReactNode;
  // 悬浮球球的位置，范围为0-1，为屏幕宽度的百分比，默认为：0
  yProportion?: number;
  // 悬浮球球的位置，范围为0-1，为屏幕高度的百分比，默认为：0
  xProportion?: number;
};
```
