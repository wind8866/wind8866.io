const utils = require('./utils');

const api = {
  '/api/xhr/user': (request) => {
    return {
      header: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ userName: 'zhangsan', userCode: '8866' }),
    }
  }
}


const xhr = (request) => {
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
module.exports = xhr;