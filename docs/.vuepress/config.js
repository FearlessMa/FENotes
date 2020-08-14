module.exports = {
  title: 'FENotes',
  description: 'FENotes',
  dest: './dist',
  base: '/FENotes/',
  // base: '/dist/',
  themeConfig: {
    editLinks: false,
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // sidebar: 'auto',
    // lastUpdated: 'Last Updated', // string | boolean
    smoothScroll: true,
    sidebar: [
      {
        title: 'js',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,
        children: [
          ['/js/', '目录'],
          {
            title: '日常笔记',
            sidebarDepth: 2,
            children: ['/js/notes/mouseWheel']
          }
        ]
      },
      {
        title: 'vue',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          ['/vue/', '目录'],
          {
            title: 'vue基础',
            sidebarDepth: 2,
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
            sidebarDepth: 2,
            children: [
              ['/vue/vueRouter/vueRouter', 'router基础'],
              ['/vue/vueRouter/vueRouter2', 'router守卫']
            ]
          },
          {
            title: 'vue技巧',
            sidebarDepth: 2,
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
        title: '工具',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,
        children: [
          ['/tools/', '目录'],
          ['/tools/markdown/', 'markdown图片自动上传']
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@alias': 'path/to/some/dir'
      }
    }
  }
};
