
/**
 * 为了将公共的属性存储为所有实例都可用
 * 1、直接存成变量
 * 2、为了封装，存在类静态属性中
 * 3、存在父类中
 */
let defaultConfig = {
  baseURL: '',
  timeout: 0,
  headers: {},
};
class Axios {
  constructor(options) {
    this.options = {};
    this.init(options);
  }
  // static 
  static setDefault(options) {
    defaultConfig = {
      ...defaultConfig,
      ...options,
    }
  }
  init(options) {
    this.merge(options);
    // this.request();
  }
  checkout(options) {

  }
  merge(options) {
    this.options.method = options.method || 'get';
    this.options.url = options.url;
    this.options.baseURL = options.baseURL || defaultConfig.baseURL;
  }
  request() {
    console.log(this.options)
    return new Promise((resolve, reject) => {
      // reject('error');
      setTimeout(() => {
        resolve({
          code: 200,
          msg: 'ok',
          request: this.options
        })
      }, 3000);
    })
  }
  get(url, options) {
    this.init({
      url,
      method: 'get',
      ...options
    })
  }
  post(url, options) {
    this.init({
      url,
      method: 'post',
      ...options
    })
  }
}
Axios.version = '1.1';

function axios(options) {
  const axios = new Axios(options);
  return axios.request();
}
axios.get = (url, options) => {
  const axios = new Axios({});
  axios.get(url, options);
  return axios.request();
}
axios.post = (url, options) => {
  const axios = new Axios({});
  axios.post(url, options);
  return axios.request();
}
axios.request = (options) => {
  const axios = new Axios({});
  axios.init(options);
  return axios.request(options);
}
axios.create = (options) => {
  const axios = new Axios({});
  Axios.setDefault(options);
}
axios.interceptors = {
  request: {
    use(fun) {
      // TODO：现在只能想到使用变量的方法
    }
  },
  response: {
    use(fun) {
      
    }
  }
}
export default axios;