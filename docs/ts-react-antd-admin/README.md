[toc]

# 记录一下开发过程

### Style
#### css-loader
css-loader 用于处理 js 中 import .css 文件。
@import 导入 node_modules 的样式时需要加前缀 `~`，例如`@import url(~antd/dist/antd.css);`
只有将 `options.modules` 设置为 true，才能写`import styles from './index.less';`
css的模块化功能默认为auto，即只有以.module结尾的文件会被认为是模块化。
可选值：`auto: true|false`、`mode: local|global|pure`、`modules: true|false`、``、``
mode默认为local，即默认模块化，想要非模块化要使用global。设置为global则模块化需要单独指定。[pure只允许一个global模式](https://github.com/webpack-contrib/css-loader/issues/985)，可以使用函数根据文件名进行更多判断设置，感觉可能会有应用场景，[参考这往上翻](https://webpack.docschina.org/loaders/css-loader/#localidentname)
开启模块化 css 后，模块类名与非模块类名的[写法](https://webpack.docschina.org/loaders/css-loader/#modules)：
```less
:global {
  .g-title {
    font-size: 22px;
  }
  .app {
    background: #222;
    min-width: 100vw;
    min-height: 100vh;
    color: #fff;
    :local .text {
      color: @main-color;
    }
  }
} 
```

类名还能自动驼峰等许多功能

#### style-loader
把 CSS 插入到 DOM 中
功能：
- 配置把 styles 插入到 DOM 中的方式
- 添加自定义属性到插入的标签中
- 在指定的位置插入标签
- 等

#### CSS module in Typescript
使用 @teamsupercell/typings-for-css-modules-loader 可以自动生成 less 的 d.ts 声明，但会生成许多冗余文件，我使用的vscode插件实现的。[参考](https://juejin.cn/post/6844903560056930311)
webpack loader配置
```javascript
{
  loader: '@teamsupercell/typings-for-css-modules-loader',
  options: {
    verifyOnly: process.env.NODE_ENV === 'production',
    disableLocalsExport: true,
  }
}
```
最终使用的
```typescript
// typings.d.ts
// 代码补全使用 vscode 插件 CSS Modules
declare module '*.css' {
  const content: any;
  export default content;
}
declare module '*.less' {
  const content: any;
  export default content;
}
```

### eslint

#### 安装步骤
1、安装 eslint：`yarn add --dev eslint`

2、生成 默认配置文件：`npx eslint --init`，生成默认配置的时候会提示安装的依赖： 
```
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
✔ Would you like to install them now with npm? · No / Yes
```

手动或自动安装依赖。
- eslint-plugin-react📌
- @typescript-eslint/eslint-plugin📌
- eslint-config-airbnb📌
- eslint-plugin-import📌
- eslint-plugin-jsx-a11y📌
- eslint-plugin-react-hooks📌
- @typescript-eslint/parser📌

生成的配置文件
```javascript
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
};
```

3、IDE 配置 vscode 需要安装 ESLint 插件

4、进行配置主要是修改规范集：extends，plugins

5、自定义配置修改 rules

#### 配置
可以使用 [globals](https://cn.eslint.org/docs/user-guide/configuring#specifying-globals) 定义全局变量，否则 eslint 报错。
指定插件时，可省略前缀 eslint-plugin-。
规则：
- off 0
- warn 1
- error 2

整个文件不进行 eslint 警告提示：`/* eslint-disable */`
[overrides](https://cn.eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files) 可以禁止一组文件进行检查。

### babel
[Preset 顺序是相反的](https://babel.docschina.org/docs/en/presets/#preset-%E9%A1%BA%E5%BA%8F)
[babel 7 已可以不需要 ts-loader](https://stackoverflow.com/a/52323181/10422553)
[babel 支持运行时不引入react的配置](https://zh-hans.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#manual-babel-setup)，[github issue也有](https://github.com/gatsbyjs/gatsby/issues/28657)

#### ts-loader 与 babel
起初有以下几种方案
1. typescript + ts-loader
2. ts-loader + babel-loader + fork-ts-checker-webpack-plugin
3. typescript + ts-loader + awesome-typescript-loader

typescript 自身带有语言转换和类型检查的功能，默认两者都执行，所以可能会慢，所以才有了第三种方案，typescript 仅进行语法转换，awesome-typescript-loader 用于

TODO:
https://juejin.cn/post/6844904052094926855
https://www.cnblogs.com/vvjiang/p/12057811.html
https://juejin.cn/post/6844903792865984520

#### 如何安装
1、[首先看官方指引](https://babeljs.io/setup)
安装
- `babel-loader`：webpack 支持
- `@babel/core`：Babel 编译器核心

2、修改 webpack 配置
注意 ts-loader 和 babel-loader 只可选其一。
```javascript
{
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  }
}
```

3、安装语法支持
- `@babel/preset-env`: ECMAScript 语法支持
- `@babel/preset-react`: JSX 语法支持
- `@babel/preset-typescript`: ts 语法支持

配置文件
babel.config.json，解析从后向前
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript",
    ["@babel/preset-react", {
      "runtime": "automatic"
    }]
  ],
  "plugins": []
}
```

4、配置支持版本
在默认配置的基础上不支持 IE11
https://github.com/browserslist/browserslist

```
# .browserslistrc
> 0.5%
last 2 versions
Firefox ESR
not IE 11
not dead
```

#### 问题
- [ ] antd-pro ts版本如何编译成 js 版本的？
- [ ] 如何加入 stage 的支持？可不可加？
- [ ] 是不是 import 的一些语法不支持？


---

## 环境变量
能浏览器环境下读取到环境变量的值，靠的是 `webpack --mode=development`，在 node 环境下读取到环境变量的值，靠的是 `webpack --env=production`。
不同操作系统传入环境变量的差异可能导致报错，使用cross-env。

待办：
- [ ] umi 及 vue-cli 都可读取文件内的环境变量，可加入该功能

参考：
[Webpack 设置环境变量的误区](https://juejin.cn/post/6844904023791796237#heading-7)

其他: 
[ejs 的文档](https://ejs.co/)
[将 Emijo 设置为 icon](https://css-tricks.com/emojis-as-favicons/)

