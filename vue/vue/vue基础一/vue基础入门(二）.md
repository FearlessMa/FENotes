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

> 总结
> 1. 计算属性结果是被缓存的，只有计算依赖的属性变化，计算属性才会重新计算。一些依赖属性不频繁变化，但是单计属性（依赖不频繁变化数据计算的结果）频繁使用的情况，可以通过使用`computed`减少计算次数，优化性能。
> 2. 计算属性提供 `setter`功能，可以根据需要设置`setter`。
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

### 1.2 directives

- 类型：Object

- 详细：

包含 Vue 实例可用指令的哈希表。

> 总结 
> 自定义指令，对一些常用的业务逻辑可以通过自定义指令封装简化操作，比如autofocus