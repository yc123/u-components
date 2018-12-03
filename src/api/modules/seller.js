import env from '../../../config/env'
import reqUtil from '../reqUtil'

const req = (url, methods, params) => {
  return reqUtil(env.sellerUrl, url, methods, params)
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
