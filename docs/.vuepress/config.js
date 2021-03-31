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
        children: [
          ['/typeScript/', '入门'],
        ]
      },
      {
        title: 'Vue',
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 0, // 可选的, 默认值是 1
        children: [
          ['/vue/', '目录'],
          ['/vue/source/',"vue源码"],
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
          ['/devops/ci/', 'CI持续集成'],
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
