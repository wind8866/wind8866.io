
## 
因为文档本身比较简单，所以笔记只保留了自认为能用到的东西。

## less 与 sass
掘金三个月内的文章数量
- less 9
- postcss 5
- sass 16

搜索文章基本上没有人实际使用 postcss，大多数的文章只是分析而不是应用。

less 最早的tag是2010，2021年2月最后一次更新，vue系基本用这个，周下载量3,247,086，
sass 最早的tag是2016，2021年2月6月最后一次更新，react系或bootstrap基本用这个，周下载量4,375,253，

可不可以使用原生的css：[原生的css依然不给力](https://jelly.jd.com/article/5dcb9c73641a030153732a89)

**综上所述**
不考虑原生css，不考虑postcss
文档：less 的文档会更清晰
更新：sass 更新更更快一些
可替代：两者的语法就像jsx与vue的模板的区别，基本都是可替代的，学好一个另一个只是熟练度的问题
重点：预处理器重点在代码组织，而不是语法
使用量：less优势一些
文章：sass文章多一些，是因为 vue 的用户基础，文章里有部分是node-sass的问题
理念：less即少
个人偏好：选 less

综上：less

## 概念
- 变量：用做css属性的值
  - 变量声明提升，可先使用后定义
- 混合：规则集一次性拷贝到各个属性类中
- 嵌套：就是嵌套；可嵌套规则(媒体查询)
- 操作：四则运算
- 转义：有点像变量，可使用任意字符串作为属性或变量值
- 函数：提供转换方法
- 命名空间和访问符：像访问对象一样拷贝某个混合里的某个属性。
- 地图：感觉像借用规则
- 作用域：逐级向上查找
- 注释：
- 导入：模块化


### 变量
```less
// 总之：1、变量可以用在任何地方
// 2、在与其他值结合或作为 key 时要使用大括号@{}
@link-color: #428bca;
@images: "../img";
.a-link {
  color: @link-color;
  background-image: url("@{images}/a-icon.png");
  border-color: @color;// 属性作为变量
}
```
编译结果
```css
.a-link {
  color: #428bca;
  background-image: url("./img/a-icon.png");
  border-color: #428bca;
}
```
### 父选择器
```less
.button {
  &-ok {
    background-image: url("ok.png");
  }
  &-error {
    background-image: url("error.png");

    // &代表所有父选择器（不仅仅是最近的祖先
    &+& {
      color: red;
    }
  }
  &:hover {
    background: #fad; 
  }
  // 可向上转
  .buton-group & {
    display: inline-block;
  }
}
```
编译结果
```css
.button .button-ok {
  background-image: url("ok.png");
}
.button .button-error {
  background-image: url("error.png");
}
.button .button-error + .button .button-error {
  color: red;
}
.button:hover {
  background: #fad; 
}
.buton-group .button {
  display: inline-block;
}
```

### Extend
是一个伪类，与混合的功能（为目标加入指定样式规则）有点像，但实现上不一样，不是拷贝，而是类似于指针指向。
其他部分的文档并没有看，感觉应该没有什么东西。
```less
nav ul {
  &:extend(.inline);
  background: blue;
}
.inline {
  color: red;
}
```
编译结果
```css
nav ul {
  background: blue;
}
.inline,
nav ul {
  color: red;
}
```

### merge 合并
[属性值合并到一块](https://lesscss.org/features/#merge-feature)
```less
.mixin() {
  box-shadow+: inset 0 0 10px #555;
}
.myclass {
  .mixin();
  box-shadow+: 0 0 20px black;
}
```
编译结果
```css
.myclass {
  box-shadow: inset 0 0 10px #555, 0 0 20px black;
}
```

### 混合
```less
.my-mixin {
  &:hover {
    border: 1px solid red;
  }
}
// 不会被编译到代码中
.my-other-mixin() {
  background: white;
}
.class {
  .my-mixin();
  .my-other-mixin();
}
```
编译结果
```css
.my-mixin:hover {
  border: 1px solid red;
}
.class {
  background: white;
}
.class:hover {
  border: 1px solid red;
}
```

**命名空间**
命名空间就像个对象，混合里加入类就是命名空间。调用时可以只取其中的一部分。
```less
#my-library {
  .my-mixin() {
    color: black;
  }
}
.class {
  #my-library.my-mixin();
}
```
编译结果
```css
.class {
  color: black;
}
```

**像函数的混合**

```less
// 支持多个参数，还支持重载
.border-radius(@radius: 5px) {
  border-radius: @radius;
}
// 还可以具名
// 更可以 @arguments, 不演示了
.mixin(@color: black; @margin: 10px; @padding: 20px) {
  color: @color;
  margin: @margin;
  padding: @padding;
}
#header {
  .border-radius(4px);
}
.class1 {
  .mixin(@margin: 20px; @color: #33acfe);
}
```
编译结果
```css
.class {
  color: black;
}
.class1 {
  color: #33acfe;
  margin: 20px;
  padding: 20px;
}
```

#### 模式匹配
<https://lesscss.org/features/#merge-feature>
这个在做主题色时应该能用到。

#### 递归混合
<https://lesscss.org/features/#mixins-feature-loops-feature>
相当于循环，可以用于网格的类。


---

```less

```
编译结果
```css

```