# Hooks

## TODO
- 视频介绍 90 分钟
- [传递给 useEffect 的函数在每次渲染中都会有所不同，这是刻意为之的。](https://zh-hans.reactjs.org/docs/hooks-effect.html#detailed-explanation)

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