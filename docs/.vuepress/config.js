module.exports = {
  title: 'FENotes',
  description: 'FENotes',
  dest: './dist',
  // base: '/',
  themeConfig: {
    editLinks: false,
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // sidebar: 'auto'
    lastUpdated: 'Last Updated', // string | boolean
    smoothScroll: true,
    sidebar: [
      {
        title: 'vue',
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          ['vue/', '目录'],
          {
            title: 'vue基础',
            sidebarDepth: 2,
            children: [['vue/vueBase/', '目录'], 'vue/vueBase/vueBase1']
          }
        ]
      }
    ]
  }
};
