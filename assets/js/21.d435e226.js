(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{413:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"文档选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档选择器"}},[t._v("#")]),t._v(" 文档选择器")]),t._v(" "),a("p",[t._v("插件的特性可以通过语言、类型、位置等文档选择器类型加以筛选，本节将深入文档选择器、文档协议等插件创作者应该了解的内容。")]),t._v(" "),a("h3",{attrs:{id:"不在磁盘上的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不在磁盘上的文件"}},[t._v("#")]),t._v(" 不在磁盘上的文件")]),t._v(" "),a("p",[t._v("并不是所有文件都是储存在磁盘上的，比如一份刚刚创建的文件。除非特别指明，文档选择器通常会"),a("strong",[t._v("应用")]),t._v("于所有文档类型。用"),a("a",{attrs:{href:"https://code.visualstudio.com/docs/extensionAPI/vscode-api#DocumentFilter",target:"_blank",rel:"noopener noreferrer"}},[t._v("DocumentFilter"),a("OutboundLink")],1),t._v("的"),a("code",[t._v("scheme")]),t._v("属性将协议范围缩小，比如说，"),a("code",[t._v("{ scheme: 'file', language: 'typescript' }")]),t._v("是特用于储存在磁盘上的TypeScript文件的。")]),t._v(" "),a("h2",{attrs:{id:"文档选择器-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档选择器-2"}},[t._v("#")]),t._v(" 文档选择器")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("VS Code插件 API结合了特定的语言特性，通过文档选择器的"),a("a",{attrs:{href:"https://code.visualstudio.com/docs/extensionAPI/vscode-api#DocumentSelector",target:"_blank",rel:"noopener noreferrer"}},[t._v("DocumentSelector"),a("OutboundLink")],1),t._v("类型，可以支持如智能感知（IntelliSense）的特性，这是实现特定语言所支持特性的最为简单的机制。")]),t._v(" "),a("p",[t._v("下面的片段注册了一个TypeScript文件的"),a("a",{attrs:{href:"https://code.visualstudio.com/docs/extensionAPI/vscode-api#HoverProvider",target:"_blank",rel:"noopener noreferrer"}},[t._v("HoverProvider"),a("OutboundLink")],1),t._v("，文档选择器以"),a("code",[t._v("typescript")]),t._v("作为语言标识符。")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("languages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerHoverProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'typescript'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideHover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("vscode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'For *all* TypeScript documents.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("文档选择器可以不只是语言标识符，还可以是"),a("a",{attrs:{href:"https://code.visualstudio.com/docs/extensionAPI/vscode-api#DocumentFilter",target:"_blank",rel:"noopener noreferrer"}},[t._v("DocumentFilter"),a("OutboundLink")],1),t._v("中"),a("code",[t._v("scheme")]),t._v("实现的复杂选择器，文件路径支持"),a("code",[t._v("pattern")]),t._v("参数和glob模式。")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("languages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerHoverProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'**/test/**'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideHover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("vscode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'For documents inside `test`-folders only'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("下面这个代码片段使用了"),a("code",[t._v("scheme")]),t._v("过滤器和语言标识符。"),a("code",[t._v("untitled")]),t._v("协议正是为未存到本地磁盘的文件准备的。")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("languages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerHoverProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" scheme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'untitled'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" language"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'typescript'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideHover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("vscode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'For new, unsaved TypeScript documents only'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"文档协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档协议"}},[t._v("#")]),t._v(" 文档协议")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("文档的"),a("code",[t._v("scheme")]),t._v("常常不受人待见，但是它实际上提供了非常重要的信息。大部分文件都是储存在磁盘上的，插件创作者也常假设自己正在处理的文档也是存在磁盘上的。用一个简单的"),a("code",[t._v("typescript")]),t._v("选择器做个例子，其中的假设就是"),a("strong",[t._v("Typescript在磁盘上")]),t._v("，不过大部分开发场景都过于宽松了，使用了诸如"),a("code",[t._v("{ scheme: 'file', language: 'typescript' }")]),t._v("显式的选择器。")]),t._v(" "),a("p",[t._v("当插件特定依赖于从磁盘上读写时，这个问题显得尤为重要。请看下面的代码：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("languages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerHoverProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'typescript'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 👎 过于宽松")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideHover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("statSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fsPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ⚠️ 'untitled:/Untitled1.ts' 或者其他情况会则么样?")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("vscode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Size in bytes is ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("上面的例子里，悬浮提示器想要展示该文档在磁盘上的大小，但是它没有检测文档是不是真的储存在磁盘上，比如一个新创建但还没有保存的文档。正确的方法是告诉VS Code这个功能只在文件储存在磁盘上时才工作：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("languages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerHoverProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" scheme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" language"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'typescript'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 👍 文件储存在磁盘上时才工作")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideHover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("statSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fsPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("vscode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Size in bytes is ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("文档通常都储存在文件系统中，但也有例外：未保存的新文件、Git使用的缓存文件、FTP上的远程文件等等。如果你的插件特性依赖于磁盘读取，那么你就要用文档选择器时应带上"),a("code",[t._v("file")]),t._v("协议。")])])}),[],!1,null,null,null);s.default=e.exports}}]);