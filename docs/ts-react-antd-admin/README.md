

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

