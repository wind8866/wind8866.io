`<script>` 标签
- type：模块
- src

```javascript
"use strict";
// 代码以现代模式（严格模式）工作
// 放在函数中则该函数是现代模式工作
// 现代 JavaScript 支持 “classes” 和 “modules” —— 高级语言结构（本教程后续章节会讲到），它们会自动启用 use strict。因此，如果我们使用它们，则无需添加 "use strict" 指令。
const a = 13;
const b = 23;
```

---

有些函数式编程语言禁止改动变量的地址，对其操作会拷贝出一份，在某些领域（并行计算）有好处。
可以使用中文作为变量名：`let 我 = '你好'`
区分大小写
严格模式不使用 `let`、`const`、`var` 直接赋值会报错。
优先使用 `let`，常量使用`const`，硬编码的值最好大写，非硬编码的值还是小写。
变量名在能够准确描述变量的同时要足够简洁。不好的例子就是 data 和 value，这样的名称等于什么都没说。
尽量让一个变量对应一个值，不会带来性能问题。

---
JS 中的数学运算都是安全的。
特殊的数字：Infinity、NaN
特别大的值使用 BigInt：`const bigInt = 1234567890123456789012345678901234567890n;`

JavaScript 中的 null 仅仅是一个代表“无”、“空”或“值未知”的特殊值。
undefined 的含义是未被赋值。

**typeof**
typeof null 会返回 "object" —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 object。
typeof 后跟一个函数返回'function'
typeof 支持大数类型判断

现在JS有8种数据类型。