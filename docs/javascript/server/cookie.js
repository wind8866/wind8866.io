const utils = require('./utils');

const api = {
  '/cookie/login': () => {
    return {
      header: {
        'Content-Type': 'application/json; charset=utf-8',
        'Set-Cookie': [
          'user=zhangsan',
          'code=8866',
        ]
      },
      body: JSON.stringify({ userName: 'zhangsan', userCode: '8866' }),
    }
  }
}


const cookie = (request) => {
  if (typeof api[request.url] === 'function') {
    const {
      header,
      body,
    } = api[request.url]();
    return {
      header,
      body,
    }
  }
  return utils['404']();
}
module.exports = cookie;