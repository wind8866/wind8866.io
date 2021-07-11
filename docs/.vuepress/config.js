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

module.exports = {
  title: 'Wind',
  description: '起风了的笔记',
  themeConfig: {
    // logo: '/assets/img/logo.png',
    sidebar: 'auto',
    collapsable: false,
    sidebarDepth: 2,
    nav: [
      { text: 'Blog', link: '/blog/' },
      {
        text: 'Note', items: [
          { text: '现代JavaScript教程', link: '/javascript' },
          { text: 'ECMAScript 6', link: '/language/japanese/' },

          // { text: 'React', link: '/react' },
          // { text: 'TypeScript', link: '/ts' },
          // { text: 'CSS', link: '/css' },
          // { text: 'ENV', link: '/env' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/wind8866' },
    ],
    sidebar: {
      '/blog/': [
        {
          title: '博客',
          collapsable: false,
          children: [
            ['', 'README'],
            '恭喜你正式成为一名B站UP主啦',
            '开发的可控性与确定性',
            'null',
            'debug-Front-end-engineering',
            'api-1',
            'macOS-JAVA-dev',
            'front-end-tool',
            '2018-career-planning',
            'zhihu-macOS-reinstall',
            'zepto-source-code',
            'aboutme',
          ]
        }
      ]
    }
    // sidebar: {
    //   '/react/': [
    //     '',
    //     'API',
    //     'Hooks',
    //     'TODO',
    //   ],
    //   '/es6/': es6Sidebar,
    //   '/blog/': blogSidebar,
    // },
    // lastUpdated: 'Last Updated',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@source': 'docs/blog/source'
      }
    }
  }
}