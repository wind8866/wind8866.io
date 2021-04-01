
## 1.1 
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
nextElementSibling、previousSibling、parentElement

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
- 

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
