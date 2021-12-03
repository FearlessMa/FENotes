(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{455:function(e,t,r){"use strict";r.r(t);var o=r(31),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"转自-开发和翻译指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#转自-开发和翻译指南"}},[e._v("#")]),e._v(" 转自 "),r("a",{attrs:{href:"https://github.com/Liiked/VS-Code-Extension-Doc-ZH",target:"_blank",rel:"noopener noreferrer"}},[e._v("开发和翻译指南"),r("OutboundLink")],1)]),e._v(" "),r("h1",{attrs:{id:"术语表和说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#术语表和说明"}},[e._v("#")]),e._v(" 术语表和说明")]),e._v(" "),r("p",[e._v("!> **注意：**本项目不支持低版本浏览器和IE浏览器")]),e._v(" "),r("h2",{attrs:{id:"提问、纠错和参与"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#提问、纠错和参与"}},[e._v("#")]),e._v(" 提问、纠错和参与")]),e._v(" "),r("hr"),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("提问")]),e._v("：欢迎大家在issue区对插件开发进行提问，虽然这里不是官方答疑平台，不过你可以在这里和国内的插件开发者进行交流。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("纠错和润饰")]),e._v("：在翻译过程中难免会出现笔误、翻译不到位、存在优化空间等情况，当然最严重的应属于翻译的章节或者片段难以理解，请在issue中不吝赐教，我们会优先处理这类问题。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("参与")]),e._v("：由于国内已经有过一版VS Code文档的社区翻译版本，但是质量，emmmmm……，所以本项目会采取较为严格的翻译审查，若你有热情一同学习和贡献自己的力量，请参考我们的"),r("a",{attrs:{href:"https://github.com/Liiked/VS-Code-Extension-Doc-ZH",target:"_blank",rel:"noopener noreferrer"}},[e._v("开发和翻译指南"),r("OutboundLink")],1),e._v("。")])])]),e._v(" "),r("h2",{attrs:{id:"术语表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#术语表"}},[e._v("#")]),e._v(" 术语表")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("术语表收录出现在VS Code中独有的或是易引起歧义的词汇，不包含常见词汇，如Extension。该表按首字母排序。\n该表格式：")]),e._v(" "),r("ul",[r("li",[e._v("普通词汇 "),r("code",[e._v("英文名称 术语名称")])]),e._v(" "),r("li",[e._v("单义词 "),r("code",[e._v("[出处或参考解释链接]() 术语名称：解释")])]),e._v(" "),r("li",[e._v("多义词 "),r("code",[e._v("[出处或参考解释链接]() 术语名称1/术语名称2：解释")])])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://code.visualstudio.com/docs/extensionAPI/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Activation Events"),r("OutboundLink")],1),e._v(" 激活事件：用于激活插件的VS Code事件钩子。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://code.visualstudio.com/docs/extensionAPI/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Contribution Points"),r("OutboundLink")],1),e._v(" 发布内容配置点：package.json的一部分，用于配置插件启动命令、用户可更改的插件配置，可以理解为插件的主要配置文件。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://code.visualstudio.com/docs/extensions/overview#_language-servers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Debug Adapter"),r("OutboundLink")],1),e._v(" 调试适配器：连接真正的调试程序（或运行时）和调试界面的插件称之为调试适配器。VS Code没有原生调试程序，而是依赖【调试器插件】调用通信协议（调试适配器协议）和VS Code的调试器界面实现。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://code.visualstudio.com/docs/extensionAPI/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Extension Manifest"),r("OutboundLink")],1),e._v(" 插件清单：VS Code自定义的pacakge.json文件，其中包含着插件的入口、配置等重要信息。")]),e._v(" "),r("li",[e._v("Extensibility 扩展性")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://code.visualstudio.com/docs/extensionAPI/patterns-and-principles",target:"_blank",rel:"noopener noreferrer"}},[e._v("Extension Host"),r("OutboundLink")],1),e._v(" 扩展主机：与VS Code主进程隔离的插件进程，插件运行的地方，开发者可在这个进程中调用VS Code提供的各类API。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://code.visualstudio.com/docs/extensions/overview#_language-servers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Language Servers"),r("OutboundLink")],1),e._v(" 语言服务器：插件模式中使用C/S结构的的服务器端，用于高消耗的特殊插件场景，如语言解析、智能提示等。与之相对，客户端则是普通的插件，两者通过VS Code 的API进行通信。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://code.visualstudio.com/docs/languages/identifiers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Language Identifier"),r("OutboundLink")],1),e._v(" 语言标识符：定义在发布内容配置的特定标识/名称，便于后续引用该语言配置。通常为某种编程语言的通俗名称，如JavaScript的语言标识符是【javascript】，Python的语言标识符是【python】。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);