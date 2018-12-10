import env from '../../../config/env'
import reqUtil from '../reqUtil'

const req = (url, method, params, config) => {
  return reqUtil(env.tradeUrl, url, method, params, config)
}

const apis = {
  // 添加收货地址
  addDeliveryAddr (params) {
    return req('/api/trade/delivery/addr/add', 'post', params)
  },
  // 修改收货地址
  modifyDeliveryAddr (params) {
    return req(`/api/trade/delivery/addr/modify`, 'post', params)
  },
  // 删除收货地址
  delDeliveryAddr (params) {
    return req(`/api/trade/delivery/addr/del`, 'get', params)
  },
  // 设为默认收货地址
  defaultDeliveryAddr (params) {
    return req(`/api/trade/delivery/addr/default`, 'get', params)
  },
  // 获取收货地址列表
  getDeliveryAddrList (params) {
    return req(`/api/trade/delivery/addr/get`, 'get', params)
  }
}

export default apis
