module.exports = {
  base: '/stress/',
  dest: './dist',
  title: '压力之下，择要事为之',
  description: '压力，压力之下，择要事为之，电子书，世界卫生组织',
  head: [
    ['link', { rel: 'icon', href: '/images/icon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '原文', link: 'https://apps.who.int/iris/handle/10665/331901' }
    ],
    // displayAllHeaders: true,
    lastUpdated: '上次更新',
    sidebarDepth: 2,
    sidebar: [
      { title: '引言', path: '/chapters/01.md' },
      { title: '致谢', path: '/chapters/02.md' },
      { title: '1. 着陆', path: '/chapters/03.md' },
      { title: '2. 解套', path: '/chapters/04.md' },
      { title: '3. 践行个人价值观', path: '/chapters/05.md' },
      { title: '4. 保持友善', path: '/chapters/06.md' },
      { title: '5. 留有空间', path: '/chapters/07.md' },
      { title: '总结', path: '/chapters/08.md' }
    ]
  }
}