
const url = require('url');
const utils = require('./utils');
const qs = require('qs');
const api = {
  '/api/xhr/user': (request) => {
    const urlFormat = url.parse(request.url);
    return {
      header: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        userName: 'zhangsan',
        userCode: '8866',
        request: qs.parse(urlFormat.query)
      }),
    }
  },
  '/api/xhr/error': (request) => {
    // Not Modified
    // 304 的时候浏览器没有body，也可能是nodejs会忽略
    const code304 = { code: 304, body: 'ssss' };
    // Not Found
    // 404 等并不会触发 reject，
    // 当长时间不响应时，浏览器 Network：catch TypeError: Failed to fetch；fetch：catch TypeError: Failed to fetch
    const code404 = { code: 404 };
    // Internal Server Error
    const code500 = { code: 500 };
    return code304;
  },
  '/api/xhr/pending': async (request) => {
    await utils.sleep(10000);
    return {
      body: 'ok',
    }
  },
}


const xhr = async (request) => {
  const pathname = url.parse(request.url).pathname;
  if (typeof api[pathname] === 'function') {
    return await api[pathname](request);
  }
  return utils['404']();
}
module.exports = xhr;