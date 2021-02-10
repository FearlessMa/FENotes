# Vue Router 
[[toc]]

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

![image-20200730150514499](https://fe-notes-1302400351.cos.ap-beijing.myqcloud.com/js/20200805221625.png)


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

![image-20200730161756598](https://fe-notes-1302400351.cos.ap-beijing.myqcloud.com/js/20200805221626.png)

- url输入a.vue页面地址：`http://localhost:8081/#/a`

![image-20200730161951042](https://fe-notes-1302400351.cos.ap-beijing.myqcloud.com/js/20200805221627.png)

- url输入b.vue页面地址：`http://localhost:8081/#/b`

![image-20200730162014736](https://fe-notes-1302400351.cos.ap-beijing.myqcloud.com/js/20200805221628.png)

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


![image-20200730174556888](https://fe-notes-1302400351.cos.ap-beijing.myqcloud.com/js/20200805221629.png)

![image-20200730174653125](https://fe-notes-1302400351.cos.ap-beijing.myqcloud.com/js/20200805221630.png)

- 匹配优先级

有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高



## 2. 路由配置

路由标签
- router-link ：跳转至route页面的标签
- router-view ：route页面渲染区域

路由routes配置

- path: string,
- component?: Component,
- name?: string, // 命名路由
- components?: { [name: string]: Component }, // 命名视图组件
- redirect?: string | Location | Function,
- props?: boolean | Object | Function,
- alias?: string | Array`<string>`,
- children?: Array`<RouteConfig>`, // 嵌套路由
- beforeEnter?: (to: Route, from: Route, next: Function) => void,
- meta?: any,
- caseSensitive?: boolean, // 匹配规则是否大小写敏感？(默认值：false)
- pathToRegexpOptions?: Object

路由Router构建参数

- routes ：具体route页面配置
- mode ： router的模式
- base ：router的基本路径
- linkActiveClass ： router-link 激活时的class类名
- linkExactActiveClass  ： router-link exact 模式下激活时的class类名
- scrollBehavior ： 进入route页面滚动行为


示例

- 标签使用

```html
<template>
<!-- 配置跳转标签 -->
  <router-link to="/a">a菜单</router-link>
  <div>
  <!-- 路由route渲染的位置 -->
    <router-view></router-view>
  </div>
</template> 

```

- routes配置

```js
import PageA from './pageA.vue'
import PageB from './pageB.vue'

//  route 配置
const routeA = {
  name:'a',
  path:'/a',
  components:PageA
}
const routeB = {
  name:'b',
  path:'/b',
  components:PageB
}

const routeRedirect = {
  name:'redirect',
  path:'*',
  redirect:'/a' // routeA
}

// routes配置 route的Array集合
const routes = [routeA,routeB,routeRedirect]

export default routes;
```

- Router配置

```js

import VueRouter from 'vue-router';
import routes from './routes';

const router = new VueRouter({
  routes:routes,
  mode:'hash'
  base:'/',
  linkActiveClass:'classA'
  // ...
})

export default router

```


### 2.1 router-link 跳转链接

`<router-link>` 组件支持用户在具有路由功能的应用中 (点击) 导航。 通过 to 属性指定目标地址，默认渲染成带有正确链接的 `<a>` 标签，可以通过配置 tag 属性生成别的标签.。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。

`<router-link>` 比起写死的 `<a href="...">` 会好一些，理由如下：

1. 无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。
2. 在 HTML5 history 模式下，router-link 会守卫点击事件，让浏览器不再重新加载页面。
3. 当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写 (基路径) 了。


- 属性

1. `to`

> 路由目标可以使path字符串，或者目标route对象

- 类型: string | Location

- required

表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。

```html
<!-- 字符串 -->
<router-link to="home">Home</router-link>
<!-- 渲染结果 -->
<a href="home">Home</a>

<!-- 使用 v-bind 的 JS 表达式 -->
<router-link v-bind:to="'home'">Home</router-link>

<!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
<router-link :to="'home'">Home</router-link>

<!-- 同上 -->
<router-link :to="{ path: 'home' }">Home</router-link>

<!-- 命名的路由 -->
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

<!-- 带查询参数，下面的结果为 /register?plan=private -->
<router-link :to="{ path: 'register', query: { plan: 'private' }}"
  >Register</router-link
>

```


2. `replace`

> 使用replace方式加载路由

- 类型: boolean

- 默认值: false

设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，于是导航后不会留下 history 记录。

```html
<router-link :to="{ path: '/abc'}" replace></router-link>
```

3. `append`

> 路由改变方式为当前url末尾追加path

- 类型: boolean

- 默认值: false

设置 append 属性后，则在当前 (相对) 路径前添加基路径。例如，我们从 /a 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b

```html
<router-link :to="{ path: 'relative/path'}" append></router-link>
```

4. `tag `

> router-link渲染的html标签，默认为a

- 类型: string

- 默认值: "a"

有时候想要 `<router-link>` 渲染成某种标签，例如 `<li>`。 于是我们使用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。

```html
<router-link to="/foo" tag="li">foo</router-link>
<!-- 渲染结果 -->
<li>foo</li>

```


5. `active-class`

> 激活时的class类名

- 类型: string

- 默认值: "router-link-active"

设置链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置。


6. `exact`

> 路由是否为精确匹配

- 类型: boolean

- 默认值: false

“是否激活”默认类名的依据是包含匹配。 举个例子，如果当前的路径是 /a 开头的，那么 `<router-link to="/a"> `也会被设置 CSS 类名。

按照这个规则，每个路由都会激活 `<router-link to="/">`！想要链接使用“精确匹配模式”，则使用 exact 属性：

```html
<!-- 这个链接只会在地址为 / 的时候被激活 -->
<router-link to="/" exact></router-link>
```

7. `event`

> 触发导航的事件，可以设置多个`['click','mouseEnter'...]`

- 类型: `string | Array<string>`

- 默认值: 'click'

声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组。



8. `exact-active-class`

> 精确匹配计划的class类名

- 类型: string

- 默认值: "router-link-exact-active"

配置当链接被精确匹配的时候应该激活的 class。注意默认值也是可以通过路由构造函数选项 linkExactActiveClass 进行全局配置的。



9. `aria-current-value`

- 类型: 'page' | 'step' | 'location' | 'date' | 'time'

- 默认值: "page"

当链接根据精确匹配规则激活时配置的 aria-current 的值。这个值应该是 ARIA 规范中允许的 aria-current 的值。在绝大多数场景下，默认值 page 应该是最合适的。


### 2.2 router-view

`<router-view>` 组件是一个 functional 组件，渲染路径匹配到的视图组件。`<router-view>` 渲染的组件还可以内嵌自己的 `<router-view>`，根据嵌套路径，渲染嵌套组件。

其他属性 (非 router-view 使用的属性) 都直接传给渲染的组件， 很多时候，每个路由的数据都是包含在路由参数中。

因为它也是个组件，所以可以配合 `<transition>` 和 `<keep-alive>` 使用。如果两个结合一起用，要确保在内层使用 `<keep-alive>`：

```html
<transition>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</transition>
```




### 2.3 routes

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

1. `path`

> 页面地址路径，可以通过动态路由获取数据

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




2. `component`

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


3. `name`

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


4. `components`

- 命名视图

> [命名视图](https://router.vuejs.org/zh/guide/essentials/named-views.html#%E5%B5%8C%E5%A5%97%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE)


5. `redirect`

- 重定向

> [重定向](https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html#%E9%87%8D%E5%AE%9A%E5%90%91)

6. `props`

- 路由组件传参

> [路由组件传参](https://router.vuejs.org/zh/guide/essentials/passing-props.html)

7. `alias`

- 别名

> [别名](https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html#%E5%88%AB%E5%90%8D)


8. `children`

- 嵌套路由

> [嵌套路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)

9. `beforeEnter`

- 路由守卫钩子函数

> [导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

10. `meta`

- 路由元信息 

> [路由元信息](https://router.vuejs.org/zh/guide/advanced/meta.html)

11. `caseSensitive`

- 匹配规则是否大小写敏感

12. `pathToRegexpOptions`

- 编译正则的选项


### 2.4 Router


1. `routes`

> route的Array

2. `mode`

> 路由模式 hash 或 history

- 类型: string

- 默认值: "hash" (浏览器环境) | "abstract" (Node.js 环境)

- 可选值: "hash" | "history" | "abstract"


3. `base`

> 路由的基础路径

- 类型: string

- 默认值: "/"

应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"


4. `linkActiveClass`

- 类型: string

- 默认值: "router-link-active"

全局配置 `<router-link>` 默认的激活的 class。参考 router-link。

5. `linkExactActiveClass`

- 类型: string

- 默认值: "router-link-exact-active"

全局配置 `<router-link>` 默认的精确激活的 class。可同时翻阅 router-link。


6. `scrollBehavior`

> 路由进入页面后的滚动

- 类型: Function


> [Vue Router API](https://router.vuejs.org/zh/api/)


![关注不迷路](https://fe-notes-1302400351.cos.ap-beijing.myqcloud.com/js/20200805221427.png)

