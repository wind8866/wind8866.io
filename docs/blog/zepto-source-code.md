---
title: zepto源码分析-代码结构
date: 2016-11-17 21:55:02
tags: 源码阅读
---

本来想学习一下jQuery的源码，但由于jQuery的源码有10000多行，设计相当复杂，所以决定从zepto开始，分析一个成熟的框架的代码结构及执行步骤。

网上也有很多zepto的源码分析，有的给源码添加注释，有的谈与jQuery的不同，但是都没有系统的讲解**zepto框架的代码结构及初始化Zepto对象的过程**。

## 准备

默认你已经对面向对象有一定的了解，本文是边实践边写的，虽有些乱，但好处是为大家提供了分析的思路。

[英文文档](http://zeptojs.com/)、 [中文文档](http://www.css88.com/doc/zeptojs_api/)

注意在文中`$`变量表示一个函数对象，而`$()`表示执行函数，他会返回另一个对象。

## 从文档入手分析`$`
在文档中可以看到有两类方法，其中一类是没有`$`前缀，例如`addClass`,这些方法都有一个共同的特点，操作DOM或BOM。还有一类是有前缀的例如`$.trim`，这一类方法无关平台，只是封装了一些常用的方法，可以看作ECMA层级的方法，与浏览器无关。

我们分别打印，看以下log日志

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <p id="person">
        <span></span>
    </p>
</body>
</html>
<!-- 之后的代码中也使用这个html文档 -->
```

``` javascript
console.log($.prototype);
console.log($("#person"));
console.log($);
```
![github控制台](https://raw.githubusercontent.com/wind8866/storage/master/img/693313674-582d826443068_articlex.png)
结果如上图，展开绿色1即可看到所有前缀的方法，展开图中2可看到所有的不带前缀的方法。图中3返回的是一个函数。

1中的结果可以看出像`$.trim`这类方法保存在`$.prototype`的构造函数中，也就是在`$`中，但是`$`打印出来的是却一个函数，为了解决这中迷惑性，以下代码重现了这种情况，可以看出，`$`确实是一个函数，只是这个函数多了一些特定的方法。`$.trim`只是`$`的一个属性。

2中的方法都在对象的原型函数中，因为它执行了`$()`函数返回了一个对象`Z`，该对象的原型中包含一些类似于`addClass`方法。
``` javascript
var good = (function() {
  var g;
  var log = function(text){
    console.log(text);
  }
  g = function(){console.log("666");}
  g.log = log;
  return g;
})();
console.log(good.log("Are you OK?"));// Are you OK?
console.log(good);// function(){console.log("666");}
```
写到这里突然想起来console对象还有个dir方法，`console.dir($)`清晰明了。-_-||
补充一张动图
![console.dir显示zepto结构](https://raw.githubusercontent.com/wind8866/storage/master/img/266795199-582d850c8bf32_articlex.gif)
### 这种写法的好处
我认为这种写法的好处有，调用`$()`后返回的对象是一个新对象，就没有类似`$.trim`这类方法，且`addClass`这类方法都在原型函数中，更能节省内存。

不执行`$`函数对象，只是调用其函数中的特定属性，该对象只会创建一次（在引入zepto时就已经初始化了），同样不会浪费内存。

两种类型的方法共用同一个变量名，减少命名冲突的可能，封装更彻底。


----------

下面开始自上而下的分析源码，层层剥离，使脉络清晰。
## 一、闭包返回与全局变量

``` javascript
var Zepto = (function() {
  return $
})()

window.Zepto = Zepto
window.$ === undefined && (window.$ = Zepto)
```
吐槽一下源码中不写分号，总感觉怪怪的。

使用自执行匿名函数返回`$`传递给`Zepto`。然后把`Zepto`和`$`作为`window`的属性。

这样对外只有两个或一个变量可以使用，不会污染全局环境，如果命名冲突，只需改源码中最后两行即可。

## 二、核心架构

``` javascript
var Zepto = (function() {
    var $,zepto = {};
    $.trim = function(str) {
        return str == null ? "" : String.prototype.trim.call(str)
    }
    $ = function(selector, context){
        return zepto.init(selector, context)
    }
    $.fn = {
        addClass: function(name){
            // 省略
        }
        // 省略
    }
    zepto.Z.prototype = Z.prototype = $.fn
    $.zepto = zepto
    return $
})()
```
在此可以看到$.trim与addClass与其他变量或属性的关系，去除这两个属性后就是第二层的架构，如下。
1. `var $,zepto = {};`
    - 初始化了一个`$`变量和`zepto`对象，注意这里是小写
2. `$`函数
    - 这个函数调用`zepto.init`方法，返回对象，在之后会讲解。
3. 添加`$.fn`对象
    - 它拥有**Zepto对象**上所有可用的方法（官方文档），这里可能有误解，应该是拥有由`$()`返回的对象的所有方法，里面的方法在`$("#person").prototype`中看到过
4. `zepto.Z.prototype = Z.prototype = $.fn`
    - `Z.prototype = $.fn`如果你仔细观察开始时的`$("#person")`返回的对象其实就是Z，那么经过`$()`返回的对象的原型指向了拥有大量方法的`$.fn`对象，所以才可以在`$("#person").prototype`中看到过`addClass`方法
    - 然后是`zepto.Z.prototype = $.fn`，请参考[zepto源码中关于zepto.Z.prototype = $.fn的问题](https://segmentfault.com/q/1010000005782663)
5. `$.zepto = zepto`
    - 不知道为什么有这一句，似乎是可以通过$.zepto访问内部的方法，例如`$.zepto.isZ($("#person"))`。又或许是想将其封装为`$`的属性。
6. `return $`

可以清楚的看到内部的结构，`$.fn`、`$.zepto`、`$.trim`都作为$对象的属性存在，如果调用`$()`函数，返回的Z对象就拥有指定的原型链`Z.prototype = $.fn`。

那么问题又来了：`zepto.init`方法是做什么的？执行`$()`函数返回的是什么对象？

## 三、框架的入口：`zepto.init`
还是先上源码

``` javascript
$ = function(selector, context){
    return zepto.init(selector, context)
}
zepto.init = function(selector, context) {
	var dom
	if (!selector) return zepto.Z()// 如果是$()或$("")则执行
	else if (typeof selector == 'string') {// 如果传入的是字符串
		selector = selector.trim()// 去除收尾空白符
		if (selector[0] == '<' && fragmentRE.test(selector))// 如果传入的字符串是以<开头且符合HTML代码规则（用了正则表达式），即创建元素
			dom = zepto.fragment(selector, RegExp.$1, context), selector = null// 创建一个DOM对象
		else if (context !== undefined) return $(context).find(selector)// 这里其实是一种讨巧的办法，我相信jQuery中肯定不会这么写，目的是实现在指定范围内查找[context]元素
		else dom = zepto.qsa(document, selector)// 调用zepto.qsa解析字符串，返回一个DOM数组
	}
	else if (isFunction(selector)) return $(document).ready(selector)// 很简单，如果是函数，则在文档就绪后执行
	else if (zepto.isZ(selector)) return selector// 如果是一个zepto对象，直接返回
	else {
		if (isArray(selector)) dom = compact(selector)// 如果是数组，调用compact返回一个数组，最后经Z变成类数组对象，我想这里是把几个DOM对象作为数组的参数传入，返回一个类数组对象
		else if (isObject(selector))// 如果是一个对象，将其包含在数组之内，如p = document.getElementById("#p");$(p);
			dom = [selector], selector = null
		else if (fragmentRE.test(selector))// 不知道是干嘛的
			dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
		else if (context !== undefined) return $(context).find(selector)
		else dom = zepto.qsa(document, selector)
	}
	return zepto.Z(dom, selector)// 可以看这里，无论以上过程经历了什么，都要经过此函数，目的是将数组转化为类数组对象。
}
zepto.Z = function(dom, selector) {
    return new Z(dom, selector)
}
/**
 * 一个构造函数，将dom对象中的属性和方法都复制到this下，并添加了两个属性，length和selector，这个函数的目的是将DOM对象转化为供zepto使用的类数组对象
 */
function Z(dom, selector) {
	var i, len = dom ? dom.length : 0
	for (i = 0; i < len; i++) this[i] = dom[i]
	this.length = len
	this.selector = selector || ''
}
zepto.fragment = function(html, name, properties) {
	// 这里的代码就不展开了，其作用是返回一个DOM对象，若$()中传入第二个参数，则将其属性添加给创建的DOM对象
	return dom
}
zepto.qsa = function(element, selector){
	// 这里也不展开代码，又兴趣的可以直接看源码，很简单，无非是根据传入的选择符分别调用getElementByID、getElementsByTagName、getElementsByClassName、querySelectorAll等方法，返回一个数组，数组的值即是DOM对象，这就是最核心的选择器，有点坑爹。
}
```
这一段代码是zepto的核心代码，是使用zepto的入口，这里还是从文档入手比较好理解。


> Zepto集合是一个类似数组的对象，它具有链式方法来操作它指向的DOM节点，除了$(Zepto)对象上的直接方法外(如$.extend)，文档对象中的所有方法都是集合方法。

上一句可以告诉我们：Zepto集合是一个类似数组的对象即是之前`$("#person")`返回的对象。文档中所有不带前缀的方法叫做**集合方法**。

再来看方法的调用

```
$(selector, [context])      // 在指定范围内查找[context]元素，类似$(context).find(selector)，例如$(".logo",".header")，只选取.header类中的.logo类
$(<Zepto collection>)       // 这里应该是指传入zepto对象，如：var a = $("a");$(a);
$(<DOM nodes>)              // 选取所有页面中的div元素,如：$('div')
$(htmlString)               // 创建一个元素，如：$("<p>Hello</p>")
$(htmlString, attributes)   // 创建带有属性的元素，$("<p />", { text:"Hello", id:"greeting", css:{color:'darkblue'} })
Zepto(function($){ ... })   // 当页面ready的时候，执行回调
// 还有写文档中没有
$()或$("")
```


至于为什么调用Z()函数返回的对象都以Z为对象名呢？看这段小代码就可以明白
``` javascript
function Z(){
  this.name = 666;
}
z = new Z();
console.log(z);// 返回的对象名为Z
```
这个过程比较复杂，建议你亲自动手试一试，还是以`$("#person")`为例，用Chrome在这一行打断点，然后步进，我看能不能做个flash图。
![步进调试zepto](https://raw.githubusercontent.com/wind8866/storage/master/img/2211883477-582d887b3b58d_articlex.gif)
如果你仔细观察，这一层的核心源码最后大部分都有return返回，最终`$()`也会返回对象，整个过程其实是对向`$()`中传入的参数进行处理运算，最终返回一个zepto自己创造的对象，然后用于后续操作。

----

## 总结
zepto的源码对一般的熟练面向对象的人来说是非常简单的，对于有面向对象概念没有写过的人来说是那种踮起脚尖能得到的难度。最开始想学习jQuery源码，但看了一点觉得太复杂，于是投机取巧看zepto，也是完全理不清头绪啊，知道上个星期天找到了一种方法，写一端小代码，然后在Chrome里步进调试，看函数之间的依赖关系法，看函数的传入值，返回值，了解这个函数是做什么用的。最后慢慢的理清头绪。这篇文章在星期一就开始写，一直到星期四才算完成。

**`$`(或`Zepto`)是一个函数对象，但他包含了一些特定的属性(方法)。可以直接调用这些属性(方法)，这些属性(方法)大都与浏览器无关。也可以执行`$`函数，执行后返回一个类数组对象，这个对象的原型中包含一些操作DOM的方法，向原型中添加属性(方法)，所有的对象都可以访问到。执行`$`函数是zepto的关键代码，其目的是根据传入函数的变量值，加工处理成类数组对象并返回，用于后续操作。**

 
同时发表在：
- [segmentfault](https://segmentfault.com/a/1190000007515865)
- [掘金](https://juejin.im/post/5d148d955188255cda6a07d2)
- [个人博客](https://wind8866.github.io/zepto-source-code/)