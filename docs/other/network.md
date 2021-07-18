

# 前端必知的网络相关知识

## 待办
- [ ] [DNS解析原理:递归 VS 迭代](https://www.jianshu.com/p/6b502d0f2ede)
- [ ] [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [ ] TCP协议
- [ ] 三次握手如果最后一次发送到服务端，连接完成，又有一次被阻塞的请求发送到服务端，这时为什么不会认为是新的连接？
- [ ] [HTTP/2 简介](https://developers.google.com/web/fundamentals/performance/http2?hl=zh-cn)
- [x] [HTTP2 教程](https://http2-explained.haxx.se/zh/part1)
- [x] [HTTP3 教程](https://http3-explained.haxx.se/zh/zh)
- [x] 更好的理解 HTTP2 中流的概念，和TCP连接的关系。
- [x] 所有的网络协议
- [x] 跨域
- [ ] 浏览器默认头


必须要完成的待办
- [x] HTTP 缓存
- [x] HTTPS
- [x] HTTP头
- [ ] 浏览器中想访问 www.google.com 时，会通过进行什么操作
- [ ] fetch 与 xmlHttpRequest 的区别
- [ ] 性能优化网络部分
- [ ] 如何看懂浏览器控制台的 Network，进行性能分析与优化？

---

## 基础知识

### HTTP 缓存
[放在其他位置了](https://github.com/wind8866/wind8866.io/blob/main/docs/other/http-cache/README.md)

### 常用的 HTTP请求头

- Cache-Control
  - 可缓存性
    - public：可被任意代理缓存
    - private：只能由客户端缓存
    - no-cache：强制进行协商缓存
    - no-store：不可缓存
  - 到期
    - max-age：多少秒后过期
  - 重新验证
    - must-revalidate：过期后不进行启发式缓存而直接进行协商缓存
- Accept*
  - 以该字符开头的用于客户端与服务端之间协商
- Authorization
  - 用于包含服务器验证
- Connection
  - keep-alive：TCP不关闭
  - close
- Content-Encoding
  - 压缩方式
- Content-Length
  - 指明消息主体的大小
- Content-Type
  - 用于指示资源类型
  - application/x-www-form-urlencoded：默认表单qs.stringify
  - multipart/form-data：常用表单，new FormData
  - application/json: JSON
  - text/html; charset=utf-8
  - text/plain, text/html, text/css, text/javascript
  - image/gif, image/png, image/jpeg, image/webp
  - audio/*、video/*
  - application/pdf：二进制
- Cookie
  - name=value; name2=value2; name3=value3
- Date
  - 消息产生时间（服务器时间）
- ETag
  - 散列值
  - W/开头是弱校验
- Expires
  - 强制缓存阶段，时间戳
- Host
  - host:port
- If-Modified-Since
  - 协商缓存阶段，本地文件得到的最后一次修改时间，没修改302
- If-Unmodified-Since
  - 本地文件的最后时间，一般用于断点续传，修改了412，没修改200并继续传输
- If-None-Match
  - 协商缓存阶段，本地文件得到的散列运算值
- Last-Modified
  - 协商缓存阶段，最后一次修改时间
- Location
  - 重定向到xxx，301、302才返回
- Referer
  - 请求的来源页面
- Server
  - 服务器名
- Set-Cookie
  - `<cookie-name>=<cookie-value>`
  - `HttpOnly`：设置了 HttpOnly 属性的 cookie 不能使用 JavaScript 经由  Document.cookie 属性、XMLHttpRequest 和  Request APIs 进行访问，以防范跨站脚本攻击（XSS (en-US)）
  - 示例：Set-Cookie: sessionid=38afes7a8; HttpOnly
  - `Expires=<date>`：cookie 的最长有效时间，如果没有设置这个属性，那么表示这是一个会话期 cookie 。一个会话结束于客户端被关闭时，这意味着会话期 cookie 在彼时会被移除。不过浏览器一般会保留
  - `Max-Age=<non-zero-digit>`：经过多少秒后过期
  - `Domain=<domain-value>`：指定 cookie 可以送达的主机名
  - `Path=<path-value>`：指定一个 URL 路径，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部。
  - `Secure`：一个带有安全属性的 cookie 只有在请求使用SSL和HTTPS协议的时候才会被发送到服务器。
- Upgrade
  - 列出客户端支持的协议供服务端选择


### DNS
DNS 查询有两种方式，递归和迭代，当操作系统设置了 DNS 服务器的话，使用迭代。默认情况下使用递归。
DNS 查询是TCP和UDP都用
为什么是三次握手而不是两次，三次可以防止失效的连接请求报文被服务端接收。第一次就携带数据A，慢了，客户端重传B，B正常且关闭了，这时A才到就不好了，客户端已经关闭。

### HTTPS
参考：[彻底搞懂HTTPS的加密原理](https://zhuanlan.zhihu.com/p/43789231)

对称加密：使用相同的密钥进行加密解密，性能好
非对称加密：分私钥和公钥，公钥可以公开，需要加密的东西用公钥加密，用私钥解开。私钥一定要保留好，非对称加密性能不好。

HTTPS加密过程的设计思路

#### 推导过程
##### 1、无任何加密
中间人很容易获取、伪造请求

##### 2、使用对称加密
无法将密钥发送给对方，直接发送会被拦截

##### 3、非对称加密
过程：客户端A和服务端B都将自己的公钥发送给对方，各自使用对方的公钥加密数据传输给对方，各自用自己的私钥解密对方发送的数据。
缺点：1、非对称加密需要消耗更多的系统资源。在AB双方发送公钥时中间人X可以拦截并伪造公钥，两边无法感知公钥是被替换。

##### 4、混合加密
解决了非对产加密资源消耗问题，但不能解决中间人拦截问题。
到这里我们解决了窃听的问题，因为如果不进行中间人拦截，中间的x是无法解密获得数据的。

##### 5、数字证书
其实就是AB双方都找一个双方都信任的“公正的中间人”（后面都成为认证机构），这个认证机构帮助双方解决中间人拦截问题。

**数字申请证书过程：**
1、网站 b.com 提供自己的域名信息（DV SSL证书）给认证机构
2、认证机构对提供的信息散列计算（提高效率）后使用自己的私钥进行加密，生成数字签名。数字证书 = 数字签名 + 网站的信息（b.com + b的公钥）
3、网站 b.com 接收到证书存在服务器中


**得到对称加密私钥的过程：**
1. 客户端a访问 b.com/index.html，如果是https开头（b需要配置非HTTS的都跳到HTTPS）先进行TSL的握手
2. b.com 返回数字证书
3. a对证书的正确性进行验证
   1. a查看证书的签名与自己想要访问的是否一致（防止调包）
   2. a先对证书信息进行散列（方法在证书中有体现）
   3. 拿证书签发机构的公钥（一般保存在浏览器或操作系统）解密数字签名
   4. 对比生成的散列值（防止篡改），如果一致，证明证书是正确的（证明公钥是b的）
4. a随机生成一个对称加密的密钥，使用证书里的公钥加密密钥，发送给b
5. b使用自己的私钥解密信息，拿到对称加密的密钥
6. ab都拿到了对称加密的密钥，两者都使用对称加密进行数据传输

#### 延伸问题：
**客户端如何确定签发机构的权威性？**
操作系统、浏览器本身会预装一些它们信任的根证书，如果其中会有CA机构的根证书，这样就可以拿到它对应的可信公钥了。

**证书类型有哪些**
DV SSL证书（域名验证型）：只需验证域名所有权，无需人工验证申请单位真实身份，几分钟就可颁发的SSL证书。价格一般在百元至千元左右，适用于个人或者小型网站。也有免费的

OV SSL证书（企业验证型）：需要验证域名所有权以及企业身份信息，证明申请单位是一个合法存在的真实实体，一般在1~5个工作日颁发。价格一般在百元至千元左右，适用于企业型用户申请。

EV SSL证书（扩展验证型）：除了需要验证域名所有权以及企业身份信息之外，还需要提交一下扩展型验证，比如：邓白氏等，通常CA机构还会进行电话回访，一般在2~7个工作日颁发证书。价格一般在千元至万元左右，适用于在线交易网站、企业型网站。


### HTTP2
[《http2的世界》](https://http2-explained.haxx.se/zh/part8)
[HTTP2现在请求数量占比](https://httparchive.org/reports/state-of-the-web#h2)：21年7月达到66%


**网页中存在的问题**
- 传输大小逐渐增加
- 传输数量不断增加：浏览器的同时只能6个请求的限制
- 延迟高，HTTP pipelining有问题（多个HTTP请求放入一个TCP里面一起发送）
- 线头阻塞：HTTP2解决的是HTTP层面的线头阻塞，因为浏览器的限制。而（[TCP的线头阻塞](https://www.zhihu.com/question/65900752)，3使用了UDP才解决）

线头阻塞：TCP 的阻塞问题是因为传输阶段可能会丢包，一旦丢包就会等待重新发包，阻塞后续传输，这个问题虽然有滑动窗口（Sliding Window）这个方案，但是只能增强抗干扰，并没有彻底解决。

**解决方案：**
雪碧图、文字图标、内联
文本拼接（多个资源放入一个文件中）
分片：将资源放入子域名的不同网站

**HTTP2 与 HTTP1.x 的兼容：**
ALPN协议：客户端会提供一个列表列出所支持的协议供服务端挑选一个。
在浏览器端，HTTP2 必须是 HTTPS 的。
winddows 10 上的 IE 支持 HTTP2

**升级到HTTP2后不应该有的优化**
- 域名散列
  - HTTP2针对同一域名只使用一个 TCP 连接
  - 域名散列会导致更多的 TCP 连接，浪费 CPU与内存
  - 散列会破坏 HTTP2 的优先级，降低头部压缩效果
- 资源合并
  - 资源合并会造成缓存利用率低，增加系统复杂性
  - 资源合并会浪费CPU 和内存
- 资源内联
  - 可以在发送页面之前使服务端推送必要资源
  - 无法利用缓存
  - 多次内联无法复用
来自：[《HTTP/2：新的机遇与挑战》](https://imququ.com/post/http2-new-opportunities-and-challenges.html)

### HTTP3
[wiki](https://zh.wikipedia.org/wiki/HTTP/3)
[现支持率](https://httparchive.org/reports/state-of-the-web#h3)


TCP是一个按序传输的链条，如果HTTP/2连接双方的网络中有一个数据包丢失，或者任何一方的网络出现中断，整个TCP连接就会暂停，丢失的数据包需要被重新传输。因此如果其中一个点丢失了，链路上之后的内容就都需要等待。
这种单个数据包造成的阻塞，就是TCP上的队头阻塞（head of line blocking）。
QUIC 是 HTTP3 的前身，QUIC 开始只支持 HTTP，是UDP协议上的一个协议，可完全替代 TCP的部分、TLS、HTTP。后来标准化组织介入。将QUIC分为两层：QUIC、HTTP over QUIC。HTTP over QUIC 就是后来的 HTTP3。
![HTTP3 QUIC关系图](https://raw.githubusercontent.com/wind8866/storage/master/img/quic-stack.png)
*[架构图来自HTTP3教程](https://http3-explained.haxx.se/zh/the-protocol)*
HTTP3现在（2021年6月）仍是草案，且[弊端](https://http3-explained.haxx.se/zh/criticism)很多，先不过多研究

### 其他协议
**WebSocket协议**
[wiki](https://zh.wikipedia.org/wiki/WebSocket)
浏览器和服务器只需要完成一次握手，两者之间就可以建立持久性的连接，并进行双向数据传输。
WebSocket 握手使用 HTTP，一旦握手完成，后续数据直接在TCP上传输
也使用80端口

**webRTC 协议**
[wiki](https://zh.wikipedia.org/wiki/WebRTC)
用于视频会议、视频通话等
建立浏览器之间点对点（Peer-to-Peer）的连接，实现视频流和（或）音频流或者其他任意数据的传输。
基于UDP


---

## 常见的问题

#### 常见的 HTTP响应的状态码有哪些，有什么作用
- 10x 信息
- 20x 成功
  - 200 成功
- 30x 重定向
  - 301 永久重定向
  - 302 临时重定向
  - 304 无修改【特殊，可归到成功一类】
- 40x 客户端错误
  - 403 拒绝执行
  - 404 找不到
  - 405 方法被禁止
- 50x 服务端错误
  - 500 服务器未知错误
  - 502 无响应
  - 504 超时

##### 浏览器中输入 google.com 后会发生什么？
1. 获取IP地址
   1. 查找缓存（浏览器、操作系统、Host 文件）
   2. 去 DNS 服务器查询（递归查询）
2. TCP 三次握手建立连接
   1. 请求建立连接 SYN，协商状态
   2. 响应，告诉客户端信息，SYN、ACK
   3. 发送数据

#### 常用的HTTP请求头有哪些？
参考知识部分说出必要的即可

#### HTTP2 与 HTTP1.1 区别
HTTP 2 使用二进制数据传输
HTTP2 可以压缩请求头，会最大可能的复用请求头（相同的请求头只发送一次）。
可以告诉服务端优先处理哪些资源
浏览器端只实现了 基于 TSL 的 HTTP2，所以浏览器上使用的HTTP2都是HTTPS
在需要修改 Content-Length 时，可以发送一个值告诉另一端取消请求，避免资源浪费
服务端推送
控制流量
HTTP1.x 的规范都是松散的可选的，而 HTTP2 中补充的的协议都是是强制的。

#### HTTP3 与 HTTP2 有什么区别
HTTP3 使用基于UDP的QUIC协议实现，解决了TCP协议中的队头阻塞问题。
[区别](https://http3-explained.haxx.se/zh/h3/h3-h2#bu-tong-zhi-chu)：
握手速度提升、更早的发送数据、必须为HTTPS

#### 浏览器与服务器建立一个TCP连接后，是否会在完成一个HTTP请求后断开？什么条件下会断开？
会
使用 `Connection: keep-alive` 后不会断开

#### 如何突破浏览器最多只能同时发送6个请求？
升级 HTTP2
将资源放到不同的域名下。

相关问题：网页中的图片资源为什么分放在不同的域名下?
答：浏览器对一个域名内的并发请求做了限制，一般支持6个 TCP 请求，而 HTTP1.1 协议下同一时间，一个TCP请求只能有一个HTTP连接。为了更多的并行加载资源，会放到不通的域名下。

相关问题：为什么浏览器会有限制？
好像是因为建立TCP连接消耗挺大


#### 如何跨域
1、web静态服务器配置代理：nginx配置`proxy_pass`
2、服务端（后端）配置 `Access-Control-Allow-Origin`
3、JSONP：利用script不会被限制的规则
4、WebSocket
5、postMessage
6、等等

#### PUT 和 POST 区别
这个问题有很多争议，且两者的区别很小。
创建一个帖子时：
- 如果你的帖子命名由服务器决定，使用POST，否则使用PUT
- PUT是幂等的，PUT一个对象两次，不应该有任何影响。（可以理解为两次请求不会产生两个帖子）
[更详细的解释](https://stackoverflow.com/questions/630453/what-is-the-difference-between-post-and-put-in-http)

#### POST 与 GET 的区别
在TCP网络请求层面，几乎没有任何区别，只有 method 一个是 POST，一个是 GET。
但是协议中约定了一些规则，这些约定使客户端和服务端有了一些现成的实现。
一般 GET 用于获取数据，POST用于新增或更改数据。但这不是强制的，POST也可以进行数据查询。一般情况下 GET 的请求条件放在URL中，但是URL有长度限制。我们可以使用POST放在请求体中。



--- 

其他参考资料
- [浏览器HTTP请求并发数和TCP连接的关系](https://juejin.cn/post/6844903918820917255)
- [揭秘http2](https://mp.weixin.qq.com/s/tG6HPSuGEOxpS9lq-Q_uLg)
- [HTTP/2 相关](https://imququ.com/post/series.html)
