

## 原型继承
`rabbit.__proto__ = animal`
在这儿我们可以说 "animal 是 rabbit 的原型"，或者说 "rabbit 的原型是从 animal 继承而来的"。
因此，如果 animal 有许多有用的属性和方法，那么它们将自动地变为在 rabbit 中可用。这种属性被称为“继承”。

引用不能形成闭环。如果我们试图在一个闭环中分配 `__proto__`，JavaScript 会抛出错误。
`__proto__` 的值可以是对象，也可以是 null。而其他的类型都会被忽略。

`__proto__` 与内部的 [[Prototype]] 不一样。`__proto__` 是 [[Prototype]] 的 getter/setter。
现代编程语言建议我们应该使用函数 Object.getPrototypeOf/Object.setPrototypeOf 来取代 `__proto__` 去 get/set 原型。

设置 rabbit.name，会设置到 rabbit 上，但是如果 animal 上有 name 的 setter 和 getter 就不一样了，会设置到 animal 上。[参考](https://zh.javascript.info/prototype-inheritance#xie-ru-bu-shi-yong-yuan-xing)
上面使用`rabbit.name = 'little white'` 时，setter 中的 this 指向 rabbit。因为**无论在哪里找到方法：在一个对象还是在原型中。在一个方法调用中，this 始终是点符号 . 前面的对象。**

演示代码在[prototype.html](./prototype.html)

使用 obj.hasOwnPrototype(name) 可以判断 name 是否是在本对象 obj 上

## prototype

```js
let obj = {};
alert(obj.__proto__ === Object.prototype); // true
```

在现代编程中，只有一种情况下允许修改原生原型。那就是 polyfilling。

从原型中借用：obj.join = Array.prototype.join

TODO: 第二题解答