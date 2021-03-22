---
title: 真想不起来起什么标题
date: 2019-10-24 20:14
updated: 2019-10-24 20:14
tags: react,组件
comments:
---


一年前刚接触`react`的时候遇到一个问题，最近又遇到了，在这里重现当时的业务场景，找出一些解决方案。

当时设计的组件的组件大概是这样子的。有许多的搜索条件，也有许多用于展示的普通子组件，见下图。
![组件流程图](http://assets.processon.com/chart_image/5db175f5e4b0893e9a628b48.png)

数据流动有两种方式可供选择：
1、搜索组件改变后主动发起请求，将所得到的数据经父组件传递给其他组件（当时不会`redux`），但是这种情况只适合子组件少的情况，但普通子组件有将近20个，每个的业务逻辑都不同。所有逻辑放在搜索组件代码会特别臃肿，特别难维护。
2、将搜索条件经父组件传递给其他子组件。子组件判断搜索条件改变主动发起数据请求，渲染当前组件。

我选择了第二种方法，在现在看来没有任何问题。但是`react`的局限性是只能是 `data => view`。接口请求不是`view`，需要主动调用，当时的解决方案是在`shouldComponentUpdate`生命周期比较`nextProps`与`nextState`，如果搜索条件改变了就去主动调用请求接口事件。

这个问题可以从两个角度去尝试解决，一个是从数据主动更新方，一个是从数据被动调用方。

主动更新方是搜索组件，如果是在用户点击搜索时调用其他子组件的接口请求方法就可以了。那么问题变成了，父组件如何调用子组件的方法，或是组件如何调用兄弟组件的方法。解决方法[在这](https://juejin.im/post/5c86c7d8f265da2de970b610)，惭愧的是就是使用的非常基础的方法，但是没有想到可以这么用。

从被动调用方的角度看，我们需要一个订阅器，订阅相关的状态，状态更新后主动去触发接口请求事件。`vue`的`watch`很简单的就能解决遇到的这个问题。而`react`中没有这样的方法，因为`react`只解决视图层层，那作为数据管理为擅长的`redux`可以解决吗？

搜索到可以通过`redux`的`store.subscribe()`订阅数据的更新，然后调用`redux-saga`异步方法去执行接口请求方法。

其他第三方的解决方案。
- [watch-props](https://www.npmjs.com/package/watch-props)
- `echarts`可以使用这个组件[echarts-for-react](https://github.com/hustcc/echarts-for-react)
