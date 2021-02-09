

```vue
<template>
  <div>
    <div>pageA</div>
    <input type="text" v-myModel="t" />
    v:{{ v }}
    <br />
    t:{{ t }}
  </div>
</template>
<script>
export default {
  data() {
    return { v: '', t: '' };
  },
  directives: {
    myModel: {
      /** 
       * el:指令所绑定的元素，可以用来直接操作 DOM。
       * binding: expression：字符串形式的指令表达式,例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"
       * vNode 
      */
      bind(el, binding, vNode) {
        console.log('vNode: ', vNode);
        console.log('binding: ', binding);
        el.oninput = (e) => {
          let val = e.target.value;
          console.log('val: ', val);
          vNode.context[binding.expression] = val;
        };
      }
    }
  },
};
</script>

```