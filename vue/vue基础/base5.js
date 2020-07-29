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
    console.log('this.$listeners: ', this.$listeners);
  }
};

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

const app = {
  // name 标识
  name: 'app',
  // 与 vm.$mount('#app') 功能相同
  // el: '#app',

  // 引用组件 多种方式
  components: { vueData, Emit },

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
    },
    message(msg){
      console.log('msg: ', msg); // msg:  emit msg
    }
  },
  template: `<div>
              <div>{{msg}}</div>
              <div>string</div>
              <hr/>
              <vueData p='123' p1="p1" @click="()=>{}" @search="()=>{}" @change.native="()=>{}">
                <template v-slot:test>测试</template>
              </vueData>
              <hr/>
              <Emit @message="message"/>
            </div>`
};

// 生成vue实例vm
const vm = new Vue(app);

// 替换渲染id为app的dom
vm.$mount('#app');

console.log(Vue.version);
