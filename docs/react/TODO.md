# TODO

## 待办
- [ ] 看完 《Hooks API 索引》《Hooks FAQ》
- [ ] 

# TODO List
 
## 重要需要反复看的文档
- Context
- Refs 转发
- 高阶组件
- 性能优化
- Portals
- 协调✅
- Refs and the DOM
- Render Props
- 自定义 Hook✅
- Hook API 索引
- Hooks FAQ

## 问题
### 现在
- [ ] 子组件获取数据，如何更好的传递给其他变量
- [ ] [之前遇到的问题有没有更好的解决方案](https://wind8866.github.io/null/)
- [ ] 利用 useEffect 的数据更新才会执行的特性重写搜索组件（父组件调用子组件的方法），结合组件间通信
- [ ] 使用hooks如何在两个组件之间通信？
- [ ] 视频介绍 90 分钟
- [ ] Hooks 与 React 怎样结合
### 以后
- [x] 纯函数：没有副作用的函数
- [x] [这里](https://zh-hans.reactjs.org/docs/react-component.html#componentdidmount)两次调用setState，浏览器不会渲染两次吗（答：不会，异步渲染，渲染时机有问题在记录）
- [x] refs可以调用子组件或父组件的方法吗？（答：可以，参考`/react-doc/src/component/ParentUseChildFun`)
- [ ] react为什么不绑定this
- [ ] [深度解析使用索引作为 key 的负面影响](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)
- [ ] [深入解析为什么 key 是必须的](https://zh-hans.reactjs.org/docs/reconciliation.html#recursing-on-children)
- [ ] [Mixins Considered Harmful](https://zh-hans.reactjs.org/blog/2016/07/13/mixins-considered-harmful.html)
- [ ] [React Mixins入门指南](https://juejin.cn/post/6844903471162851342)
- [ ] 使用开发者工具中的分析器对组件进行分析
- [ ] 性能优化会考虑哪些方面
- [ ] 实现一个 hooks 的 context
- [ ] redux 是怎样通过 context 实现的，是不是只用在了绑定组件的时候（`context(store)(props)`），这么想的原因是状态管理器只管状态，状态更新后就立即更新是需要订阅的。
- [ ] React.memo 的使用场景（可参考 antd）
- [ ] [传递给 useEffect 的函数在每次渲染中都会有所不同，这是刻意为之的。](https://zh-hans.reactjs.org/docs/hooks-effect.html#detailed-explanation)


## 文档需要看
- [ ] [高阶组件](https://zh-hans.reactjs.org/docs/higher-order-components.html#use-hocs-for-crossing-cutting-concerns)
- [ ] [为什么我们要写 super(props) ？](https://overreacted.io/zh-hans/why-do-we-write-super-props/)

- [ ] [在高阶组件中转发 refs](https://zh-hans.reactjs.org/docs/forwarding-refs.html)
- [ ] [将 Render Props 与 React.PureComponent 一起使用时要小心](https://zh-hans.reactjs.org/docs/render-props.html#be-careful-when-using-render-props-with-reactpurecomponent)
- [ ] [你可能不需要使用派生 state](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
- [ ] [State 和生命周期指南](https://zh-hans.reactjs.org/docs/state-and-lifecycle.html)
- [ ] [深入学习：何时以及为什么 setState() 会批量执行？](https://stackoverflow.com/a/48610973/458193)
- [ ] [深入：为什么不直接更新 this.state？](https://github.com/facebook/react/issues/11527#issuecomment-360199710)
- [ ] [深入学习：何时以及为什么 setState() 会批量执行？](https://stackoverflow.com/a/48610973/458193)
- [ ] [深入：为什么不直接更新 this.state？](https://github.com/facebook/react/issues/11527#issuecomment-360199710)
