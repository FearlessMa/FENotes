(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{473:function(e,t,v){"use strict";v.r(t);var i=v(31),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"插件开发准则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#插件开发准则"}},[e._v("#")]),e._v(" 插件开发准则")]),e._v(" "),v("h2",{attrs:{id:"架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[e._v("#")]),e._v(" 架构")]),e._v(" "),v("p",[e._v("VS Code UI 包含了两类元素：容器和容器项。容器是指视图的顶层层级，它包括：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/architecture-groups.png",alt:"Overview of Visual Studio Code containers elements"}})]),e._v(" "),v("ol",[v("li",[e._v("活动栏("),v("a",{attrs:{href:"/references/extension-guidelines#%E8%A7%86%E5%9B%BE%E5%AE%B9%E5%99%A8"}},[e._v("Activiti Bar")]),e._v(")")]),e._v(" "),v("li",[e._v("侧边栏(Sidebar)")]),e._v(" "),v("li",[e._v("编辑器(Editor)")]),e._v(" "),v("li",[e._v("面板(Panel)")]),e._v(" "),v("li",[e._v("状态栏(Status Bar)")])]),e._v(" "),v("p",[e._v("容器项则在容器的内部，他们的种类就很丰富了：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/architecture-sections.png",alt:"Overview of Visual Studio Code item elements"}})]),e._v(" "),v("ol",[v("li",[e._v("视图容器(View Container)")]),e._v(" "),v("li",[e._v("视图("),v("a",{attrs:{href:"/references/extension-guidelines#%E8%A7%86%E5%9B%BE"}},[e._v("View")]),e._v(")")]),e._v(" "),v("li",[e._v("视图工具区(View Toolbar)")]),e._v(" "),v("li",[e._v("侧边栏工具区(Sidebar Toolbar)")]),e._v(" "),v("li",[e._v("编辑器工具区(Editor Toolbar)")]),e._v(" "),v("li",[e._v("面板工具区(Pannel Toolbar)")]),e._v(" "),v("li",[e._v("状态栏项("),v("a",{attrs:{href:"/references/extension-guidelines#%E7%8A%B6%E6%80%81%E6%A0%8F"}},[e._v("Status Bar Item")]),e._v(")")])]),e._v(" "),v("h2",{attrs:{id:"通知框"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通知框"}},[e._v("#")]),e._v(" 通知框")]),e._v(" "),v("p",[v("a",{attrs:{href:"/extension-capabilities/common-capabilities#display-notifications"}},[e._v("通知框")]),e._v(" 会从 VS Code 右下角弹出，它可以展示一些简要的信息。你能够设置的通知类型有三种：")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api#window.showInformationMessage",target:"_blank",rel:"noopener noreferrer"}},[e._v("信息提示"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api#window.showWarningMessage",target:"_blank",rel:"noopener noreferrer"}},[e._v("警告提示"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api#window.showErrorMessage",target:"_blank",rel:"noopener noreferrer"}},[e._v("错误提示"),v("OutboundLink")],1)])]),e._v(" "),v("p",[e._v("不要过多地发送通知，以免分散用户的注意力。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/notification-info.png",alt:"Information notification"}})]),e._v(" "),v("p",[v("em",[e._v("这条通知是用户"),v("strong",[e._v("更新版本")]),e._v("后弹出的，注意这个通知中仅仅展示了信息不含任何操作。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/notification-warning.png",alt:"Warning notification"}})]),e._v(" "),v("p",[v("em",[e._v("这个例子中带有一个黄色的高亮警告，附带 3 个按钮——它要求用户进行介入处理。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/notification-error.png",alt:"Error notification"}})]),e._v(" "),v("p",[v("em",[e._v("这个例子是无操作的错误通知。")])]),e._v(" "),v("p",[e._v("✔建议")]),e._v(" "),v("ul",[v("li",[e._v("发送通知的时候不要过分吸引用户的注意力")]),e._v(" "),v("li",[e._v("为每个通知添加 "),v("strong",[e._v("不要再提示")]),e._v(" 按钮")]),e._v(" "),v("li",[e._v("短时间内只提示一次")])]),e._v(" "),v("p",[e._v("❌  不要")]),e._v(" "),v("ul",[v("li",[e._v("发送重复通知")]),e._v(" "),v("li",[e._v("用于促销广告")]),e._v(" "),v("li",[e._v("插件首次安装后用户收集用户反馈")]),e._v(" "),v("li",[e._v("没有必要的操作还硬加按钮")])]),e._v(" "),v("h3",{attrs:{id:"进度通知"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进度通知"}},[e._v("#")]),e._v(" 进度通知")]),e._v(" "),v("p",[e._v("当你需要展示一个不知何时才能完成的任务进度时（比如：初始化环境），你可以使用进度通知。这种类型的通知应该作为当前上下文（在视图或者编辑器内）处理进度通知类型的最后手段。")]),e._v(" "),v("p",[e._v("✔建议")]),e._v(" "),v("ul",[v("li",[e._v("提供一个查看详情的链接（比如进度日志）")]),e._v(" "),v("li",[e._v("处理过程中给出信息（比如：初始化、构建，等等）")]),e._v(" "),v("li",[e._v("提供取消操作（如果可用的话）")]),e._v(" "),v("li",[e._v("如果有超时场景，提供倒计时")])]),e._v(" "),v("p",[e._v("❌  不要")]),e._v(" "),v("ul",[v("li",[e._v("不销毁进度通知")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/notification-progress.png",alt:"Progress notification"}})]),e._v(" "),v("p",[v("em",[e._v("这个例子演示了远程连接初始化时的进度通知，它同时也提供了输出日志（details）")])]),e._v(" "),v("h2",{attrs:{id:"视图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#视图"}},[e._v("#")]),e._v(" 视图")]),e._v(" "),v("p",[v("a",{attrs:{href:"/references/contribution-points#contributesviews"}},[e._v("视图")]),e._v("是内容的容器，它们会出现在注入侧边栏或者面板这样的地方。视图可以包含树视图或者自定义视图，这些视图可以包含视图操作。视图可被用户调整位置，比如放到其他视图、活动栏和面板中。请控制你的视图数量以便其他插件的视图还有空间展示。")]),e._v(" "),v("p",[e._v("✔建议")]),e._v(" "),v("ul",[v("li",[e._v("如果可以的话，使用现有的图标")]),e._v(" "),v("li",[e._v("为语言文件使用文件图标")]),e._v(" "),v("li",[e._v("用树视图展示数据")]),e._v(" "),v("li",[e._v("为每个视图提供活动栏图标")]),e._v(" "),v("li",[e._v("控制视图数量最小化")]),e._v(" "),v("li",[e._v("控制名称长度最小化")]),e._v(" "),v("li",[e._v("克制地使用自定义 webview 视图")])]),e._v(" "),v("p",[e._v("❌  不要")]),e._v(" "),v("ul",[v("li",[e._v("对已有功能重新造轮子")]),e._v(" "),v("li",[e._v("使用树视图项作为唯一的操作入口（如，搜索栏）")]),e._v(" "),v("li",[e._v("非必要的情况下也使用自定义 webview")]),e._v(" "),v("li",[e._v("在编辑器中使用视图容器装载 webview")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/views-example.png",alt:"Views example"}})]),e._v(" "),v("p",[v("em",[e._v("这个例子使用了树视图展示一组测试的测试状态。每种测试结果都有其唯一图标类型与之对应。")])]),e._v(" "),v("h3",{attrs:{id:"视图位置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#视图位置"}},[e._v("#")]),e._v(" 视图位置")]),e._v(" "),v("p",[e._v("视图可被放在"),v("a",{attrs:{href:"/references/contribution-points#contributesviews"}},[e._v("现有的视图容器")]),e._v("中，比如文件管理器、源管理器(SCM)和调试视图容器中。你也可以在活动栏中添加自定义视图容器，然后再往里添加视图。另外，视图可被添加到任何面板或者他们自己所属的自定义视图容器中。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/views-locations.png",alt:"View locations"}})]),e._v(" "),v("h3",{attrs:{id:"视图容器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#视图容器"}},[e._v("#")]),e._v(" 视图容器")]),e._v(" "),v("p",[v("a",{attrs:{href:"/references/contribution-points#contributesviewsContainers"}},[e._v("视图容器")]),e._v("是活动栏的一部分，每个容器都有其独有的图标。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/view-container.png",alt:"View Container"}})]),e._v(" "),v("p",[e._v("这个例子用了一个边框图标来展示自定义视图容器。")]),e._v(" "),v("h3",{attrs:{id:"视图中的进度条"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#视图中的进度条"}},[e._v("#")]),e._v(" 视图中的进度条")]),e._v(" "),v("p",[e._v("如果你的视图在 源(SCM)视图容器中，你也可以"),v("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api#ProgressLocation",target:"_blank",rel:"noopener noreferrer"}},[e._v("显示进度条"),v("OutboundLink")],1)]),e._v(" "),v("h3",{attrs:{id:"欢迎视图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#欢迎视图"}},[e._v("#")]),e._v(" 欢迎视图")]),e._v(" "),v("p",[e._v("当视图没有任何内容时，你可以"),v("a",{attrs:{href:"/references/contribution-points#contributesviewsWelcome"}},[e._v("添加一些内容来引导用户")]),e._v("如何使用你的插件。欢迎视图支持链接和图标。")]),e._v(" "),v("p",[e._v("✔建议")]),e._v(" "),v("ul",[v("li",[e._v("仅在必要时使用欢迎视图")]),e._v(" "),v("li",[e._v("如有需要可使用链接而不是按钮")]),e._v(" "),v("li",[e._v("按钮仅用于基础性的操作")]),e._v(" "),v("li",[e._v("描述清楚链接指向")]),e._v(" "),v("li",[e._v("控制内容的长度")]),e._v(" "),v("li",[e._v("控制欢迎视图的数量")]),e._v(" "),v("li",[e._v("控制视图中的按钮数量")])]),e._v(" "),v("p",[e._v("❌  不要")]),e._v(" "),v("ul",[v("li",[e._v("非必要的场景中也使用按钮")]),e._v(" "),v("li",[e._v("将欢迎视图当成销售页面")]),e._v(" "),v("li",[e._v('每个链接的标题都叫"查看更多"')])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/welcome-views.png",alt:"Welcome Views"}})]),e._v(" "),v("p",[e._v("这个例子使用了一个基础按钮，其他视图则包含了期待用户知晓的具体文档链接。")]),e._v(" "),v("h2",{attrs:{id:"webviews"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webviews"}},[e._v("#")]),e._v(" Webviews")]),e._v(" "),v("p",[e._v("如果你需要展示的自定义功能超出了VS Code API 的能力，那么你可以使用完全可定制的 "),v("a",{attrs:{href:"/extension-guides/webview"}},[e._v("webview")]),e._v("。再次提示开发者：仅在必要时使用 webview。")]),e._v(" "),v("p",[e._v("✔建议")]),e._v(" "),v("ul",[v("li",[e._v("仅在绝对必要时使用 webview")]),e._v(" "),v("li",[e._v("在合适的场景中启动你的插件")]),e._v(" "),v("li",[e._v("为激活窗口打开 webview")]),e._v(" "),v("li",[e._v("确保视图中的所有元素都是可定制主题的（查看 "),v("a",{attrs:{href:"https://github.com/microsoft/vscode-extension-samples/blob/main/webview-view-sample/media/main.css",target:"_blank",rel:"noopener noreferrer"}},[e._v("webview-view-sample"),v("OutboundLink")],1),e._v("和"),v("a",{attrs:{href:"/references/theme-color"}},[e._v("color tokens")]),e._v("文档）")]),e._v(" "),v("li",[e._v("确保你的视图遵循"),v("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/accessibility",target:"_blank",rel:"noopener noreferrer"}},[e._v("可访问性指南"),v("OutboundLink")],1),e._v("(色彩对比度、ARIA 标签、键盘导航)")]),e._v(" "),v("li",[e._v("在视图的工具区使用命令操作")])]),e._v(" "),v("p",[e._v("❌  不要")]),e._v(" "),v("ul",[v("li",[e._v("用于广告宣传（包括升级、捐助等等）")]),e._v(" "),v("li",[e._v("作为插件的向导页面")]),e._v(" "),v("li",[e._v("在所有窗口中打开")]),e._v(" "),v("li",[e._v("插件升级后打开（请使用通知）")]),e._v(" "),v("li",[e._v("添加和编辑器或者工作区无关的功能")]),e._v(" "),v("li",[e._v("重复发明轮子（比如：欢迎页、设置、配置等等）")])]),e._v(" "),v("h3",{attrs:{id:"例子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[e._v("#")]),e._v(" 例子")]),e._v(" "),v("p",[v("strong",[e._v("浏览器预览")]),e._v("\n这个插件在编辑器旁边打开了一个浏览器效果预览\n"),v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/webview-browser.png",alt:"Weview Sample - Browser"}})]),e._v(" "),v("p",[v("strong",[e._v("Pull Request")]),e._v("\n这个插件为自定义树视图中的工作区仓库展示了一个 Pull Request 页面，它用 webview 显示了 PR 的详细信息。")]),e._v(" "),v("p",[v("strong",[e._v("初次使用培训")]),e._v("\n这个插件打开了一个快速启动页面，它包含了有用的操作、链接和更多信息。这个 Webview 仅仅在用户首次打开特定文件时展示，帮助用户检查是否遵循了特定步骤（比如安装或创建一个文件时）。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/webview-onboarding.png",alt:"Webview Sample - Onboarding"}})]),e._v(" "),v("h3",{attrs:{id:"webview-视图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webview-视图"}},[e._v("#")]),e._v(" webview 视图")]),e._v(" "),v("p",[e._v("你可以在任意视图容器（侧边栏和面板）中添加 webview，这样的 webview 被称为 "),v("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api#WebviewView",target:"_blank",rel:"noopener noreferrer"}},[e._v("webview 视图"),v("OutboundLink")],1),e._v("。它的使用方式和常规的 webview 是一样的。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/webview-view.png",alt:"Webview View"}})]),e._v(" "),v("p",[e._v("这个 webview 视图内容展示了创建一个 PR 所需的下拉菜单、输入框和按钮。")]),e._v(" "),v("h2",{attrs:{id:"状态栏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态栏"}},[e._v("#")]),e._v(" 状态栏")]),e._v(" "),v("p",[v("a",{attrs:{href:"/extension-capabilities/extending-workbench#%E7%8A%B6%E6%80%81%E6%A0%8F%E9%A1%B9"}},[e._v("状态栏")]),e._v("位于 VS Code 工作台底部，用于展示和你的工作区相关的信息和操作。状态栏项分为两类：基础的（左）和次级的（右）。状态栏中和整个工作区（状态、问题/警告、同步状态）相关的位于左边，次级状态或者上下文相关的（语言、间距、反馈）处于右边。注意控制添加的状态栏项目数，为其他插件腾出空间。")]),e._v(" "),v("p",[e._v("✔建议")]),e._v(" "),v("ul",[v("li",[e._v("使用短的文本标签")]),e._v(" "),v("li",[e._v("仅在必要时使用图标")]),e._v(" "),v("li",[e._v("使用语义清晰的图标")]),e._v(" "),v("li",[e._v("把首要（全局）项目放在左边")]),e._v(" "),v("li",[e._v("把次要（上下文）项目放在右边")])]),e._v(" "),v("p",[e._v("❌  不要")]),e._v(" "),v("ul",[v("li",[e._v("添加自定义颜色")]),e._v(" "),v("li",[e._v("添加的图标数量在 1 个以上（除非必要）")]),e._v(" "),v("li",[e._v("添加的状态栏项数量在 1 个以上（除非必要）")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/statusbar-item.png",alt:"Status Bar Item"}})]),e._v(" "),v("p",[v("em",[e._v("这个例子中，状态栏项的信息和整个工作区相关，所以展示在左边")])]),e._v(" "),v("h3",{attrs:{id:"进度状态栏项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进度状态栏项目"}},[e._v("#")]),e._v(" 进度状态栏项目")]),e._v(" "),v("p",[e._v("当需要展示静默进度（进度在后台处理）时，建议用带有加载图标（你可以添加旋转动画）的状态栏项来展示。如果进度状态是需要用户注意到的，我们建议你将其提升到通知维度。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/status-bar-progress.png",alt:"Status Bar Progress"}})]),e._v(" "),v("p",[v("em",[e._v("这个例子中，状态栏展示静默进度")])]),e._v(" "),v("h3",{attrs:{id:"错误状态栏项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#错误状态栏项"}},[e._v("#")]),e._v(" 错误状态栏项")]),e._v(" "),v("p",[e._v("如果你需要展示的项目出于警示目的需要高亮，你可以使用错误状态栏项。请将错误状态栏项作为特殊场景下的最后手段。\n"),v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/status-bar-error.png",alt:"Status Bar Error"}})]),e._v(" "),v("p",[v("em",[e._v("这个例子中，错误状态栏项展示了文件中的代码错误")])]),e._v(" "),v("h2",{attrs:{id:"快速选择"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快速选择"}},[e._v("#")]),e._v(" 快速选择")]),e._v(" "),v("p",[v("a",{attrs:{href:"/extension-capabilities/common-capabilities#quick-pick"}},[e._v("快速选择")]),e._v("是一个展示操作和接受用户输入的简易手段。在选择配置、过滤内容或者从列表中挑选项目时尤为有用。\n"),v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/quickpick.png",alt:"Quick Pick"}})]),e._v(" "),v("p",[v("em",[e._v("快速选择可以包含非常多的选项。而且选项可以由图标、详情和标签组成，而且还包括默认项。在这个例子的顶部，你可以看到多步骤模式下的后退、恢复和前进等操作。")])]),e._v(" "),v("p",[e._v("✔建议")]),e._v(" "),v("ul",[v("li",[e._v("使用语义清晰的图标")]),e._v(" "),v("li",[e._v("使用具体的描述展示当前项（如果需要的话）")]),e._v(" "),v("li",[e._v("使用详情提供额外（简短）的说明")]),e._v(" "),v("li",[e._v("在需要多选输入的场景中使用多步骤模式（比如：初始化向导）")]),e._v(" "),v("li",[e._v("提供一个创建更多的选项（如果需要的话）")])]),e._v(" "),v("p",[e._v("❌  不要")]),e._v(" "),v("ul",[v("li",[e._v("重复造轮子")]),e._v(" "),v("li",[e._v("多种选项公用一个图标")]),e._v(" "),v("li",[e._v("列表中超过 6 种图标")])]),e._v(" "),v("h2",{attrs:{id:"编辑器操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编辑器操作"}},[e._v("#")]),e._v(" 编辑器操作")]),e._v(" "),v("p",[e._v("编辑器的工具区会展示"),v("a",{attrs:{href:"/references/contribution-points#contributescommands"}},[e._v("编辑器操作")]),e._v("。你可以添加图标作为快速操作，或者在悬浮菜单中添加菜单项（...）。")]),e._v(" "),v("p",[e._v("✔建议")]),e._v(" "),v("ul",[v("li",[e._v("在特定上下文场景中展示操作")]),e._v(" "),v("li",[e._v("尽量使用内置图标库中的图标")]),e._v(" "),v("li",[e._v("悬浮菜单中的项目应作为二级操作")])]),e._v(" "),v("p",[e._v("❌  不要")]),e._v(" "),v("ul",[v("li",[e._v("添加多类图标")]),e._v(" "),v("li",[e._v("添加自定义颜色")]),e._v(" "),v("li",[e._v("使用 emoji")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/editor-actions.png",alt:"Editor Actions"}})]),e._v(" "),v("p",[v("em",[e._v("仅在 HTML 页面中展示这个图标来表示加载页面预览")])]),e._v(" "),v("h2",{attrs:{id:"上下文菜单"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#上下文菜单"}},[e._v("#")]),e._v(" 上下文菜单")]),e._v(" "),v("p",[v("a",{attrs:{href:"/references/contribution-points#contributesmenus"}},[e._v("菜单项")]),e._v("会展示在视图、操作、右击菜单中。要额外注意菜单组中的菜单项要保持其一致性。如果你的插件操作和文件相关，请将操作配置到文件管理器菜单中（适时）。如果插件是针对特定文件类型的，请仅仅在此类场景中展示操作。")]),e._v(" "),v("p",[e._v("✔建议")]),e._v(" "),v("ul",[v("li",[e._v("当场景合适时才展示操作")]),e._v(" "),v("li",[e._v("相似操作分组")]),e._v(" "),v("li",[e._v("一个组中的操作过多时，使用子菜单")])]),e._v(" "),v("p",[e._v("❌  不要")]),e._v(" "),v("ul",[v("li",[e._v("在所有场景中都展示操作")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/context-menu.png",alt:"Context Menu"}})]),e._v(" "),v("p",[v("em",[e._v("将 "),v("strong",[e._v("Copy Github Link")]),e._v(" 和其他复制命令放在一起。这个操作只会在 GitHub 仓库项目中可用")])]),e._v(" "),v("h2",{attrs:{id:"设置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[e._v("#")]),e._v(" 设置")]),e._v(" "),v("p",[v("a",{attrs:{href:"/references/contribution-points#contributesconfiguration"}},[e._v("设置")]),e._v("是用户配置插件的入口。设置可以是输入框、布尔值、下拉菜单、列表、键值对。如果你的插件要求用户配置特定设置，你可以打开设置 UI 然后用设置 ID 查询你的插件设置。")]),e._v(" "),v("p",[e._v("✔建议")]),e._v(" "),v("ul",[v("li",[e._v("为每项设置添加默认值")]),e._v(" "),v("li",[e._v("为每项设置添加清晰的描述")]),e._v(" "),v("li",[e._v("为复杂设置添加文档链接")]),e._v(" "),v("li",[e._v("为相关设置添加链接")]),e._v(" "),v("li",[e._v("当用户需要配置特定设置项时，提供设置 ID 链接")])]),e._v(" "),v("p",[e._v("❌  不要")]),e._v(" "),v("ul",[v("li",[e._v("创建你自己的设置页面/webview")]),e._v(" "),v("li",[e._v("使用超长的描述")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/settings.png",alt:"Settings"}})]),e._v(" "),v("p",[v("em",[e._v("使用设置 ID 链接到特定设置项上")])]),e._v(" "),v("h2",{attrs:{id:"命令面板"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#命令面板"}},[e._v("#")]),e._v(" 命令面板")]),e._v(" "),v("p",[v("a",{attrs:{href:"/references/contribution-points#contributescommands"}},[e._v("命令面板")]),e._v("可以找到所有命令。注意：为你的命令使用清晰的名称和标签，便于用户查找。")]),e._v(" "),v("p",[e._v("✔建议")]),e._v(" "),v("ul",[v("li",[e._v("必要时添加快捷键")]),e._v(" "),v("li",[e._v("为命令添加清晰的名字")]),e._v(" "),v("li",[e._v("为同类命令分组")])]),e._v(" "),v("p",[e._v("❌  不要")]),e._v(" "),v("ul",[v("li",[e._v("重写已有的快捷键")]),e._v(" "),v("li",[e._v("命名命令时使用 emoji")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://code.visualstudio.com/assets/api/references/guidelines/command-palette.png",alt:"Command Palette"}})]),e._v(" "),v("p",[v("em",[e._v('命令被分组到 "Debug" 类目中， 而且每个命令都有清晰的名字，少部分命令有其快捷键')])])])}),[],!1,null,null,null);t.default=s.exports}}]);