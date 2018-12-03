import env from '../../../config/env'
import axios from '../../plugins/axios'

const req = (url, methods, params) => {
  if (methods === 'get' && params) {
    // 请求参数转换
    params = {
      params: params
    }
  }
  return axios[methods](env.sellerUrl + url, params)
}

const apis = {
  // 分页获取商家信息
  getEnterprisesPage (params) {
    return req('/api/seller/getenterprisespage', 'get', params)
  },
  // 获取商家详情
  getEnterprise (params) {
    return req('/api/seller/getenterprise', 'get', params)
  }
}

export default apis
