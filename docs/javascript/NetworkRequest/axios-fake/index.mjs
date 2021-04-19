
import fetchRequest from './fetch.mjs';

/**
 * 为了将公共的属性存储为所有实例都可用
 * 1、直接存成变量🚮
 * 2、为了封装，存在类静态属性中✅
 * 3、存在父类中
 */
class Axios {
  constructor(options) {
    this.init(options);
  }
  static publicConfig = {
    baseURL: '',
    timeout: 0,
    headers: {},
  }
  static setPublicConfig(options) {
    Axios.publicConfig = {
      ...Axios.publicConfig,
      ...options,
    };
  }

  customOptions = {}
  options = {}
  init(options) {
    this.customOptions = options;
    if (!this.checkout()) {
      return false;
    }
    this.merge();
  }
  checkout() {
    // TODO
    return true;
  }
  merge() {
    this.options.method = this.customOptions.method || 'get';
    this.options.url = this.customOptions.url;
    this.options.baseURL = this.customOptions.baseURL || Axios.publicConfig.baseURL;
  }
  request() {
    console.log(this.options)
    return fetchRequest(this.options);
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
  Axios.setPublicConfig(options);
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