const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const xhr = require('./xhr');
const cookie = require('./cookie');
const utils = require('./utils');
const mineTypeMap = require('./mineTypeMap')

http.createServer(async (request, response) => {
  let res = {};
  const urlFormat = url.parse(request.url);
  console.log(urlFormat);
  if (urlFormat.pathname === '' || urlFormat.pathname === '/') {
    res = {
      body: 'ok'
    }
  } else if (/^\/xhr/.test(urlFormat.pathname)) {
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
  } else if (/^\/api\/xhr/.test(urlFormat.pathname)) {
    res = await xhr(request);
  } else if (/^\/api\/cookie/.test(urlFormat.pathname)) {
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