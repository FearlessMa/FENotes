(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{494:function(t,a,r){"use strict";r.r(a);var s=r(31),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"markdown图片自动上传"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#markdown图片自动上传"}},[t._v("#")]),t._v(" markdown图片自动上传")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#起因"}},[t._v("起因")])]),r("li",[r("a",{attrs:{href:"#动机"}},[t._v("动机")])]),r("li",[r("a",{attrs:{href:"#方案介绍"}},[t._v("方案介绍")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1-typora-https-www-typora-io"}},[t._v("1. Typora")])]),r("li",[r("a",{attrs:{href:"#_2-picgo-https-github-com-molunerfinn-picgo"}},[t._v("2. PicGo")])]),r("li",[r("a",{attrs:{href:"#_3-github图床"}},[t._v("3. Github图床")])])])]),r("li",[r("a",{attrs:{href:"#实现"}},[t._v("实现")])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"起因"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[t._v("#")]),t._v(" 起因")]),t._v(" "),r("p",[t._v("发现自己文章里的图片链接失效了，是因为使用的图床问题。修改替换新图片折腾一圈下来感觉要哭了。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114939.png",alt:"image-20200805104236996"}})]),t._v(" "),r("h2",{attrs:{id:"动机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),r("p",[t._v("懒，自己想偷懒。。。")]),t._v(" "),r("h2",{attrs:{id:"方案介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方案介绍"}},[t._v("#")]),t._v(" 方案介绍")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("Typora")]),t._v(" + "),r("code",[t._v("PicGo")]),t._v(" + "),r("code",[t._v("Github图床")])])]),t._v(" "),r("blockquote",[r("p",[t._v("一套组合拳，实现从剪切板粘贴图片保存到当前文件夹，通过设置Github图床自动上传并替换文章中的本地图片链接。")])]),t._v(" "),r("h3",{attrs:{id:"_1-typora"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-typora"}},[t._v("#")]),t._v(" 1. "),r("a",{attrs:{href:"https://www.typora.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Typora"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("非常好用的markdown编辑器,很多介绍文章。\n"),r("a",{attrs:{href:"https://sspai.com/post/30292",target:"_blank",rel:"noopener noreferrer"}},[t._v("让 Markdown 写作更简单，免费极简编辑器：Typora"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_2-picgo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-picgo"}},[t._v("#")]),t._v(" 2. "),r("a",{attrs:{href:"https://github.com/Molunerfinn/PicGo",target:"_blank",rel:"noopener noreferrer"}},[t._v("PicGo"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("应用概述")])]),t._v(" "),r("ul",[r("li",[t._v("PicGo: 一个用于快速上传图片并获取图片 URL 链接的工具")])]),t._v(" "),r("p",[r("strong",[t._v("PicGo 本体支持如下图床：")])]),t._v(" "),r("ul",[r("li",[t._v("七牛图床 v1.0")]),t._v(" "),r("li",[t._v("腾讯云 COS v4\\v5 版本 v1.1 & v1.5.0")]),t._v(" "),r("li",[t._v("又拍云 v1.2.0")]),t._v(" "),r("li",[t._v("GitHub v1.5.0")]),t._v(" "),r("li",[t._v("SM.MS V2 v2.3.0-beta.0")]),t._v(" "),r("li",[t._v("阿里云 OSS v1.6.0")]),t._v(" "),r("li",[t._v("Imgur v1.6.0")])]),t._v(" "),r("h3",{attrs:{id:"_3-github图床"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-github图床"}},[t._v("#")]),t._v(" 3. Github图床")]),t._v(" "),r("p",[t._v("使用github仓库作为图片存储")]),t._v(" "),r("h2",{attrs:{id:"实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),r("ol",[r("li",[t._v("设置Typora，通过打开 "),r("code",[t._v("格式")]),t._v("->"),r("code",[t._v("图像")]),t._v("->"),r("code",[t._v("全局图像设置")])])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114940.png",alt:"image-20200805111648880"}})]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("按照以上设置，下载安装PicGo，找到github图床设置")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114941.png",alt:"image-20200805111853815"}})]),t._v(" "),r("ul",[r("li",[t._v("设定仓库名： githubName/项目名称")]),t._v(" "),r("li",[t._v("分支： master即可")]),t._v(" "),r("li",[t._v("设定token\n"),r("ul",[r("li",[t._v("打开"),r("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("github tokens"),r("OutboundLink")],1),t._v(",新增token")]),t._v(" "),r("li",[r("img",{attrs:{src:"https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114942.png",alt:"image-20200805112436882"}})]),t._v(" "),r("li",[t._v("点击Generate token 获取")]),t._v(" "),r("li",[r("img",{attrs:{src:"https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114943.png",alt:"image-20200805112623748"}})]),t._v(" "),r("li",[t._v("填写到设定token中")])])])]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("测试 打开Typora，点击验证图片")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114944.png",alt:"image-20200805112834605"}})]),t._v(" "),r("ul",[r("li",[t._v("成功结果")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114945.png",alt:"image-20200805114228535"}})]),t._v(" "),r("ul",[r("li",[t._v("失败结果，有时候提示失败但是picGo是可以上传到github的")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114946.png",alt:"image-20200805113738386"}})]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("文章写完后，批量替换为github 图床链接")])]),t._v(" "),r("ul",[r("li",[t._v("现在文章中图片引用的为本地图片")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114947.png",alt:"image-20200805114632981"}})]),t._v(" "),r("ul",[r("li",[t._v("选择 "),r("code",[t._v("格式")]),t._v("->"),r("code",[t._v("图像")]),t._v("->"),r("code",[t._v("上传本地所有图片")]),t._v(" 开始上传。 也可以设置图像插入是自动上传")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114948.png",alt:"image-20200805114719782"}})]),t._v(" "),r("ul",[r("li",[t._v("上传成功后，文章图片自动替换为github地址了")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805115317.png",alt:"image-20200805115048575"}})]),t._v(" "),r("blockquote",[r("p",[t._v("至此大功告成")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/FENotes.png",alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);