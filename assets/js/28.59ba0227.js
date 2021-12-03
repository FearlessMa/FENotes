(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{420:function(s,t,e){"use strict";e.r(t);var a=e(31),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"开发插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发插件"}},[s._v("#")]),s._v(" 开发插件")]),s._v(" "),e("p",[s._v("这个章节会详细地讲解如何插件的运行，调试和故障排除。这些技巧也同样适用于调试你从市场安装的问题应用。")]),s._v(" "),e("h2",{attrs:{id:"创建你自己的插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建你自己的插件"}},[s._v("#")]),s._v(" 创建你自己的插件")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("为了开发VS Code插件，VS Code本身提供了以下几个工具，帮你快速开发：")]),s._v(" "),e("ul",[e("li",[s._v("Yeoman生成器，用脚手脚创建一个插件")]),s._v(" "),e("li",[s._v("智能补全——悬停和找到你需要的插件API")]),s._v(" "),e("li",[s._v("编译Typescript（如果用Typescript实现的话）")]),s._v(" "),e("li",[s._v("运行和调试插件")]),s._v(" "),e("li",[s._v("发布插件")])]),s._v(" "),e("p",[s._v("我们建议你用脚手架生成基础文件，Yeoman的"),e("code",[s._v("yo code")]),s._v("命令可以完成这个工作，生成器能极大地提升你的开发体验，我们在"),e("RouterLink",{attrs:{to:"/extension-authoring/extension-generator.html"}},[s._v("插件生成器")]),s._v("里面有详细的步骤。")],1),s._v(" "),e("p",[s._v("!> "),e("strong",[s._v("注意")]),s._v("：以下部分假设你已经掌握了"),e("code",[s._v("yo code")]),s._v("Yeoman 插件生成器，和创建"),e("code",[s._v("launch.json")]),s._v("、"),e("code",[s._v("task.json")]),s._v("的基础知识。")]),s._v(" "),e("h2",{attrs:{id:"运行和调试插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行和调试插件"}},[s._v("#")]),s._v(" 运行和调试插件")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("按下"),e("code",[s._v("F5")]),s._v("，你就可以很轻松地调试插件了。这个命令会打开一个加载了你的插件的新窗口，插件输出的信息能在"),e("code",[s._v("调试控制台")]),s._v("里找到，在这个模式下你可以打断点、一步步地调试代码，在"),e("code",[s._v("调试")]),s._v("侧边栏或者"),e("code",[s._v("调试控制台")]),s._v("（用console方法输出才可以）检查变量。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/Microsoft/vscode-docs/raw/master/docs/extensions/images/developing-extensions/debug.png",alt:""}})]),s._v(" "),e("p",[s._v("根据插件的不同，你可能需要更多关于调试适配器或者语言服务器插件的相关教程：")]),s._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/extension-authoring/example-language-server.html"}},[s._v("示例：语言服务器")]),s._v(" - 学习如何实现一个语言服务器插件")],1),s._v(" "),e("li",[e("RouterLink",{attrs:{to:"/extension-authoring/developing-extensions.html"}},[s._v("示例：调试器")]),s._v(" - 通过VS Code Debug Protocol接入调试器")],1)]),s._v(" "),e("h2",{attrs:{id:"编译typescript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译typescript"}},[s._v("#")]),s._v(" 编译Typescript")]),s._v(" "),e("p",[s._v("如果你的插件是Typescript实现的，那你首先就要把代码编译成Javascript。\n编译过程的配置如下所示：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("tsconfig.json")]),s._v("定义了Typescript的编译选项。了解更多"),e("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Typescript wiki"),e("OutboundLink")],1),s._v("或者"),e("a",{attrs:{href:"https://code.visualstudio.com/docs/languages/typescript#_tsconfigjson",target:"_blank",rel:"noopener noreferrer"}},[s._v("Typescript语言章节"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("当前Typescript编译器的版本在"),e("code",[s._v("node_modules")]),s._v("文件夹里面")]),s._v(" "),e("li",[s._v("API定义在"),e("code",[s._v("node_modules/vscode")]),s._v("中")])]),s._v(" "),e("p",[s._v("运行插件前，Typescript编译器会被触发。"),e("code",[s._v(".vscode/launch.json")]),s._v("中的"),e("code",[s._v("preLaunchTask")]),s._v("属性定义了这项工作，在调试会话启动前会先启动这个配置好的任务。")]),s._v(" "),e("p",[s._v("如果你的插件在很久之前就编译好了，比如依赖于"),e("code",[s._v("0.1.0")]),s._v("ts版本，而"),e("code",[s._v("2.0.0")]),s._v("已经老早就出来了，那么通过下列步骤来升级你的插件：")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 访问 https://go.microsoft.com/fwlink/?LinkId=733558")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看更多关于tasks.json格式的内容")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2.0.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tasks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"script"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"watch"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"problemMatcher"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$tsc-watch"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"isBackground"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"presentation"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"reveal"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"never"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"group"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"kind"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"isDefault"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("将下列设置添加到"),e("em",[s._v("settings.json")]),s._v("中")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关边tsc的自动检测任务，因为我们在添加了npm脚本")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"typescript.tsc.autoDetect"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"off"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("确保"),e("em",[s._v("launch.json."),e("em",[s._v("中引用了正确的")]),s._v("预运行任务")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"preLaunchTask"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm: watch"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("?> **注意：**Typescript编译器运行在watch模式下，所以任何文件变动都会自动编译")]),s._v(" "),e("h2",{attrs:{id:"加载你的插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加载你的插件"}},[s._v("#")]),s._v(" 加载你的插件")]),s._v(" "),e("p",[s._v("你的插件会加载在"),e("code",[s._v("插件开发环境")]),s._v("的新窗口中。用"),e("code",[s._v("extensionDevelopmentPath")]),s._v("命令行也可以达到同样的效果，这个选项告诉VS Code去哪里查找新的插件：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("code --extensionDevelopmentPath"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("_my_extension_folder\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("一旦插件环境加载完毕，VS Code就会把调试器附加上去，然后启动调试会话。")]),s._v(" "),e("p",[s._v("下面是按下"),e("code",[s._v("F5")]),s._v("之后的会发生的事情：")]),s._v(" "),e("ol",[e("li",[e("code",[s._v(".vscode/launch.json")]),s._v("指示VS Code先运行一个叫做"),e("code",[s._v("npm")]),s._v("的任务")]),s._v(" "),e("li",[e("code",[s._v(".vscode/tasks.json")]),s._v("定义了"),e("code",[s._v("npm")]),s._v("任务，其实就是"),e("code",[s._v("npm run compile")]),s._v("的脚本命令")]),s._v(" "),e("li",[e("code",[s._v("package.json")]),s._v("定义"),e("code",[s._v("compile")]),s._v("为"),e("code",[s._v("tsc -watch -p ./")])]),s._v(" "),e("li",[s._v("然后会调用node_modules文件夹下的Typescript编译器，然后生成"),e("code",[s._v("out/extension.js")]),s._v("和"),e("code",[s._v("out/extension.js.map")])]),s._v(" "),e("li",[s._v("Typescript编译成功之后，生成"),e("code",[s._v("code --extensionDevelopmentPath=${workspaceFolder}")]),s._v("进程")]),s._v(" "),e("li",[s._v("加载运行在"),e("strong",[s._v("扩展环境")]),s._v("下的第二个VS Code实例，它会搜寻"),e("code",[s._v("${workspaceFolder}")]),s._v("下的插件")])]),s._v(" "),e("h2",{attrs:{id:"修改你的插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改你的插件"}},[s._v("#")]),s._v(" 修改你的插件")]),s._v(" "),e("p",[s._v("你可以在VS Code状态栏的左侧观察Typscript编译器的进度，在状态栏中你也可以找到编译的错误和警告。当编译通过之后，你必须重启"),e("strong",[s._v("扩展开发环境")]),s._v("才能查看到你的修改。重启扩展开发环境有两种可选的方式：")]),s._v(" "),e("ul",[e("li",[s._v("在调试面板中按下"),e("code",[s._v("重启")])]),s._v(" "),e("li",[s._v("在插件开发环境中按"),e("code",[s._v("Ctrl+R")]),s._v("（macOS：Cmd+R）")])]),s._v(" "),e("h2",{attrs:{id:"分析你的插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分析你的插件"}},[s._v("#")]),s._v(" 分析你的插件")]),s._v(" "),e("p",[s._v("你可以用Chrome DevTool内存和CUP分析工具分析你的插件。")]),s._v(" "),e("p",[s._v("跟我做：")]),s._v(" "),e("ol",[e("li",[s._v("在命令行中带上"),e("code",[s._v("--inspect-extensions=<port>")]),s._v("标识，启动你的VS Code，比如："),e("code",[s._v("code --inspect-extensions=9333")])]),s._v(" "),e("li",[s._v("在VS Code的"),e("strong",[s._v("命令面板("),e("code",[s._v("Shfit + Cttl+ P")]),s._v(")"),e("strong",[s._v("中选择并打开")]),s._v("Developer: Toggle Developer Tools")])]),s._v(" "),e("li",[s._v("在打开的DevTool中查看"),e("code",[s._v("Console")]),s._v("标签，找到"),e("code",[s._v("Debugger listening on port 9333")]),s._v("开头的"),e("code",[s._v("chrome-devtools")]),s._v("链接信息")]),s._v(" "),e("li",[s._v("打开你自己的Chrome浏览器，输入该链接，然后会进入DevTool提供的专用调试环境")]),s._v(" "),e("li",[s._v("使用内存和CPU分析器，了解内存和计算资源的使用情况")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensions/images/developing-extensions/chrome-devtools.png",alt:"chrome-devtools"}})]),s._v(" "),e("h2",{attrs:{id:"问题追踪"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题追踪"}},[s._v("#")]),s._v(" 问题追踪")]),s._v(" "),e("p",[s._v("当你自己的的插件或者市场上的插件出现问题时，你可以参考这些建议进行问题追踪：")]),s._v(" "),e("h4",{attrs:{id:"禁用插件-启动vs-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#禁用插件-启动vs-code"}},[s._v("#")]),s._v(" 禁用插件，启动VS Code")]),s._v(" "),e("p",[s._v("通过"),e("code",[s._v("--disable-extensions")]),s._v("命令行，禁用VS Code会话中的所有插件。这个方式可以帮你逐步缩小问题范围——到底是插件问题，还是VS Code本身的问题。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("code --disable-extensions\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"使用开发工具控制台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用开发工具控制台"}},[s._v("#")]),s._v(" 使用开发工具控制台")]),s._v(" "),e("p",[s._v("如果你安装的插件不能正常工作，第一步工作最好是先检查一下VS Code"),e("strong",[s._v("开发者工具")]),s._v("的Console面板。插件作者可能在开发插件的时候已经添加了一些日志——VS Code 运行于Electron之上，所以你可以通过Chrome"),e("strong",[s._v("开发者工具")]),s._v("获得有力的支持。")]),s._v(" "),e("p",[s._v("通过"),e("strong",[s._v("帮助")]),s._v(">"),e("strong",[s._v("切换开发人员工具")]),s._v("（Windows/Linux："),e("code",[s._v("Ctrl + Shift + I")]),s._v("，macOS："),e("code",[s._v("Cmd + Shift + I")]),s._v("）打开"),e("strong",[s._v("开发工具")]),s._v("然后选择"),e("strong",[s._v("Console")]),s._v("标签。试着运行插件的功能，检查Console的输出。你可以使用"),e("code",[s._v("console.log")]),s._v("输出各类信息以及VS Code扩展环境抛出的详细异常。")]),s._v(" "),e("p",[s._v("?> **开发者小贴士：**当你制作插件的时候，请为用户提供有用的日志信息，你给用户的信息越多，用户越能够独立地解决问题。好的日志也同样能帮你快速地找到真正的问题所在。")]),s._v(" "),e("h4",{attrs:{id:"重装插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重装插件"}},[s._v("#")]),s._v(" 重装插件")]),s._v(" "),e("p",[s._v("有时候安装插件会失败或者报错，所以任何插件不能正常工作的时候，你都可以尝试卸载然后重装插件的方式来解决。VS Code提供了一个非常方便的命令"),e("strong",[s._v("Developer: Reinstall Extension")]),s._v("，输入这串命令之后，你可以在下拉框里选择你要重装的插件，最后按照指示重载VS Code就好了。")]),s._v(" "),e("h4",{attrs:{id:"查看插件的readme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看插件的readme"}},[s._v("#")]),s._v(" 查看插件的README")]),s._v(" "),e("p",[s._v("为了正常运行，有些插件会有一些其他的依赖，比如独立的语法检查器、编译器、自定义的配置文件等。因此在侧边栏"),e("strong",[s._v("插件")]),s._v("中点击某个插件后显示的"),e("strong",[s._v("插件详情")]),s._v("页面会非常有用，它就是插件的"),e("strong",[s._v("README")]),s._v("，其中可能包含了插件的配置和使用方式。")]),s._v(" "),e("h2",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[s._v("#")]),s._v(" FAQ")]),s._v(" "),e("p",[e("strong",[s._v("问：我怎么在插件里使用VS Code新版本引入的API？")])]),s._v(" "),e("p",[s._v("答：如果你想用最新的VS Code API，你可以在插件的"),e("code",[s._v("package.json")]),s._v("中的"),e("code",[s._v("engines")]),s._v("声明你想要用的引擎版本。")]),s._v(" "),e("p",[s._v("步骤如下：")]),s._v(" "),e("ul",[e("li",[s._v("在"),e("code",[s._v("package.json")]),s._v("中的"),e("code",[s._v("engines")]),s._v("字段设置你的插件所需要的最低VS Code版本")]),s._v(" "),e("li",[s._v("在"),e("code",[s._v("package.json")]),s._v("中添加"),e("code",[s._v("postinstall")]),s._v("脚本："),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"postinstall"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node ./node_modules/vscode/bin/install"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[s._v("在你的插件根目录下输入"),e("code",[s._v("npm install")])]),s._v(" "),e("li",[e("code",[s._v("vscode")]),s._v("模块根据"),e("code",[s._v("engine")]),s._v("中声明的版本下载对应的"),e("code",[s._v("vscode.d.ts")])]),s._v(" "),e("li",[s._v("回到VS Code，用代码补全验证是否出现了你想要的API提示")])]),s._v(" "),e("h2",{attrs:{id:"下一步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[s._v("#")]),s._v(" 下一步")]),s._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/extension-authoring/testing-extensions.html"}},[s._v("测试你的插件")]),s._v(" - 学习如何写单元测试和集成测试。")],1),s._v(" "),e("li",[e("RouterLink",{attrs:{to:"/extension-authoring/publish-extension.html"}},[s._v("发布工具")]),s._v(" - 用vsce命令行工具发布你的插件。")],1),s._v(" "),e("li",[e("RouterLink",{attrs:{to:"/extensibility-reference/extension-manifest.html"}},[s._v("插件配置清单")]),s._v(" - VS Code插件清单文件参阅。")],1),s._v(" "),e("li",[e("RouterLink",{attrs:{to:"/extensibility-reference/vscode-api.html"}},[s._v("插件API")]),s._v(" - 学习更多VS Code扩展性API。")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);