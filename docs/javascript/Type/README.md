# 原始类型的方法
一方面原始类型需要设计的简单，便于存储便于计算。
另一方面人们需要原始类型有更多的方法。
基于以上需求，JS在处理原始类型时会使用对象包装器包装原始类型，使用完后立即销毁。所以原始类型可以提供方法，但它们依然是轻量级的。

严格模式下给基本类型添加属性会报错。

## 数字类型
**科学表示法：**
1e9：10 亿，字面意思：数字 1 后面跟 9 个 0
1e-6：1 的左边有 6 个 0

**多进制**
十六进制：`0x`、`0X`
二进制：`0b`、`0B`
八进制：`0o`、`0O`

数字后面跟方法需要用括号或者双点：`(134).toString(8)`、`123..toString(2)`、`12.3.toFixed(2)`

舍入舍出
```javascript
// 舍入
Math.ceil(12.3)// 13
Math.ceil(12.5432 * 10 ** 3) / 10 ** 3// 12.544
Math.ceil(12.5432 * 1e3) / 1e3// 12.544

// 舍出
Math.floor(12.5)
Math.floor(12.5438 * 1e3) / 1e3// 12.543
(1.234567).toFixed(5)// '1.23457' 注意这里是字符串
(1.23).toFixed(5)// ’1.23000‘

// 四舍五入
Math.round(13.4)// 13
Math.round(13.5)// 14
```

**精度**
64 位可以存储一个数字：其中 52 位被用于存储这些数字，其中 11 位用于存储小数点的位置（对于整数，它们为零），而 1 位用于符号。
整数也可能出现精度问题：10000000000000000 === 9999999999999999 返回true

如何解决0.1 + 0.2的问题
```javascript
0.1 + 0.2
```

如何比较两个数相等
```javascript
const isEqual = (a, b) => {
  return a - b < 0.00000001
}
isEqual(0.1 + 0.2, 0.3)
```

**特殊值**
两个判断函数均进行数据类型转换
Infinity、-Infinity: isFinite
NaN: isNaN

**数据类型转换**
`+` 和 Number 是最严格的，不完全是一个数字，就返回NaN。仍然忽略前后空格，空字符串转化为0

parseInt 和 parseFloat 会取前面的值，知道不能取，都不能取才返回NaN

parseInt还可用于进制转换，传入第二个参数

**题目**
1、创建一个脚本，提示访问者输入两个数字，然后显示它们的总和。
首先要考虑输入值的类型、再考虑特殊的字符串、再考虑转换，在考虑求和运算。
```javascript
/**
 * a、b: String, Undefined
 */
const sum = (a, b) => {
  return Number(a) + Number(b);
}
```

2、为什么 6.35.toFixed(1) == 6.3？
```javascript
// TODO: 没有处理科学计数法
const toFixed = (num, digit = 0) => {
  let target = String(Math.floor(num * 10 ** digit) / 10 ** digit);
  return target.padEnd(1 +digit + target.indexOf('.'), '0')
}
```

3、永远无法结束的无限循环
```javascript
let i = 0;
while (i != 10) {
  i += 0.2;
}
```
精度问题，转换成整数计算

4、编写一个 random(min, max) 函数，用以生成一个在 min 到 max 之间的随机浮点数（不包括 max)）。

```javascript
const random = (min, max) => {
  return min + (max - min) * Math.random();
}
```

5、min 到 max，包含max 的随机整数
利用已解决的方案解决未解决的问题。
```javascript
const randomInteger = (min, max) => {
  const iMin = Math.ceil(min);
  const iMax = Math.floor(max) + 1;
  return Math.floor(random(iMin, iMax));
}
```

## 字符串
字符串的内部格式始终是 UTF-16，它不依赖于页面编码。
感觉模版函数没什么用，搜索到的文章页比较少
特殊字符 `\`、`\n`、`\u{X…XXXXXX}`、`\t  `、`\'`、`\\`。

str.charAt 访问不到指定的字符返回空字符串而不是 undefined。

- slice(start, end) 截取字符串只需要这个就行了
- split(str)  使用str裁切字符串为数组


小写字母比大些字母整整大了32，这是专门设计的，只改二进制中的一位即可。
```javascript
'a'.codePointAt() - 'A'.codePointAt() === 32

'a'.codePointAt().toString(2).padStart(8, '0')
"01100001"
'A'.codePointAt().toString(2).padStart(8, '0')
"01000001"
```

调用 str.localeCompare(str2) 会根据语言规则返回一个整数（个人测试好像能对中文进行排序，是按照字母表排）

所有常用的字符都是一个 2 字节的代码，允许 65536 个组合，所以稀有的符号被称为“代理对”的一对 2 字节的符号编码，代理对在JS创建时并不存在。所以有些处理会是坑。

[变音符号与规范化](https://zh.javascript.info/string#bian-yin-fu-hao-yu-gui-fan-hua)里讨论了威慑呢们存在normalize()函数。

**试题**
1、首字母大写
```javascript
// ucFirst("john") == "John";
const ucFirst = (str) => {
  // 感觉该方法返回字符串，便于链式操作，应该始终返回字符串
  if (!str) return '';
  const temp = [...str];
  temp[0] = temp[0].toUpperCase();
  return temp.join('')
}
```

2、检查 spam
如果 str 包含 viagra 或 XXX 就返回 true，否则返回 false。
```javascript
const checkSpam = (str) => {
  if(typeof str !== 'string') return false;
  return str.includes('viagra') || str.includes('XXX')
}
```

3、截断文本
truncate(str, maxlength)如果超过 maxlength —— 应使用 "…" 来代替 str 的结尾部分，长度仍然等于 maxlength。
```javascript
// 注意该函数返回值仅用于展示，不应该用于存储（存储时不用展开语法直接判断）
const truncate = (str, maxlength) => {
  const strList = [...str];
  if (strList.length <= maxlength) {
    return str;
  }
  return strList.splice(0, maxlength - 3).join('').concat('...');
}
```

4、提取货币
"$120" => 120
```javascript
const extractCurrencyValue = (str) => {
  if(typeof str !== 'string') return NaN;
  const numStr = str.replace(/^\$/, '');
  return Number(numStr);
}
```

## 数组
push与pop比shift与unshift性能更高，因为不用重新编号。
当我们修改数组的时候，length 属性会自动更新。准确来说，它实际上不是数组里元素的个数，而是最大的数字索引值加一。
数组没有 Symbol.toPrimitive，也没有 valueOf，它们只能执行 toString 进行转换
不要使用 `==` 运算符判断。

注意区分splice黏结、slice切下、split分开字符串
reducer的用法（数组元素求和）：`[1, 2, 3, 4, 5, 6].reduce((sum, item) => (sum + item), 0)`
find，filter，map，除了 sort 是一个特例，都接受一个可选的附加参数 thisArg，用与传递this。
## 数组方法
主要是应用
