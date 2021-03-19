---
title: 箭头函数的四种写法
date: 2019-05-24 21:39:17
tags: ECMAScript,JavaScript,代码规范
---
在JS中箭头函数根据是否书写大小括号可分为以下四种情况。

```javascript
// 不省略
const fun = (value) => {
    return value;
};

// 省略小括号
const fun = value => {
    return value;
};

// 省略大括号
const fun = (value) => value;

// 省略大括号与小括号
const fun = value => value;

```
<!--more-->

## airbnb-javascript关于箭头函数的检查
#### 如果函数体没有副作用的结构，省略大括号，否则使用大括号。[参考](https://github.com/airbnb/javascript#arrows--implicit-return)
这里的副作用结构是指函数内的代码影响了函数外的代码。

```javascript
const even = [];
[1, 2, 3, 4].forEach((num) => {
    if (num % 2 === 0) {
        even.push(num);
    }
};
```

注意：airbnb文档没写，函数内代码块复杂时也需要大括号。
#### 如果参数为一个，省略小括号，否则使用小括号。[参考](https://github.com/airbnb/javascript#arrows--one-arg-parens)

### 《Google JavaScript Style Guide》中箭头函数的提议
大括号可有可无，建议始终写小括号。[参考](https://google.github.io/styleguide/jsguide.html%23features-functions-arrow-functions%0A)

## 个人看法
针对不同的函数结构选择是否使用括号的方式会带来两个问题：
* **代码不一致**：就像一个PPT中不应该一会左对齐一会右对齐一会居中对齐。
* **省略括号不易扩展**：单个参数变多个参数要加小括号，直接返回代码变为多行计算后再返回代码需要增加大括号

我认为有这种争议时应该选择兼容性更强的`不省略大括号与小括号`，在配置种关闭了对这四种写法的检查，但是遵循**约定大于配置**的原则，始终按照一种风格书写。

## eslint的配置
根据文档，在eslint中以下两个模块控制以上四种情况的书写，可对其进行配置（代码如下）
* arrow-parens
* arrow-body-style

```javascript
// .eslintrc.js
module.exports = {
  extends: 'airbnb',
  rules: {
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
  },
};
```
---

同时发表在：
- [掘金](https://juejin.im/post/5d073629f265da1b934e021a)
- [segmentfault](https://segmentfault.com/a/1190000019282507)
