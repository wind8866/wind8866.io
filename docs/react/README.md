JSX也是一种表达式
应以组件自身的角度命名传入给组件的状态名，不应该依赖调用者。
如果一部分UI足够复杂或组件可被多次使用，那么他应该被独立成组件
所有的React组件必须像纯函数一样保护他的props不被修改。
不参与数据流的值可以放在`this`对象里。
不要直接修改 this.state
State 的更新可能是异步，setState传入函数可同步更新。
State 的更新会被合并，只需使用setState更新需要修改的部分即可。
React是自上而下的单向数据流。
阻止浏览器默认事件使用`e.preventDefault()`
&&与||都会阻断执行，&&前面的值转化为true才执行并返回后面的代码，||前面值转化为为false才会执行后面的代码。也可以用onClick?.()。
textarea内的值使用value属性替代
select内的selected使用value替代
区分受控组件与非受控组件的方法是value是否为null或undefined，若是，则是非受控组件。所以受控组件的value值应该是空字符串
多个组件需要反映相同的变化数据，应该将共享状态提升到最近的共同父组件中去。
在 React 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。
组件可以作为参数传递给子组件
“特殊”组件可以通过 props 定制并渲染“一般”组件。
React中不会用到继承，都是组合。
使用`<React.Fragment>`或`<>`可设置一个空的包含组件。
高阶组件是参数为组件，返回值为新组件的函数。
HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用。
HOC 不需要关心数据的使用方式或原因，而被包装组件也不需要关心数据是怎么来的。
HOC 是一种基于 React 的组合特性而形成的设计模式。
因为JSX会被编译为`React.createElement`，所以必须在文件头部引入`React`。
性能优化：
- 生产环境打包、使用Brunch、envify、uglifyify、terser进行打包。
- 对长列表使用虚拟滚动器。
- 在特定情况下，在`shouldComponentUpdate`生命周期返回false进行拦截，使其不进行render。
- 工具：[使用](https://zh-hans.reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab)React的Chrome插件可以监控组件渲染的时机，用于进行性能优化。
可以使用React.PureComponent替代手动的shouldComponentUpdate生命周期渲染拦截。该对比使用浅比较

Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。使用`ReactDOM.createPortal(child, container)`可以创建
只要在React的DOM树中存在父子关系，父元素即可以捕获子元素触发的冒泡事件。
Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差。
如果一个很深的组件需要顶层组件传递参数，为了避免属性特别多且层层传递的问题，一种比较好的设计方式是将很深的组件放在顶层组件中，将该组件层层传递。但带来的问题是顶层组件会变得复杂。
Context的值中尽量不要传递对象，传递可能会[触发意外渲染](https://zh-hans.reactjs.org/docs/context.html#caveats)。
一个良好的软件应该有明确的错误反馈，使用错误边界可以catch到一些意外的错误情况。
自 React 16 起，任何未被错误边界捕获的错误将会导致整个 React 组件树被卸载。（测试错误会向上传递，导致所有的程序都出现错误而被React移除）
使用React边界捕获无法捕获：事件处理、异步代码、服务端渲染、组件自身抛出的错误。
适合使用Ref的情况：
- 管理焦点，文本选择或媒体播放。
- 触发强制动画。
- 集成第三方 DOM 库。
在非必要情况下，不要使用Ref。
默认你不能在函数组件上使用 ref 属性，因为它们没有实例。
Ref 转发使组件可以像暴露自己的 ref 一样暴露子组件的 ref。

diff算法的设计
- 在某一时间节点调用 React 的 render() 方法，会创建一棵由 React 元素组成的树。在下一次 state 或 props 更新时，相同的 render() 方法会返回一棵不同的树。React 需要基于这两棵树之间的差别来判断如何有效率的更新 UI 以保证当前 UI 与最新的树保持同步。
- 因为算法复杂度的问题，react设计了一套O(n)复杂度的算法，这个算法有两个前提。
    - 两个不同类型的元素会产生出不同的树
    - 开发者可以通过 key prop 来暗示哪些子元素在不同的渲染下能保持稳定

不同类型的元素，即使子元素是完全一样的，在dom更换时，子元素仍然会重新渲染。所以应该尽量避免这种情况。
对比同一元素，进最小化更新该元素的属性
对比同类型的组件，组件实例不变，仅传入当前状态的props，然后调用该实例的 componentWillReceiveProps() 和 componentWillUpdate() 方法。在render()时进行diff的计算，并根据计算更新dom。
对子节点进行递归，key的作用体现出来，key标记了数据与某个dom节点的对应关系。使得diff能够更精确的对比，dom更新更精确的最小化。
术语 “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术。
使用 Render Props 来解决横切关注点（Cross-Cutting Concerns）
任何被用于告知组件需要渲染什么内容的函数 prop 在技术上都可以被称为 “render prop”.
Render Props是一种实现方式，给组件传入一个函数，该函数在组件内部执行，返回JSX，该组件中封装了方法，状态，其中状态可以返回给函数。这就相当于一个完整的组件，组件内部的一部分内容你可以自己定义，我会给你一些数据。不使用组件参数，使用子元素同样能实现该功能。
可以使用`<React.StrictMode>`开启严格模式，用于检查过时API、ref副作用等等问题。
如果你不介意代码美观性，并且希望快速编写代码，使用非受控组件往往可以减少你的代码量。否则，你应该使用受控组件。
非受控组件使用defaultValue或defaultChecked为表单元素设置默认值。
在 React 中，所有的 DOM 特性和属性（包括事件处理）都应该是小驼峰命名的方式。例外的情况是 aria-* 以及 data-* 属性，一律使用小写字母命名。
特殊：
- checkbox受控checkbox，defaultChecked非受控默认值
- className
- dangerouslySetInnerHTML为innerHTML替代方案
- htmlFor代替for
- onChange，react修改了onChange行为。
- selected
- style，修改了默认行为，React 会自动添加 ”px” 后缀到内联样式为数字的属性后。
- value为受控值，defaultValue为非受控默认值

## Example
以antd为原则，开发其中的组件。
- Switch
- Input
