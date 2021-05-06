 - [ ] 实现 get、post的各种类型请求
 - [ ] 下载进度
 - [ ] 中止事件
 - [ ] 可恢复文件上传
 - [ ] 分片上传（结合二进制数据）
 - [ ] 实现websocket
 - [ ] optios 单独属性存放，防止覆盖 method 或 URL


fetch 在什么情况下 reject
注意 ok 属性并不"靠谱"，200-299，则为 true，但我们一般把 304 也作为成功。
response 只能解析一次。解析过就不能再次解析。
例如网络问题，亦或是请求的网址不存在，那么 promise 就会 reject。异常的 HTTP 状态，例如 404 或 500，不会导致出现 error。
response.body 是 ReadableStream 对象，它允许你逐块读取 body。
