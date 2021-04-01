
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
```typescript

```