# vue组件通信



## props与callback

- 优点：父子组件通信

- 缺点：多层级通信比较麻烦

- 方法：父级获得子组件数据，通过传递`props`为`callback`,子组件调用`callback`传参实现父级获得子组件数据

- parent组件

  ````js
  <template>
    <div class="parent">
      <div>parent</div>
      <div>p2:{{ p2 }}</div>
      <Child :p1="p1" :setProps="setProps" />
    </div>
  </template>
  <script>
  import Child from './c';
  export default {
    name: 'parent',
    components: { Child },
    data() {
      return { p1: '通过props传递：parent prop 1', p2: '' };
    },
    methods: {
      setProps(prop) {
        this.p2 = prop;
      }
    }
  };
  </script>
  <style lang="less" scoped>
  .parent {
    width: 300px;
  }
  </style>
  ````

  

- child组件

  ```js
  <template>
    <div class="child">
      <div>child</div>
      <div>p1：{{ p1 }}</div>
    </div>
  </template>
  <script>
  export default {
    name: 'child',
    props: ['p1', 'setProps'],
    data() {
      return { p2: '通过方法cb传递：child prop p2' };
    },
    mounted() {
      this.setProps(this.p2);
    }
  };
  </script>
  <style lang="less" scoped>
  .child {
    border: 1px solid #ddd;
    padding: 10px;
  }
  </style>
  ```

  <img src="./image-20200714163702049.png" alt="image-20200714163702049" />



## props与$emit 

- 优点：父子组件通信方便

- 缺点：多层级通信比较麻烦

- 方法：父级获得子组件数据，通过监听子组件`$emit`事件获得`callback`参数

- Parent 

  ````js
  <template>
    <div class="parent">
      <div>parent</div>
      <div>emitData:{{ emitData }}</div>
      <Child @child="event" />
    </div>
  </template>
  <script>
  import Child from './c';
  export default {
    name: 'parent',
    components: { Child },
    data() {
      return { emitData: '' };
    },
    methods: {
      event(data) {
        this.emitData = data;
      }
    }
  };
  </script>
  ````

- child

  ````js
  <template>
    <div class="child">
      <div>child</div>
    </div>
  </template>
  <script>
  export default {
    name: 'child',
    methods: {
      event() {
        this.$emit('child', '通过$emit传递：child emit');
      }
    },
    mounted() {
      this.event();
    }
  };
  </script>
  ````

  ![image-20200714164832877](./image-20200714164832877.png)

## eventBus

- 有点：父子组件与多层级组件通信都比较方便
- 缺点:  使用较多`$eventBus`后，维护容易混乱
- 方法： 通过 `Vue.prototype.$eventBus = new Vue();`，初始一个空的vue实例，此后通过`$eventBus`为事件总线（所有使用eventBus的事件都是绑定到此vue实例上）管理所有事件。

- parent

  ```js
   this.$eventBus.$on('child', (data) => {
        console.log('data: ', data);
      });
  ```

- child

  ```js
        this.$eventBus.$emit('child', '通过$eventBus传递：child emit');
  ```

  

## provider 与 inject

