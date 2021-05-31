
[vue中添加组件](https://cli.vuejs.org/zh/guide/plugins-and-presets.html#%E5%9C%A8%E7%8E%B0%E6%9C%89%E7%9A%84%E9%A1%B9%E7%9B%AE%E4%B8%AD%E5%AE%89%E8%A3%85%E6%8F%92%E4%BB%B6)
```
vue add eslint
```

vue可基于一个 .vue文件快速开发应用，称为“快速原型开发”。

使用vue create时的选项都是以插件的形式装在开发环境的，插件分官方插件与社区插件。

在 vue create 过程中保存的 preset 会被放在你的 home 目录下的一个配置文件中 (~/.vuerc)。

打包命令支持：--modern 使用现代模式构建应用，为现代浏览器交付原生支持的 ES2015 代码，并生成一个兼容老浏览器的包用来自动回退。

极个别的依赖并不会提供一个经过babel编译过的js文件，默认情况下 babel-loader会忽略该文件。可以使用 transpiledependencies 指定目录。
