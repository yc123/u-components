import Vue from 'vue'
import Vuex from 'vuex'
import options from './modules/options'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // 一些全局状态
    options,
    // 登录状态
    auth
  }
})
