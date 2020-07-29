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


> [vueAPI](https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B-property)