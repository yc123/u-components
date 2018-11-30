import env from '../../../config/env'
import axios from '../../plugins/axios'

const req = (url, methods, params) => {
  if (methods === 'get' && params) {
    // 请求参数转换
    params = {
      params: params
    }
  }
  return axios[methods](env.demandUrl + url, params)
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
    return req('/api/demand/del', 'post', params)
  },
  // 首页查询需求
  indexGetDemand (params) {
    return req('/api/demand/index/get', 'get', params)
  },
  // 我的需求查询
  myPageDemand (params) {
    return req('/api/demand/my/get', 'get', params)
  }
}

export default apis
