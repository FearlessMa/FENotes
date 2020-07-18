// 通过new Vue 生成一个Vue实例vm，vm是一个object，其中包含各种字段信息，后续会出一篇相关文章
/**
 * Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
 * $attrs: Object
 * $children: []
 * $createElement: ƒ (a, b, c, d)
 * $el: div
 * $listeners: Object
 * $options: {components: {…}, directives: {…}, filters: {…}, name: "app", _base: ƒ, …}
 * $parent: undefined
 * $refs: {}
 * $root: Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
 * $scopedSlots: {}
 * $slots: {}
 * $vnode: undefined
 * msg: "name is app"
 * _c: ƒ (a, b, c, d)
 * _data: {__ob__: Observer}
 * _directInactive: false
 * _events: {}
 * _hasHookEvent: false
 * _inactive: null
 * _isBeingDestroyed: false
 * _isDestroyed: false
 * _isMounted: true
 * _isVue: true
 * _renderProxy: Proxy {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
 * _self: Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
 * _staticTrees: null
 * _uid: 0
 * _vnode: VNode {tag: "div", data: undefined, children: Array(1), text: undefined, elm: div, …}
 * _watcher: Watcher {vm: Vue, deep: false, user: false, lazy: false, sync: false, …}
 * _watchers: [Watcher]
 * $data: (...)
 * $isServer: (...)
 * $props: (...)
 * $ssrContext: (...)
 * get $attrs: ƒ reactiveGetter()
 * set $attrs: ƒ reactiveSetter(newVal)
 * get $listeners: ƒ reactiveGetter()
 * set $listeners: ƒ reactiveSetter(newVal)
 * get msg: ƒ proxyGetter()
 * set msg: ƒ proxySetter(val)
 * __proto__: Object
 */

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
  computed:{},
  methods:{},
  template:``,
  render(h){return h()},
  // other props 和 生命周期
};
