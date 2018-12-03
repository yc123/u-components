import env from '../../../config/env'
import axios from '../../plugins/axios'

const req = (url, methods, params) => {
  if (methods === 'get' && params) {
    // 请求参数转换
    params = {
      params: params
    }
  }
  return axios[methods](env.productUrl + url, params)
}

const apis = {
  // product
  // 上传或修改产品
  addOrUpdateProduct (params) {
    return req('/api/product/save', 'post', params)
  },
  // 批量上传
  addProducts (params) {
    return req('/api/product/batchsave', 'post', params)
  },
  // 上架
  release (params) {
    return req('/api/product/release', 'post', params)
  },
  // 批量上架
  batchRelease (params) {
    return req('/api/product/batchrelease', 'post', params)
  },
  // 下架
  revoke (params) {
    return req('/api/product/revoke', 'post', params)
  },
  // 批量下架
  batchRevoke (params) {
    return req('/api/product/batchrevoke', 'post', params)
  },
  // 分页获取指定企业的产品列表
  getProductsPageByEnterprise (params) {
    return req('/api/product/enterprise/products', 'get', params)
  },
  // 分页获取产品列表
  getProductsPage (params) {
    return req('/api/product/products', 'get', params)
  },
  // 获取产品详情
  getProduct (params) {
    return req('/api/product/product', 'get', params)
  },
  // 删除产品
  deleteProduct (params) {
    return req('/api/product/delete', 'delete', params)
  },
  // 批量删除产品
  batchDelete (params) {
    return req('/api/product/deleteproducts', 'delete', params)
  },
  // productCollection
  // 收藏
  collect (params) {
    return req('/api/product/collect', 'post', params)
  },
  // 取消收藏
  revokeCollect (params) {
    return req('/api/product/revokecollect', 'post', params)
  },
  // 批量取消收藏
  batchrevokeCollect (params) {
    return req('/api/product/batchrevokecollect', 'post', params)
  },
  // 分页获取产品收藏
  getCollectionsPage (params) {
    return req('/api/product/getcollectionspage', 'get', params)
  }
}

export default apis
