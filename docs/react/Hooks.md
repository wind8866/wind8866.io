# Hooks

### Hooks 解决了什么问题
- 组件间复用状态逻辑
- 逻辑复杂时相关代码被拆分到不同的地方使得代码难以理解
- class、this、event等概念增加了学习成本

### Hooks 规则
只能在函数最外层调用 Hook。
只能在 React 的函数组件中调用 Hook。

### 文档
通过使用 Hook，你可以把组件内相关的副作用组织在一起（例如创建订阅及取消订阅），而不要把它们拆分到不同的生命周期函数里。
不像 class 中的 this.setState，更新 state 变量总是替换它而不是合并它。
与 componentDidMount 或 componentDidUpdate 不同，useEffect 是异步执行的，想要同步执行（会阻止DOM渲染），使用 useLayoutEffect。
使用多个 Effect 可以实现关注点分离，使相关代码放在一块。
使用 useEffect 会在调用一个新的 effect 之前对前一个 effect 进行清理。这与 一般的 class 的行为不一致，effect 相当于在 componentDidMount 绑定，componentDidUpdate 时卸载再绑定，componentWillUnmount 时卸载。一般的 class 少了中间过程。
自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook。 

### 实例
```jsx
import React, { useState, useEffect } from 'react';
const count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 不传入第二个参数：componentDidMount、componentDidUpdate 时都更新
    // 传入第二个参数时：componentDidMount、(componentDidUpdate && count changed)时更新
    // 传入空数组时：componentDidMount
    document.title = `You clicked ${count} times`;
  }, [count])

  useEffect(() => {
    const timer = setInterval(() => console.log(count), 1000);
    return () => clearInterval(timer);
  })

  return (<div>
    <span>count: {count}</span>
    <button onClick={() => setCount(count + 1))}>add</button>
  </div>);
}
```

### API
#### useState
`const [state, setState] = useState(initialState);`
setCount可以只传入值或者传入一个函数。
useState 不会自动合并更新对象。
initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略，可传入值或者函数。
React 使用 Object.is 比较算法 来比较 state。
如果传入的 state 不变（使用 `Object.is` 比较），React 将跳过子组件的渲染及 effect 的执行。

**取代了什么？**
取代了之前使用 class 组件的一整套状态声明、初始化、更新

#### useEffect
默认情况下 useEffect 会在每次重新渲染后（componentDidMount、componentDidUpdate）执行。
如果传入一个空数组，则只在 componentDidMount 生命周期内执行。
如果传入一个有值的数组，则会在数组内任意一元素改变后执行 useEffect。
在 useEffect 内返回函数，在每次执行该 effect 前会执行，主要用于取消订阅，解除事件绑定，防止内存泄漏。
useEffect 与 componentDidMount 或 componentDidUpdate 还是有些差异的，传给 useEffect 的函数会延迟调用。如果想在重新渲染后立即调用，使用 useLayoutEffect。

#### useContext
接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。
调用了 useContext 的组件总会在 context 值变化时重新渲染。
TODO

#### useLayoutEffect
与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。


#### useMemo
该函数是一个辅助函数，用于性能优化
useMemo 可以记忆接收一个函数和一个数组，返回一个函数的返回值。多次传入相同的数组，则不会运行函数而是返回已经缓存的值。
注意传入的函数中不要执行副作用。
你可以把 useMemo 作为性能优化的手段，但不要把它当成语义上的保证。
一种非常有用的做法是根据某些值的变化渲染子组件：`const child1 = useMemo(() => <Child1 a={a} />, [a]);`
参见：
- [如何记忆计算结果？](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-memoize-calculations)
- [Memoization](https://en.wikipedia.org/wiki/Memoization)

#### 看不懂
- [ ] TODO
**useReducer**
**useCallback**
useImperativeHandle
useDebugValue


- [useReducer 代替 Redux 小案例](https://zhuanlan.zhihu.com/p/262953991)
- [使用 React Hooks 代替 Redux](https://fed.taobao.org/blog/2019/05/17/use-the-react-hooks-instead-of-the-redux/)
- [使用 React Hooks 代替 Redux](https://zhuanlan.zhihu.com/p/66020264)
- [彻底理解 React hook useCallback和useMemo的区别](https://juejin.cn/post/6844904032113278990)
- [useCallback使用场景](https://github.com/xianzou/blog/issues/26)
- [你不知道的 useCallback](https://segmentfault.com/a/1190000020108840)
- [如何从 useCallback 读取一个经常变化的值？](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback)