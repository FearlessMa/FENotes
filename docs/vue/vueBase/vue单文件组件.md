# vue单文件组件

## 1. [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)

- 简介

.vue 文件是一个自定义的文件类型，用类 HTML 语法描述一个 Vue 组件。每个 .vue 文件包含三种类型的顶级语言块 `<template>`、`<script>` 和 `<style>`，还允许添加可选的自定义块：

```vue

<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>

<custom1>
  This could be e.g. documentation for the component.
</custom1><template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>

<custom1>
  This could be e.g. documentation for the component.
</custom1>
```


vue-loader 会解析文件，提取每个语言块，如有必要会通过其它 loader 处理，最后将他们组装成一个 ES Module，它的默认导出是一个 Vue.js 组件选项的对象。

vue-loader 支持使用非默认语言，比如 CSS 预处理器，预编译的 HTML 模版语言，通过设置语言块的 lang 属性。例如，你可以像下面这样使用 Sass 语法编写样式：

```vue
<style lang="sass">
  /* write Sass! */
</style>
```

## 2. 语言块

### 2.1 模板
每个 .vue 文件最多包含一个 `<template>` 块。

内容将被提取并传递给 vue-template-compiler 为字符串，预处理为 JavaScript 渲染函数，并最终注入到从 `<script>` 导出的组件中。

### 2.2 脚本

每个 .vue 文件最多包含一个 `<script> `块。

这个脚本会作为一个 ES Module 来执行。

它的默认导出应该是一个 Vue.js 的组件选项对象。也可以导出由 Vue.extend() 创建的扩展对象，但是普通对象是更好的选择。

任何匹配 .js 文件 (或通过它的 lang 特性指定的扩展名) 的 webpack 规则都将会运用到这个 `<script>` 块的内容中。

### 2.3 样式

默认匹配：/\.css$/。

一个 .vue 文件可以包含多个 `<style>` 标签。

`<style>` 标签可以有 scoped 或者 module 属性 (查看 scoped CSS和 CSS Modules) 以帮助你将样式封装到当前组件。具有不同封装模式的多个 `<style>` 标签可以在同一个组件中混合使用。

任何匹配 .css 文件 (或通过它的 lang 特性指定的扩展名) 的 webpack 规则都将会运用到这个 `<style>` 块的内容中。


## 3. 创建vue项目

### 3.1 通过Vue CLI 直接创建一个项目的脚手架

- 需要先安装nodejs与npm

  - 命令行输入一下命令


```shell
node -v 
# v12.18.0
# 看到有版本号输出 说明已安装

npm -v

# 6.14.7
# 看到有版本号输出 说明已安装
```

![image-20200730105106634](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805150039.png)


> [Vue CLI官网](https://cli.vuejs.org/zh/guide/)


- 或者使用已初始化好的模板

```shell
# 创建文件夹
mkdir vue-demo

# 进入文件夹
cd vue-demo

# 执行模板下载
npx @fearless-ma/vue-antv-cli --init

```

- 如果npx安装很慢，可以把npm切到淘宝源

```shell
npm config set registry https://registry.npm.taobao.org
```

![image-20200730105529745](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805150040.png)

![image-20200730111317390](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805150041.png)

![image-20200730111946877](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805150042.png)


- 安装依赖，启动项目

```shell
# npm i 安装依赖
npm install 
# 启动项目
npm run serve 
```

![image-20200730111659548](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805150043.png)

- 浏览器地址栏输入：http://localhost:8081/

![image-20200730111810740](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805150044.png)


- 查看代码`src/app.vue`单文件组件

![image-20200730112359371](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805150045.png)


> [demo地址](https://github.com/FearlessMa/FENotes-vue-demo)

