// 浏览器中使用模块化必须以mjs为后缀，且不能省略后缀
// https://www.zhangxinxu.com/wordpress/2018/08/browser-native-es6-export-import-module/
import axios from './index.mjs';

console.dir(axios)

/**
 * get 用法
 *  params 可选
 */
const params = {
  params: {
    ID: 12345
  }
};
// TODO: 支持带参数，服务端返回参数
axios.get('/api/xhr/user', params).then(function (response) {
  // 处理成功情况
  console.log('then 1', response);
}).catch(function (error) {
  // 处理错误情况
  console.log('catch', error);
}).then(function (a) {
  // 总是会执行
  console.log('then 2', a);
});

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));

/**
 * 错误处理
 */
axios.get('/api/xhr/error', {}).then(function (response) {
  // 处理成功情况
  console.log('then 1', response);
}).catch(function (error) {
  // 处理错误情况
  console.log('catch', error);
}).then(function (a) {
  // 总是会执行
  console.log('then 2', a);
});
/**
 * 等待 pending
 */
axios.get('/api/xhr/pending', { time: 3000 }).then(function (response) {
  // 处理成功情况
  console.log('then 1', response);
}).catch(function (error) {
  // 处理错误情况
  console.log('catch', error);
}).then(function (a) {
  // 总是会执行
  console.log('then 2', a);
});

/**
 * post 用法
 */
// const post = axios.post('/set-user', {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// }).then(function (response) {
//   console.log(response);
// }).catch(function (error) {
//   console.log(error);
// });
// console.log(post.then(res => {
//   console.log(res);
// }));

/**
 * config/request
 */
// const requestOptions = {
//   method: 'post',
//   url: '/user/12345dddddd',
//   data: {
//     firstName: 'Fredaaaaaaaa',
//     lastName: 'Flintstone'
//   }
// };
// // const config = axios(requestOptions);
// const config = axios.request(requestOptions);

// console.log(config)
// console.log(config.then(res => {
//   console.log('request', res);
// }))

/**
 * 自定义实例
 */
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
axios({
  url: 'fake.json',
  timeout: 40000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
}).then(res => {
  console.log('create', res);
})
/**
 * 所有配置
 *  baseURL
 *  transformRequest
 *  transformResponse
 *  headers
 *  data
 *  timeout
 */
/**
 * 响应结构
 */
const interfaceResponse = {
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 是服务器响应头
  // 所有的 header 名称都是小写，而且可以使用方括号语法访问
  // 例如: `response.headers['content-type']`
  headers: {},

  // `config` 是 `axios` 请求的配置信息
  config: {},

  // `request` 是生成此响应的请求
  // 在node.js中它是最后一个ClientRequest实例 (in redirects)，
  // 在浏览器中则是 XMLHttpRequest 实例
  request: {}
}

/**
 * 拦截器
 *  axios.interceptors.request.use(function)
 *  axios.interceptors.response.use(function)
 */

/**
 * 取消请求
 */






/**
 * async/await 用法
 */
 async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}