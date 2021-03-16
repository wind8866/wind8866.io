最新版本7.x
7.x 以后 polyfill 就被弃用了。
babel 转移 es6 的核心能力是 `core-js` 提供的，在安装`@babel/preset-env`时会自动注入 `core-js` 的核心代码。 babel 会根据用户配置有选择性的引入 `core-js`，替代了 babel6 时代的 polyfill。
`@babel` 官方提供的包的下载量排名： <https://www.npmjs.com/search?q=%40babel&ranking=popularity>

必装
- `@babel/core`: 核心功能
- `@babel/cli`: 终端使用
- `@babel/preset-env`: 一组预设插件
  
推荐
- `babel-loader`: 给 webpack 使用
- `@babel/preset-react`: jsx 使用
- `@babel/preset-typescript`: ts 的 babel 工具链实现，可另选 `ts-loader`
- `@babel/runtime`: 
  - 1、提取 babel 自己的 helper，减小打包体积
  - 2、对 `core-js` 进行了封装，写代码时可直接使用 es6 的语法
  - 开发者一般用不到
- `@babel/plugin-transform-runtime`: `@babel/runtime` 用于生产环境，该包用于开发环境


步骤：
1. 安装依赖
2. 加入配置文件
3. 配置 webpack 编译选项

**配置文件**
package.json、babel.config.js（推荐）、.babelrc、.babelrc.js

babel 配置文件中 presets、plugins 最重要，presets 的一些包（如`@babel/preset-env`）预设了一些 plugin，如果[当前的包](https://github.com/babel/babel/blob/main/packages/babel-preset-env/package.json)中没有想要的 plugin，需要另外单独安装。

### 教程
- [系列教程](https://blog.liuyunzhuge.com/categories/Javascript/babel/)、[备用](https://github.com/liuyunzhuge)

自己配置项目 babel 依赖包可以参考：
create-react-app 的依赖：[babel-preset-react-app](https://github.com/facebook/create-react-app/blob/master/packages/babel-preset-react-app/package.json)
umi 的依赖

## 其他
在线转换：https://www.babeljs.cn/repl
与 webpack 等配合：https://www.babeljs.cn/setup