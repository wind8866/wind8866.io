# react 面试题
<https://github.com/semlinker/reactjs-interview-questions>

## 使用方法
1、口语回答，录音（记录在印象笔记）
2、答案写出来（可选）
3、看答案纠正

### 目录

<!-- TOC -->
| 序号. | 问题 |
| --- | --------- |
| | [Core React](#core-react) |
|1 | [什么是 React?](#什么是-react) |
|2 | [React 的主要特点是什么?](#react-的主要特点是什么) |
|3 | [什么是 JSX?](#什么是-jsx) |
|4 | [元素和组件有什么区别?](#元素和组件有什么区别) |
|5 | [如何在 React 中创建组件?](#如何在-react-中创建组件) |
|6 | [何时使用类组件和函数组件?](#何时使用类组件和函数组件) |
|7❌ | [什么是 Pure Components?](#什么是-pure-components) |
|8 | [React 的状态是什么?](#react-的状态是什么) |
|9 | [React 中的 props 是什么?](#react-中的-props-是什么) |
|10 | [状态和属性有什么区别?](#状态和属性有什么区别) |
|11 | [我们为什么不能直接更新状态?](#我们为什么不能直接更新状态) |
|12 | [回调函数作为 `setState()` 参数的目的是什么?](#回调函数作为-setstate-参数的目的是什么) |
|13 | [HTML 和 React 事件处理有什么区别?](#html-和-react-事件处理有什么区别) |
|14 | [如何在 JSX 回调中绑定方法或事件处理程序?](#如何在-jsx-回调中绑定方法或事件处理程序) |
|15📌 | [如何将参数传递给事件处理程序或回调函数?](#如何将参数传递给事件处理程序或回调函数) |
|16 | [React 中的合成事件是什么?](#react-中的合成事件是什么) |
|17 | [什么是内联条件表达式?](#什么是内联条件表达式) |
|18 | [什么是 "key" 属性，在元素数组中使用它们有什么好处?](#什么是-key-属性在元素数组中使用它们有什么好处) |
|19 | [refs 有什么用?](#refs-有什么用) |
|20 | [如何创建 refs?](#如何创建-refs) |
|21 | [什么是 forward refs?](#什么是-forward-refs) |
|22 | [callback refs 和 findDOMNode() 哪一个是首选选项?](#callback-refs-和-finddomnode-哪一个是首选选项) |
|23 | [为什么 String Refs 被弃用?](#为什么-string-refs-被弃用) |
|24 | [什么是 Virtual DOM?](#什么是-virtual-dom) |
|25 | [Virtual DOM 如何工作?](#virtual-dom-如何工作) |
|26 | [Shadow DOM 和 Virtual DOM 之间有什么区别?](#shadow-dom-和-virtual-dom-之间有什么区别) |
|27 | [什么是 React Fiber?](#什么是-react-fiber) |
|28 | [React Fiber 的主要目标是什么?](#react-fiber-的主要目标是什么) |
|29 | [什么是受控组件?](#什么是受控组件) |
|30 | [什么是非受控组件?](#什么是非受控组件) |
|31 | [createElement 和 cloneElement 有什么区别?](#createelement-和-cloneelement-有什么区别) |
|32 | [在 React 中的提升状态是什么?](#在-react-中的提升状态是什么) |
|33 | [组件生命周期的不同阶段是什么?](#组件生命周期的不同阶段是什么) |
|34 | [React 生命周期方法有哪些?](#react-生命周期方法有哪些) |
|35 | [什么是高阶组件（HOC）?](#什么是高阶组件hoc) |
|36 | [如何为高阶组件创建属性代理?](#如何为高阶组件创建属性代理) |
|37 | [什么是上下文（Context）?](#什么是上下文context) |
|38 | [children 属性是什么?](#children-属性是什么) |
|39 | [怎样在 React 中写注释?](#怎样在-react-中写注释) |
|40 | [构造函数使用带 props 参数的目的是什么?](#构造函数使用带-props-参数的目的是什么) |
|41 | [什么是调解?](#什么是调解) |
|42 | [如何使用动态属性名设置 state ?](#如何使用动态属性名设置-state-) |
|43 | [每次组件渲染时调用函数的常见错误是什么?](#每次组件渲染时调用函数的常见错误是什么) |
|44 | [为什么有组件名称要首字母大写?](#为什么有组件名称要首字母大写) |
|45 | [为什么 React 使用 `className` 而不是 `class` 属性?](#为什么-react-使用-classname-而不是-class-属性) |
|46 | [什么是 Fragments ?](#什么是-fragments-) |
|47 | [为什么使用 Fragments 比使用容器 div 更好?](#为什么使用-fragments-比使用容器-div-更好) |
|48 | [在 React 中什么是 Portal ?](#在-react-中什么是-portal-) |
|49 | [什么是无状态组件?](#什么是无状态组件) |
|50 | [什么是有状态组件?](#什么是有状态组件) |
|51 | [在 React 中如何校验 props 属性?](#在-react-中如何校验-props-属性) |
|52 | [React 的优点是什么?](#react-的优点是什么) |
|53 | [React 的局限性是什么?](#react-的局限性是什么) |
|54 | [在 React v16 中的错误边界是什么?](#在-react-v16-中的错误边界是什么) |
|55 | [在 React v15 中如何处理错误边界?](#在-react-v15-中如何处理错误边界) |
|56 | [静态类型检查推荐的方法是什么?](#静态类型检查推荐的方法是什么) |
|57 | [`react-dom` 包的用途是什么?](#react-dom-包的用途是什么) |
|58 | [`react-dom` 中 render 方法的目的是什么?](#react-dom-中-render-方法的目的是什么) |
|59 | [ReactDOMServer 是什么?](#reactdomserver-是什么) |
|60 | [在 React 中如何使用 innerHTML?](#在-react-中如何使用-innerhtml) |
|61 | [如何在 React 中使用样式?](#如何在-react-中使用样式) |
|62 | [在 React 中事件有何不同?](#在-react-中事件有何不同) |
|63 | [如果在构造函数中使用 `setState()` 会发生什么?](#如果在构造函数中使用-setstate-会发生什么) |
|64 | [索引作为键的影响是什么?](#索引作为键的影响是什么) |
|65 | [在 `componentWillMount()` 方法中使用 `setState()` 好吗?](#在-componentwillmount-方法中使用-setstate-好吗) |
|66 | [如果在初始状态中使用 props 属性会发生什么?](#如果在初始状态中使用-props-属性会发生什么) |
|67 | [如何有条件地渲染组件?](#如何有条件地渲染组件) |
|68 | [为什么在 DOM 元素上展开 props 需要小心?](#为什么在-dom-元素上展开-props-需要小心) |
|69 | [在 React 中如何使用装饰器?](#在-react-中如何使用装饰器) |
|70 | [如何 memoize（记忆）组件?](#如何-memoize记忆组件) |
|71 | [如何实现 Server Side Rendering 或 SSR?](#如何实现-server-side-rendering-或-ssr) |
|72 | [如何在 React 中启用生产模式?](#如何在-react-中启用生产模式) |
|73 | [什么是 CRA 及其好处?](#什么是-cra-及其好处) |
|74 | [在 mounting 阶段生命周期方法的执行顺序是什么?](#在-mounting-阶段生命周期方法的执行顺序是什么) |
|75 | [在 React v16 中，哪些生命周期方法将被弃用?](#在-react-v16-中哪些生命周期方法将被弃用) |
|76 | [生命周期方法 `getDerivedStateFromProps()` 的目的是什么?](#生命周期方法-getderivedstatefromprops-的目的是什么) |
|77 | [生命周期方法 `getSnapshotBeforeUpdate()` 的目的是什么?](#生命周期方法-getsnapshotbeforeupdate-的目的是什么) |
|78 | [createElement() 和 cloneElement() 方法有什么区别?](#createelement-和-cloneelement-方法有什么区别) |
|79 | [推荐的组件命名方法是什么?](#推荐的组件命名方法是什么) |
|80 | [在组件类中方法的推荐顺序是什么?](#在组件类中方法的推荐顺序是什么) |
|81 | [什么是 switching 组件?](#什么是-switching-组件) |
|82 | [为什么我们需要将函数传递给 setState() 方法?](#为什么我们需要将函数传递给-setstate-方法) |
|83 | [在 React 中什么是严格模式?](#在-react-中什么是严格模式) |
|84 | [React Mixins 是什么?](#react-mixins-是什么) |
|85 | [为什么 `isMounted()` 是一个反模式，而正确的解决方案是什么?](#为什么-ismounted-是一个反模式而正确的解决方案是什么) |
|86 | [React 中支持哪些指针事件?](#react-中支持哪些指针事件) |
|87 | [为什么组件名称应该以大写字母开头?](#为什么组件名称应该以大写字母开头) |
|88 | [在 React v16 中是否支持自定义 DOM 属性?](#在-react-v16-中是否支持自定义-dom-属性) |
|89 | [constructor 和 getInitialState 有什么区别?](#constructor-和-getinitialstate-有什么区别) |
|90 | [是否可以在不调用 setState 方法的情况下，强制组件重新渲染?](#是否可以在不调用-setstate-方法的情况下强制组件重新渲染) |
|91 | [在使用 ES6 类的 React 中 `super()` 和 `super(props)` 有什么区别?](#在使用-es6-类的-react-中-super-和-superprops-有什么区别) |
|92 | [在 JSX 中如何进行循环?](#在-jsx-中如何进行循环) |
|93 | [如何在 attribute 引号中访问 props 属性?](#如何在-attribute-引号中访问-props-属性) |
|94 | [什么是 React proptype 数组?](#什么是-react-proptype-数组) |
|95 | [如何有条件地应用样式类?](#如何有条件地应用样式类) |
|96 | [React 和 ReactDOM 之间有什么区别?](#react-和-reactdom-之间有什么区别) |
|97 | [为什么 ReactDOM 从 React 分离出来?](#为什么-reactdom-从-react-分离出来) |
|98 | [如何使用 React label 元素?](#如何使用-react-label-元素) |
|99 | [如何合并多个内联的样式对象?](#如何合并多个内联的样式对象) |
|100 | [如何在调整浏览器大小时重新渲染视图?](#如何在调整浏览器大小时重新渲染视图) |
|101 | [`setState()` 和 `replaceState()` 方法之间有什么区别?](#setstate-和-replacestate-方法之间有什么区别) |
|102 | [如何监听状态变化?](#如何监听状态变化) |
|103 | [在 React 状态中删除数组元素的推荐方法是什么?](#在-react-状态中删除数组元素的推荐方法是什么) |
|104 | [在 React 中是否可以不在页面上渲染 HTML 内容?](#在-react-中是否可以不在页面上渲染-html-内容) |
|105 | [如何用 React 漂亮地显示 JSON?](#如何用-react-漂亮地显示-json) |
|106 | [为什么你不能更新 React 中的 props?](#为什么你不能更新-react-中的-props) |
|107 | [如何在页面加载时聚焦一个输入元素?](#如何在页面加载时聚焦一个输入元素) |
|108 | [更新状态中的对象有哪些可能的方法?](#更新状态中的对象有哪些可能的方法) |
|109 | [为什么函数比对象更适合于 `setState()`?](#为什么函数比对象更适合于-setstate) |
|110 | [我们如何在浏览器中找到当前正在运行的 React 版本?](#我们如何在浏览器中找到当前正在运行的-react-版本) |
|111 | [在 `create-react-app` 项目中导入 polyfills 的方法有哪些?](#在-create-react-app-项目中导入-polyfills-的方法有哪些) |
|112 | [如何在 create-react-app 中使用 https 而不是 http?](#如何在-create-react-app-中使用-https-而不是-http) |
|113 | [如何避免在 create-react-app 中使用相对路径导入?](#如何避免在-create-react-app-中使用相对路径导入) |
|114 | [如何为 React Router 添加 Google Analytics?](#如何为-react-router-添加-google-analytics) |
|115 | [如何每秒更新一个组件?](#如何每秒更新一个组件) |
|116 | [如何将 vendor prefixes 应用于 React 中的内联样式?](#如何将-vendor-prefixes-应用于-react-中的内联样式) |
|117 | [如何使用 React 和 ES6 导入和导出组件?](#如何使用-react-和-es6-导入和导出组件) |
|118 | [为什么 React 组件名称必须以大写字母开头?](#为什么-react-组件名称必须以大写字母开头) |
|119 | [为什么组件的构造函数只被调用一次?](#为什么组件的构造函数只被调用一次) |
|120 | [在 React 中如何定义常量?](#在-react-中如何定义常量) |
|121 | [在 React 中如何以编程方式触发点击事件?](#在-react-中如何以编程方式触发点击事件) |
|122 | [在 React 中是否可以使用 async/await?](#在-react-中是否可以使用-async/await) |
|123 | [React 项目常见的文件结构是什么?](#react-项目常见的文件结构是什么) |
|124 | [最流行的动画软件包是什么?](#最流行的动画软件包是什么) |
|125 | [模块化样式文件有什么好处?](#模块化样式文件有什么好处) |
|126 | [什么是 React 流行的特定 linters?](#什么是-react-流行的特定-linters) |
|127 | [如何发起 AJAX 调用以及应该在哪些组件生命周期方法中进行 AJAX 调用?](#如何发起-ajax-调用以及应该在哪些组件生命周期方法中进行-ajax-调用) |
|128 | [什么是渲染属性?](#什么是渲染属性) |
| | [React Router](#react-router) |
|129 | [什么是 React Router?](#什么是-react-router) |
|130 | [React Router 与 history 库的区别?](#react-router-与-history-库的区别) |
|131 | [在 React Router v4 中的`<Router>`组件是什么?](#在-react-router-v4-中的router组件是什么) |
|132 | [`history` 中的 `push()` 和 `replace()` 方法的目的是什么?](#history-中的-push-和-replace-方法的目的是什么) |
|133 | [如何使用在 React Router v4 中以编程的方式进行导航?](#如何使用在-react-router-v4-中以编程的方式进行导航) |
|134 | [如何在 React Router v4 中获取查询字符串参数?](#如何在-react-router-v4-中获取查询字符串参数) |
|135 | [为什么你会得到 "Router may have only one child element" 警告?](#为什么你会得到-"router-may-have-only-one-child-element"-警告) |
|136 | [如何在 React Router v4 中将 params 传递给 `history.push` 方法?](#如何在-react-router-v4-中将-params-传递给-history.push-方法) |
|137 | [如何实现默认页面或 404 页面?](#如何实现默认页面或-404-页面) |
|138 | [如何在 React Router v4 上获取历史对象?](#如何在-react-router-v4-上获取历史对象) |
|139 | [登录后如何执行自动重定向?](#登录后如何执行自动重定向) |
| | [React Internationalization](#react-internationalization) |
|140 | [什么是 React Intl?](#什么是-react-intl) |
|141 | [React Intl 的主要特性是什么?](#react-intl-的主要特性是什么) |
|142 | [在 React Intl 中有哪两种格式化方式?](#在-react-intl-中有哪两种格式化方式) |
|143 | [在 React Intl 中如何使用`<FormattedMessage>`作为占位符使用?](#在-react-intl-中如何使用formattedmessage作为占位符使用) |
|144 | [如何使用 React Intl 访问当前语言环境?](#如何使用-react-intl-访问当前语言环境) |
|145 | [如何使用 React Intl 格式化日期?](#如何使用-react-intl-格式化日期) |
| | [React Testing](#react-testing) |
|146 | [在 React 测试中什么是浅层渲染（Shallow Renderer）?](#在-react-测试中什么是浅层渲染shallow-renderer) |
|147 | [在 React 中 `TestRenderer` 包是什么?](#在-react-中-testrenderer-包是什么) |
|148 | [ReactTestUtils 包的目的是什么?](#reacttestutils-包的目的是什么) |
|149 | [什么是 Jest?](#什么是-jest) |
|150 | [Jest 对比 Jasmine 有什么优势?](#jest-对比-jasmine-有什么优势) |
|151 | [举一个简单的 Jest 测试用例](#举一个简单的-jest-测试用例) |
| | [React Redux](#react-redux) |
|152 | [什么是 Flux?](#什么是-flux) |
|153 | [什么是 Redux?](#什么是-redux) |
|154 | [Redux 的核心原则是什么？?](#redux-的核心原则是什么) |
|155 | [与 Flux 相比，Redux 的缺点是什么?](#与-flux-相比redux-的缺点是什么) |
|156 | [`mapStateToProps()` 和 `mapDispatchToProps()` 之间有什么区别?](#mapstatetoprops-和-mapdispatchtoprops-之间有什么区别) |
|157 | [我可以在 reducer 中触发一个 Action 吗?](#我可以在-reducer-中触发一个-action-吗) |
|158 | [如何在组件外部访问 Redux 存储的对象?](#如何在组件外部访问-redux-存储的对象) |
|159 | [MVW 模式的缺点是什么?](#mvw-模式的缺点是什么) |
|160 | [Redux 和 RxJS 之间是否有任何相似之处?](#redux-和-rxjs-之间是否有任何相似之处) |
|161 | [如何在加载时触发 Action?](#如何在加载时触发-action) |
|162 | [在 React 中如何使用 Redux 的 `connect()` ?](#在-react-中如何使用-redux-的-connect-) |
|163 | [如何在 Redux 中重置状态?](#如何在-redux-中重置状态) |
|164 | [Redux 中连接装饰器的 `at` 符号的目的是什么?](#redux-中连接装饰器的-at-符号的目的是什么) |
|165 | [React 上下文和 React Redux 之间有什么区别?](#react-上下文和-react-redux-之间有什么区别) |
|166 | [为什么 Redux 状态函数称为 reducers ?](#为什么-redux-状态函数称为-reducers-) |
|167 | [如何在 Redux 中发起 AJAX 请求?](#如何在-redux-中发起-ajax-请求) |
|168 | [我应该在 Redux Store 中保留所有组件的状态吗?](#我应该在-redux-store-中保留所有组件的状态吗) |
|169 | [访问 Redux Store 的正确方法是什么?](#访问-redux-store-的正确方法是什么) |
|170 | [React Redux 中展示组件和容器组件之间的区别是什么?](#react-redux-中展示组件和容器组件之间的区别是什么) |
|171 | [Redux 中常量的用途是什么?](#redux-中常量的用途是什么) |
|172 | [编写 `mapDispatchToProps()` 有哪些不同的方法?](#编写-mapdispatchtoprops-有哪些不同的方法) |
|173 | [在 `mapStateToProps()` 和 `mapDispatchToProps()` 中使用 `ownProps` 参数有什么用?](#在-mapstatetoprops-和-mapdispatchtoprops-中使用-ownprops-参数有什么用) |
|174 | [如何构建 Redux 项目目录?](#如何构建-redux-项目目录) |
|175 | [什么是 redux-saga?](#什么是-redux-saga) |
|176 | [redux-saga 的模型概念是什么?](#redux-saga-的模型概念是什么) |
|177 | [在 redux-saga 中 `call()` 和 `put()` 之间有什么区别?](#在-redux-saga-中-call-和-put-之间有什么区别) |
|178 | [什么是 Redux Thunk?](#什么是-redux-thunk) |
|179 | [`redux-saga` 和 `redux-thunk` 之间有什么区别?](#redux-saga-和-redux-thunk-之间有什么区别) |
|180 | [什么是 Redux DevTools?](#什么是-redux-devtools) |
|181 | [Redux DevTools 的功能有哪些?](#redux-devtools-的功能有哪些) |
|182 | [什么是 Redux 选择器以及使用它们的原因?](#什么是-redux-选择器以及使用它们的原因) |
|183 | [什么是 Redux Form?](#什么是-redux-form) |
|184 | [Redux Form 的主要功能有哪些?](#redux-form-的主要功能有哪些) |
|185 | [如何向 Redux 添加多个中间件?](#如何向-redux-添加多个中间件) |
|186 | [如何在 Redux 中设置初始状态?](#如何在-redux-中设置初始状态) |
|187 | [Relay 与 Redux 有何不同?](#relay-与-redux-有何不同) |
| | [React Native](#react-native) |
|188 | [React Native 和 React 有什么区别?](#react-native-和-react-有什么区别) |
|189 | [如何测试 React Native 应用程序?](#如何测试-react-native-应用程序) |
|190 | [如何在 React Native 查看日志?](#如何在-react-native-查看日志) |
|191 | [怎么调试 React Native 应用?](#怎么调试-react-native-应用) |
| | [React supported libraries & Integration](#react-supported-libraries-&-integration) |
|192 | [什么是 Reselect 以及它是如何工作的?](#什么是-reselect-以及它是如何工作的) |
|193 | [什么是 Flow?](#什么是-flow) |
|194 | [Flow 和 PropTypes 有什么区别?](#flow-和-proptypes-有什么区别) |
|195 | [在 React 中如何使用 Font Awesome 图标?](#在-react-中如何使用-font-awesome-图标) |
|196 | [什么 是 React 开发者工具?](#什么-是-react-开发者工具) |
|197 | [在 Chrome 中为什么 DevTools 没有加载本地文件?](#在-chrome-中为什么-devtools-没有加载本地文件) |
|198 | [如何在 React 中使用 Polymer?](#如何在-react-中使用-polymer) |
|199 | [与 Vue.js 相比，React 有哪些优势?](#与-vue.js-相比react-有哪些优势) |
|200 | [React 和 Angular 有什么区别?](#react-和-angular-有什么区别) |
|201 | [为什么 React 选项卡不会显示在 DevTools 中?](#为什么-react-选项卡不会显示在-devtools-中) |
|202 | [什么是 Styled Components?](#什么是-styled-components) |
|203 | [举一个 Styled Components 的例子?](#举一个-styled-components-的例子) |
|204 | [什么是 Relay?](#什么是-relay) |
|205 | [如何在 `create-react-app` 中使用 TypeScript?](#如何在-create-react-app-中使用-typescript) |
| | [Miscellaneous](#miscellaneous) |
|206 | [Reselect 库的主要功能有哪些?](#reselect-库的主要功能有哪些) |
|207 | [举一个 Reselect 用法的例子?](#举一个-reselect-用法的例子) |
|208 | [Redux 中的 Action 是什么?](#redux-中的-action-是什么) |
|209 | [在 React 中 statics 对象是否能与 ES6 类一起使用?](#在-react-中-statics-对象是否能与-es6-类一起使用) |
|210 | [Redux 只能与 React 一起使用么?](#redux-只能与-react-一起使用么) |
|211 | [您是否需要使用特定的构建工具来使用 Redux ?](#您是否需要使用特定的构建工具来使用-redux-) |
|212 | [Redux Form 的 `initialValues` 如何从状态更新?](#redux-form-的-initialvalues-如何从状态更新) |
|213 | [React 是如何为一个属性声明不同的类型?](#react-是如何为一个属性声明不同的类型) |
|214 | [我可以导入一个 SVG 文件作为 React 组件么?](#我可以导入一个-svg-文件作为-react-组件么) |
|215 | [为什么不建议使用内联引用回调或函数?](#为什么不建议使用内联引用回调或函数) |
|216 | [在 React 中什么是渲染劫持?](#在-react-中什么是渲染劫持) |
|217 | [什么是 HOC 工厂实现?](#什么是-hoc-工厂实现) |
|218 | [如何传递数字给 React 组件?](#如何传递数字给-react-组件) |
|219 | [我需要将所有状态保存到 Redux 中吗？我应该使用 react 的内部状态吗?](#我需要将所有状态保存到-redux-中吗我应该使用-react-的内部状态吗) |
|220 | [在 React 中 registerServiceWorker 的用途是什么?](#在-react-中-registerserviceworker-的用途是什么) |
|221 | [React memo 函数是什么?](#react-memo-函数是什么) |
|222 | [React lazy 函数是什么?](#react-lazy-函数是什么) |
|223 | [如何使用 setState 防止不必要的更新?](#如何使用-setstate-防止不必要的更新) |
|224 | [如何在 React 16 版本中渲染数组、字符串和数值? ](#如何在-react-16-版本中渲染数组、字符串和数值-) |
|225 | [如何在 React 类中使用类字段声明语法?](#如何在-react-类中使用类字段声明语法) |
|226 | [什么是 hooks?](#什么是-hooks) |
|227 | [Hooks 需要遵循什么规则?](#hooks-需要遵循什么规则) |
|228 | [如何确保钩子遵循正确的使用规则?](#如何确保钩子遵循正确的使用规则) |
|229 | [Flux 和 Redux 之间有什么区别?](#flux-和-redux-之间有什么区别) |
|230 | [React Router V4 有什么好处?](#react-router-v4-有什么好处) |
|231 | [您能描述一下 componentDidCatch 生命周期方法签名吗?](#您能描述一下-componentdidcatch-生命周期方法签名吗) |
|232 | [在哪些情况下，错误边界不会捕获错误?](#在哪些情况下错误边界不会捕获错误) |
|233 | [为什么事件处理器不需要错误边界?](#为什么事件处理器不需要错误边界) |
|234 | [try catch 与错误边界有什么区别?](#try-catch-与错误边界有什么区别) |
|235 | [React 16 中未捕获的错误的行为是什么?](#react-16-中未捕获的错误的行为是什么) |
|236 | [放置错误边界的正确位置是什么?](#放置错误边界的正确位置是什么) |
|237 | [从错误边界跟踪组件堆栈有什么好处?](#从错误边界跟踪组件堆栈有什么好处) |
|238 | [在定义类组件时，什么是必须的方法?](#在定义类组件时什么是必须的方法) |
|239 | [render 方法可能返回的类型是什么?](#render-方法可能返回的类型是什么) |
|240 | [构造函数的主要目的是什么?](#构造函数的主要目的是什么) |
|241 | [是否必须为 React 组件定义构造函数?](#是否必须为-react-组件定义构造函数) |
|242 | [什么是默认属性?](#什么是默认属性) |
|243 | [为什么不能在 componentWillUnmount 中调用 setState() 方法?](#为什么不能在-componentwillunmount-中调用-setstate-方法) |
|244 | [getDerivedStateFromError 的目的是什么?](#getderivedstatefromerror-的目的是什么) |
|245 | [当组件重新渲染时顺序执行的方法有哪些?](#当组件重新渲染时顺序执行的方法有哪些) |
|246 | [错误处理期间调用哪些方法?](#错误处理期间调用哪些方法) |
|247 | [displayName 类属性的用途是什么?](#displayname-类属性的用途是什么) |
|248 | [支持 React 应用程序的浏览器有哪一些?](#支持-react-应用程序的浏览器有哪一些) |
|249 | [unmountComponentAtNode 方法的目的是什么?](#unmountcomponentatnode-方法的目的是什么) |
|250 | [什么是代码拆分?](#什么是代码拆分) |
|251 | [严格模式有什么好处?](#严格模式有什么好处) |
|252 | [什么是 Keyed Fragments ?](#什么是-keyed-fragments-) |
|253 | [React 支持所有的 HTML 属性么?](#react-支持所有的-html-属性么) |
|254 | [HOC 有哪些限制?](#hoc-有哪些限制) |
|255 | [如何在 DevTools 中调试 forwardRefs?](#如何在-devtools-中调试-forwardrefs) |
|256 | [什么时候组件的 props 属性默认为 true?](#什么时候组件的-props-属性默认为-true) |
|257 | [什么是 NextJS 及其主要特征?](#什么是-nextjs-及其主要特征) |
|258 | [如何将事件处理程序传递给组件?](#如何将事件处理程序传递给组件) |
|259 | [在渲染方法中使用箭头函数好么?](#在渲染方法中使用箭头函数好么) |
|260 | [如何防止函数被多次调用?](#如何防止函数被多次调用) |
|261 | [JSX 如何防止注入攻击?](#jsx-如何防止注入攻击) |
|262 | [如何更新已渲染的元素?](#如何更新已渲染的元素) |
|263 | [你怎么说 props 是只读的?](#你怎么说-props-是只读的) |
|264 | [你认为状态更新是如何合并的?](#你认为状态更新是如何合并的) |
|265 | [如何将参数传递给事件处理程序?](#如何将参数传递给事件处理程序) |
|266 | [如何防止组件渲染?](#如何防止组件渲染) |
|267 | [安全地使用索引作为键的条件是什么?](#安全地使用索引作为键的条件是什么) |
|268 | [keys 是否需要全局唯一?](#keys-是否需要全局唯一) |
|269 | [用于表单处理的流行选择是什么?](#用于表单处理的流行选择是什么) |
|270 | [formik 相对于其他 redux 表单库有什么优势?](#formik-相对于其他-redux-表单库有什么优势) |
|271 | [为什么不需要使用继承?](#为什么不需要使用继承) |
|272 | [我可以在 React 应用程序中可以使用 web components 么?](#我可以在-react-应用程序中可以使用-web-components-么) |
|273 | [什么是动态导入?](#什么是动态导入) |
|274 | [什么是 loadable 组件?](#什么是-loadable-组件) |
|275 | [什么是 suspense 组件?](#什么是-suspense-组件) |
|276 | [什么是基于路由的代码拆分?](#什么是基于路由的代码拆分) |
|277 | [举例说明如何使用 context?](#举例说明如何使用-context) |
|278 | [在 context 中默认值的目的是什么?](#在-context-中默认值的目的是什么) |
|279 | [你是怎么使用 contextType?](#你是怎么使用-contexttype) |
|280 | [什么是 consumer?](#什么是-consumer) |
|281 | [在使用 context 时，如何解决性能方面的问题?](#在使用-context-时如何解决性能方面的问题) |
|282 | [在 HOCs 中 forward ref 的目的是什么?](#在-hocs-中-forward-ref-的目的是什么) |
|283 | [ref 参数对于所有函数或类组件是否可用?](#ref-参数对于所有函数或类组件是否可用) |
|284 | [在组件库中当使用 forward refs 时，你需要额外的注意?](#在组件库中当使用-forward-refs-时你需要额外的注意) |
|285 | [如何在没有 ES6 的情况下创建 React 类组件](#如何在没有-es6-的情况下创建-react-类组件) |
|286 | [是否可以在没有 JSX 的情况下使用 React?](#是否可以在没有-jsx-的情况下使用-react) |
|287 | [什么是差异算法?](#什么是差异算法) |
|288 | [差异算法涵盖了哪些规则?](#差异算法涵盖了哪些规则) |
|289 | [你什么时候需要使用 refs?](#你什么时候需要使用-refs) |
|290 | [对于渲染属性来说是否必须将 prop 属性命名为 render?](#对于渲染属性来说是否必须将-prop-属性命名为-render) |
|291 | [在 Pure Component 中使用渲染属性会有什么问题?](#在-pure-component-中使用渲染属性会有什么问题) |
|292 | [如何使用渲染属性创建 HOC?](#如何使用渲染属性创建-hoc) |
|293 | [什么是 windowing 技术?](#什么是-windowing-技术) |
|294 | [你如何在 JSX 中打印 falsy 值?](#你如何在-jsx-中打印-falsy-值) |
|295 | [portals 的典型使用场景是什么?](#portals-的典型使用场景是什么) |
|296 | [如何设置非受控组件的默认值?](#如何设置非受控组件的默认值) |
|297 | [你最喜欢的 React 技术栈是什么?](#你最喜欢的-react-技术栈是什么) |
|298 | [Real DOM 和 Virtual DOM 有什么区别?](#real-dom-和-virtual-dom-有什么区别) |
|299 | [如何为 React 应用程序添加 bootstrap?](#如何为-react-应用程序添加-bootstrap) |
|300 | [你能否列出使用 React 作为前端框架的顶级网站或应用程序?](#你能否列出使用-react-作为前端框架的顶级网站或应用程序) |
|301 | [是否建议在 React 中使用 CSS In JS 技术?](#是否建议在-react-中使用-css-in-js-技术) |
|302 | [我需要用 hooks 重写所有类组件吗?](#我需要用-hooks-重写所有类组件吗) |
|303 | [如何使用 React Hooks 获取数据?](#如何使用-react-hooks-获取数据) |
|304 | [Hooks 是否涵盖了类的所有用例?](#hooks-是否涵盖了类的所有用例) |
<!-- /TOC -->