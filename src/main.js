import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios'
import store from './store'
import './plugins/mixin'
import './plugins/u-components'
import './assets/css/app.scss'

// 安装axios
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
