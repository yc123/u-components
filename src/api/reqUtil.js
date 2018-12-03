import axios from '../plugins/axios'
const reqUtil = (baseUrl, url, methods, params) => {
  if (methods === 'get' && params) {
    // 请求参数转换
    params = {
      params: params
    }
  }
  return axios[methods](baseUrl + url, params)
}
export default reqUtil
