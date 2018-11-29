import axios from '../../plugins/axios'
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
    return axios.get('/api/user/login/info').then(res => {
      if (res.data.respHeader && res.data.respHeader.code === 0) {
        res.data.logged = res.data.respHeader.code === 0
      }
      return axios.get('/api/public/enterprise/byuseruu').then(enRes => {
        res.data.enterprises = enRes.data.enterpriseList
        commit('SET_AUTH', res.data || {})
      }, () => {
        commit('SET_AUTH', res.data || {})
      })
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
