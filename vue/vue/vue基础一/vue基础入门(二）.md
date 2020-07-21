# vue基础入门（二）

## 1. options

### 1.1 computed

- 类型：{ [key: string]: Function | { get: Function, set: Function } }

- 详细：

计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。

注意如果你为一个计算属性使用了箭头函数，则 this 不会指向这个组件的实例，不过你仍然可以将其实例作为函数的第一个参数来访问。

```js
computed: {
  aDouble: vm => vm.a * 2
}
```
计算属性的结果会被缓存，除非依赖的响应式 property 变化才会重新计算。注意，如果某个依赖 (比如非响应式 property) 在该实例范畴之外，则计算属性是不会被更新的。

```js
// computed 计算属性
const Computed = {
  name: 'computed',
  data() {
    return { a: 'a', b: 'b', c: 'c', d: 'd' };
  },
  computed: {
    // function this 指向 vm
    ab() {
      return this.a + this.b;
    },
    // 使用 getter 与 setter
    cd: {
      get() {
        return this.c + this.d;
      },
      set(cd) {
        this.c = 'c';
        this.d += cd;
      }
    },
    // 使用箭头函数
    doubleA: (vm) => vm.a + vm.a
  },
  methods: {},
  template: `<div>
    <div>计算属性</div>
    <div>ab:{{ab}}</div>
    <div>doubleA:{{doubleA}}</div>
    <div>
      <div>c:{{this.c}}</div>
      <div>d:{{this.d}}</div>
      <div>cd:{{this.cd}}</div>
      <button @click="cd = '123'">set cd='123'</button>
    </div>
  </div>`
};
```


> 总结
> 1. 计算属性结果是被缓存的，只有计算依赖的属性变化，计算属性才会重新计算。一些依赖属性不频繁变化，但是单计属性（依赖不频繁变化数据计算的结果）频繁使用的情况，可以通过使用`computed`减少计算次数，优化性能。
> 2. 计算属性提供 `setter`功能，可以根据需要设置`setter`。

### 1.2 directives

- 类型：Object

- 详细：

包含 Vue 实例可用指令的哈希表。

```js
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus();
  }
});
// 局部指令
const Directives = {
  data() {
    return {};
  },
  directives: {
    // 指令名称 initValue，功能设置input输入框的初始值
    initValue: {
      // el 指令所绑定的标签
      inserted(el) {
        // 指令的操作
        el.value = '123';
      }
    }
  },
  //  通过v-focus 绑定指令
  template: `<div>
    <div>自定义指令 v-focus，v-initValue</div>
    <input v-focus v-initValue type="text"/>
  </div>`
};
```
| 关键字           | 作用                                                                                                 |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| Vue.directive    | 全局注册指令                                                                                         |
| directives       | 局部注册指令                                                                                         |
| inserted         | 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)                                |
| bind             | 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置                             |
| update           | 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。 |
| componentUpdated | 指令所在组件的 VNode 及其子 VNode 全部更新后调用。                                                   |
| unbind           | 只调用一次，指令与元素解绑时调用。                                                                   |

更多：钩子函数参数，动态指令见vue官网

> 总结 
> 自定义指令，对一些常用的业务逻辑可以通过自定义指令封装简化操作，比如autofocus
> [vue指令](https://cn.vuejs.org/v2/guide/custom-directive.html)

### 1.3 functional
- 类型：boolean

- 详细：

使组件无状态 (没有 data) 和无实例 (没有 this 上下文)。他们用一个简单的 render 函数返回虚拟节点使它们渲染的代价更小。

```js
const Functional = {
  functional: true,
  props: ['msg'],
  // h :createElement , ctx : context
  render(h, ctx) {
    console.log('ctx: ', ctx);
    return h('div', {}, [`函数式组件,${ctx.props.msg}`]);
  }
};
```

> 总结
> 函数式组件，简单理解无状态组件。所有属性都是通过外部传递，内部不维护任何状态。有点逻辑简单只负责渲染，组件渲染消耗小（无需维护状态，生命周期等）。
> [函数式组件](https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6)


## 生命周期

![生命周期图](https://cn.vuejs.org/images/lifecycle.png)

- beforeCreate ：在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。 
- created ： 在实例创建完成后被立即调用。实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el property 目前尚不可用。
- beforeMount ：在挂载开始之前被调用：相关的 render 函数首次被调用。                     
- mounted ：实例被挂载后调用，$el property 可用。注意 mounted 不会保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick 
- beforeUpdate： 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。         
- updated：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。注意 updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 updated 里使用 vm.$nextTick
- activated：被 keep-alive 缓存的组件激活时调用。
- deactivated：被 keep-alive 缓存的组件停用时调用。
- beforeDestroy ：实例销毁之前调用。在这一步，实例仍然完全可用。
- destroyed： 实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
- errorCaptured：当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。


| 名称          | 可用数据                                               |
| ------------- | ------------------------------------------------------ |
| beforeCreate  | 无                                                     |
| created       | data,props,watch,event可用                             |
| beforeMount   | 同上                                                   |
| mounted       | data,props,watch,event,$el属性可以（$attrs,$parent等） |
| beforeUpdate  | 同上                                                   |
| updated       | 同上                                                   |
| beforeDestroy | 同上                                                   |