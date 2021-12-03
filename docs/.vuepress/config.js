module.exports = {
  title: 'FENotes',
  description: 'FENotes',
  dest: './dist',
  base: '/FENotes/',
  plugins: ['@vuepress/back-to-top'],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  // theme: 'antdocs',
  // base: '/dist/',
  themeConfig: {
    home: true,
    nav: [
      { text: '主页', link: '/js/' },
      { text: 'shell', link: '/shell/' },
      { text: 'java', link: '/java/' },
      { text: 'GitHub', link: 'https://github.com/FearlessMa/FENotes' }
    ],
    editLinks: false,
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // sidebar: 'auto',
    // lastUpdated: 'Last Updated', // string | boolean
    displayAllHeaders: false, // 显示所有页面的标题链接    默认值：false
    smoothScroll: true,
    sidebar: [
      {
        title: 'JavaScript',
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 0,
        children: [
          ['/js/', '目录'],
          {
            title: '日常笔记',
            sidebarDepth: 0,
            children: [
              '/js/notes/mouseWheel',
              'js/notes/closure',
              'js/notes/scopeChain',
              'js/notes/prototypeChain'
            ]
          }
        ]
      },
      {
        title: 'TypeScript',
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 0,
        children: [['/typeScript/', '入门']]
      },
      {
        title: 'Vue',
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 0, // 可选的, 默认值是 1
        children: [
          ['/vue/', '目录'],
          ['/vue/source/', 'vue源码'],
          {
            title: 'vue基础',
            sidebarDepth: 0,
            children: [
              // ['/vue/vueBase/', '目录'],
              '/vue/vueBase/vue基础入门一',
              '/vue/vueBase/vue基础入门二',
              '/vue/vueBase/vue基础入门三',
              '/vue/vueBase/vue基础入门四',
              '/vue/vueBase/vue基础入门五',
              '/vue/vueBase/vue单文件组件'
            ]
          },
          {
            title: 'vueRouter',
            sidebarDepth: 0,
            children: [
              ['/vue/vueRouter/vueRouter', 'router基础'],
              ['/vue/vueRouter/vueRouter2', 'router守卫']
            ]
          },
          {
            title: 'vue学习',
            sidebarDepth: 0,
            children: [
              ['/vue/other/', '目录'],
              '/vue/other/组件通信/vue组件通信',
              '/vue/other/指令实现v-model',
              '/vue/other/简单状态管理'
            ]
          }
        ]
      },

      {
        title: 'Webpack',
        collapsable: true,
        sidebarDepth: 0,
        children: [['/webpack/', '目录']]
      },
      {
        title: 'DevOps',
        collapsable: true,
        sidebarDepth: 0,
        children: [
          ['/devops/', '目录'],
          ['/devops/ci/', 'CI持续集成']
        ]
      },
      {
        title: 'MarkDown',
        collapsable: true,
        sidebarDepth: 0,
        children: [['/markdown/', '目录']]
      },
      {
        title: 'Tools',
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 0,
        children: [
          // ['/tools/', '目录'],
          // ['/tools/markdown/', 'MarkDown使用图床'],
          '/tools/devTools/'
        ]
      },
      {
        title: 'VsCodePlugin',
        // collapsable: true, // 可选的, 默认值是 true,
        // sidebarDepth: 0,
        children: [
          //     ◼️第一步
          //     * [你的第一个插件](/get-started/your-first-extension.md)
          //     * [解析插件结构](/get-started/extension-anatomy.md)
          //     * [小结](/get-started/wrapping-up.md)
          // * ◼️开发插件
          //     * [测试插件](/working-with-extensions/testing-extension.md)
          //     * [发布插件](/working-with-extensions/publish-extension.md)
          //     * [打包插件](/working-with-extensions/bundling-extension.md)
          //     * [持续集成](/working-with-extensions/continuous-integration.md)
          // * ◼️插件功能
          //     * [概述](/extension-capabilities/README.md)
          //     * [常用功能](/extension-capabilities/common-capabilities.md)
          //     * [主题](/extension-capabilities/theming.md)
          //     * [扩展工作台](/extension-capabilities/extending-workbench.md)
          // * ◼️插件指南
          //     * [概述](/extension-guides/README.md)
          //     * [命令](/extension-guides/command.md)
          //     * [色彩主题](/extension-guides/color-theme.md)
          //     * [文件图标主题](/extension-guides/file-icon-theme.md)
          //     * [产品图标主题](/extension-guides/product-icon-theme.md)
          //     * [树视图](/extension-guides/tree-view.md)
          //     * [Webview](/extension-guides/webview.md)
          //     * [笔记本](/extension-guides/notebook.md)
          //     * [虚拟文档](/extension-guides/virtual-documents.md)
          //     * [任务](/extension-guides/task-provider.md)
          //     * [源控制](/extension-guides/scm-provider.md)
          //     * [调试器插件](/extension-guides/debugger-extension.md)
          //     * [Markdown插件](/extension-guides/markdown-extension.md)
          //     * [自定义编辑器](/extension-guides/custom-editors.md)
          //     * [自定义数据插件](/extension-guides/custom-data-extension.md)
          // * ◼️语言插件
          //     * [概述](/language-extensions/)
          //     * [语法高亮](/language-extensions/syntax-highlight-guide.md)
          //     * [语义高亮](/language-extensions/semantic-highlight-guide.md)
          //     * [代码片段](/language-extensions/snippet-guide.md)
          //     * [语言配置](/language-extensions/language-configuration-guide.md)
          //     * [程序性语言特性](/language-extensions/programmatic-language-features.md)
          //     * [语言服务器](/language-extensions/language-server-extension-guide.md)
          //     * [嵌入语言](/language-extensions/embedded-languages.md)
          // * ◼️进阶主题
          //     * [插件主机](/advanced-topics/extension-host.md)
          //     * [远程开发](/advanced-topics/remote-extensions.md)
          //     * [使用不稳定的API](/advanced-topics/using-proposed-api.md)
          // * ️️◼️参考
          //     * [VS Code API](/references/vscode-api.md)
          //     * [发布内容配置](/references/contribution-points.md)
          //     * [激活事件](/references/activation-events.md)
          //     * [插件清单](/references/extension-manifest.md)
          //     * [命令](/references/commands.md)
          //     * [when 子句上下文](/references/when-clause-contexts.md)
          //     * [主题色彩](/references/theme-color.md)
          //     * [标签中的图标](/references/icons-in-labels.md)
          //     * [文档选择器](/references/document-selector.md)
          //     * [插件开发准则](/references/extension-guidelines.md)
          {
            title: '说明',
            sidebarDepth: 0,
            children: ['/VsCodePlugin/']
          },
          {
            title: '预备知识',
            sidebarDepth: 0,
            children: [
              [
                '/VsCodePlugin/preknowledge/first-step.md',
                '非JS开发者的第一步'
              ],
              [
                '/VsCodePlugin/preknowledge/variable-and-type.md',
                '认识Typescript-变量和类型'
              ],
              ['/VsCodePlugin/preknowledge/class.md', '认识Typescript-类'],
              [
                '/VsCodePlugin/preknowledge/interface-and-namespace.md',
                '认识Typescript-接口和命名空间'
              ],
              ['/VsCodePlugin/preknowledge/generics.md', '认识Typescript-泛型'],
              [
                '/VsCodePlugin/preknowledge/declaration-files.md',
                '认识Typescript-声明文件'
              ]
            ]
          },
          {
            title: '概述',
            sidebarDepth: 0,
            children: [['/VsCodePlugin/api/', '插件介绍']]
          },
          {
            title: '第一步',
            sidebarDepth: 0,
            children: [
              [
                '/VsCodePlugin/get-started/your-first-extension.md',
                '你的第一个插件'
              ],
              [
                '/VsCodePlugin/get-started/extension-anatomy.md',
                '解析插件结构'
              ],
              ['/VsCodePlugin/get-started/wrapping-up.md', '小结']
            ]
          },
          {
            title: '开发插件',
            sidebarDepth: 0,
            children: [
              [
                '/VsCodePlugin/working-with-extensions/testing-extension.md',
                '测试插件'
              ],
              [
                '/VsCodePlugin/working-with-extensions/publish-extension.md',
                '发布插件'
              ],
              [
                '/VsCodePlugin/working-with-extensions/bundling-extension.md',
                '打包插件'
              ],
              [
                '/VsCodePlugin/working-with-extensions/continuous-integration.md',
                '持续集成'
              ]
            ]
          },
          {
            title: '插件功能',
            sidebarDepth: 0,
            children: [
              ['/VsCodePlugin/extension-capabilities/', '概述'],
              [
                '/VsCodePlugin/extension-capabilities/common-capabilities.md',
                '常用功能'
              ],
              ['/VsCodePlugin/extension-capabilities/theming.md', '主题'],
              [
                '/VsCodePlugin/extension-capabilities/extending-workbench.md',
                '扩展工作台'
              ]
            ]
          },
          {
            title: '插件指南',
            sidebarDepth: 0,
            children: [
              ['/VsCodePlugin/extension-guides/', '概述'],
              ['/VsCodePlugin/extension-guides/command.md', '命令'],
              ['/VsCodePlugin/extension-guides/color-theme.md', '色彩主题'],
              ['/VsCodePlugin/extension-guides/file-icon-theme', '文件图标主题'],
              ['/VsCodePlugin/extension-guides/product-icon-theme', '产品图标主题'],
              ['/VsCodePlugin/extension-guides/tree-view', '树视图'],
              ['/VsCodePlugin/extension-guides/webview', 'Webview'],
              ['/VsCodePlugin/extension-guides/notebook', '笔记本'],
              ['/VsCodePlugin/extension-guides/virtual-documents', '虚拟文档'],
              ['/VsCodePlugin/extension-guides/task-provider', '任务'],
              ['/VsCodePlugin/extension-guides/scm-provider', '源控制'],
              ['/VsCodePlugin/extension-guides/debugger-extension', '调试器插件'],
              ['/VsCodePlugin/extension-guides/markdown-extension', 'Markdown插件'],
              ['/VsCodePlugin/extension-guides/custom-editors', '自定义编辑器'],
              ['/VsCodePlugin/extension-guides/custom-data-extension', '自定义数据插件'],
            ]
          },
          {
            title: '语言插件',
            sidebarDepth: 0,
            children: [
              ['/VsCodePlugin/language-extensions/', '概述'],
              ['/VsCodePlugin/language-extensions/syntax-highlight-guide', '语法高亮'],
              ['/VsCodePlugin/language-extensions/semantic-highlight-guide', '语义高亮'],
              ['/VsCodePlugin/language-extensions/snippet-guide', '代码片段'],
              ['/VsCodePlugin/language-extensions/language-configuration-guide', '语言配置'],
              ['/VsCodePlugin/language-extensions/programmatic-language-features', '程序性语言特性'],
              ['/VsCodePlugin/language-extensions/language-server-extension-guide', '语言服务器'],
              ['/VsCodePlugin/language-extensions/embedded-languages', '嵌入语言'],
            ]
          },
          {
            title: '进阶主题',
            sidebarDepth: 0,
            children: [
              ['/VsCodePlugin/advanced-topics/extension-host', '插件主机'],
              ['/VsCodePlugin/advanced-topics/remote-extensions', '远程开发'],
              ['/VsCodePlugin/advanced-topics/using-proposed-api', '使用不稳定的API'],
            ]
          },
          {
            title: '参考',
            sidebarDepth: 0,
            children: [
              ['/VsCodePlugin/references/vscode-api', 'VS Code API'],
              ['/VsCodePlugin/references/contribution-points', '发布内容配置'],
              ['/VsCodePlugin/references/activation-events', '激活事件'],
              ['/VsCodePlugin/references/extension-manifest', '插件清单'],
              ['/VsCodePlugin/references/commands', '命令'],
              ['/VsCodePlugin/references/when-clause-contexts', 'when 子句上下文'],
              ['/VsCodePlugin/references/theme-color', '主题色彩'],
              ['/VsCodePlugin/references/icons-in-labels', '标签中的图标'],
              ['/VsCodePlugin/references/document-selector', '文档选择器'],
              ['/VsCodePlugin/references/extension-guidelines', '插件开发准则'],
            ]
          },
        ]
      }
    ],
    //Git 仓库和编辑链接
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/FearlessMa/FENotes',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页'
  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@alias': 'path/to/some/dir'
      }
    }
  }
};
