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
- Null
- Undefined
- String
  - ''
  - 'aaa'
- Number
  - 0
  - NaN
  - Infinity
  - 1000000000000000000000("1e+21")
  - 0x
- Boolean
  - false
  - true
- Symbal
- Object
- BigInt

---
### 类型转换

对于类型转换，我们应该从几个方向去考虑：
1、转换方法是否安全：例如 `localStorage.getItem('a')` 可能返回 null，如果对结果使用 `toString` 将会报错。
2、转化的类型是否是自己想要的（处理边缘情况）：`String(0 * 'a').toLocaleString()` 得到的并不是千分位的字符串而是null
- [ ] object与bigint类型的转换

**转换为字符串类型**
隐式转换：需要用到字符串的地方，例如：alert、加法运算符`'' + a`、对象的键名key
显示转换：a.toString()、String(a)、a.valueOf()、a.toLocaleString()、特殊的转换(toLocaleLowerCase、toLocaleUpperCase、toLowerCase、toUpperCase)、数字转字符串（number.toFixed(4)舍、number.toExponential()、number.toPrecision()有效数字）

String() 是最安全的转换方法。

```javascript
// 需要注意的是特别大的数
String(1000000000000000000000)
"1e+21"

// 注意可能返回 NaN 1e+21 Infinity 等数据，注意区分和处理
isNaN(NaN); //ture
(1e+40).toLocaleString().replaceAll(',', '');// "10000000000000000000000000000000000000000"
isFinite(Infinity);// false

// 进制自动转换
String(0x13333)
"78643"
```

**转换为数字类型**
隐式转换：函数算数和表达式中，例如：一元加运算符`+var`、`+-*/%`等等
显示转换：Number、特殊的转换（parseInt()、parseFloat()、Math.ceil()、Math.floor()）

Number() 是最安全的转化方法，一元运算符`+`与他执行逻辑相同。
注意 null 返回 0
Number 不会进行过多的容错处理，不能转化为数字直接返回NaN
string	去掉首尾空格后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 0。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 NaN。

```javascript
Number(undefined)// NaN
Number(null)// 0
Number(true)// 1
Number(false)// 0
Number('   13  ')// 13
Number('')// 0
Number('333.3')// 333.3
Number('.3')// 0.3
Number('1.3a')// NaN
Number('1e+40')// 1e+40
```

**转化为布尔类型**
隐式转换：`!`、`if`、
显示转换：Boolean()

`!` 与 Boolean() 执行逻辑一样
`null`、`undefined`、`0`、`''`、`NaN`为 false，其他都为true


---
### 运算符
`+`二元运算符，两侧只要有字符串，则都进行字符串转换。
`+`一元运算符可进行类型转换，与Number逻辑相同。
语句 x = value 将值 value 写入 x 然后返回 x。
`let b = 1;b += 1 + 1;` 结果 b 为 3，因为`+`运算符优先级高于`+=`。

建议用“一行一个行为”

---
### 值的比较
如果是字符串比较，使用 Unicode 编码顺序
不同类型的值进行比较时，JavaScript 会首先将其转化为数字
`null == undefined`，这是他们自己独立的比较规则，不会出现其他类型的值相等，所以可以利用这个特性。
而 `> < >= <=` 等运算符的 null 会转化为 0。
NaN 不等于任何值

我们需要更为可靠的方法来避免潜在的问题，而不是记住古怪的规则。
对一个值进行比较，我们应该考虑这个值是不是有可能是：`null`、`undefined`、`NaN`

```javascript
5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
```
答案
```
true
false
true
true
false
false：null 有特殊的比较规则，只等于 undefined、null
false
```

---
### 条件分支 if 与 ?
判断时要注意自动类型转换。
嵌套的三元运算符并不是特别复杂，但我认为不应该写。[例子](https://zh.javascript.info/ifelse#duo-ge)

---
### 逻辑运算符
要转变思想，逻辑运算符仅在判断时进行逻辑转换，返回值并不一定是布尔值，而是寻找第一个对(`||`)或错(`&&`)的值。

```javascript
// 获取变量列表或者表达式中的第一个真值
firstName || lastName || nickName || 'Anonymous'

// 寻找第一个假值
result = value1 && value2 && value3

// 短路执行，真执行第二个值
sex === 'men' && playGame()

// 假执行第二个值
loading || submit()

// 替代方案
if (sex === 'men') palyGame()
if (!loading) submit()
```

是否使用逻辑运算符有争议，我现在想的是使用单行的形式替代，替代方案兼顾可读性与便捷性。
