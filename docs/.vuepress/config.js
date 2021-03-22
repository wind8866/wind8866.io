const es6Sidebar = [
  {
    title: '文档',
    collapsable: false,
    children: [
      '',
      'TODO',
      '1.intro',
      '2.let',
      '3.destructuring',
      '4&5.string',
      '6.regexp-js',
      '6.regexp',
      '7.number-next',
      '7.number',
      '8.function-book',
      '8.function',
      '9.array',
      '10.object-book',
      '10.object-class',
      '10.object-对象',
      // '10.object-�\235��\220\221对象',
      '10.object',
      '12.Symbol',
      // '13.set�\222\214map',
      '16.promise',
      '18.generator-1',
      '20.async',
      '23.Module',
      '25.style',
    ]
  },
  {
    title: '其他',
    collapsable: false,
    children: [
      'ES5-Error',
      'README',
      'async-es5',
      'progress',
    ]
  }
];

const blogSidebar = [
  '2018-career-planning',
  'macOS-JAVA-dev',
  'README',
  'null',
  'aboutme',
  'api-1',
  'zepto-source-code',
  'debug-Front-end-engineering',
  'zhihu-macOS-reinstall',
  'four-ways-of-writing-arrow-function',
  '恭喜你正式成为一名B站UP主啦',
  'front-end-tool',
  '开发的可控性与确定性',
]

module.exports = {
  title: 'Wind',
  description: '起风了的笔记',
  themeConfig: {
    // logo: '/assets/img/logo.png',
    displayAllHeaders: true,
    nav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'react', link: '/react/' },
      { text: 'es6', link: '/es6/' },
      { text: 'github', link: 'https://github.com/wind8866' },
    ],
    sidebar: {
      '/react/': [
        '',
        'API',
        'Hooks',
        'TODO',
      ],
      '/es6/': es6Sidebar,
      '/blog/': blogSidebar,
    },
    lastUpdated: 'Last Updated',
  }
}