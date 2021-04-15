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


## 2.4 浏览器默认行为
阻止默认行为
onclick: return 或 event.preventDefault()
addEventListener: event.preventDefault()

若默认行为被阻止，则 event.defaultPrevented 变为 true

## 2.5 创建自定义事件
自定义事件相当于一个在 DOM 元素上的发布-订阅模式

```javascript
elem.addEventListener('hello', function(event) {
  console.log(event.detail.name)
});
elem.dispatchEvent(new CustomEvent('hello', {
  detail: { name: 'John' }
}))
```
创建自定义事件使用 CustomEvent

一般来说浏览器以队列的方式处理事件，但当一个事件是在另一个事件中发起的，这个事件会被立即处理。




有些事件不会冒泡，例如 focus
各种事件的 event 对象继承，对象属性
常见的事件