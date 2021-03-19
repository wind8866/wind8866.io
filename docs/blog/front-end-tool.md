---
title: 前端开发人员使用的生产力工具
date: 2019-06-13 21:39:17
tags: ECMAScript,JavaScript,代码规范
---
作为一个前端工程师，工作这几年遇到并收藏了很多好用的工具，给大家分享一下。

* 浏览器插件
* 系统应用
* 在线工具

<!--more-->

ps: 其实还有github的一些好工具或好项目，有时间我会补上的。（其实是因为懒得弄

## 浏览器插件
本人使用的事Chrome，Firefox用户请自行搜索。

### 谷歌访问助手
你懂的，没有这个不能访问Chrome应用商店。但下载这个插件要到Chrome应用商店。
死循环？？不可能的，我找到了貌似是[官网](http://www.ggfwzs.com/)的东西。
PS：感谢高大哥，他告诉我的这个插件。

### 花瓣网页收藏工具
很早之前用过，可以将好看的图片搜藏到花瓣网（一个图片搜藏的网站）。
但我都是把它当网页截图工具用

### 百度药丸 Baidu Capsule
不想看百度搜索的莆田系医院等垃圾广告怎么办？用这个。不过有个软件的原理应该是每次都清除cookie，防止百度记录你的搜索记录，所以每次使用百度产品都需要登陆。
不过没关系，我一般不用百度的产品。

### 广告终结者【强烈推荐】
必备软件，不想看那些乱七八糟、伤心病狂、不堪入目的广告怎么办？用这个。

### Webtime Tracker
记录网站使用时间的插件，看下我的（刚重装了系统）。
![网页使用时间](https://user-gold-cdn.xitu.io/2019/6/13/16b502cb72dd5af3?w=756&h=1162&f=png&s=163352)

### OneTab
电脑内存不够时可以释放一部分内存。

### Octotree【强烈推荐】
开发必备，看GitHub中项目时不用一层层的点进去。
![996.icu](https://user-gold-cdn.xitu.io/2019/6/13/16b502cb72e25c7b?w=1872&h=1042&f=png&s=262187)

### Evernote Web Clipper
印象笔记剪藏，印象笔记用户可以试试，一键收藏网页。

### Dark Reader
咱们的知识分享平台这么难用（滑稽保命.jpg），不敢说话又想黑它怎么办？用这个。
![被黑的知识平台](https://user-gold-cdn.xitu.io/2019/6/13/16b502cb72fef7ab?w=2396&h=1210&f=png&s=292348)

### Axure RP Extension for Chrome
Axure导出交互式可访问原型图时，不能用浏览器打开，这是个辅助工具。

### Google 翻译
最好用的网页翻译软件，英语渣必备。

### 小技巧
安装的插件多了又不经常用怎么办，可以在扩展程序里面关闭，也可以右键选择从chrome中隐藏。
![](https://user-gold-cdn.xitu.io/2019/6/13/16b502cb72f47b8f?w=730&h=306&f=png&s=66157)

## 系统应用
印象笔记：跨平台笔记应用
kindle：跨平台电子书阅读
xmind：思维导图

### [PxCook](https://www.fancynode.com.cn/pxcook)
PSD查询工具，设计出了UI图后不用标注，前端可直接用该工具获得页面内元素尺寸、文字信息、颜色色值甚至CSS样式代码。

### [PicGo](https://github.com/Molunerfinn/PicGo)
重点说下图床工具，因为markdown的特殊性，图片等文件不能直接放入文档中，所以图片只能通过外链的形式加进去。
之前用过好多图床工具，各有优劣，但今天发现的这个超级好用，这篇文章的图片都是用的这个工具。
使用时最好搭配一个可靠的cnd服务网站，我选的七牛，免费的就够用了。

## 在线工具
即在线应用。
- [谷歌翻译](https://translate.google.cn/)
- [ECMAScript 浏览器支持情况](http://kangax.github.io/compat-table/es6/)
- [Can I use，浏览器兼容性查询](http://caniuse.com/)
- [在线代码工具](https://codepen.io/pen/)
- [制作ico图标](http://www.bitbug.net/)
- [浏览器市场份额](http://gs.statcounter.com/)
- [画流程图的工具](https://www.processon.com/)


### [JS中`==`与`===`区别](http://dorey.github.io/JavaScript-Equality-Table/)
只是作为参考，尽量全使用`===`。

### [压缩图片](https://tinypng.com/)
很早之前收藏的工具，如果图片中没有渐变或阴影等，压缩效率极好。

### [图片生成工具](https://dummyimage.com/)
mock之友，通过控制url参数生成不同尺寸的图片。

### [HTTP请求辅助工具](https://www.mocky.io/)
类似于mock，自己配置HTTP响应体，获取UTL供ajax请求使用。

### [Homebrew](https://brew.sh/index_zh-cn)
macOS的软件包管理工具，命令行界面。
有些软件没有提供macOS系统的版本，可以通过此工具可以安装。

### [git提交时的emoje](https://gitmoji.carloscuesta.me/)
像下图这样，很~~装逼~~极客。
![git emoje](https://user-gold-cdn.xitu.io/2019/6/13/16b502cb730cd0e2?w=2014&h=634&f=png&s=147088)

### [MSDN](https://msdn.itellyou.cn/)
收藏了六七年的老网站，下载windows或office软件用的。

### 开源软件国内镜像
很多软件都放在国外服务器，下载死慢。
国内有很多镜像网站，可以自己搜索。
这里给出一个[汇总文章](https://segmentfault.com/a/1190000000375848)。

### 命令行
差点忘了，可能有的人还不知道windows下有PowerShell命令行工具，还有前段时间刚发布的[treminal](https://github.com/microsoft/terminal)，看文章说超级好用。
你们自己试吧，我没用过。*^_^*

### [iconfont](https://www.iconfont.cn/)
重要的留在最后。

假定一个场景，用户对系统内一个图标进行替换。以往流程是：

1. 客户告诉你需要什么样一个图标
2. 你讲该需求转给设计
3. 设计理解需求并设计后给你一个图标
4. 你放到系统里面等用户确认，若不通过，再从步骤2开始

可以发现很多问题点：
设计拿到的是"二手"需求
如果用户不通过需要反复的设计与切图
设计可能不在这个项目上，需要等待很长时间。

这种小的需求，可以在这个网站上自己找一些图标，并且在用户身边把图标调好。优化流程后是这样：

1. 客户告诉你需要什么样一个图标
2. 你理解需求后从网站上找到一个图标并放入系统中
3. 你放到系统里面等用户确认，若不通过，现场通过CSS控制调整知道用户满意。

以上情况在我们开发团队可能已经用上了，下面说一种你们可能没用过的。

假定一个场景：设计出完UI文稿，需要将PSD里面的图片都切出来，可能根据不同分辨率、不同状态要切好几张图。

- user-icon.png
- user-icon-hover.png
- user-icon_x2.png
- user-icon-hover_x2.png
- ...

而一种更好的方式（我已经用在生产环境中了，大家可放心使用）是：
1. 在网站上创建一个项目(如图)
2. 将前端添加设置为项目协作者
3. 设计出完UI稿后，从网站上找到（找不到可以自己上传）对应的图标添加进项目
4. 前端从网站上就可以看到设计人员添加的图标（自己也可以添加）
5. 前端可根据需要，生成在线图标库，或下载到本地添加到项目中

![iconfont设置图标库步骤](https://user-gold-cdn.xitu.io/2019/6/13/16b502cbb147efe8?w=2392&h=1296&f=png&s=303538)

## 你有什么好工具呢？
在评论区说下吧。

---

同时发表在：
- [掘金](https://juejin.im/post/5d021796f265da1ba647e70b)
