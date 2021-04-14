## 2.1 浏览器事件简介
html 中事件绑定不是驼峰写法，调用函数必须写上括号 `<div onclick="clickDemo()">demo</div>`
处理程序中的 this 的值是对应的元素。就是处理程序所在的那个元素（被绑定的那个元素 event.currentTarget）。

`addEventListener(event, function | handleEvent, options)`
第三个可选参数：
- 布尔值，即 capture
- 对象
  - once：只执行一次，执行完即删除绑定
  - capture：默认 false 为冒泡阶段触发，true 为捕获阶段触发
  - passive：如果为 true 则不会调用 preventDefault()

`removeEventListener(event, function | handleEvent, options)`用于移除监听事件



## 2.2 冒泡和捕获
阻止事件继续冒泡：`event.stopPropagation`
阻止并不只有阻止当前元素触发的，在子元素上触发的，冒泡经过当前元素，也会被阻止。
`event.stopImmediatePropagation` 不仅阻止冒泡，还阻止当前绑定节点上的其他事件。
浏览器处理事件时一般会先捕获后冒泡，通过事件监听函数的第三个参数可以改变想要监听的阶段。


## 2.3 事件委托
-






有些事件不会冒泡，例如 focus
各种事件的 event 对象继承，对象属性
常见的事件