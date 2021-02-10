# 阻止滚轮滚动事件

[[toc]]

## 事件冒泡与事件捕获

- 事件触发过程分为2个阶段
- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

1. 事件捕获
   事件捕获定义了事件首先由最外层的元素（window）接收，然后才是下级元素。
2. 事件冒泡
   事件冒泡是IE的开发团队提出的，它定义了事件首先由最具体的元素接收，然后逐级冒泡到上级元素。

示例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>event</title>
  <style>
    body{
      padding-top: 100px;
    }
    div {
      border: 1px solid;
      width: 50%;
      height: 50%;
      padding: 10px;
      margin: auto;
      text-align: center;
    }

    #d2 {
      background-color: #ddd;
    }

    #d3 {
      background-color: #888888;
    }
  </style>
</head>

<body>
  <div id="d1">
    1
    <div id="d2">
      2
      <div id="d3">
        3
      </div>
    </div>
  </div>
</body>
<script>

 function clickFn(e, msg) {
    console.log('msg: ', msg);
  }
  const getById = (id) => document.getElementById(id);

  const d1 = getById('d1');
  const d2 = getById('d2');
  const d3 = getById('d3');
  // capture:  Boolean，表示 listener 在那个阶段时触发。 默认值false表示冒泡阶段触发，true 表示捕获阶段触发
  d1.addEventListener('click', (event) => clickFn(event, '1捕获阶段'), { capture: true })
  d1.addEventListener('click', (event) => clickFn(event, '1冒泡阶段'), { capture: false })
  d2.addEventListener('click', (event) => clickFn(event, '2捕获阶段'), { capture: true })
  d2.addEventListener('click', (event) => clickFn(event, '2冒泡阶段'), { capture: false })
  d3.addEventListener('click', (event) => clickFn(event, '3捕获阶段'), { capture: true })
  d3.addEventListener('click', (event) => clickFn(event, '3冒泡阶段'), { capture: false })

</script>

</html>
```

![image-20200819154234499](https://fe-notes-1302400351.cos.ap-beijing.myqcloud.com/js/20200819182808.png)

![image-20200819170608309](https://fe-notes-1302400351.cos.ap-beijing.myqcloud.com/js/20200819182809.png)

> 总结简单回顾下事件触发流程
> 1. 事件捕获阶段
> 2. 处于目标阶段
> 3. 事件冒泡阶段

## preventDefault 与 stopPropagation

- preventDefault ：阻止默认事件，如 `a`标签的跳转，滚轮的滚动。
- stopPropagation ： 阻止事件冒泡。

**未阻止事件冒泡的情况**

```js
  function clickFn(e, msg) {
    console.log('msg: ', msg);
  }
  const getById = (id) => document.getElementById(id);
  const d1 = getById('d1');
  const d2 = getById('d2');
  const d3 = getById('d3');
  // capture:  Boolean，表示 listener 在那个阶段时触发。 默认值false表示冒泡阶段触发，true 表示捕获阶段触发
  d1.addEventListener('click', (event) => clickFn(event, '1冒泡阶段'), { capture: false })
  d2.addEventListener('click', (event) => clickFn(event, '2冒泡阶段'), { capture: false })
  d3.addEventListener('click', (event) => clickFn(event, '3冒泡阶段'), { capture: false })
```

![image-20200819175326400](https://fe-notes-1302400351.cos.ap-beijing.myqcloud.com/js/20200819182810.png)

> 未阻止事件冒泡的情况 点击div3事件触发顺序是 从 3->2->1 一次触发，也就是每个div上的相同事件都会被触发

**阻止事件冒泡的情况**

```js
  function clickFn(e, msg) {
    stop(e)
    console.log('msg: ', msg);
  }
  function stop(e) {
    const id = e.target.id;
    switch (id) {
      case 'd3':
        console.log(id);
        e.stopPropagation();
        break;
      case 'd2':
        console.log(id);
        e.stopPropagation();
        break;
    }
  }
  const getById = (id) => document.getElementById(id);

  const d1 = getById('d1');
  const d2 = getById('d2');
  const d3 = getById('d3');
  d1.addEventListener('click', (event) => clickFn(event, '1冒泡阶段'), { capture: false })
  d2.addEventListener('click', (event) => clickFn(event, '2冒泡阶段'), { capture: false })
  d3.addEventListener('click', (event) => clickFn(event, '3冒泡阶段'), { capture: false })

```

> 阻止事件冒泡的情况 点击div3事件触发顺序是div3上所绑定的事件，div2，div1上的事件没有被触发


## modal滚轮事件 

问题：在modal弹窗中滚动引起页面滚动

![image-20200819180640843](https://fe-notes-1302400351.cos.ap-beijing.myqcloud.com/js/20200819182811.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>wheel</title>
  <style>
    .modal {
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      width: 400px;
      height: 300px;
      border: 1px solid;
      overflow: scroll;
      text-align: center;
    }
  </style>
</head>
<body>
  <!-- 60个br -->
  <div>
    <br>
    <!-- br 省略 -->
    ...
  </div>
    <!-- 20个br -->
  <div class="modal">
    <!-- br 省略 -->
    <br>
    123
    <br>
  </div>
</body>

</html>
```

解决1： 阻止滚轮事件冒泡 ，触发事件的dom元素不会向上传播事件，页面就不会触发滚动事件了

```js
const modal = document.querySelector('.modal');
modal.onmousewheel = function (e) {
  console.log('modal');
  e.stopPropagation();
}
```

![image-20200819181427880](https://fe-notes-1302400351.cos.ap-beijing.myqcloud.com/js/20200819182812.png)

> 并未成功阻止页面滚动，滚动事件还是向上传播


解决2： 阻止默认事件

```js
const modal = document.querySelector('.modal');
  modal.onmousewheel = function (e) {
    console.log('modal');
    e.preventDefault();
  }
```

> modal 不再响应滚动，页面也不再滚动，阻止了滚动默认事件。 完成50%，剩下需要让modal滚动
> `event.deltaY` ,`deltaY` 属性在向下滚动时返回正值，向上滚动时返回负值，否则为0。
> `event.target.scrollTop` 此属性可以获取或者设置对象的最顶部到对象在当前窗口显示的范围内的顶边的距离，也就是元素滚动条被向下拉动的距离。
> 通过 `e.target.scrollTop = e.deltaY + e.target.scrollTop` 设置scrollTop来实现页面滚动


```js
  const modal = document.querySelector('.modal');
  modal.onmousewheel = function (e) {
    console.log('modal');
    const t = e.target.scrollTop
    const deltaY = e.deltaY;
    e.target.scrollTop = e.deltaY + e.target.scrollTop;
    e.preventDefault();
  }
```


![image-20200819182704187](https://fe-notes-1302400351.cos.ap-beijing.myqcloud.com/js/20200819182813.png)


> 阻止弹出层 带动页面滚动完成。当然还可以继续完善兼容性。节流等