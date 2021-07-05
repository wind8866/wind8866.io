
## 递归和堆栈
递归是一种变成模式，也是一种编程思想。在一个任务拆分成多个相同类型任务的情况下非常有用。
最大嵌套次数被成为递归深度，引擎在最大迭代深度10000及以下是可靠的。100000可能会超出限制。
理论上递归可以不限次数的进行函数嵌套，直到遇到出口（不再嵌套调用）。
任何递归都可以用循环来重写。
写递归重要的是找到两个条件：出口条件、循环条件

#### 执行上下文与堆栈
**执行上下文** 是一个内部数据结构，它包含有关函数执行时的详细细节。记录着 this、当前的变量、当前流程所在位置。
当函数嵌套调用时：
1. 当前函数被暂停
2. 将当前关联的执行上下文堆栈保存
3. 执行嵌套的调用函数
4. 执行结束后，恢复之前的上下文，从暂停的位置继续执行


- [ ] 探索递归尾部调用优化


#### 链表
优化之前链表的实现，实现：双向队列，tail指向尾部的指针，

## Rest 参数 和 Spread 语法
箭头函数是没有 "arguments"


## 变量的作用域，闭包
一个函数是在另一个函数中创建的时，那么该函数就被称为“嵌套”的。
词法环境
- 环境记录：存储局部变量的内部对象
- 外部词法环境：存储外部环境的引用


#### 闭包
闭包是指内部函数总是可以访问其所在的外部函数中声明的变量和参数，即使在其外部函数被返回（寿命终结）了之后。
- [ ] 闭包的概念
- [ ] 闭包的原理
- [ ] 闭包的应用场景
- [ ] 闭包与垃圾回收

#### 题目
为何不报错，严格模式说不可在块级作用域中声明变量啊
```js
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
```
最后一个题目应该多看一下，将环境外变量i改为当前环境的上一环境就可以了。
- [ ] 思考以下 let 与 var 有什么区别

## var
- var 没有（无视）块级作用域
- var 允许重新声明
- var 存在变量声明提升
- let 不能先调用再声明，var 先调用再声明返回 undefined
- var 在全局作用域中（modules中不会）会添加(修改)到window，但不要用，let 不会
- let 会保留在执行上下文中，var 不会

## 全局对象
跨环境应使用 globalThis

## 函数对象
函数是一个对象，特殊的对象，拥有属性
name 会智能的获取，即使是将匿名函数赋值给变量。
length 为期望参数的个数，不包含 ...rest
可以自定义属性和方法。
同时使用函数声明和函数表达式，在外部可访问表达式的变量，在内部可访问所有。这样做意义是即使函数表达式的变量被指向 null，函数声明在内部仍然可用。

## new Function
我们需要从服务器获取代码或者动态地从模板编译函数时才会使用。
该函数的 [[Environment]] 并不指向当前的词法环境，而是指向全局环境。

## 调度：setTimeout 和 setInterval
语法：`let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)`
弹窗时，内部计时器亦然执行，连续的alert会使两次间隔小于2秒。
嵌套的 setTimeout 能够精确地设置两次执行之间的延时，而 setInterval 却不能。
不主动执行清除定时器的操作，会一直占用内存。
在浏览器环境下，嵌套定时器的运行频率是受限制的。根据 HTML5 标准 所讲：“经过 5 重嵌套定时器之后，时间间隔被强制设定为至少 4 毫秒”。服务端没有该限制，这是历史遗留问题。

请注意，所有的调度方法都不能 保证 确切的延时。
CPU 过载。
浏览器页签处于后台模式。
笔记本电脑用的是电池供电（译注：使用电池供电会以降低性能为代价提升续航）。

#### 试题
```js
const printNumbers = (from, to) => {
  const timer = setInterval(function(){
    console.log(from++);
    if (from > to) {
      clearInterval(timer);
    }
  }, 1000)
}
printNumbers(3, 10)
```

```js
const printNumbers = (from, to) => {
  function timer(){
    console.log(from++);
    if (from <= to) {
      setTimeout(timer, 1000);
    }
  }
  setTimeout(timer, 1000)
}
printNumbers(3, 10)
```

## 装饰器模式和转发，call/apply

Spread 语法 ... 允许将 可迭代对象 args 作为列表传递给 call。
apply 仅接受 类数组对象 args。
apply 可能会更快，因为大多数 JavaScript 引擎在内部对其进行了优化。

如果传入的函数有自己的属性或方法，那么这里的装饰器不能适用。
- [ ] 节流代码现在是间隔 ms 毫秒执行一次，与给的答案差一次时间间隔

```js
function cachingDecorator(func, hash) {
  const map = new Map();
  function defaultHash(...rest) {
    return JSON.stringify(rest);
  }
  return function() {
    const key = hash ? hash(arguments) : defaultHash(arguments);
    if (map.has(key)) {
      return map.get(key);
    }
    
    const result = func.call(this, ...arguments);
    map.set(key, result);
    return result;
  }
}

// function slow(x) {
//   let i = 0;
//   while (i < 100000) {
//     i++;
//   }
//   return x ** 2;
// }
// console.log(slow(12))

// quickly = cachingDecorator(slow);
// console.log(quickly(123))
// console.log(quickly(332))
// console.log(quickly(123))

// const dog = {
//   run(range) {
//     console.log(range);
//     return range * 10;
//   }
// }
// dog.run(12)
// dog.run = cachingDecorator(dog.run);
// dog.run(34)

let worker = {
  slow(min, max) {
    // console.log(`Called with ${min},${max}`);
    return min + max;
  }
};
worker.slow = cachingDecorator(worker.slow);
console.log( worker.slow(3, 5) ); // works
```

## bind
一个函数不能被重复绑定：f.bind 返回的函数，仅在创建时记忆上下文。
绑定后会丢失原函数的属性，如果需要，可使用嵌套函数。
- [ ] 笔记