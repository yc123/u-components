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
  },
  // 买家分页查询订单列表
  buyerPageOrderList (params) {
    return req(`/api/trade/order/buyer/list/get`, 'get', params)
  },
  // 买家查询订单详情
  buyerGetOrderDetail (params) {
    return req(`/api/trade/order/buyer/detail/get`, 'get', params)
  },
  // 卖家分页查询订单列表
  sellerPageOrderList (params) {
    return req(`/api/trade/order/seller/list/get`, 'get', params)
  },
  // 卖家查询订单详情
  sellerGetOrderDetail (params) {
    return req(`/api/trade/order/seller/detail/get`, 'get', params)
  }
}

export default apis
