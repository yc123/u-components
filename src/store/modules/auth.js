import apis from '../../api'
const state = {
  // 登录信息
  user: {
    // 是否获取过登录状态
    getAuthed: false
  }
}

// getters
const getters = {}

// actions
const actions = {
  // 获取登录信息
  getAuth ({ commit }) {
    return apis.sso.getUserInfo().then(res => {
      let userInfo = res.data.currentUserInfo
      userInfo.enterprises = res.data.enterpriseList || []
      userInfo.logged = true
      commit('SET_AUTH', userInfo)
    }, () => {
      commit('SET_AUTH', {})
    })
  }
}

// mutations
const mutations = {
  SET_AUTH (state, data) {
    state.user = data
    // 已获取状态
    state.user.getAuthed = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
