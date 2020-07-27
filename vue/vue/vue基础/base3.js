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

const vText = {
  data() {
    return { msg: '这是通过v-text绑定的msg数据,点击更改msg' };
  },
  template: `<div>
    v-text使用
    <div v-text="msg" @click="msg = 'click'"></div>
  </div>`
};

const vHtml = {
  data() {
    return { data: '<div>这是html模板,通过v-html指令绑定的</div>' };
  },
  template: `<div>
    v-html使用
    <div v-html="data"></div>
  </div>`
};

const vShow = {
  data() {
    return { show: true };
  },
  components: {
    vHtml
  },
  template: `<div>
  v-show 使用
  <div v-show="show"> 点击按钮通过v-show切换标签的display属性显示或隐藏</div>
  <vHtml v-show="show" />
  <button @click="show=!show">切换</button>
  </div>`
};

const vIf = {
  data() {
    return { visible: true, data: '123' };
  },
  template: `<div> 
  v-if 使用
  <div v-if="visible" @click="visible=false">布尔值visible控制，点击visible=false </div>
  <br/>
  <br/>
  <div v-if="data!=321 && data" @click="data=321"> data!=321和data为真，显示,js所有真值都可以控制v-if显示，隐式转换</div>
  <div v-else-if="data==321" @click="data=null">data==321，显示</div>
  <div v-else>data!= 321 和 data 是假，显示</div>
  </div>`
};

const vFor = {
  data() {
    return {
      list: ['a', 'b', 'c'],
      data: { name: 'vFor', des: 'v-for的使用' },
      str: '字符串'
    };
  },
  template: `<div>
  v-for 使用
  <div>遍历数组</div>
  <div v-for="(item,index) in list">index：{{index}} - item：{{item}}</div>
  <div>遍历对象</div>
  <div v-for="(value,key) in data">key：{{key}} - value：{{value}}</div>
  <div>遍历字符串</div>
  <div v-for="(val,index) in str">index：{{index}} - val：{{val}}</div>
  </div>`
};

const vOn = {
  components: {
    nativeCom: {
      data() {
        return {};
      },
      template: `<div> <button>btn</button></div>`
    }
  },
  data() {
    return {};
  },
  methods: {
    tagCLick(e) {
      console.log('e:tagCLick ', e.target);
    },
    parentClick(e) {
      console.log('e:parentClick ', e.target);
    },
    childClick(e) {
      console.log('e:childClick ', e.target);
    }
  },
  template: `<div>
  v-on 使用
  <div>
    <br/>
    <div @click="tagCLick"> click 事件</div>
    <br/>
    <div>
    .prevent修饰符
    <a href='https://fearlessma.github.io/FENotes/' @click="tagCLick"> 默认href是跳转到github,未阻止默认事件</a>
    <br/>
    <a href='https://fearlessma.github.io/FENotes/' @click.prevent="tagCLick"> 默认href是跳转到github，使用.prevent修饰符阻止默认事件</a>
    </div>
    <br/>
    <div @click='parentClick'>
      .stop修饰符
      <div @click="childClick">未阻止冒泡</div>
      <div @click.stop="childClick">.stop阻止冒泡</div>
    </div>
    <br/>
    <div @click.capture='parentClick'>
      .capture修饰符，事件冒泡默认顺序是 tagCLick -> childClick -> parentClick,
      增加修饰符后顺序 parentClick -> childClick -> tagCLick
      <div @click.capture='childClick'>
        <div @click="tagCLick"> tagCLick</div>
      </div>
    </div>
    <br/>
    <div @click.self='parentClick'>
      .self修饰符，只有事件触发在绑定事件的标签上，事件才会生效，不受事件冒泡影响
      <div @click.self='childClick'>
        child
        <div @click='tagCLick'> tagCLick</div>
      </div>
    </div>
    <br/>
    <div>
      .native修饰, 使用.native接收nativeCom组件的点击事件
      <nativeCom @click.native="tagCLick" />
    </div>
  </div>
  </div>`
};

const vBind = {
  components: {
    Child: {
      data() {
        return {};
      },
      // 接收数据
      props: ['p1', 'pData', 'isDisable'],
      methods: {
        inputVal(e) {
          this.$emit('update:val', e.target.value);
        }
      },
      template: `<div>
        <div>p1：{{p1}}</div>
        <div>pData：{{JSON.stringify(pData)}}</div>
        <input type="text" :disabled.prop='isDisable' />
        <input type="text" @input="inputVal" />
      </div>`
    }
  },
  data() {
    return {
      p1: 'vBind:p1',
      parent: { name: 'vBind', des: 'vBind传递数据' },
      isDisable: true,
      val: ''
    };
  },
  // 传递数据
  template: `<div>
  val:{{val}}
    <Child :p1="p1" :pData="parent" :isDisable="isDisable" :val.sync="val" />
  </div>`
};

const vModel = {
  components: {
    Child: {
      data() {
        return {};
      },
      // 接收数据
      props: ['d1'],
      methods: {
        inputVal(e) {
          this.$emit('input', e.target.value);
        }
      },
      template: `<div>
        child
        <input type="text" @input="inputVal"  />
      </div>`
    }
  },
  data() {
    return { inputVal: '', inputVal1: '', d1: '' };
  },
  template: `<div>
    v-model使用
    <div>
      基础使用
      <input type="text" v-model="inputVal" />
      inputVal：{{inputVal}}
    </div>
    <br/>
    <div>
      .lazy 
      <input type="text" v-model.lazy="inputVal1" />
      inputVal：{{inputVal1}}
    </div>
    <br/>
    <div>
      components组件
      d1：{{d1}}
      <Child v-model="d1"/>
    </div>
  </div>`
};

const app = {
  // name 标识
  name: 'app',
  // 与 vm.$mount('#app') 功能相同
  // el: '#app',

  // 引用组件 多种方式
  components: {
    Directives,
    vText,
    vHtml,
    vShow,
    vIf,
    vFor,
    vOn,
    vBind,
    vModel
  },

  //  响应式数据 不推荐使用箭头函数 this指向问题
  data() {
    return { msg: 'name is app', count: 0, res: { code: 0 } };
  },

  // methods 里方法不能使用箭头函数 this指向问题
  methods: {
    onClick() {
      this.msg = 'onClick';
      this.res.code = 1;
    }
  },
  // template:'#app-template'
  template: `<div>
                <!-- 
                <div>{{msg}}</div>
                <div>string</div>
                <hr/>
              <Directives/>
              <hr/>
              <vText/>
              <hr/>
              <vHtml/>
              <hr/>
              <vShow/>
              <hr/>
              <vIf/>
              <hr/>
              <vFor/>
              <hr/>
              <vOn/>
                -->
              <hr/>
              <vBind/>
              <hr/>
              <vModel/>
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
//
//   };
//   // 生命周期  vue 也有对应生命周期
//   componentDidMount() {}
//   // render函数 返回模板 === vue template ,render
//   render() {
//     return <div onClick={this.onClick}>这是template</div>;
//   }
// }
