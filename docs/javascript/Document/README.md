

## TODO
- [ ] 1.7 修改文档
- [ ] 1.9 元素大小和滚动
- [ ] 1.11 坐标

----
----
## 1.1 浏览器环境，规格
- window
  - DOM
  - BOM
  - JavaScript

规范：
[DOM](https://dom.spec.whatwg.org/): wathwg，描述文档结构，操作，事件
[CSSOM](https://www.w3.org/TR/cssom-1/): 描述样式表和样式规则
[HTML](https://html.spec.whatwg.org/): 描述 HTML 语言（例如标签）以及 BOM（浏览器对象模型）

## 1.2 DOM 树
HTML 会被解析为 DOM 树，最常见的类型为：文本节点、元素节点、Document节点、注释节点。

## 1.3 遍历 DOM 树
html: document.documentElement
body: document.body
head: document.head
childNodes、firstChild、lastChild
children、firstElementChild、lastElementChild
nextSibling、previousSibling、parentNode
nextElementSibling、previousElementSibling、parentElement

某些类型的 DOM 元素提供了单独的导航功能，如 table

**注意：**
childNodes 是实时的
parentNode 与 parentElementNode 的唯一区别是：document.documentElement.parentElementNode 为 null


## 1.4 搜索：getElement*，querySelector*

- querySelector
- querySelectorAll
- getElementById
- getElementsByTagName
- getElementsByClassName
- getElementsByName

- elem.matches(css)：检查当前元素是否匹配
- elem.closest(css)：向祖先元素查找最近的匹配

**注意：**
实时集合：getElementsByTagName、getElementsByClassName、getElementsByName
静态集合：querySelector、querySelectorAll、getElementById

## 1.5 节点属性：type，tag 和 content
用 TypeScript 描述 DOM 节点的继承关系

EventTarget：DOM节点支持事件
Node：提供节点间导航
Element：元素级导航，搜索方法

所有元素都有的通用属性：
nodeType：1: 元素、3: 文本、9: document
tageName、nodeName：当前元素/节点名字，大写
innerHTML、outerHTML：元素节点内容读取
nodeValue、data：文本节点内容读取
textContent: 安全写入
hidden: 是否可见


**注意：**
innerHTML 与 outerHTML 的区别是 outerHTML 只是移除 DOM 节点，而不是像 innerHTML 一样直接替代。所以移除后的 DOM 节点仍可操作，但我们不应该这么做。

**问题：**
- [ ] document 属于哪一类？
- [ ] 它位于 DOM 层次结构（hierarchy）中的什么位置？
- [ ] 它继承自 Node 还是 Element，或者可能是 HTMLElement？
- [ ] 其他的元素的所有属性

## 1.6 特性和属性（Attributes and properties）
大多数标准的 HTML 特性（attributes）会自动变成 DOM 对象的属性（properties）
非标准的 HTML 特性不会变成 DOM 对象的属性。
大部分标准的 HTML 特性被修改，对应的 DOM 对象属性也会自动更新，反之亦然（除了几个特例）。
非标准属性建议使用 data-info，在 JS 中使用 elem.dataset.info 获取或设置。

elem.hasAttribute(name)
elem.getAttribute(name)
elem.setAttribute(name)
elem.removeAttribute(name)
elem.attributes

**特例**
input 的 页面显示、`<input>` 的 value 特性、input.value 属性之间的关系，在[1.6.html](./1.6.html)


**注意：**
HTML 中，属性名大小写是不敏感的，特性名都是字符串。
但是 DOM 属性可以是字符串、布尔值，甚至对象。

## 1.7 修改文档（document）

- 创建新节点
  - document.createElement(tagName)
  - document.createTextNode(text)
  - node.clone(bool): 是否克隆子元素
- 插入和移除节点
  - node.append(nodes | text)
  - node.prepend(nodes | text)
  - node.before(nodes | text)
  - node.after(nodes | text)
  - node.replaceWith(nodex | text)
  - node.remove(childNode)
- 在 html 中给定一些 HTML
  - node.insertAdjacentHTML(where, html)
    - beforebegin
    - afterbegin
    - beforeend
    - afterend
  - node.insertAdjecentText
  - node.insertAdjecentElement
- 过时方法
  - parent.appendChild
  - parent.insertBefore
  - parent.removeChild
  - parent.replaceChild
- 其他
  - new DocumentFragment()
  - document.wirite(html) 不是去构建 dom 树，而是直接改变html文档

## 1.8 样式和类
相较于将样式写入 style 属性，我们应该首选通过 CSS 类的方式来添加样式。仅当类“无法处理”时，才应选择使用 style 属性的方式。
CSS 中有 `计算 (computed) 值` 和 `解析 (resolved) 值` 两种概念。

elem.className
elem.classList
  add
  toggle
  contains
elem.style
elem.style.cssText
getComputedStyle(elem, pseudo)

**注意：**
为了保护用户隐私，`getComputedStyle(elem, ':visited')` 获取的并不是 `:visited` 的样式。同样 `:visited` 也不允许更改几何形状的样式。

## 1.9 元素大小和滚动
以下属性均返回数字或null
- 外部
  - offsetParent
    - CSS 定位的（position 为 absolute，relative 或 fixed），
    - 或 `<td>`，`<th>`，`<table>`，
    - 或 `<body>`
  - offsetTop: 元素边框最外侧距离最近的父元素的距离
  - offsetLeft
  - offsetWidth: 包括边框最左侧到最右侧的距离
  - offsetHeight: 类上
- 自身
  - clientTop: 元素内容距离边框最上侧（包括边框与滚动条）
  - clientLeft: 类上
  - clientWidth: 元素内容的最左侧到最右侧（不包含滚动条）
  - clientHeight: 类上
- 滚动
  - scrollTop: 竖直方向滚动的距离，可写
  - scrollLeft: 水平方向上滚动的距离，可写
  - scrollWidth: 文档内容的总宽度
  - scrollHeight: 文档内容的总高度

不使用 width/height 的原因：1、box-sizing 影响 2、可能为 auto 3、滚动条会有bug

## 1.10 Window 大小和滚动
- 文档可见部分（不包括滚动条）
  - document.documentElement.clientWidth/clientHeight
- 文档可见部分加上滚动条
  - widow.innerWidth/innerHeight
- 整个文档的宽高
  - 见下面
- 获得当前滚动
  - window.pageYOffset/pageXOffset
- 相对滚动
  - window.scrollBy(x, y)
- 绝对滚动
  - window.scrollTo(x, y)
- 滚动使 elem 可见
  - elem.scrollIntoView(bool)
    - true(默认): 窗口顶部
    - false: 窗口底部
- 锁定滚动
  - 将 style 的 overflow 设置为 hidden

```javascript
const scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight,
)
```

## 1.11 坐标
浏览器中元素的定位有两套坐标系统，一种是相对于浏览器窗口，相当于 CSS 的 `position: fixed`，还有一种是相对于文档，与 文档根 document root 中的 `position: absolute` 类似。

- 相对于窗口(elem.getBoundingClientRect)
  - x/y
  - width/height
  - top/left
  - bottom/right: 元素最右侧相对于窗口最左侧的距离
- document.elementFromPoint(x, y)
  - 返回指定坐标处嵌套最多的元素
  - 如果为负值，则直接返回null
- 文档坐标
  - pageY = 相对于窗口的Y + 文竖直滚动出部分的高度
  - pageY = elem.getboundingClientRect().top + window.pageYOffset
  - pageX = 相对于窗口的X + 文档水平滚动出部分的高度
  - pageX = elem.getboundingClientRect().left + window.pageXOffset


![](https://zh.javascript.info/article/coordinates/coordinates.svg)