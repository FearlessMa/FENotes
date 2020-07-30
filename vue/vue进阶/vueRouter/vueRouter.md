# Vue Router

## 1. 安装

### 1.1 NPM 安装
```shell
npm i vue-router -S
```

### 1.2 引入Router

使用的项目是通过单文件组件文章中构建的。
> [单文件组件](https://fearlessma.github.io/FENotes/vue/vueBase/vue%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6.html)

在man.js中引入router

```js
import VueRouter from 'vue-router'
Vue.use(VueRouter)
```

### 1.3 使用router

- 在src文件夹下新增
  - router/index.js
  - pages/a.vue
  - pages/b.vue

![image-20200730150514499](https://imgkr.cn-bj.ufileos.com/882145ea-f68f-4ebe-8589-66be2be6b4bc.png)


- a.vue与b.vue增加以下内容

```vue
<template>
  <div>pageA</div>
</template>
<script>
export default {
  name: 'vueA'
};
</script>
<style lang="less" scoped></style>
```

- router/index.js增加以下内容

```js
import VueRouter from 'vue-router';
import VueA from '../pages/a.vue';
import VueB from '../pages/b.vue';

//  route 配置
const routes = [
  {
    path: '/a',  // url 匹配地址
    name: 'pageA', // route name
    component: VueA // 渲染的组价
  },
  {
    path: '/b',
    name: 'pageB',
    component: VueB
  }
];

// 创建router实例
const router = new VueRouter({
  mode: 'hash', // hash路由
  base: process.env.BASE_URL,
  routes
});

// 导出router
export default router;

```

- App.vue 文件

```vue
<template>
  <div id="app">
    <div>首页</div>
    <hr />
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
};
</script>

```

- main.js 文件

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';

Vue.use(VueRouter);

new Vue({
  router, //注入router，在根组件注入，使所有子组件都可以使用
  render: (h) => h(App)
}).$mount('#app');

```

- 打开浏览器输入项目地址：`http://localhost:8081/#/`

![image-20200730161756598](https://imgkr.cn-bj.ufileos.com/02c8cde0-b3b6-4645-9992-e5dfbbac8519.png)

- url输入a.vue页面地址：`http://localhost:8081/#/a`

![image-20200730161951042](https://imgkr.cn-bj.ufileos.com/1aa70941-b489-4a5b-9e70-609a463242c9.png)

- url输入b.vue页面地址：`http://localhost:8081/#/b`

![image-20200730162014736](https://imgkr.cn-bj.ufileos.com/f7fd57d0-bc24-4aa6-bc0c-b9a6154928b0.png)