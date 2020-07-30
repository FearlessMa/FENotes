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
  router, //注入router，在根组件注入，使所有子组件都可以通过vm.$router获取路由信息
  render: (h) => h(App)
}).$mount('#app');

```

> 注入router，在根组件注入，使所有子组件都可以通过vm.$router获取路由信息

- 打开浏览器输入项目地址：`http://localhost:8081/#/`

![image-20200730161756598](https://imgkr.cn-bj.ufileos.com/02c8cde0-b3b6-4645-9992-e5dfbbac8519.png)

- url输入a.vue页面地址：`http://localhost:8081/#/a`

![image-20200730161951042](https://imgkr.cn-bj.ufileos.com/1aa70941-b489-4a5b-9e70-609a463242c9.png)

- url输入b.vue页面地址：`http://localhost:8081/#/b`

![image-20200730162014736](https://imgkr.cn-bj.ufileos.com/f7fd57d0-bc24-4aa6-bc0c-b9a6154928b0.png)


## 2. 路由配置

### 2.1 routes

- routes

- 类型: `Array<RouteConfig>`

RouteConfig 的类型定义：

```js
interface RouteConfig = {
  path: string,
  component?: Component,
  name?: string, // 命名路由
  components?: { [name: string]: Component }, // 命名视图组件
  redirect?: string | Location | Function,
  props?: boolean | Object | Function,
  alias?: string | Array<string>,
  children?: Array<RouteConfig>, // 嵌套路由
  beforeEnter?: (to: Route, from: Route, next: Function) => void,
  meta?: any,

  // 2.6.0+
  caseSensitive?: boolean, // 匹配规则是否大小写敏感？(默认值：false)
  pathToRegexpOptions?: Object // 编译正则的选项
}

```

#### 2.1.1 path

页面地址路径，可以通过动态路由获取数据

```js
const routeA = {
  // 基本
  // path:'/a'
  // 动态路径参数 以冒号开头
  path:'/a:id'
}
```

| 模式                          | 匹配路径            | $route.params                        |
| ----------------------------- | ------------------- | ------------------------------------ |
| /user                         | user                | 无                                   |
| /user/:username               | /user/evan          | { username: 'evan' }                 |
| /user/:username/post/:post_id | /user/evan/post/123 | { username: 'evan', post_id: '123' } |


- 修改app.vue代码

```vue
<template>
  <div id="app">
    <div>首页</div>
    <a-button @click="push('/a/1')">a</a-button>
    <a-button @click="push('/b/2')">b</a-button>
    <hr />
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods:{
    push(path){
      this.$router.push(path)
    }
  }
};
</script>
```

- 修改router.js

```js
//  route 配置
const routes = [
  {
    path: '/a/:id',  // url 匹配地址
    name: 'pageA', // route name
    component: VueA // 渲染的组价
  },
  {
    path: '/b/:id',
    name: 'pageB',
    component: VueB
  }
];
```

- 修改a.vue和b.vue

```vue
<template>
  <div>pageA</div>
</template>
<script>
export default {
  name: 'vueA',
  mounted(){
    console.log('this.$route.params: ', this.$route.params);
  }
};
</script>
```

- 查看页面并点击按钮


![image-20200730174556888](https://imgkr.cn-bj.ufileos.com/7cc78c72-6181-4ecf-acd6-7c1633d974be.png)

![image-20200730174653125](https://imgkr.cn-bj.ufileos.com/762323a1-c979-4dad-bdb6-16df7139a469.png)

- 匹配优先级

有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高


#### 2.1.2 component

- 常规组件与异步组件

```js
import VueA from '../pages/a.vue';

//  route 配置
const routes = [
  {
    path: '/a/:id',  // url 匹配地址
    name: 'pageA', // route name
    component: VueA // 组件A
  },
  {
    path: '/b/:id',
    name: 'pageB',
    // 能够被 Webpack 自动代码分割的异步组件
    component: () => import(/* webpackChunkName: "group-foo" */ '../pages/b.vue')
  }
];
```

> [路由懒加载](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E6%8A%8A%E7%BB%84%E4%BB%B6%E6%8C%89%E7%BB%84%E5%88%86%E5%9D%97)


#### 2.1.3 name

- 通过name可以使路由跳转

要链接到一个命名路由，可以给 router-link 的 to 属性传一个对象：

```html
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
```

这跟代码调用 router.push() 是一回事：

```js
router.push({ name: 'user', params: { userId: 123 }})
```
这两种方式都会把路由导航到 /user/123 路径。


> [路由命名](https://router.vuejs.org/zh/guide/essentials/named-routes.html)


#### 2.1.4 components

- 命名视图

> [命名视图](https://router.vuejs.org/zh/guide/essentials/named-views.html#%E5%B5%8C%E5%A5%97%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE)


#### 2.1.5 redirect

- 重定向

> [重定向](https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html#%E9%87%8D%E5%AE%9A%E5%90%91)

#### 2.1.6 props

- 路由组件传参

> [路由组件传参](https://router.vuejs.org/zh/guide/essentials/passing-props.html)

#### 2.1.7 alias

- 别名

> [别名](https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html#%E5%88%AB%E5%90%8D)


#### 2.1.8 children

- 嵌套路由

> [嵌套路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)

#### 2.1.9 beforeEnter

- 路由守卫钩子函数

> [导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

#### 2.1.10 meta

- 路由元信息 

> [路由元信息](https://router.vuejs.org/zh/guide/advanced/meta.html)

#### 2.1.11 caseSensitive

- 匹配规则是否大小写敏感

#### 2.1.12 pathToRegexpOptions

- 编译正则的选项


> [Vue Router API](https://router.vuejs.org/zh/api/)