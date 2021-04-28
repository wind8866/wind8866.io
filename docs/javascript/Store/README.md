
使用 document.cookie 可以读取所有的 cookie， 但一次只能设置一个字段值。HTTP Response 的 Set-Cookie 是接收一个数组。
写入 cookie 时，最好使用 encodeURIComponent 进行转义，使用 decodeURIComponent 进行解码。
大小不能超过 4KB
每个域的 cookie 总数不得超过 20+ 左右，具体限制取决于浏览器。
设置 domain 可以进行跨子域。
默认情况下关闭浏览器 cookie 会失效，设置 expires 或 max-age 可以避免。
secure 设置为 cookie 只会在 https 中可用。