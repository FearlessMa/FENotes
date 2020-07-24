# vue基础入门（一）

## 1. 什么是vue

- Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的渐进式框架。
- Vue 只关注视图层， 采用自底向上增量开发的设计。
- Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。

## 2. 安装vue

- 简单学习安装，新增`index.html`,`index.js`文件,引入`vue`的cdn。

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>vue基础</title>
      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
      <div id="app"></div>
      <script src="./index.js"></script>
    </body>
    </html>
    ```

## 3. new Vue(options)

1. 在`index.js`通过`new Vue(options)` 生成一个`Vue`实例`vm`，`vm`是什么？首先要了解vue数据是怎么驱动视图的?一堆数据放在那里是不会有任何作用的，它必须通过我们的View Model（视图模型）才能操控视图。vm就是View Model。

    ```js
    const options = {};
    // 生成vue实例vm
    const vm = new Vue(options);
    
    // 替换渲染id为app的dom  页面中什么都没有
    vm.$mount('#app');
    ```

2. 页面会显示空白，这是因为options没有描述视图的数据。options是由vue所提供的特定字段属性构成。简单分为2类，生命周期与其他属性。

   ```js
   const options = {
     el:'',
     name:'name',
     components:{},
     data() {
       return {};
     },
     props:[],
     inject:[],
     watch:{},
     methods:{},
     template:``,
     render(h){return h()},
     // other props 和 生命周期
   };
   ```



## 4. 常用options
<!-- TODO 解释.vue 与 options  -->
在日常开发中会使用vue提供的webpack构建工具`vue-cli`来搭建vue脚手架，目前学习使用cdn方式快速体验，了解vue。
1. `.vue`文件与options的对比

| 类别    | 组成                                 | 模板                                                                                                                                |
| :------ | :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| .vue    | .vue 由template,script,css三部分构成 | 由<template></template> 标签包裹的模板区域，由html和xml格式组成类似jsx。<script></script>包裹的js区域，<style></style>包裹的css区域 |
| options | options是一个object                  | 由 template属性或render方法表示，属性值为支模板字符串,render方法返回值为VNode                                                       |

代码举例
```vue
// .vue 文件
<template>
  <div class="color-red">这是.vue文件构成</div>
</template>
<script>
// js逻辑
export default {
  name:'vue',
  data(){return {}},
}
</script>
<style>
// css 样式
.color-red{
  color:red;
}
</style>
```
```js
//  options 构成，class需要在css文件中定义
const options ={
  template:`<div class="color-red">只是options中模板</div>`,
  name:'vueOptions',
  data(){return {}}
}
```


### 4.1 el 属性 

- **类型**：`string | Element`

- **限制**：只在用 `new` 创建实例时生效。

- **详细**：

 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。

 在实例挂载之后，元素可以用 `vm.$el` 访问。

 如果在实例化时存在这个选项，实例将立即进入编译过程，否则，需要显式调用 `vm.$mount()` 手动开启编译。

```js
// 方法1：
//  生成vue实例vm
const vm = new Vue({});

// 替换渲染id为app的dom
vm.$mount('#app');

// 方法2：

const vm = new Vue({el:'#app'})
```

> 总结
> 传的的是字符串,Vue内部是通过document.querySelector()查找dom并替换的。
> 传递的是Element，Vue内部就是直接替换这个Element。
>​ **把vm挂载到一个dom节点上，vm会替换当前dom节点，使用`el`参数 或者调用`vm.$mount()`挂载。**
> [深入理解](https://juejin.im/post/5b7fffa851882543036700ad)

### 4.2 name 属性

- **类型**：`string`
  
- **限制**：只有作为组件选项时起作用。
  
- **详细**：
  
  允许组件模板递归地调用自身。注意，组件在全局用 `Vue.component()` 注册时，全局 ID 自动作为组件的 name。
  
  指定 `name` 选项的另一个好处是便于调试。有名字的组件有更友好的警告信息。另外，当在有 [vue-devtools](https://github.com/vuejs/vue-devtools)，未命名组件将显示成 `<AnonymousComponent>`，这很没有语义。通过提供 `name` 选项，可以获得更有语义信息的组件树。
  
> 总结
> **vm的表示符，全局注册组件使用,name作为组件id，调试工具显示组件name。**

### 4.3 components 属性

- **类型**：`object`

- **详细**: 

| 自定义组件 | 组件注册                                   | template中使用方法                                             |
| ---------- | ------------------------------------------ | -------------------------------------------------------------- |
| Child1     | 局部注册{components:{Child1:Child1}}       | `<Child1/>`或`<Child1></Child1>`或`<child-1/>`或 `<child-1></child-1>` |
| Child1     | 全局注册 Vue.component(Child1.name,Child1) | 同上                                                           |

组件有两种**全局注册**和**局部注册**，components的内容就是`options`，

全局注册需要使用Vue.component，局部注册options.components

````js
//局部注册
  {
    ...
    // 引用组件 多种方式 Child,Child2两个组件
    components: { Child:Child, 'child-2': Child2 },
    ...
  }
````

> 总结
> **组件注册分为全局和局部注册，全局注册以后，可以在任意模板内使用组件无需再次注册，局部注册后只能在注册的该组件内部使用**

### 4.4 data 属性

- **类型**：`Object | Function`

- **限制**：组件的定义只接受 `function`。

- **详细**：

Vue 实例的数据对象。Vue 将会递归将 data 的 property 转换为 getter/setter，从而让 data 的 property 能够响应数据变化。**对象必须是纯粹的对象 (含有零个或多个的 key/value 对)**：浏览器 API 创建的原生对象，原型上的 property 会被忽略。大概来说，data 应该只能是数据 - 不推荐观察拥有状态行为的对象。

一旦观察过，你就无法在根数据对象上添加响应式 property。因此推荐在创建实例之前，就声明所有的根级响应式 property。

实例创建之后，可以通过 `vm.$data` 访问原始数据对象。Vue 实例也代理了 data 对象上所有的 property，因此访问 `vm.a` 等价于访问 `vm.$data.a`。

以 `_` 或 `$` 开头的 property **不会**被 Vue 实例代理，因为它们可能和 Vue 内置的 property、API 方法冲突。你可以使用例如 `vm.$data._property` 的方式访问这些 property。

当一个**组件**被定义，`data` 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 `data` 仍然是一个纯粹的对象，则所有的实例将**共享引用**同一个数据对象！通过提供 `data` 函数，每次创建一个新实例后，我们能够调用 `data` 函数，从而返回初始数据的一个全新副本数据对象。

如果需要，可以通过将 `vm.$data` 传入 `JSON.parse(JSON.stringify(...))` 得到深拷贝的原始数据对象。

````js
{
//方式1  
  data(){
    return { 
      msg: 'name is app',
      count: 0,
      res: { code: 0 } 
    };  
  }
//方式2 不推荐使用
  data:(vm)=>{return {a:vm.a}}
}
````
> 总结
> **1. data必须为返回一个`object`的`funtcion`,如果data为object则多个实例对象引用的data为同一个。**
> **2. data返回的object将会被Vue观察，实现响应式数据，vm实例创建之后不能直接新增data的属性，如有需要通过`vm.$set`添加**
> **3. `vm.prop = vm.$data.prop`**


​    



### 4.5 props 属性

- **类型**：`Array<string> | Object`

- **详细**：

props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。

你可以基于对象的语法使用以下选项：

- `type`：可以是下列原生构造函数中的一种：`String`、`Number`、`Boolean`、`Array`、`Object`、`Date`、`Function`、`Symbol`、任何自定义构造函数、或上述内容组成的数组。会检查一个 prop 是否是给定的类型，否则抛出警告。Prop 类型的[更多信息在此](https://cn.vuejs.org/v2/guide/components-props.html#Prop-类型)。
- `default`：`any`
  为该 prop 指定一个默认值。如果该 prop 没有被传入，则换做用这个值。对象或数组的默认值必须从一个工厂函数返回。
- `required`：`Boolean`
  定义该 prop 是否是必填项。在非生产环境中，如果这个值为 truthy 且该 prop 没有被传入的，则一个控制台警告将会被抛出。
- `validator`：`Function`
  自定义验证函数会将该 prop 的值作为唯一的参数代入。在非生产环境下，如果该函数返回一个 falsy 的值 (也就是验证失败)，一个控制台警告将会被抛出。你可以在[这里](https://cn.vuejs.org/v2/guide/components-props.html#Prop-验证)查阅更多 prop 验证的相关信息。

```js
//template  传递props
  <Child pString="name" :pMsg="msg" :pRes="res" />

// 接收父组件传递的props
{
  props: ['pMsg', 'pString', 'pRes'],
}
  // props 另一种方式  可以设置类型验证 与 默认值 
{
  props: { pMsg: { type: String, default: 'default pMsg' } }
  }
```

- 属性传递
| 标签格式       | 操作符         | key     | value          | 说明                               |
| -------------- | -------------- | ------- | -------------- | ---------------------------------- |
| pString="name" | 无             | pString | 字符串值'name' | 组件内部只能接收到字符串格式的值   |
| :pMsg="msg"    | v-bind:简写`:` | pMsg    | js变量msg      | msg 现在是一个变量，可以使js任何值 |


- 属性接收
| 方式   | 使用方法                                                  | 解释                                                         |
| ------ | --------------------------------------------------------- | ------------------------------------------------------------ |
| Array  | props:['pString','pMsg','pRes']                           | 使用数组方式确定引用的属性名称                               |
| Object | props:{ pMsg: { type: String, default: 'default pMsg' } } | 使用对象方式确定引用属性名称，类型，默认值，有更高控制细粒度 |

> 总结
> porps 是使用组件时在标签定义的属性，组件内部通过props这个key接收，如果不在prps中定义，组件内部不能通过`vm.prpsName`调用属性，可通过`vm.$attrs`获取			

### 4.6 provide / inject 数据

- **类型**：

  - **provide**：`Object | () => Object`
  - **inject**：`Array<string> | { [key: string]: string | Symbol | Object }`

- **详细**：

1. 简单理解，提供给后代组件依赖注入方式。任意后代组件都可以通过inject获取到provide提供的数据。
2. provide 提供的对象的属性值如果为基本类型不具有响应式，引用类型具有响应式功能。

> 总结  参考 [vue组件通信](https://mp.weixin.qq.com/s?__biz=MzIwNDgxNTM1OA==&mid=2247483668&idx=1&sn=f069d721fd6a1332347cf479078da924&chksm=973b2f85a04ca6932f7035b3446cf8135544a0fa768ea90f4a2af2f9c4b728be587d2ad6ab40&token=786517297&lang=zh_CN#rd)
> https://mp.weixin.qq.com/s?__biz=MzIwNDgxNTM1OA==&mid=2247483668&idx=1&sn=f069d721fd6a1332347cf479078da924&chksm=973b2f85a04ca6932f7035b3446cf8135544a0fa768ea90f4a2af2f9c4b728be587d2ad6ab40&token=786517297&lang=zh_CN#rd



### 4.7 watch 属性

- **类型**：`{ [key: string]: string | Function | Object | Array }`

- **详细**：

一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 `$watch()`，遍历 watch 对象的每一个 property。

```js
  // watch 监听数据的改变 props,data
  watch: {
    pMsg(newVal, oldVal) {
      console.log('newVal: ', newVal);
      console.log('oldVal: ', oldVal);
    },
    // 详细的监听设置
    pRes: {
      handler(newVal, oldVal) {
        console.log('newVal:pString ', newVal);
        console.log('oldVal:pString ', oldVal);
      },
      //  immediate 默认false 只有在属性改变时候才会被监听到 ，true 初始化时执行一次handler方法
      immediate: true,
      // 深度监听，引用类型 内部改变可被监听 ,res.code 改变会触发handler
      deep: true
    },
    // 字符串实现监听引用类型的某一个属性
    'pRes.code': {
      handler(val, old) {
        console.log('pRes.code old: ', old);
        console.log('pRes.code newVal: ', val);
      }
    }
  },
```

| 监听方式     | 使用方式                                                                                 |
| ------------ | ---------------------------------------------------------------------------------------- |
| function方式 | pMsg(newVal, oldVal) { console.log('newVal: ', newVal);console.log('oldVal: ', oldVal);} |
| object方式   | pRes:{handler(newVal, oldVal) {},immediate: true,deep:true}                              |
| string方式   | 'pRes.code':对象或者function                                                             |

> 总结
> 1. watch可以监听一些数据的改变，如data，props。
> 2. 被watch的属性需要有一个function 接收newVal，oldVal两个参数
> 3. 可通过字符串实现监听引用类型的某一个属性
> 4. 可以通过object更细粒控制watch
>    1. handler：接收newVal，oldVal的回调方法
>    2. immediate：immediate 默认false 只有在属性改变时候才会被监听到 ，true 初始化时执行一次handler方法
>    3. deep ： 深度监听，引用类型 内部改变可被监听 ,res.code 改变会触发handler



### 4.8 methods 属性

- **类型**：`{ [key: string]: Function }`

- **详细**：

methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 `this` 自动绑定为 Vue 实例。

```js
// methods 里方法不能使用箭头函数 this指向问题
 methods: {
   onClick() {
     console.log('onClick');
     this.msg = 'onClick';
     this.res.code = 1;
   }
 },
```

> 总结
> 业务逻辑的方法在methods中定义实现。methods的方法不能使用箭头函数，因为this指向问题。

 

### 4.9 template 属性

- **类型**：`string`

- **详细**：

一个字符串模板作为 Vue 实例的标识使用。模板将会**替换**挂载的元素。	挂载元素的内容都将被忽略，除非模板的内容有分发插槽。

```js
  /**
   * html 模板 {{msg}} 获取到的是data返回的msg
   * props 传递 ：
   *  1 静态传递字符串 PName="name"
   *  2 动态传递 通过 v-bind:key="key" 简写 :key="key"
   *  3 监听事件 通过 v-on:eventName = "callback" 简写 @eventName = "callback"
   * Child 组件演示
   * */
  {
    template: `<div>
                <div>{{msg}}</div>
                <div>string</div>
              <hr/>
              <div>
                <Child pString="name" :pMsg="msg" :pRes="res" />
                <button @click="onClick">btn</button>
              </div>
              <hr/>
              <div>
                <child-2/>
              </div>
            </div>`
  }
```

> 总结
> 1. 在options中template为字符串模板，
> 2. 在.vue中可以直接定义template标签书写
> 3. 作用等价于 render方法,tmeplate与render同时存在，render生效



### 4.10 render

- **类型**：`(createElement: () => VNode) => VNode`

- **详细**：

字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。该渲染函数接收一个 `createElement` 方法作为第一个参数用来创建 `VNode`。

如果组件是一个函数组件，渲染函数还会接收一个额外的 `context` 参数，为没有实例的函数组件提供上下文信息。

```js
{
  render(h) {
        return h(
          // {String | Object | Function}
          // 一个 HTML 标签名、组件选项对象，或者
          // resolve 了上述任何一种的一个 async 函数。必填项。
          'div', 
           // {Object}
  				// 一个与模板中 attribute 对应的数据对象。可选。
          {
            msg: this.msg,
            class: 'app',
            attrs: {
              id: 'second',
              title: '测试'
            },
            on: { click() { console.log('click2') } }
          },
          // {String | Array}
          // 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
          // 也可以使用字符串来生成“文本虚拟节点”。可选。
          [
            this.msg,
            h(
              'div',
              { class: 'child', childName: 'child1', on: {  } },
              ['child']
            )
          ])
      }
}
```

| 方法   | 参数1                       | 参数2                               | 参数3                                            | 返回值 |
| ------ | --------------------------- | ----------------------------------- | ------------------------------------------------ | ------ |
| render | h是vue中createElement的简写 |                                     |                                                  | VNode  |
| h      | 节点的描述，html标签,VNode  | object类型，节点属性，class，事件等 | array类型，子节点，可以是字符串，VNode，html标签 | VNode  |

> 总结
> 1. render方法接收一个参数 createElement，返回VNode。createElement简写h
> 2. 接收三个参数，当前节点的描述，节点的属性，节点的内容
> 3. render方法内容比较多，待后续专门单独写一篇文章

## 5. 总结

vue是通过View Model（视图模型）操控视图，我们可以通过配置options(一个object)来描述具体的View Model，从而实现业务场景。

```js
const Child = {
  name: 'child',
  // 接收父组件传递的props
  props: ['pMsg', 'pString', 'pRes'],
  data() {
    return { msg: 'name is child' };
  },
  // watch 监听数据的改变 props,data
  watch: {
    pMsg(newVal, oldVal) {
      console.log('newVal: ', newVal);
      console.log('oldVal: ', oldVal);
    },
    // 详细的监听设置
    pRes: {
      handler(newVal, oldVal) {
        console.log('newVal:pString ', newVal);
        console.log('oldVal:pString ', oldVal);
      },
      //  immediate 默认false 只有在属性改变时候才会被监听到 ，true 初始化时执行一次handler方法
      immediate: true,
      // 深度监听，引用类型 内部改变可被监听 ,res.code 改变会触发handler
      deep: true
    },
    // 字符串实现监听引用类型的某一个属性
    'pRes.code': {
      handler(val, old) {
        console.log('pRes.code old: ', old);
        console.log('pRes.code newVal: ', val);
      }
    }
  },
  template: `<div>
              {{this.msg}}
              <div>pString:{{pString}}</div>
              <div>pMsg:{{pMsg}}</div>
            </div>`
};
const Child2 = {
  name: 'child2',
  // props 另一种方式  可以设置类型验证 与 默认值
  props: { pMsg: { type: String, default: 'default pMsg' } },
  data() {
    return { msg: 'name is child2' };
  },
  template: `<div>{{this.msg}}
              <div>pMsg:{{pMsg}}</div>
            </div>`
};

const app = {
  // name 标识
  name: 'app',
  // 与 vm.$mount('#app') 功能相同
  // el: '#app',

  // 引用组件 多种方式
  components: { Child, 'child-2': Child2 },

  //  响应式数据 不推荐使用箭头函数 this指向问题
  data() {
    return { msg: 'name is app', count: 0, res: { code: 0 } };
  },

  // methods 里方法不能使用箭头函数 this指向问题
  methods: {
    onClick() {
      console.log('onClick');
      this.msg = 'onClick';
      this.res.code = 1;
    }
  },
  // template:'#app-template'
  /**
   * html 模板 {{msg}} 获取到的是data返回的msg
   * props 传递 ：
   *  1 静态传递字符串 PName="name"
   *  2 动态传递 通过 v-bind:key="key" 简写 :key="key"
   *  3 监听事件 通过 v-on:eventName = "callback" 简写 @eventName = "callback"
   * Child 组件演示
   * */
  template: `<div>
                <div>{{msg}}</div>
                <div>string</div>
              <hr/>
              <div>
                <Child pString="name" :pMsg="msg" :pRes="res" />
                <button @click="onClick">btn</button>
              </div>
              <hr/>
              <div>
                <child-2/>
              </div>
            </div>`
};

// 生成vue实例vm
const vm = new Vue(app);

// 替换渲染id为app的dom
vm.$mount('#app');
```

> 参考资料
>
> [vueAPI](https://cn.vuejs.org/v2/api/#全局配置): https://cn.vuejs.org/v2/api
> [实例代码](https://github.com/FearlessMa/FENotes/tree/master/vue/vue):https://github.com/FearlessMa/FENotes/tree/master/vue/vue

 