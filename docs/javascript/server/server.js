const http = require('http');
const fs = require('fs');
const path = require('path');

const xhr = require('./xhr');
const cookie = require('./cookie');
const utils = require('./utils');
const mineTypeMap = require('./mineTypeMap')

http.createServer((request, response) => {
  let res = {};
  if (request.url === '' || request.url === '/') {
    res = {
      body: 'ok'
    }
  } else if (/^\/xhr/.test(request.url)) {
    const targetURL = path.resolve(__dirname, '../NetworkRequest/axios-fake/' + request.url.replace(/^\/xhr/, ''));
    const extName = path.extname(targetURL).substr(1);
    console.log(targetURL);
    if (fs.existsSync(targetURL)) {
      if (mineTypeMap[extName]) {
        response.setHeader('Content-Type', mineTypeMap[extName]);
      }
      fs.createReadStream(targetURL).pipe(response);
    }
    return false;
  } else if (/^\/api\/xhr/.test(request.url)) {
    res = xhr(request);
  } else if (/^\/api\/cookie/.test(request.url)) {
    res = cookie(request);
  } else {
    res = utils['404']();
  }
  response.writeHead(res.code || 200, {
    'Access-Control-Allow-Origin': '*',
    ...res.header,
  });
  response.end(res.body || '')
}).listen(8866);

console.log('Service started successfully, at http://127.0.0.1:8866');