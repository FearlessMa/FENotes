# 滚轮阻止冒泡

## preventDefault 与 stopPropagation

- preventDefault ：阻止默认事件，如 `a`标签的跳转，滚轮的滚动。
- stopPropagation ： 阻止事件冒泡。

## 事件冒泡与事件捕获

- 事件触发过程分为2个阶段
- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

1. 事件捕获
2. 事件冒泡