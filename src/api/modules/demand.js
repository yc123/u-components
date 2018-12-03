import env from '../../../config/env'
import reqUtil from '../reqUtil'

const req = (url, methods, params) => {
  return reqUtil(env.demandUrl, url, methods, params)
}

const apis = {
  // 发布需求
  addDemand (params) {
    return req('/api/demand/add', 'post', params)
  },
  // 修改需求
  modifyDemand (params) {
    return req('/api/demand/modify', 'post', params)
  },
  // 删除需求
  delDemand (params) {
    return req('/api/demand/del', 'get', params)
  },
  // 首页查询需求
  indexGetDemand (params) {
    return req('/api/demand/index/get', 'get', params)
  },
  // 我的需求查询
  myPageDemand (params) {
    return req('/api/demand/my/get', 'get', params)
  },
  // 批量删除
  batchDelete (params) {
    return req('/api/demand/del/batch', 'post', params)
  }
}

export default apis
