# vue 基础入门（五）

## 1. vue的实例属性

```html
<vueData p='123' p1="p1" @click="()=>{}" @search="()=>{}" @change.native="()=>{}">
  <template v-slot:test>测试</template>
</vueData>
```

```js
const vueData = {
  props: ['p'],
  data() {
    return { msg: 'vue data', list: [1, 2, 3] };
  },
  template: `<div ref='vueData'>vue.$data：{{JSON.stringify($data)}}<slot name="test" :msg="msg" ></slot></div>`,
  mounted() {
    console.log('this: ', this);
    console.log('this.$data: ', this.$data);
    console.log(this.$data.msg == this.msg); // true
    console.log(this.$data.list == this.list); // true
    console.log('this.$props: ', this.$props); // p: "123"
    console.log('this.$el', this.$el); // <div>vue.$data：{"msg":"vue data","list":[1,2,3]}</div>
    console.log('this.$options: ', this.$options);
    console.log('this.$parent: ', this.$parent);
    console.log('this.$root: ', this.$root);
    console.log('this.$children: ', this.$children); // 获取是vue实例的子组件
    console.log('this.$slots: ', this.$slots);
    console.log('this.$scopedSlots: ', this.$scopedSlots);
    console.log('this.$scopedSlots.test: ', this.$scopedSlots.test());
    console.log('this.$refs: ', this.$refs); // {vueData: div}
    console.log('this.$isServer: ', this.$isServer); // false
    console.log('this.$attrs: ', this.$attrs); //传递props ：<vueData p='123' p1="p1" > 。组件props: ['p']。   this.$attrs: {p1: "p1"}
    console.log('this.$listeners: ', this.$listeners); //{click: ƒ, search: ƒ}
  }
};
```

### 1.1 vm.$data

- 类型：Object

- 详细：

Vue 实例观察的数据对象。Vue 实例代理了对其 data 对象 property 的访问。

- 示例
- 
```js
const vueData = {
  data(){
    return {msg:'vue data',list:[1,2,3]}
  },
  template:`<div>vue.$data：{{JSON.stringify($data)}}</div>`,
  mounted () {
    console.log(this.$data.msg == this.msg) // true
    console.log(this.$data.list == this.list) // true
  }
}
```

> 总结
> 1. `vm.$data` 是`data`方法返回的对象
> 2. [data](https://cn.vuejs.org/v2/api/#data)


### 1.2 vm.$props

- 类型：`Object`

- 详细：

当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象 property 的访问。

> 总结
> 1. 直接`vm.propsName` 或 `vm.$props.propsName`访问props属性


### 1.3 vm.$el

- 类型：`Element`

- 只读

- 详细：

Vue 实例使用的根 DOM 元素。


### 1.3 vm.$options

- 类型：`Object`

- 只读

- 详细：

用于当前 Vue 实例的初始化选项。需要在选项中包含自定义 property 时会有用处：

```js
new Vue({
  customOption: 'foo',
  created: function () {
    console.log(this.$options.customOption) // => 'foo'
  }
})
```

### 1.4 vm.$parent

- 类型：`Vue instance`

- 只读

- 详细：

父实例，如果当前实例有的话。


### 1.5 vm.$root

- 类型：`Vue instance`

- 只读

- 详细：

当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。


### 1.6 vm.$children

- 类型：`Array<Vue instance>`

- 只读

- 详细：

当前实例的直接子组件。需要注意 $children 并不保证顺序，也不是响应式的。如果你发现自己正在尝试使用 $children 来进行数据绑定，考虑使用一个数组配合 v-for 来生成子组件，并且使用 Array 作为真正的来源。


### 1.7 vm.$slots

- 类型：`{ [name: string]: ?Array<VNode> }`

- 只读

- 详细：

用来访问被插槽分发的内容。每个具名插槽有其相应的 property (例如：v-slot:foo 中的内容将会在 vm.$slots.foo 中被找到)。default property 包括了所有没有被包含在具名插槽中的节点，或 v-slot:default 的内容。

注意：v-slot:foo 在 2.6 以上的版本才支持。对于之前的版本，你可以使用废弃了的语法。

在使用渲染函数书写一个组件时，访问 vm.$slots 最有帮助。

### 1.8 vm.$scopedSlots

- 类型：`{ [name: string]: props => Array<VNode> | undefined }`

- 只读

- 详细：

用来访问作用域插槽。对于包括 默认 slot 在内的每一个插槽，该对象都包含一个返回相应 VNode 的函数。

vm.$scopedSlots 在使用渲染函数开发一个组件时特别有用。


### 1.9 vm.$refs

- 类型：`Object`

- 只读

- 详细：

一个对象，持有注册过 ref attribute 的所有 DOM 元素和组件实例。

> 总结
> 1. 获取到模板内所有含有ref属性的dom


### 1.10 vm.$isServer

- 类型：boolean

- 只读

- 详细：

当前 Vue 实例是否运行于服务器。


### 1.11 vm.$attrs

- 类型：{ [key: string]: string }

- 只读

- 详细：

包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。

- 示例
  
```html
<vueData p='123' p1="p1" >
  <template v-slot:test>测试</template>
</vueData>
```

vueData 声明了`p`属性，未声明`p1`属性。p1属性可以通过`this.$attrs`获取
```js
const vueData = {
  props: ['p'],
  // ...
}
```

> 总结
> 1. 组件绑定的`props`，但组件内部未声明`props`，可以通过`vm.$attrs`获取


### 1.12 vm.$listeners

- 类型：`{ [key: string]: Function | Array<Function> }`

- 只读

- 详细：

包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。

- 示例

```html
<!-- 绑定了click search change 事件 ，change为.native修饰 -->
 <vueData p='123' p1="p1" @click="()=>{}" @search="()=>{}" @change.native="()=>{}">
  <template v-slot:test>测试</template>
</vueData>
```

```js
const vueData = {
  props: ['p'],
  // ...
  mounted(){
    console.log('this.$listeners: ', this.$listeners); //{click: ƒ, search: ƒ}
  }
}
```

> 总结
> 1. `this.$listeners`可以获得除.native修饰外的所有绑定事件。


## 2. 实例方法 / 事件

### 2.1 vm.$on

- vm.$on( event, callback )

- 参数：

```json
{string | Array<string>} event (数组只在 2.2.0+ 中支持)
{Function} callback
```

- 用法：

监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。

- 示例

```js
vm.$on('test', function (msg) {
  console.log(msg)
})
vm.$emit('test', 'hi')
// => "hi"
``` 

### 2.2 vm.$once

- vm.$once( event, callback )

- 参数：
- 
```json
{string} event
{Function} callback
```

- 用法：

监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除。

### 2.3 vm.$off

- vm.$off( [event, callback] )

- 参数：

```json
{string | Array<string>} event (只在 2.2.2+ 支持数组)
{Function} [callback]
```

- 用法：

移除自定义事件监听器。

如果没有提供参数，则移除所有的事件监听器；

如果只提供了事件，则移除该事件所有的监听器；

如果同时提供了事件与回调，则只移除这个回调的监听器。


### 2.4 vm.$emit

- vm.$emit( eventName, […args] )

- 参数：
```json
{string} eventName
[...args]
```
触发当前实例上的事件。附加参数都会传给监听器回调。

- 示例

```html
<Emit @message="message"/>
```
```js
//  父组件中接收message事件的方法
const app = {
  methods: {
    message(msg){
      console.log('msg: ', msg); // msg:  emit msg
    }
  },
}
```

```js
const Emit = {
  data() {
    return { msg: 'emit msg', data: '' };
  },
  methods: {
    btnClick() {
      this.$emit('changeData', 'btn is clicked');
    },
    setData(val) {
      this.data = val;
      console.log('val: ', val); //val:  btn is clicked
    },
    emitParent() {
      this.$emit('message', this.msg);
    }
  },
  mounted() {
    this.$on('changeData', this.setData);
  },
  template: `<div>
    emit 使用
    <div>
      <div>组件内部使用</div>
      <div>data： {{data}}</div>
      <button @click="btnClick">click</button>
    </div>
    <br/>
    <div>
      <div>通知父组件</div>
      <button @click="emitParent">emit parent</button>
    </div>
  </div>`
};
```


> 总结
> 1. `vm.$emit` 一般用于与父组件通信，实现`.sync`修饰符的`update`。组件内部可代替$emit交互数据方法很多。


## 3. 实例方法 / 生命周期

### 3.1 vm.$mount

- vm.$mount( [elementOrSelector] )

- 参数：

```json
{Element | string} [elementOrSelector]
{boolean} [hydrating]
返回值：vm - 实例自身
```

- 用法：

如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例。

如果没有提供 elementOrSelector 参数，模板将被渲染为文档之外的的元素，并且你必须使用原生 DOM API 把它插入文档中。

这个方法返回实例自身，因而可以链式调用其它实例方法。

- 示例：

```js
var MyComponent = Vue.extend({
  template: '<div>Hello!</div>'
})

// 创建并挂载到 #app (会替换 #app)
new MyComponent().$mount('#app')

// 同上
new MyComponent({ el: '#app' })

// 或者，在文档之外渲染并且随后挂载
var component = new MyComponent().$mount()
document.getElementById('app').appendChild(component.$el)
```

### 3.2 vm.$forceUpdate()

- 示例：

迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。

### 3.3 vm.$nextTick

- vm.$nextTick( [callback] )

- 参数：

`{Function} [callback]`

- 用法：

将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上


### 3.3 vm.$destroy()

- 用法：

完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。

触发 beforeDestroy 和 destroyed 的钩子。


## 4. 特殊 attribute

### 4.1 key

- 预期：`number | string`

key 的特殊 attribute 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。

最常见的用例是结合 v-for：

```html
<ul>
  <li v-for="item in items" :key="item.id">...</li>
</ul>
```


### 4.2 ref

- 预期：`string`

ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例：

```html
<!-- `vm.$refs.p` will be the DOM node -->
<p ref="p">hello</p>

<!-- `vm.$refs.child` will be the child component instance -->
<child-component ref="child"></child-component>
```
当 v-for 用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组。

关于 ref 注册时间的重要说明：因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！$refs 也不是响应式的，因此你不应该试图用它在模板中做数据绑定。


### 4.3 is

- 预期：string | Object (组件的选项对象)

用于动态组件且基于 DOM 内模板的限制来工作。

- 示例：

```js
<!-- 当 `currentView` 改变时，组件也跟着改变 -->
<component v-bind:is="currentView"></component>

<!-- 这样做是有必要的，因为 `<my-row>` 放在一个 -->
<!-- `<table>` 内可能无效且被放置到外面 -->
<table>
  <tr is="my-row"></tr>
</table>
```

> 1. [示例代码](https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-dynamic-components?file=/index.html)
> 2. [动态组件](https://cn.vuejs.org/v2/guide/components.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6)


## 5. 内置的组件

### 5.1 component

- Props：

`is - string | ComponentDefinition | ComponentConstructor`
`inline-template - boolean`

- 用法：

渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染。
```html
<!-- 动态组件由 vm 实例的 `componentId` property 控制 -->
<component :is="componentId"></component>

<!-- 也能够渲染注册过的组件或 prop 传入的组件 -->
<component :is="$options.components.child"></component>
```

### 5.2 transition

- Props：

  - name - string，用于自动生成 CSS 过渡类名。例如：name: 'fade' 将自动拓展为 .fade-enter，.fade-enter-active 等。默认类名为 "v"
  - appear - boolean，是否在初始渲染时使用过渡。默认为 false。
  - css - boolean，是否使用 CSS 过渡类。默认为 true。如果设置为 false，将只通过组件事件触发注册的 JavaScript 钩子。
  - type - string，指定过渡事件类型，侦听过渡何时结束。有效值为 "transition" 和 "animation"。默认 Vue.js 将自动检测出持续时间长的为过渡事件类型。
  - mode - string，控制离开/进入过渡的时间序列。有效的模式有 "out-in" 和 "in-out"；默认同时进行。
  - duration - number | { enter: number, leave: number } 指定过渡的持续时间。默认情况下，Vue 会等待过渡所在根元素的第一个 transitionend 或 animationend 事件。
  - enter-class - string
  - leave-class - string
  - appear-class - string
  - enter-to-class - string
  - leave-to-class - string
  - appear-to-class - string
  - enter-active-class - string
  - leave-active-class - string
  - appear-active-class - string

- 事件：

  - before-enter
  - before-leave
  - before-appear
  - enter
  - leave
  - appear
  - after-enter
  - after-leave
  - after-appear
  - enter-cancelled
  - leave-cancelled (v-show only)
  - appear-cancelled


- 用法：

`<transition>` 元素作为单个元素/组件的过渡效果。`<transition>` 只会把过渡效果应用到其包裹的内容上，而不会额外渲染 DOM 元素，也不会出现在可被检查的组件层级中。
```html
<!-- 简单元素 -->
<transition>
  <div v-if="ok">toggled content</div>
</transition>

<!-- 动态组件 -->
<transition name="fade" mode="out-in" appear>
  <component :is="view"></component>
</transition>

<!-- 事件钩子 -->
<div id="transition-demo">
  <transition @after-enter="transitionComplete">
    <div v-show="ok">toggled content</div>
  </transition>
</div>
```
```js
new Vue({
  ...
  methods: {
    transitionComplete: function (el) {
      // 传入 'el' 这个 DOM 元素作为参数。
    }
  }
  ...
}).$mount('#transition-demo')
```

### 5.3 transition-group

- Props：

  - tag - string，默认为 span
  - move-class - 覆盖移动过渡期间应用的 CSS 类。除了 mode，其他 attribute 和 `<transition>` 相同。

- 事件：

事件和 `<transition>` 相同。

- 用法：

```html
<transition-group> 元素作为多个元素/组件的过渡效果。<transition-group> 渲染一个真实的 DOM 元素。默认渲染 <span>，可以通过 tag attribute 配置哪个元素应该被渲染。

注意，每个 <transition-group> 的子节点必须有独立的 key，动画才能正常工作

<transition-group> 支持通过 CSS transform 过渡移动。当一个子节点被更新，从屏幕上的位置发生变化，它会被应用一个移动中的 CSS 类 (通过 name attribute 或配置 move-class attribute 自动生成)。如果 CSS transform property 是“可过渡”property，当应用移动类时，将会使用 FLIP 技术使元素流畅地到达动画终点。

<transition-group tag="ul" name="slide">
  <li v-for="item in items" :key="item.id">
    {{ item.text }}
  </li>
</transition-group>

```

### 5.4 keep-alive

- Props：

include - 字符串或正则表达式。只有名称匹配的组件会被缓存。
exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
max - 数字。最多可以缓存多少组件实例。

- 用法：

```html
<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。

当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
```

> [动态组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%9C%A8%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-keep-alive)


### 5.5 slot

- Props：

- name - string，用于命名插槽。

- Usage：

`<slot>` 元素作为组件模板之中的内容分发插槽。`<slot> `元素自身将被替换。


> [vueAPI](https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B-property)

![关注不迷路](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/FENotes.png)