import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios'
import store from './store'
import './plugins/mixin'
import './plugins/u-components'

// 安装axios
Vue.prototype.$http = axios

import './assets/css/common.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
