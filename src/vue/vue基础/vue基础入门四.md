# vue基础入门（四）

## 1.全局配置

- Vue.config 是一个对象，包含 Vue 的全局配置。可以在启动应用之前修改下列 property：

### 1.1 silent

- 类型：`boolean`

- 默认值：false

- 用法：

```js
Vue.config.silent = true
```

> 取消 Vue 所有的日志与警告。

### 1.2 devtools

- 类型：`boolean`

- 默认值：true (生产版为 false)

- 用法：

```js
// 务必在加载 Vue 之后，立即同步设置以下内容
Vue.config.devtools = true
```

> 配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。生产版本设为 true 可以启用检查。

### 1.3 errorHandler

- 类型：`Function`

- 默认值：undefined

- 用法：

```js
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
}
```

> 指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例。

> 从 2.2.0 起，这个钩子也会捕获组件生命周期钩子里的错误。同样的，当这个钩子是 undefined 时，被捕获的错误会通过 console.error 输出而避免应用崩溃。

> 从 2.4.0 起，这个钩子也会捕获 Vue 自定义事件处理函数内部的错误了。

> 从 2.6.0 起，这个钩子也会捕获 v-on DOM 监听器内部抛出的错误。另外，如果任何被覆盖的钩子或处理函数返回一个 Promise 链 (例如 async 函数)，则来自其 Promise 链的错误也会被处理。

> 错误追踪服务 Sentry 和 Bugsnag 都通过此选项提供了官方支持。


### 1.4 warnHandler

- 类型：`Function`

- 默认值：undefined

- 用法：

```js
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` 是组件的继承关系追踪
}
``` 
> 为 Vue 的运行时警告赋予一个自定义处理函数。注意这只会在开发者环境下生效，在生产环境下它会被忽略。


### 1.5 ignoredElements

- 类型：`Array<string | RegExp>`

- 默认值：[]

- 用法：

```js
Vue.config.ignoredElements = [
  'my-custom-web-component',
  'another-web-component',
  // 用一个 `RegExp` 忽略所有“ion-”开头的元素
  // 仅在 2.5+ 支持
  /^ion-/
]
```

> 须使 Vue 忽略在 Vue 之外的自定义元素 (e.g. 使用了 Web Components APIs)。否则，它会假设你忘记注册全局组件或者拼错了组件名称，从而抛出一个关于 Unknown custom element 的警告。


### 1.6 keyCodes

- 类型：`{ [key: string]: number | Array<number> }`

- 默认值：{}

- 用法：

```js
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  // camelCase 不可用
  mediaPlayPause: 179,
  // 取而代之的是 kebab-case 且用双引号括起来
  "media-play-pause": 179,
  up: [38, 87]
}
<input type="text" @keyup.media-play-pause="method">
```
> 给 v-on 自定义键位别名,给键位数字定义别名。


### 1.7 performance

- 类型：`boolean`

- 默认值：false (自 2.2.3 起)

- 用法：

设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪。只适用于开发模式和支持 performance.mark API 的浏览器上。


### 1.8 productionTip

- 类型：`boolean`

- 默认值：true

- 用法：

设置为 false 以阻止 vue 在启动时生成生产提示。


## 2.全局API


### 2.1 Vue.extend

- Vue.extend( options )

- 参数：

`{Object} options`

- 用法：

使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。

`data` 选项是特例，需要注意 - 在 Vue.extend() 中它必须是函数

- 示例 

```html
<div id="mount-point"></div>
```

```js
// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')
```

结果如下：
```html
<p>Walter White aka Heisenberg</p>
```

> 总结
> 使用`extend`扩展一些通用组件，如confirm功能组件


### 2.2 Vue.nextTick

- Vue.nextTick( [callback, context] )
- 
- 参数：
```json
{Function} [callback]
{Object} [context]
```
- 用法：

在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

- 示例

```js
const NextTick = {
  data() {
    return { msg: 'nextTick' };
  },
  template: `<div>
    nextTick 使用
  </div>`,
  mounted() {
    // 正常执行
    console.log(1);
    // 宏任务
    setTimeout(() => {
      console.log(2);
    });
    const p = new Promise((resolve, reject) => {
      resolve('succ');
    });
    // 微任务
    p.then((res) => {
      console.log(3);
    });
    // nextTick
    this.$nextTick(() => {
      console.log(4);
    });
    // 输出结果 1 3 4 2
    //  nextTick 宏任务2之前，执行
  }
};
```

> 总结
> 1. 若果想在dom更新后做一些操作可以使用`nextTick `
> 2. `Vue` 在内部对异步队列尝试使用原生的 `Promise.then`、`MutationObserver` 和 `setImmediate`，如果执行环境不支持，则会采用 `setTimeout(fn, 0)` 代替。在支持环境下，优先使用`Promise.then`实现， 这时`nextTick`是属于微任务
> [参考](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97)


### 2.3 Vue.set

- Vue.set( target, propertyName/index, value )

- 参数：
```json
{Object | Array} target
{string | number} propertyName/index
{any} value
```
- 返回值：设置的值。

- 用法：

向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 this.myObject.newProperty = 'hi')


- 示例

```js
let pNum = 1;

const vueSet = {
  data() {
    return {
      msg: '123',
      show: false,
      showNum: false,
      data: {}
    };
  },
  methods: {
    // 不使用set 直接改变数据，数据改变后页面不会自动更新数据
    addProps() {
      this.data.count = this.data.count ? this.data.count + 1 : 1;
      this.show = true;
      console.log('this: ', this);
    },
    //  使用set 增加新数据后，数据被vue监听。会自动更新数据
    setProps() {
      this.data.num ? (this.data.num += 1) : this.$set(this.data, 'num', 1);
      this.showNum = true;
      console.log('this: ', this);
    },
    //  可以通过 更新引用对象。使vue重新监听整个对象。这样新增的属性也会被监听
    setData() {
      this.data = { count: pNum++ };
      this.show = true;
    }
  },
  template: `<div>
    Vue.set 使用
    <div>msg：{{msg}}</div>
    <button @click="msg='click'">msg=click</button>
    <br/>
    <div v-if="show">count：{{data.count}}</div>
    <button @click="addProps">增加count属性</button>
    <br/>
    使用set增加响应式属性
    <div v-if="showNum">num：{{data.num}}</div>
    <button @click="setProps">增加count属性</button>
    <br/>
    设置对象
    <div v-if="show">count：{{data.count}}</div>
    <button @click="setData">增加count属性</button>
  </div>`
};
```

> 总结
> 1. 通过直接向vm中增加数据。vue不会去监听数据变化。需要使用`Vue.set` 或 `this.$set`
> 2. 通过更新引用对象。使vue重新监听整个对象。这样新增的属性也会被监听


### 2.4 Vue.delete

- Vue.delete( target, propertyName/index )

- 参数：
```json
{Object | Array} target
{string | number} propertyName/index
仅在 2.2.0+ 版本中支持 Array + index 用法。
```
- 用法：

删除对象的 property。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到 property 被删除的限制，但是你应该很少会使用它。

### 2.5 Vue.directive


- Vue.directive( id, [definition] )


- 参数：
```json
{string} id
{Function | Object} [definition]
```
- 用法：

注册或获取全局指令。

> [参考vue基础入门二](https://github.com/FearlessMa/FENotes/blob/master/docs/vue/vueBase/vue%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%E4%BA%8C.md)


### 2.6 Vue.filter

- Vue.filter( id, [definition] )

- 参数：
```json
{string} id
{Function} [definition]
```
- 用法：

注册或获取全局过滤器。
```js
// 注册
Vue.filter('my-filter', function (value) {
  // 返回处理后的值
})

// getter，返回已注册的过滤器
var myFilter = Vue.filter('my-filter')
```

> 参考管道操作符
> [vue过滤器](https://cn.vuejs.org/v2/guide/filters.html)


### 2.7 Vue.component

- Vue.component( id, [definition] )

- 参数：
```json
{string} id
{Function | Object} [definition]
```
- 用法：

注册或获取全局组件。注册还会自动使用给定的 id 设置组件的名称
```js
// 注册组件，传入一个扩展过的构造器
Vue.component('my-component', Vue.extend({ /* ... */ }))

// 注册组件，传入一个选项对象 (自动调用 Vue.extend)
Vue.component('my-component', { /* ... */ })

// 获取注册的组件 (始终返回构造器)
var MyComponent = Vue.component('my-component')
``` 

> 总结
> 1. `Vue.component`传入的`id`就是组件`name`,`definition` 就是`options` 对象


### 2.8 Vue.use

- Vue.use( plugin )

- 参数：
```json
{Object | Function} plugin
```
- 用法：

安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。

该方法需要在调用 new Vue() 之前被调用。

当 install 方法被同一个插件多次调用，插件将只会被安装一次。

- 示例

```js
const vueUse = {
  install(Vue){
    // 一些操作，如使用Vue.components()批量注册全局组件。
  }
}

function vueUseFn(Vue){
  // 一些操作，如使用Vue.components()批量注册全局组件。
}

// 使用 
Vue.use(vueUse);
Vue.use(vueUseFn)
```

> 总结
> 1. 一些组件库通过`Vue.use`，批量注册多个组件，简化手动调用`Vue.components`
> 2. 自定义封装的一些操作，简化引入初始化过程可考虑使用


### 2.9 Vue.mixin

-Vue.mixin( mixin )

- 参数：

`{Object} mixin`

- 用法：

全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注入自定义的行为。不推荐在应用代码中使用。

- 示例

```js
const vueMixin = {
  // vue的options，包括life cycle，methods，computed 等。被混入的对象都可以使用混入对象的属性
};

Vue.mixin(vueMixin);
```

> 总结
> 1. 不推荐全局混入。优先使用局部混入。
> 2. 混入过多对代码阅读增加成本


### 2.10 Vue.compile

- Vue.compile( template )

- 参数：

`{string} template`

- 用法：

将一个模板字符串编译成 render 函数。只在完整版时可用。

```js
var res = Vue.compile('<div><span>{{ msg }}</span></div>')

new Vue({
  data: {
    msg: 'hello'
  },
  render: res.render,
  staticRenderFns: res.staticRenderFns
})
```

> 总结
> 1. `Vue.compile`将字符串模板转换成render函数，要获得更多的自由度需要手动写render函数
> 3. [vue编译](https://cn.vuejs.org/v2/guide/render-function.html)


### 2.11 Vue.observable

- Vue.observable( object )

- 参数：

`{Object} object`

- 用法：

让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。

返回的对象可以直接用于`渲染函数`和`计算属性`内，并且会在发生变更时触发相应的更新。也可以作为最小化的跨组件状态存储器，用于简单的场景：

```js
const state = Vue.observable({ count: 0 })

const Demo = {
  render(h) {
    return h('button', {
      on: { click: () => { state.count++ }}
    }, `count is: ${state.count}`)
  }
}
```

> 总结
> 1. 使数据对象变为响应式。
> 2. 通过在`渲染函数`和`计算属性`内使用，可以实现vuex的状态共享


### 2.12 Vue.version

- 细节：

提供字符串形式的 Vue 安装版本号。这对社区的插件和组件来说非常有用，你可以根据不同的版本号采取不同的策略。

- 用法：
```js
var version = Number(Vue.version.split('.')[0])

if (version === 2) {
  // Vue v2.x.x
} else if (version === 1) {
  // Vue v1.x.x
} else {
  // Unsupported versions of Vue
}
```


![关注不迷路](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/FENotes.png)