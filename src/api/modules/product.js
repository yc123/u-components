import env from '../../../config/env'
import reqUtil from '../reqUtil'

const req = (url, method, params, config) => {
  return reqUtil(env.productUrl, url, method, params, config)
}

const apis = {
  // 上传或修改产品
  addOrUpdateProduct (params) {
    return req('/api/product/save', 'post', params)
  },
  // 批量上传
  addProducts (params) {
    let config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    }
    let param = new FormData()
    param.append('file', params.file)
    return req('/api/product/batchsave', 'post', param, config)
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
  // 分页获取当前企业的产品列表
  getEnterpriseProducts (params) {
    return req('/api/product/enterprises/products/list', 'get', params)
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
    return req('/api/product/delete', 'post', params)
  },
  // 批量删除产品
  batchDelete (params) {
    return req('/api/product/deleteproducts', 'post', params)
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
  },
  // 通过产品编号取消收藏
  revokeCollectByProduct (params) {
    return req('/api/product/revokecollect/productcode', 'post', params)
  }
}

export default apis
