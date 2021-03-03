# React API
### React.Component
如需定义 class 组件，需要继承 React.Component。
在 React.Component 的子类中有个必须定义的 render() 函数。
#### 生命周期
[图谱](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

- 挂载
  - **constructor()**
    - 用于初始化state，绑定this
    - 避免在构造函数中引入任何副作用或订阅（接口请求不应在此）
    - 避免props赋值给state
  - static getDerivedStateFromProps()
  - **render()**
    - 可返回：React元素、数组或fragments、Protals、字符串或数字类型、布尔类型或null
    - 应为纯函数，state不变的情况下，返回应该一致
    - 不可修改state，会引起死循环
  - **componentDidMount()**
    - 用于DOM节点渲染后的副作用操作，如网络请求，添加订阅
    - 
- 更新
  - static getDerivedStateFromProps()
    - 此方法适用于罕见的用例，即 state 的值在任何时候都取决于 props。
  - shouldComponentUpdate()
    - 参数(nextProps, nextState)
    - 返回值决定了 React 组件的输出是否受当前 state 或 props 更改的影响
    - 用于性能优化，如果想特定的阻止更新，使用PureComponent
  - **render()**
  - getSnapshotBeforeUpdate()
    - 返回值传递给componentDidUpdate，作为第三个参数
    - 如果返回false，则不调用componentDidUpdate
    - 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息
  - **componentDidUpdate()**
    - 参数(prevProps, prevState, snapshot)
    - 
- 卸载
  - componentWillUnmount()
    - 注意调用，防止内存泄漏
- 错误处理
  - static getDerivedStateFromError()
    - 此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state
    - 用于发生错误时，处理降级渲染。
  - componentDidCatch()
    - 参数(error, info)
    - 此生命周期在后代组件抛出错误后被调用
    - 会在“提交”阶段被调用，因此允许执行副作用。 它应该用于记录错误之类的情况

#### setState()
setState() 将对组件 state 的更改排入队列，并通知 React 需要使用更新后的 state 重新渲染此组件及其子组件。
React 并不会保证 state 的变更会立即生效。
请使用 componentDidUpdate 或者 setState 的回调函数（setState(updater, callback)），这两种方式都可以保证在应用更新后触发。
第一个参数可以传入一个函数(state, props) => stateChange，函数中接收的 state 和 props 都保证为最新。
第一个参数还可以接受对象。
第二个参数为可选的回调函数，它将在 setState 完成合并并重新渲染组件后执行。

#### forceUpdate()
可以跳过本组件的shouldComponentUpdate生命周期，强制执行重新渲染。

#### defaultProps
该属性为子组件设置默认值

#### displayName
displayName 字符串多用于调试消息。

#### props
this.props.children是一个特殊的props属性

#### state

### React.PureComponent
未实现 shouldComponentUpdate()
浅层对比 prop 和 state

### React.memo
React.memo 为高阶组件。
React.memo 仅检查 props 变更。
此方法仅作为性能优化的方式而存在。但请不要依赖它来“阻止”渲染，因为这会产生 bug。

### React.createElement()
创建并返回指定的React元素。

### React.cloneElement()
以 element 元素为样板克隆并返回新的 React 元素。

### React.isValidElement()
验证是否是React元素，返回布尔值

### React.Children
用于处理this.props.children
- React.Children.map
- React.Children.forEach
- React.Children.count 组件数量
- React.Children.only 是否只有一个子节点
- React.Children.toArray 将节点树水平展开

### React.Fragment
React元素，简写`<></>`

### React.createRef()
React.createRef 创建一个能够通过 ref 属性附加到 React 元素的 ref。

### React.forwardRef
React.forwardRef 会创建一个React组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中。

### React.lazy
React.lazy() 允许你定义一个动态加载的组件。这有助于缩减 bundle 的体积，并延迟加载在初次渲染时未用到的组件。

### React.Suspense
React.Suspense 可以指定加载指示器（loading indicator），以防其组件树中的某些子组件尚未具备渲染条件。
目前仅支持React.lazy

## ReactDOM
### render()
`ReactDOM.render(element, container[, callback])`
在提供的 container 里渲染一个 React 元素，并返回对该组件的引用（或者针对无状态组件返回 null）。
如果提供了可选的回调函数，该回调将在组件被渲染或更新之后被执行。

### hydrate()
用于服务端渲染

### unmountComponentAtNode()
从 DOM 中卸载组件，会将其事件处理器（event handlers）和 state 一并清除。

### findDOMNode()
findDOMNode 是一个访问底层 DOM 节点的应急方案（escape hatch）。

### createPortal()
创建 portal。Portal 将提供一种将子节点渲染到 DOM 节点中的方式，该节点存在于 DOM 组件的层次结构之外。