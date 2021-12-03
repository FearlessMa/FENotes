(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{408:function(s,t,n){"use strict";n.r(t);var e=n(31),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"激活事件-package-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#激活事件-package-json"}},[s._v("#")]),s._v(" 激活事件 - package.json")]),s._v(" "),n("p",[s._v("在VS Code中，插件都是懒加载的，所以你得为VS Code提供插件激活的时机。 我们提供了下列激活时机：")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"extensibility-reference/activation-events#activationeventsonlanguage"}},[n("code",[s._v("onLanguage:${language}")])])]),s._v(" "),n("li",[n("a",{attrs:{href:"extensibility-reference/activation-events#activationeventsoncommand"}},[n("code",[s._v("onCommand:${command}")])])]),s._v(" "),n("li",[n("a",{attrs:{href:"extensibility-reference/activation-events#activationeventsondebug"}},[n("code",[s._v("onDebug")])])]),s._v(" "),n("li",[n("a",{attrs:{href:"extensibility-reference/activation-events#activationeventsworkspacecontains"}},[n("code",[s._v("workspaceContains:${toplevelfilename}")])])]),s._v(" "),n("li",[n("a",{attrs:{href:"extensibility-reference/activation-events#activationeventsonfilesystem"}},[n("code",[s._v("onFileSystem:${scheme}")])])]),s._v(" "),n("li",[n("a",{attrs:{href:"extensibility-reference/activation-events#activationeventsonview"}},[n("code",[s._v("onView:${viewId}")])])]),s._v(" "),n("li",[n("a",{attrs:{href:"extensibility-reference/activation-events#activationeventsonuri"}},[n("code",[s._v("onUri")])])]),s._v(" "),n("li",[n("a",{attrs:{href:"extensibility-reference/activation-events#activationevents"}},[n("code",[s._v("*")])])])]),s._v(" "),n("p",[s._v("我们在"),n("RouterLink",{attrs:{to:"/VsCodePlugin/extensibility-reference/extensibility-reference/extension-manifest.html"}},[n("code",[s._v("package.json")]),s._v(" 插件清单")]),s._v("中提供了一个插件最少所需的激活事件。")],1),s._v(" "),n("h2",{attrs:{id:"activationevents-onlanguage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#activationevents-onlanguage"}},[s._v("#")]),s._v(" activationEvents.onLanguage")]),s._v(" "),n("p",[s._v("特定语言文件打开时激活：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("...\n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"activationEvents"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"onLanguage:python"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("code",[s._v("onLanguage")]),s._v("只支持"),n("RouterLink",{attrs:{to:"/docs/languages/identifiers.html"}},[s._v("语言标识符")]),s._v("中的值。")],1),s._v(" "),n("p",[s._v("在"),n("code",[s._v("activationEvents")]),s._v("数组中声明多个"),n("code",[s._v("onLanguage")]),s._v("入口实现多语言支持")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"activationEvents"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"onLanguage:json"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"onLanguage:markdown"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"onLanguage:typescript"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"activationevents-oncommand"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#activationevents-oncommand"}},[s._v("#")]),s._v(" activationEvents.onCommand")]),s._v(" "),n("p",[s._v("当调用命令时激活事件：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("...\n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"activationEvents"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"onCommand:extension.sayHello"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"activationevents-ondebug"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#activationevents-ondebug"}},[s._v("#")]),s._v(" activationEvents.onDebug")]),s._v(" "),n("p",[s._v("调试会话（debug session）启动前激活：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("...\n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"activationEvents"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"onDebug"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"ondebuginitialconfigurations-and-ondebugresolve"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ondebuginitialconfigurations-and-ondebugresolve"}},[s._v("#")]),s._v(" onDebugInitialConfigurations and onDebugResolve")]),s._v(" "),n("p",[s._v("这是两个粒度更细的激活事件：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("onDebugInitialConfigurations")]),s._v(" 在"),n("code",[s._v("DebugConfigurationProvider")]),s._v("中的 "),n("code",[s._v("provideDebugConfigurations")]),s._v("方法之前触发。")]),s._v(" "),n("li",[n("code",[s._v("onDebugResolve:type")]),s._v(" 在"),n("code",[s._v("DebugConfigurationProvider")]),s._v("的"),n("code",[s._v("resolveDebugConfiguration")]),s._v("方法之前触发。")])]),s._v(" "),n("p",[n("strong",[s._v("首要原则：")]),s._v(" 如果调试插件的激活事件比较轻量，那么就用"),n("code",[s._v("onDebug")]),s._v("。相反，根据"),n("code",[s._v("DebugConfigurationProvider")]),s._v("实现的对应方法（ "),n("code",[s._v("provideDebugConfigurations")]),s._v("或"),n("code",[s._v("resolveDebugConfiguration")]),s._v("），使用"),n("code",[s._v("onDebugInitialConfigurations")]),s._v("或"),n("code",[s._v("onDebugResolve")]),s._v(" 。参见 "),n("RouterLink",{attrs:{to:"/docs/extensionAPI/api-debugging.html#debug-type-specific-hooks"}},[s._v("Debug Type specific Hooks")]),s._v("。")],1),s._v(" "),n("h2",{attrs:{id:"activationevents-workspacecontains"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#activationevents-workspacecontains"}},[s._v("#")]),s._v(" activationEvents.workspaceContains")]),s._v(" "),n("p",[s._v("文件夹打开后，且文件夹中至少包含一个符合glob模式的文件时触发。")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("...\n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"activationEvents"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"workspaceContains:**/.editorconfig"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"activationevents-onfilesystem"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#activationevents-onfilesystem"}},[s._v("#")]),s._v(" activationEvents.onFileSystem")]),s._v(" "),n("p",[s._v("从*协议（scheme）*打开的文件或文件夹打开时触发。通常是"),n("code",[s._v("file")]),s._v("-协议，也可以用自定义的文件供应器函数替换掉，比如"),n("code",[s._v("ftp")]),s._v("、"),n("code",[s._v("ssh")]),s._v("。")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("...\n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"activationEvents"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"onFileSystem:sftp"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"activationevents-onview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#activationevents-onview"}},[s._v("#")]),s._v(" activationEvents.onView")]),s._v(" "),n("p",[s._v("指定的视图id展开时触发：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("...\n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"activationEvents"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"onView:nodeDependencies"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"activationevents-onuri"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#activationevents-onuri"}},[s._v("#")]),s._v(" activationEvents.onUri")]),s._v(" "),n("p",[s._v("插件的系统级URI打开时触发。这个URI协议需要带上"),n("code",[s._v("vscode")]),s._v(" 或者 "),n("code",[s._v("vscode-insiders")]),s._v("协议。URI授权必须是插件的唯一标识，剩余的URI是可选的。")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("...\n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"activationEvents"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"onUri"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("如果 "),n("code",[s._v("vscode.git")]),s._v("插件定义了"),n("code",[s._v("onUri")]),s._v("激活事件，那么下列任意URI打开时就会触发：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("vscode://vscode.git/init")])]),s._v(" "),n("li",[n("code",[s._v("vscode://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2FMicrosoft%2Fvscode-vsce.git")])]),s._v(" "),n("li",[n("code",[s._v("vscode-insiders://vscode.git/init")]),s._v(" (for VS Code Insiders)")])]),s._v(" "),n("h2",{attrs:{id:"activationevents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#activationevents"}},[s._v("#")]),s._v(" activationEvents.*")]),s._v(" "),n("p",[s._v("当VS Code启动时触发。为了保证良好的用户体验，只在你的插件没有其他任何激活事件的前提下，添加这个激活事件。")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("...\n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"activationEvents"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("!> "),n("strong",[s._v("注意：")]),s._v(" 一个插件如果侦听了多个激活事件，那么最好用"),n("code",[s._v('"*"')]),s._v("替换掉。")]),s._v(" "),n("p",[s._v("!> "),n("strong",[s._v("注意：")]),s._v(" 插件"),n("strong",[s._v("必须")]),s._v("从它的主模块中输出一个"),n("code",[s._v("activate()")]),s._v("函数，当任意的激活事件触发时，VS Code会"),n("strong",[s._v("仅仅调用一次这个函数")]),s._v("。此外，插件也"),n("strong",[s._v("应该")]),s._v(" 导出一个"),n("code",[s._v("deactivate()")]),s._v("函数，当VS Code关闭时执行清理的任务。如果清理进程是异步的，插件的"),n("code",[s._v("deactivate()")]),n("strong",[s._v("必须")]),s._v("返回一个Promise。如果这个清理任务是同步的，那么"),n("code",[s._v("deactivate()")]),s._v("可以返回"),n("code",[s._v("undefined")]),s._v("。")]),s._v(" "),n("h2",{attrs:{id:"下一步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[s._v("#")]),s._v(" 下一步")]),s._v(" "),n("p",[s._v("学习更多VS Code扩展性模型，看看下列主题：")]),s._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/docs/extensionAPI/extension-manifest.html"}},[s._v("插件清单")]),s._v(" - VS Code package.json 插件清单文件参考")],1),s._v(" "),n("li",[n("RouterLink",{attrs:{to:"/docs/extensionAPI/extension-points.html"}},[s._v("发布内容配置点")]),s._v(" - VS Code 发布内容配置点参考")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);