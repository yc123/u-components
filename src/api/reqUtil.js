import axios from '../plugins/axios'
const reqUtil = (baseUrl, url, method, params, config) => {
  if (method === 'get' && params) {
    // 请求参数转换
    params = {
      params: params
    }
  }
  return axios[method](baseUrl + url, params, config)
}
export default reqUtil
