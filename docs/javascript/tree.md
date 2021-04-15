

## code 
```javascript
{
  const tree = []
  let mkdown = '';
  for (const l1 of document.querySelectorAll('.list__link')) {
    const l1Target = {}
    mkdown += `- ${l1.innerText}\n`;
    l1Target.title = l1.innerText;
    l1Target.list = [];
    const list = l1.closest('.list__item').getElementsByClassName('list-sub__link');
    for (const l2 of list) {
      l1Target.list.push({
        title: l2.innerText,
        link: l2.href,
        need: true,
        finish: false,
      })
      mkdown += `  - [ ] [${l2.innerText}](${l2.href})\n`;
    }
    tree.push(l1Target)
  }
}
```

- 简介
  - [ ] [JavaScript 简介](https://zh.javascript.info/intro)
  - [ ] [手册与规范](https://zh.javascript.info/manuals-specifications)
  - [ ] [代码编辑器](https://zh.javascript.info/code-editors)
  - [ ] [开发者控制台](https://zh.javascript.info/devtools)
- JavaScript 基础知识
  - [ ] [Hello, world!](https://zh.javascript.info/hello-world)
  - [ ] [代码结构](https://zh.javascript.info/structure)
  - [ ] [现代模式，"use strict"](https://zh.javascript.info/strict-mode)
  - [ ] [变量](https://zh.javascript.info/variables)
  - [ ] [数据类型](https://zh.javascript.info/types)
  - [ ] [交互：alert、prompt 和 confirm](https://zh.javascript.info/alert-prompt-confirm)
  - [ ] [类型转换](https://zh.javascript.info/type-conversions)
  - [ ] [基础运算符，数学](https://zh.javascript.info/operators)
  - [ ] [值的比较](https://zh.javascript.info/comparison)
  - [ ] [条件分支：if 和 '?'](https://zh.javascript.info/ifelse)
  - [ ] [逻辑运算符](https://zh.javascript.info/logical-operators)
  - [ ] [空值合并运算符 '??'](https://zh.javascript.info/nullish-coalescing-operator)
  - [ ] [循环：while 和 for](https://zh.javascript.info/while-for)
  - [ ] ["switch" 语句](https://zh.javascript.info/switch)
  - [ ] [函数](https://zh.javascript.info/function-basics)
  - [ ] [函数表达式](https://zh.javascript.info/function-expressions)
  - [ ] [箭头函数，基础知识](https://zh.javascript.info/arrow-functions-basics)
  - [ ] [JavaScript 特性](https://zh.javascript.info/javascript-specials)
- 代码质量
  - [ ] [在 Chrome 中调试](https://zh.javascript.info/debugging-chrome)
  - [ ] [代码风格](https://zh.javascript.info/coding-style)
  - [ ] [注释](https://zh.javascript.info/comments)
  - [ ] [忍者代码](https://zh.javascript.info/ninja-code)
  - [ ] [使用 Mocha 进行自动化测试](https://zh.javascript.info/testing-mocha)
  - [ ] [Polyfill](https://zh.javascript.info/polyfills)
- Object（对象）：基础知识
  - [ ] [对象](https://zh.javascript.info/object)
  - [ ] [对象引用和复制](https://zh.javascript.info/object-copy)
  - [ ] [垃圾回收](https://zh.javascript.info/garbage-collection)
  - [ ] [对象方法，"this"](https://zh.javascript.info/object-methods)
  - [ ] [构造器和操作符 "new"](https://zh.javascript.info/constructor-new)
  - [ ] [可选链 "?."](https://zh.javascript.info/optional-chaining)
  - [ ] [Symbol 类型](https://zh.javascript.info/symbol)
  - [ ] [对象 — 原始值转换](https://zh.javascript.info/object-toprimitive)
- 数据类型
  - [ ] [原始类型的方法](https://zh.javascript.info/primitives-methods)
  - [ ] [数字类型](https://zh.javascript.info/number)
  - [ ] [字符串](https://zh.javascript.info/string)
  - [ ] [数组](https://zh.javascript.info/array)
  - [ ] [数组方法](https://zh.javascript.info/array-methods)
  - [ ] [Iterable object（可迭代对象）](https://zh.javascript.info/iterable)
  - [ ] [Map and Set（映射和集合）](https://zh.javascript.info/map-set)
  - [ ] [WeakMap and WeakSet（弱映射和弱集合）](https://zh.javascript.info/weakmap-weakset)
  - [ ] [Object.keys，values，entries](https://zh.javascript.info/keys-values-entries)
  - [ ] [解构赋值](https://zh.javascript.info/destructuring-assignment)
  - [ ] [日期和时间](https://zh.javascript.info/date)
  - [ ] [JSON 方法，toJSON](https://zh.javascript.info/json)
- 函数进阶内容
  - [ ] [递归和堆栈](https://zh.javascript.info/recursion)
  - [ ] [Rest 参数与 Spread 语法](https://zh.javascript.info/rest-parameters-spread)
  - [ ] [变量作用域，闭包](https://zh.javascript.info/closure)
  - [ ] [旧时的 "var"](https://zh.javascript.info/var)
  - [ ] [全局对象](https://zh.javascript.info/global-object)
  - [ ] [函数对象，NFE](https://zh.javascript.info/function-object)
  - [ ] ["new Function" 语法](https://zh.javascript.info/new-function)
  - [ ] [调度：setTimeout 和 setInterval](https://zh.javascript.info/settimeout-setinterval)
  - [ ] [装饰器模式和转发，call/apply](https://zh.javascript.info/call-apply-decorators)
  - [ ] [函数绑定](https://zh.javascript.info/bind)
  - [ ] [深入理解箭头函数](https://zh.javascript.info/arrow-functions)
- 对象属性配置
  - [ ] [属性标志和属性描述符](https://zh.javascript.info/property-descriptors)
  - [ ] [属性的 getter 和 setter](https://zh.javascript.info/property-accessors)
- 原型，继承
  - [ ] [原型继承](https://zh.javascript.info/prototype-inheritance)
  - [ ] [F.prototype](https://zh.javascript.info/function-prototype)
  - [ ] [原生的原型](https://zh.javascript.info/native-prototypes)
  - [ ] [原型方法，没有 __proto__ 的对象](https://zh.javascript.info/prototype-methods)
- 类
  - [ ] [Class 基本语法](https://zh.javascript.info/class)
  - [ ] [类继承](https://zh.javascript.info/class-inheritance)
  - [ ] [静态属性和静态方法](https://zh.javascript.info/static-properties-methods)
  - [ ] [私有的和受保护的属性和方法](https://zh.javascript.info/private-protected-properties-methods)
  - [ ] [扩展内建类](https://zh.javascript.info/extend-natives)
  - [ ] [类检查："instanceof"](https://zh.javascript.info/instanceof)
  - [ ] [Mixin 模式](https://zh.javascript.info/mixins)
- 错误处理
  - [ ] [错误处理，"try..catch"](https://zh.javascript.info/try-catch)
  - [ ] [自定义 Error，扩展 Error](https://zh.javascript.info/custom-errors)
- Promise，async/await
  - [ ] [简介：回调](https://zh.javascript.info/callbacks)
  - [ ] [Promise](https://zh.javascript.info/promise-basics)
  - [ ] [Promise 链](https://zh.javascript.info/promise-chaining)
  - [ ] [使用 promise 进行错误处理](https://zh.javascript.info/promise-error-handling)
  - [ ] [Promise API](https://zh.javascript.info/promise-api)
  - [ ] [Promisification](https://zh.javascript.info/promisify)
  - [ ] [微任务（Microtask）](https://zh.javascript.info/microtask-queue)
  - [ ] [Async/await](https://zh.javascript.info/async-await)
- Generator，高级 iteration
  - [ ] [Generator](https://zh.javascript.info/generators)
  - [ ] [异步迭代和 generator](https://zh.javascript.info/async-iterators-generators)
- 模块
  - [ ] [模块 (Module) 简介](https://zh.javascript.info/modules-intro)
  - [ ] [导出和导入](https://zh.javascript.info/import-export)
  - [ ] [动态导入](https://zh.javascript.info/modules-dynamic-imports)
- 杂项
  - [ ] [Proxy 和 Reflect](https://zh.javascript.info/proxy)
  - [ ] [Eval：执行代码字符串](https://zh.javascript.info/eval)
  - [ ] [柯里化（Currying）](https://zh.javascript.info/currying-partials)
  - [ ] [Reference Type](https://zh.javascript.info/reference-type)
  - [ ] [BigInt](https://zh.javascript.info/bigint)
- Document
  - [ ] [浏览器环境，规格](https://zh.javascript.info/browser-environment)
  - [ ] [DOM 树](https://zh.javascript.info/dom-nodes)
  - [ ] [遍历 DOM](https://zh.javascript.info/dom-navigation)
  - [ ] [搜索：getElement*，querySelector*](https://zh.javascript.info/searching-elements-dom)
  - [ ] [节点属性：type，tag 和 content](https://zh.javascript.info/basic-dom-node-properties)
  - [ ] [特性和属性（Attributes and properties）](https://zh.javascript.info/dom-attributes-and-properties)
  - [ ] [修改文档（document）](https://zh.javascript.info/modifying-document)
  - [ ] [样式和类](https://zh.javascript.info/styles-and-classes)
  - [ ] [元素大小和滚动](https://zh.javascript.info/size-and-scroll)
  - [ ] [Window 大小和滚动](https://zh.javascript.info/size-and-scroll-window)
  - [ ] [坐标](https://zh.javascript.info/coordinates)
- 事件简介
  - [ ] [浏览器事件简介](https://zh.javascript.info/introduction-browser-events)
  - [ ] [冒泡和捕获](https://zh.javascript.info/bubbling-and-capturing)
  - [ ] [事件委托](https://zh.javascript.info/event-delegation)
  - [ ] [浏览器默认行为](https://zh.javascript.info/default-browser-action)
  - [ ] [创建自定义事件](https://zh.javascript.info/dispatch-events)
- UI 事件
  - [ ] [鼠标事件](https://zh.javascript.info/mouse-events-basics)
  - [ ] [移动鼠标：mouseover/out，mouseenter/leave](https://zh.javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave)
  - [ ] [鼠标拖放事件](https://zh.javascript.info/mouse-drag-and-drop)
  - [ ] [指针事件](https://zh.javascript.info/pointer-events)
  - [ ] [键盘：keydown 和 keyup](https://zh.javascript.info/keyboard-events)
  - [ ] [滚动](https://zh.javascript.info/onscroll)
- 表单，控件
  - [ ] [表单属性和方法](https://zh.javascript.info/form-elements)
  - [ ] [聚焦：focus/blur](https://zh.javascript.info/focus-blur)
  - [ ] [事件：change，input，cut，copy，paste](https://zh.javascript.info/events-change-input)
  - [ ] [表单：事件和方法提交](https://zh.javascript.info/forms-submit)
- 加载文档和其他资源
  - [ ] [页面生命周期：DOMContentLoaded，load，beforeunload，unload](https://zh.javascript.info/onload-ondomcontentloaded)
  - [ ] [脚本：async，defer](https://zh.javascript.info/script-async-defer)
  - [ ] [资源加载：onload，onerror](https://zh.javascript.info/onload-onerror)
- 杂项
  - [ ] [DOM 变动观察器（Mutation observer）](https://zh.javascript.info/mutation-observer)
  - [ ] [选择（Selection）和范围（Range）](https://zh.javascript.info/selection-range)
  - [ ] [事件循环：微任务和宏任务](https://zh.javascript.info/event-loop)
- Frame 和 window
  - [ ] [弹窗和 window 的方法](https://zh.javascript.info/popup-windows)
  - [ ] [跨窗口通信](https://zh.javascript.info/cross-window-communication)
  - [ ] [点击劫持攻击](https://zh.javascript.info/clickjacking)
- 二进制数据，文件
  - [ ] [ArrayBuffer，二进制数组](https://zh.javascript.info/arraybuffer-binary-arrays)
  - [ ] [TextDecoder 和 TextEncoder](https://zh.javascript.info/text-decoder)
  - [ ] [Blob](https://zh.javascript.info/blob)
  - [ ] [File 和 FileReader](https://zh.javascript.info/file)
- 网络请求
  - [ ] [Fetch](https://zh.javascript.info/fetch)
  - [ ] [FormData](https://zh.javascript.info/formdata)
  - [ ] [Fetch：下载进度](https://zh.javascript.info/fetch-progress)
  - [ ] [Fetch：中止（Abort）](https://zh.javascript.info/fetch-abort)
  - [ ] [Fetch：跨源请求](https://zh.javascript.info/fetch-crossorigin)
  - [ ] [Fetch API](https://zh.javascript.info/fetch-api)
  - [ ] [URL 对象](https://zh.javascript.info/url)
  - [ ] [XMLHttpRequest](https://zh.javascript.info/xmlhttprequest)
  - [ ] [可恢复的文件上传](https://zh.javascript.info/resume-upload)
  - [ ] [长轮询（Long polling）](https://zh.javascript.info/long-polling)
  - [ ] [WebSocket](https://zh.javascript.info/websocket)
  - [ ] [Server Sent Events](https://zh.javascript.info/server-sent-events)
- 在浏览器中存储数据
  - [ ] [Cookie，document.cookie](https://zh.javascript.info/cookie)
  - [ ] [LocalStorage，sessionStorage](https://zh.javascript.info/localstorage)
  - [ ] [IndexedDB](https://zh.javascript.info/indexeddb)
- 动画
  - [ ] [贝塞尔曲线](https://zh.javascript.info/bezier-curve)
  - [ ] [CSS 动画](https://zh.javascript.info/css-animations)
  - [ ] [JavaScript 动画](https://zh.javascript.info/js-animation)
- Web components
  - [ ] [从星球轨道的高度讲起](https://zh.javascript.info/webcomponents-intro)
  - [ ] [Custom elements](https://zh.javascript.info/custom-elements)
  - [ ] [影子 DOM（Shadow DOM）](https://zh.javascript.info/shadow-dom)
  - [ ] [模板元素](https://zh.javascript.info/template-element)
  - [ ] [Shadow DOM 插槽，组成](https://zh.javascript.info/slots-composition)
  - [ ] [给 Shadow DOM 添加样式](https://zh.javascript.info/shadow-dom-style)
  - [ ] [Shadow DOM 和事件（events）](https://zh.javascript.info/shadow-dom-events)
- 正则表达式
  - [ ] [模式（Patterns）和修饰符（flags）](https://zh.javascript.info/regexp-introduction)
  - [ ] [字符类](https://zh.javascript.info/regexp-character-classes)
  - [ ] [Unicode：修饰符 “u” 和 class \p{...}](https://zh.javascript.info/regexp-unicode)
  - [ ] [锚点（Anchors)：字符串开始 ^ 和末尾 $](https://zh.javascript.info/regexp-anchors)
  - [ ] [Flag "m" — 多行模式](https://zh.javascript.info/regexp-multiline-mode)
  - [ ] [词边界：\b](https://zh.javascript.info/regexp-boundary)
  - [ ] [转义，特殊字符](https://zh.javascript.info/regexp-escaping)
  - [ ] [集合和范围 [...]](https://zh.javascript.info/regexp-character-sets-and-ranges)
  - [ ] [量词 `+,*,?` 和 `{n}`](https://zh.javascript.info/regexp-quantifiers)
  - [ ] [贪婪量词和惰性量词](https://zh.javascript.info/regexp-greedy-and-lazy)
  - [ ] [捕获组](https://zh.javascript.info/regexp-groups)
  - [ ] [模式中的反向引用：\N 和 \k<name>](https://zh.javascript.info/regexp-backreferences)
  - [ ] [选择（OR）|](https://zh.javascript.info/regexp-alternation)
  - [ ] [前瞻断言与后瞻断言](https://zh.javascript.info/regexp-lookahead-lookbehind)
  - [ ] [灾难性回溯](https://zh.javascript.info/regexp-catastrophic-backtracking)
  - [ ] [粘性标志 "y"，在位置处搜索](https://zh.javascript.info/regexp-sticky)
  - [ ] [正则表达式（RegExp）和字符串（String）的方法](https://zh.javascript.info/regexp-methods)
