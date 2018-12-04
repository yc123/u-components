import axios from 'axios'
import store from '../store'

const service = axios.create({
  withCredentials: true,
  baseUrl: '/'
})

// let reqCount = 0 // 请求计数器
//
// const setLoadingCount = () => {
//   store.dispatch('options/setShowLoading', reqCount > 0)
// }

service.interceptors.request.use(config => {
  // ++reqCount
  // setLoadingCount()
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
  // --reqCount
  // setLoadingCount()
  return response
}, error => {
  // --reqCount
  // setLoadingCount()
  return Promise.reject(error)
})

export default service
