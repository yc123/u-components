import env from '../../../config/env'
const state = {
  // 控制全局loading
  showLoading: false,
  // 控制路由的loading
  routerLoading: false
}

// getters
const getters = {
  // 账户中心地址
  ssoUrl: (state, getters, rootState) => {
    return 'https://sso.ubtob.com'
  },
  ssoRestUrl: (state) => {
    return env.ssoUrl
  },
  // 登录地址
  loginUrl: (state, getters, rootState) => {
    return `${getters.ssoUrl}/?baseUrl=${getters.ssoRestUrl}/web/api/login`
  },
  // 退出地址
  logoutUrl: (state, getters, rootState) => {
    return `${getters.ssoUrl}/logquit?baseUrl=${getters.ssoRestUrl}/web/api/logout`
  },
  // 注册地址
  registerUrl: (state, getters, rootState) => {
    return `${getters.ssoUrl}/register/enterpriseRegistration`
  },
  // 账户云中心地址
  ssoCenterUrl: (state, getters, rootState) => {
    return `${getters.ssoUrl}/cloudCenter`
  }
}

// actions
const actions = {
  // 设置loading状态
  setShowLoading ({ commit }, isShow) {
    commit('SET_SHOW_LOADING', isShow)
  },
  setRouterLoading ({ commit }, data) {
    commit('SET_ROUTER_LOADING', data)
  }
}

// mutations
const mutations = {
  SET_SHOW_LOADING (state, isShow) {
    state.showLoading = isShow
  },
  SET_ROUTER_LOADING (state, data) {
    state.routerLoading = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
