
### 设计理念
践行快速响应的理念：
60Hz，超过16.6ms会掉帧
CUP：同步、防抖、节流、异步可中断（浏览器将预留时间给react，如果计算量大，会将渲染渲染权限交给浏览器）[demo](https://codesandbox.io/s/concurrent-3h48s?file=/src/index.js:2265-2277)
IO：延迟loading

- [ ] [尤雨溪 原生 dom 更新更快的回答](https://www.zhihu.com/question/31809713)
- [ ] 浏览器执行过程
- [ ] 浏览器控制台分析
- [ ] [尤雨溪演讲](https://www.bilibili.com/video/av61099876?spm_id_from=333.788.b_636f6d6d656e74.6)


### 架构的演进史
react 15 架构
- 协调器：渲染什么组件，diff算法（比较组件，变化的组件被渲染）
- 渲染器：将组件渲染到视图中 （渲染到视图中：ReactDOM、ReactNative）

事件触发 => 状态修改 => 
  Loop：协调器通知渲染器 => 渲染器渲染

因为是依次同步执行更新，所以当同步代码走到一半时，中断发生，页面只更新部分，产生bug

React 16
- 调度器：调度更新，更高优先级的会先进入协调器，如果此时来个一个优先级更高的，会中断协调器，将更高优先级的推送到协调器
- 协调器：决定更新什么组件
- 渲染器(Renderer)：将组件更新到视图

事件触发 => 状态修改 =>
  查看是否有更高优先级的任务需要被调度 => (没有) => 交给协调器
  
  协调器（创建虚拟DOM需要更新的打标记）） => 通知渲染器 => 渲染器渲染（拥有自主渲染的权利，而不是调用就执行）

### React新架构—Fiber
代数效应：将副作用从函数调用中分离【没听懂0200】【没听懂，异步可中断】
需求：更新可以被中断、更新可以拥有优先级

- [ ] 纤程 Fiber
- [ ] 进程
- [ ] 线程
- [ ] 协程 Generator
- [ ] 函数式编程


### Fiber 架构工作原理
- [ ] [Fiber 的官方解释](https://github.com/acdlite/react-fiber-architecture)
- [ ] [视频讲解](https://www.youtube.com/watch?v=ZCuYPiUIONs&t=801s)

Fiber的含义
- 作为静态数据结构属性，react 15 是stack，16是Fiber
- 虚拟DOM，作为静态的数据结构
- 作为动态工作单元，双缓存的工作原理

### 调试源码
使用 npm link 的方式引用包


### 源码的目录结构
- packages
  - react: 与平台无关
  - scheduler：调度器
  - react-reconciler：协调器
  - react-dom：渲染器
  - shared：公共文件
- scripts：工具链
- fixtures：开发者使用的测试项目

---

## 架构篇 render阶段

### 工作流程概览

### JSX
JSX 与 Fiber 关系：
什么是react element：react.createElement 调用的结果
什么是react component：

Host Component