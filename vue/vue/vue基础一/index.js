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

const options = {
  //  一
  el: '',
  name: 'name',
  components: {},
  data() {
    return {};
  },
  props: [],
  inject: [],
  watch: {},
  computed: {},
  methods: {},
  template: ``,
  render(h) {
    return h();
  },
  // other props 和 生命周期
  // 二
  computed: {},
  directives: {},
  functional: false
};
