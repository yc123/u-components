import env from '../../../config/env'
import reqUtil from '../reqUtil'

const req = (url, method, params, config) => {
  return reqUtil(env.ssoUrl, url, method, params, config)
}

const apis = {
  // 获取用户信息
  getUserInfo (params) {
    return req('/web/api/get/current/user', 'post', params)
  },
  switchEnterprise (enuu) {
    return req(`/api/public/user/switch/${enuu}`, 'get')
  }
}

export default apis
