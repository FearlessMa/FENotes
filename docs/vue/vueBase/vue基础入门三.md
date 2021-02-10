# vue基础入门（三）
[[toc]]

## 1.指令

### 1.1 v-text

- 预期：string

- 详细：

```
更新元素的 textContent。如果要更新部分的 textContent，需要使用 {{ Mustache }} 插值。
```
- 示例

```js
const vText = {
  data() {
    return { msg: '这是通过v-text绑定的msg数据,点击更改msg' };
  },
  template: `<div>
    v-text使用
    <div v-text="msg" @click="msg = 'click'"></div>
  </div>`
};

// v-text
<span v-text="msg"></span>
// 和下面的一样
<span>{{msg}}</span>

```

> 总结
> 1. `v-text` 绑定与 `{{}}`绑定相同，习惯常用`{{}}`


### 1.2 v-html

- 预期：string

- 详细：

更新元素的 innerHTML。注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译。如果试图使用 v-html 组合模板，可以重新考虑是否通过使用组件来替代。

在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。只在可信内容上使用 v-html，永不用在用户提交的内容上。

在单文件组件里，scoped 的样式不会应用在 v-html 内部，因为那部分 HTML 没有被 Vue 的模板编译器处理。如果你希望针对 v-html 的内容设置带作用域的 CSS，你可以替换为 CSS Modules 或用一个额外的全局  元素手动设置类似 BEM 的作用域策略。

- 示例

```js
const vHtml = {
  data(){
    return { data:'<div>这是html模板,通过v-html指令绑定的</div>'}
  },
  template:`<div>
    v-html使用
    <div v-html="data"></div>
  </div>`
}
```

> 总结
> 1. 尽量使用vue组件实现模板，特殊情况会用到使用场景，比如 富文本编辑器返回html字符串在预览下可以使用v-html渲染富文本编辑器返回的字符串


### 1.3 v-show

- 预期：any

- 用法：

根据表达式之真假值，切换元素的 display CSS property。

当条件变化时该指令触发过渡效果。

- 示例

```js
const vShow = {
  data() {
    return { show: true };
  },
  template: `<div>
  v-show 使用
  <div v-show="show"> 点击按钮通过v-show切换标签的display属性显示或隐藏</div>
  <button @click="show=!show">切换</button>
  </div>`
};
```

> 总结
> 1. `v-show`通过切换css属性 display 来控制标签的显示隐藏，
> 2. 不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
> 3. 带有 `v-show` 的元素始终会被渲染并保留在 DOM 中
> 4. `v-show` 不会触发组件销毁相关生命周期


### 1.4 v-if,v-else-if,v-else

- 预期：any

- 用法：

根据表达式的值的 truthiness 来有条件地渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 `<template>`，将提出它的内容作为条件块。

当条件变化时该指令触发过渡效果。

- 示例

```js
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
```

> 总结
> 1. `1v-i` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。 
> 2. `v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
> 3. 使用if,else逻辑控制html标签的显示隐藏
> 4. `v-else-if`,`v-else`限制前一兄弟元素必须有 `v-if` 或 `v-else-if`。


### 1.5 v-for

- 预期：Array | Object | number | string | Iterable (2.6 新增)

- 用法：

基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 alias in expression，为当前遍历的元素提供别名。

- 示例

```js
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
```

> 总结
> 1. `v-for` 可以遍历所有Iterable接口的数据。
> 2. Vue 2.x 目前并不支持可响应的 Map 和 Set 值，所以无法自动探测变更


### 1.6 v-on

- 缩写：`@`

- 预期：Function | Inline Statement | Object

- 参数：event

- 修饰符：

  - .stop - 调用 event.stopPropagation()。
  - .prevent - 调用 event.preventDefault()。
  - .capture - 添加事件侦听器时使用 capture 模式。
  - .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
  - .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
  - .native - 监听组件根元素的原生事件。
  - .once - 只触发一次回调。
  - .left - (2.2.0) 只当点击鼠标左键时触发。
  - .right - (2.2.0) 只当点击鼠标右键时触发。
  - .middle - (2.2.0) 只当点击鼠标中键时触发。
  - .passive - (2.3.0) 以 { passive: true } 模式添加侦听器

- 用法：

绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。

用在普通元素上时，只能监听原生 DOM 事件。用在自定义元素组件上时，也可以监听子组件触发的自定义事件。

在监听原生 DOM 事件时，方法以事件为唯一的参数。如果使用内联语句，语句可以访问一个 $event property：v-on:click="handle('ok', $event)"。

从 2.4.0 开始，v-on 同样支持不带参数绑定一个事件/监听器键值对的对象。注意当使用对象语法时，是不支持任何修饰器的。

- 示例

```js
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
```
- 修饰符

| 修饰符      | 作用                                                                                         |
| :---------- | :------------------------------------------------------------------------------------------- |
| .stop       | 阻止事件冒泡                                                                                 |
| .prevent    | 阻止默认事件，a，button，form等标签默认事件                                                  |
| .capture    | 变更事件冒泡触发顺序，.capture修饰后优先级高                                                 |
| .self       | 不被事件冒泡触发，只有事件触发在绑定标签上才行。如click事件，点击子元素不会触发自身click事件 |
| .native     | 自定义组件标签监听原生事件。                                                                 |
| .once       | 只触发一次                                                                                   |
| .left       | 只当点击鼠标左键时触发                                                                       |
| .right      | 只当点击鼠标右键时触发                                                                       |
| .middle     | 只当点击鼠标中键时触发                                                                       |
| .passive    | { passive: true }不会阻止默认事件。例如：滚动事件。                                          |
| .{keyAlias} | 只当事件是从特定键触发时才触发回调<input v-on:keyup.13="submit"> ,指定键盘按键触发           |
| .exact      | 修饰符允许你控制由精确的系统修饰符组合触发的事件。                                           |


说明 ：
1. 修饰符可以串联 如 @click.prevent.stop="xxx"
2. passive主要用在移动端的scroll事件，来提高浏览器响应速度，提升用户体验。因为passive=true等于提前告诉了浏览器，touchstart和touchmove不会阻止默认事件，手刚开始触摸，浏览器就可以立刻给与响应；否则，手触摸屏幕了，但要等待touchstart和touchmove的结果，多了这一步，响应时间就长了，用户体验也就差了


> 总结
> 1. `v-on`在标签上绑定事件，简写`@`
> 2. 事件修饰符可以简化常用操作，事件修饰符可以串联使用。

[.passive参考](https://blog.csdn.net/wangjun5159/article/details/104251705)
[.exact参考](https://cn.vuejs.org/v2/guide/events.html#exact-%E4%BF%AE%E9%A5%B0%E7%AC%A6)



### 1.7 v-bind

- 缩写：`:`

- 预期：any (with argument) | Object (without argument)

- 参数：attrOrProp (optional)

- 修饰符：

.prop - 作为一个 DOM property 绑定而不是作为 attribute 绑定。(差别在哪里？)
.camel - (2.1.0+) 将 kebab-case attribute 名转换为 camelCase。(从 2.1.0 开始支持)
.sync (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器。
用法：

动态地绑定一个或多个 attribute，或一个组件 prop 到表达式。

在绑定 class 或 style attribute 时，支持其它类型的值，如数组或对象。可以通过下面的教程链接查看详情。

在绑定 prop 时，prop 必须在子组件中声明。可以用修饰符指定不同的绑定类型。

没有参数时，可以绑定到一个包含键值对的对象。注意此时 class 和 style 绑定不支持数组和对象

- 示例

```js
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
          this.$emit('update:val',e.target.value)
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
```

- 修饰符

| 修饰符 | 作用                                                                                                  |
| ------ | ----------------------------------------------------------------------------------------------------- |
| .prop  | 作为一个 DOM property 绑定而不是作为 attribute 绑定,转化为原生html标签上属性。如：disabled，style等   |
| .camel | 将-链接属性转化为驼峰属性。 如：class-name 转为 className                                             |
| .sync  | 绑定更新事件update。如 `<div :val.sync="val" > `, `<div :val="val" @update:val="newVal=>val=newVal">` |

> 总结
> 1. `v-bind` 属性绑定，父子单向传递数据的基础指令。


### 1.8 v-model

- 预期：随表单控件类型不同而不同。

- 限制：

  `<input>`

  `<select>`

  `<textarea>`

  `components`

- 修饰符：

  - .lazy - 取代 input 监听 change 事件
  - .number - 输入字符串转为有效的数字
  - .trim - 输入首尾空格过滤

- 示例

```js
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

//  <Child v-model="d1"/> 相当于  <Child :d1="d1" @input="newVal=>d1=newVal"/>
```

> 总结
> 1. `v-model` 一般表单组件使用，不用手动更新数据。
> 2. `.lazy` 把input 事件 替换成 change 事件。input 与change 触发时机不一样。change是光标离开input触发，input是输入值改变触发。使用change可以减少方法执行次数。
> 3. 组件使用v-model，例如：`<Child v-model="d1"/>` 相当于  `<Child :d1="d1" @input="newVal=>d1=newVal"/>`，组件内部要实现 this.$emit('input', e.target.value);


### 1.9 v-slot

- 缩写：#

- 预期：可放置在函数参数位置的 JavaScript 表达式 (在支持的环境下可使用解构)。可选，即只需要在为插槽传入 prop 的时候使用。

- 参数：插槽名 (可选，默认值是 default)

  限用于

  `<template>`组件 (对于一个单独的带 prop 的默认插槽)

- 示例：
  
```js
//  组件插槽，可以理解为：组件嵌套
const vSlot = {
  data() {
    return { data: { des: 'vSlot的data数据', num: 6 } };
  },
  template: `<div>
  v-slot 使用
  <div>
    <div>默认插槽,名称为default的具名插槽</div>
    <hr/>
    <slot></slot>
  </div>
  <div>
    <br/>
    <div>自定义名称为foot的插槽</div>
    <hr/>
    <div>
      <slot name="header"></slot>
    </div>
    <hr/>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
  <div>
    <br/>
    <div>传递参数的插槽</div>
    <hr/>
    <slot name="params" :data="data"></slot>
  </div>
  </div>`
};
```

```html
 <vSlot>
   <!-- 会渲染到vSlot组件的<slot></slot>标签中 -->
  <div>传的的默认插槽</div>
  <!-- 会渲染到vSlot组件的<slot name="header" ></slot>标签中 -->
  <template #header>#header方式传递具名插槽</template>
  <!-- 会渲染到vSlot组件的<slot name="footer" ></slot>标签中 -->
  <template v-slot:footer>v-slot:footer 传递具名插槽</template>
  <!-- 会渲染到vSlot组件的<slot name="params" :data="data" ></slot>标签中 -->
  <template #params="props">
    <div>传递参数的具名插槽#params</div>
    <!-- 获取到的数据 props：{"data":{"des":"vSlot的data数据","num":6}}  -->
    <div>props：{{JSON.stringify(props)}}</div>
  </template>
</vSlot>
```

::: v-pre

| 组件  | 插槽                              | 组件内定义                                 | 使用                                                                                                                          |
| ----- | --------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| vSlot | 默认插槽，名称default             | `<slot></slot>`                            | `<vSlot><div>传的的默认插槽</div></vSlot>` vSlot内所有为标明其他插槽的内容都会渲染到`<slot></slot>`内部                       |
| vSlot | 具名插槽，定义name="xxx"          | `<slot name="header"></slot>`              | `<template #header>#header方式传递具名插槽</template>` 内部所有内容会渲染到对应的name插槽中                                   |
| vSlot | 具名插槽，传递props给插槽内容使用 | `<slot name="params" :data="data"></slot>` | `<template #params="props">` `<div>props：{{JSON.stringify(props)}}</div>` `</template>`插槽内部渲染内容可以获得vSlot组件传递的数据 |

:::


> 总结
> 1. 通过`slot`定义插槽。默认`name`为`default`，可以给`slot`标签绑定数据使渲染内容获得相关数据。
> 2. 插槽一般通过 `template`标签使用 `#` `slotName`指定渲染的插槽名称。`#` `slotName` = `props` 获取`slot`标签上绑定的数据
> [vue插槽](https://cn.vuejs.org/v2/guide/components-slots.html)


### 1.10 v-pre

- 不需要表达式

- 用法：

跳过这个元素和它的子元素的编译过程。可以用来显示原始 `Mustache` 标签。跳过大量没有指令的节点会加快编译。

```js
const vPre = {
  data(){return {data:'123'}},
  template:`<div>
    v-pre 使用
    <div v-pre> {{data}} <div>div标签</div></div>
    <div>预计上面渲染结果data会渲染为123。实际不是</div>
  </div>`
}
```

> 总结
> 1. `v-pre` 跳过编译，上面例子直接渲染为 {{`data`}}


### 1.11 v-cloak

- 不需要表达式

- 用法：

这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

> 总结
> 1. `v-cloak` 是在当`Vue` 来不及渲染，页面会显示{{`data`}}这种Mustache源码，`v-cloak`可以隐藏这种显示。


### 1.12 v-once

- 不需要表达式

- 详细：

只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

> 总结
> 1. 有大量静态内容需要渲染的时候，可以使用`v-once`缓存第一次渲染结果，优化性能



## 2.自定义指令

[参考vue基础入门二](https://github.com/FearlessMa/FENotes/blob/master/docs/vue/vueBase/vue%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%E4%BA%8C.md)


![关注不迷路](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/FENotes.png)