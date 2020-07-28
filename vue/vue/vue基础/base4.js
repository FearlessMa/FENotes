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
    // nextTick
    this.$nextTick(() => {
      console.log(4);
    });
    // 微任务
    p.then((res) => {
      console.log(3);
    });
    // 输出结果 1 4 3 2
    //  nextTick 宏任务2之前，执行
  }
};

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
    //  可以通过 更新引用对象。是vue重新监听整个对象。这样新增的属性也会被监听
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

const app = {
  // name 标识
  name: 'app',
  // 与 vm.$mount('#app') 功能相同
  // el: '#app',

  // 引用组件 多种方式
  components: { NextTick, vueSet },

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
  template: `<div>
              <div>{{msg}}</div>
              <div>string</div>
              <hr/>
              <NextTick/>
              <hr/>
              <vueSet/>
            </div>`
};

// 生成vue实例vm
const vm = new Vue(app);

// 替换渲染id为app的dom
vm.$mount('#app');
