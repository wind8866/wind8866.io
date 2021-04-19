const fetchRequest = async (options) => {
  console.log(options);
  /**
   * 所有配置
   *  baseURL
   *  transformRequest⏳
   *  transformResponse⏳
   *  headers
   *  data
   *  timeout⏳
   */
  let fetchOPtions = {
    method: options.method,
    headers: options.headers,
    body: options.data
  }
  let url = options.url;
  if (options.transformRequest) {
    [url, fetchOPtions] = options.transformRequest([url, fetchOPtions]);
  }

  const res = await fetch(url, fetchOPtions);
  return new Promise((resolve, reject) => {
    // TODO: res 格式
    // console.log(res, res.json());
    res.json().then(resJSON => {
      console.log(resJSON);
    })


    let response = res;
    if (options.transformResponse) {
      response = options.transformResponse(res);
    }
    resolve(response);
  })
}
export default fetchRequest;
