---
title: 对接口规范的一些思考
date: 2019-06-20 21:29:34
updated: 2019-06-20 21:29:34
tags: 代码规范
---

团队中如果不同的项目，不同的人员可能在接口设计上有许多不统一的地方。导致了开发效率低下的问题。
由于我在工作中遇到了，所以整理下来，说一说自己的一些看法。

<!--more-->

---

## 怎样进行接口规范化
因为每个人对自己使用语言有不同的理解、HTTP协议熟悉程度不同、思维逻辑、开发经验不一样。对接口规范有想法的人应该提出自己的观点，给出自己的理由。让别人去评价，讨论出一套统一的规则，最终统一成一个内部的标准。
形成统一标准后由相关人员写出示例。例如前端要对GET请求针对`jQuery.ajax`、`fetch`、`axios`等请求库给出示例代码。以后直接参照示例代码进行开发。

由于每个项目在定义接口时有许多不同的方式，我根据以往的经验，从请求方法、请求头、请求体、响应状态码、响应体等几个方面对接口的规范说说自己的看法。
## 我对标准的理解
我们不同的项目使用的请求方式大概有两种：
* GET、POST
* GET、POST、PUT、DELETE

如果使用前者，PSOT的URL中应该指明要执行的动作，而后者不需要指定。

```HTTP
POST /api/user/add HTTP/1.1
POST /api/user/set HTTP/1.1
POST /api/user/delete HTTP/1.1

# 这里例子中约定PUT是新增，POST是修改
POST /api/user HTTP/1.1
PUT /api/user HTTP/1.1
DELETE /api/user HTTP/1.1
```

至于使用前者还是后者，我更倾向于前者。
如果使用后者时，什么情况下使用PSOT、什么情况下使用PUT，搜索到了到了一些[资料](https://stackoverflow.com/questions/630453/put-vs-post-in-rest)，但看不懂。

### 接口URL
接口URL应该见名知意，有一定的规律。
这里我不太懂，就不做过多赘述。
### 数据类型的约定
前端请求中不应该有`undefined`，因为后端不支持(json也不支持)该数据类型。
如果`Content-Type`为`multipart/form-data`，前端不应该传null，因为会被转化成字符串，后端不能判断出这是用户输入还是null类型。

每个项目应该约定请求时下面这些数据代表什么意思

* null数据类型表示什么
* 空字符串类型表示什么


## GET请求
### 作用
GET请求应该读取数据，不应该产生任何的“副作用”操作。
这里要注意一点浏览器对[URL长度是有限制的](https://github.com/zhongxia245/blog/issues/35)，如果查询的URL长度过长会引起不可预期的后果。可以采用POST/PUT进行查询。
### 方式
GET请求的参数应该放在请求的URL中而不应该放在请求体中。
例如下面是一个标准的这个GET请求（不相关HTTP头字段已剔除）
```http
GET /api/user?userId=12345 HTTP/1.1
Host: http://www.example.com
```
## POST/PUT/DELETE请求
这三种请求方法传参数格式都相同，下面以POST为例。
POST类型使用的方式非常多样，见识过各种各样奇葩的方式，也是耽误时间最长的，严重影响开发进度。这里只讨论我认为标准的方式。
### 作用
POST请求用于新增、修改或删除数据，少数情况下用于查询数据。
### 方式
POST请求的参数必须放在请求体中。
而POST的请求方式有[四种方式](https://imququ.com/post/four-ways-to-post-data-in-http.html)：

* application/x-www-form-urlencoded
* multipart/form-data
* application/json
* text/xml

这几种方式通过HTTP头中的`Content-Type`头字段进行控制。

#### `multipart/form-data`
我们现在使用的最多的是`multipart/form-data`。
```http
POST /api/user/set HTTP/1.1
Host: http://www.example.com
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary2KbanAZwv0mKceX0

------WebKitFormBoundary2KbanAZwv0mKceX0
Content-Disposition: form-data; name="userName"

张三
------WebKitFormBoundary2KbanAZwv0mKceX0
Content-Disposition: form-data; name="userId"

123456
------WebKitFormBoundary2KbanAZwv0mKceX0--
```
这种方式不适合复杂数据类型的传递，例如有个接口需要同时修改多个用户：
```javascript
const userList = [
  {
    userID: 123,
    userName: '张三',
    isAdmin: true,
  }, {
    userID: 456,
    userName: '李四',
    isAdmin: false,
  },
];
```
那么在POST请求时只能这么做
```http
POST /api/userlist/set HTTP/1.1
Host: http://www.example.com
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary2KbanAZwv0mKceX0

------WebKitFormBoundary2KbanAZwv0mKceX0
Content-Disposition: form-data; name="userID"

123,456
------WebKitFormBoundary2KbanAZwv0mKceX0
Content-Disposition: form-data; name="userName"

张三,李四
------WebKitFormBoundary2KbanAZwv0mKceX0
Content-Disposition: form-data; name="isAdmin"

1,0
------WebKitFormBoundary2KbanAZwv0mKceX0--
```
更重要的是**这种方式不支持数据类型**，传入的所有格式的数据都会转成字符串类型。后端经常要使用1表示true，需要将数组或对象拆分开。

#### `application/json`

这是我推荐使用的方式，有效的弥补了`multipart/form-data`的缺陷。
但不知什么原因现在我们团队基本不使用这种方式。
`application/json`也有一个缺陷就是不支持上传文件（有特殊的方法这里也不建议使用），想上传文件还是使用`multipart/form-data`。

下面是请求示例

```http
POST /user HTTP/1.1 
Host: http://www.example.com
Content-Type: application/json;charset=utf-8

[{"userID":123,"userName":"张三","isAdmin":true},{"userID":456,"userName":"李四","isAdmin":false}]
```

## 响应
不知道服务器对于不同的处理会返回什么样的状态码，这里不做讨论。
我们会返回一个逻辑状态码`code`与提示信息`msg`，响应体像下面这样。
```json
{"code":200,"msg":"处理成功!","data":{}}
```
在此基础上增加一些限制：
**建议data字段始终为对象类型**
易于扩展，例如当前接口是用户列表页，data使用数组。v2版本接口加入了分页查询，就必须使data变为对象类型了。

**如果字段为复杂类型，不允许为null**
复杂类型包括数组与对象。
为了方便阅读，这里将json字符串转化为了JS对象。
```javascript
const resBody = {
  code: 200,
  msg: '处理成功',
  data: {
    list: [
      {
        userID: 123,
        userName: '张三',
      },
    ],
  },
};
```
如果没有数据的时候返回
```javascript
const resBody = {
  code: 200,
  msg: '处理成功',
  data: {
    list: null,
  },
};
```
这样前端在遍历list时，null会导致代码出错，应该始终保证该字段的数据类型不变，正确返回方式如下。
```javascript
const resBody = {
  code: 200,
  msg: '处理成功',
  data: {
    list: [],
  },
};
```
---
## 其他
如果你有其他补充或纠正，欢迎👏评论。
文章同时发表在[掘金](https://segmentfault.com/a/1190000019328137)。

**参考资料**
* [超文本传输协议](https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)
* [HTTP头字段](https://zh.wikipedia.org/wiki/HTTP%E5%A4%B4%E5%AD%97%E6%AE%B5)
* [四种常见的 POST 提交数据方式](https://imququ.com/post/four-ways-to-post-data-in-http.html)
* [介绍JSON](http://www.json.org/json-zh.html)


**同时发表在：**
- [掘金](https://juejin.im/post/5d08463fe51d45777540fdb3)