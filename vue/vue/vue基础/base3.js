// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus();
  }
});

// 指令
const Directives = {
  data() {
    return {};
  },
  directives: {
    // 指令名称 initValue
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

const app = {
  // name 标识
  name: 'app',
  // 与 vm.$mount('#app') 功能相同
  // el: '#app',

  // 引用组件 多种方式
  components: { Computed, Directives, Functional, LifeCycle },

  //  响应式数据 不推荐使用箭头函数 this指向问题
  data() {
    return { msg: 'name is app', count: 0, res: { code: 0 }, visible: true };
  },

  // methods 里方法不能使用箭头函数 this指向问题
  methods: {
    onClick() {
      console.log('onClick');
      this.msg = 'onClick';
      this.res.code = 1;
    },
    toggleLifeCycle() {
      this.visible = !this.visible;
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
              <Directives/>
              <hr/>
              <LifeCycle v-if="visible" a="传递prop"/>
              <button @click="toggleLifeCycle">销毁 LifeCycle 组件</button>
            </div>`
};

// 生成vue实例vm
const vm = new Vue(app);

// 替换渲染id为app的dom
vm.$mount('#app');

// class App extends React.Components {
//   constructor(props) {
//     super(props);
//     // 组件状态 ，数据  this.state === vue data ; this.props == vue props
//     this.state = {};
//   }
//   //  各种方法 === vue methods
//   onClick = () => {
//     console.log('click event');
//   };
//   // 生命周期  vue 也有对应生命周期
//   componentDidMount() {}
//   // render函数 返回模板 === vue template ,render
//   render() {
//     return <div onClick={this.onClick}>这是template</div>;
//   }
// }
