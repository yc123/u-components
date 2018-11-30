import axios from 'axios'
import store from '../store'

const service = axios.create({
  withCredentials: true,
  baseUrl: '/'
})

let reqCount = 0 // 请求计数器

const setLoadingCount = () => {
  store.dispatch('options/setShowLoading', reqCount > 0)
}

service.interceptors.request.use(config => {
  ++reqCount
  setLoadingCount()
  // if (config.url) {
  //   // 账户服务 /sso开头
  //   if (utils.startWith(config.url, '/sso')) {
  //     config.url = env.ssoUrl + config.url.replace('/sso', '')
  //   } else if (utils.startWith(config.url, '/demand')) {
  //     // 需求 /demand开头
  //     config.url = env.demandUrl + config.url.replace('/demand', '')
  //   } else if (utils.startWith(config.url, '/product')) {
  //     // 产品 /product开头
  //     config.url = env.timedTaskUrl + config.url.replace('/product', '')
  //   } else if (utils.startWith(config.url, '/seller')) {
  //     // 商家 /seller开头
  //     config.url = env.timedTaskUrl + config.url.replace('/seller', '')
  //   }
  // } else {
  //   config.url = '/'
  // }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  // 登录拦截
  if (response.data.respHeader) {
    if (response.data.respHeader.code === 201) {
      window.location.href = store.getters['options/loginUrl'] + `&returnURL=${window.location.href}`
    }
  }
  --reqCount
  setLoadingCount()
  return response
}, error => {
  --reqCount
  setLoadingCount()
  return Promise.reject(error)
})

export default service
