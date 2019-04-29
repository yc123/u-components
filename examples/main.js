
import Vue from 'vue';
import App from './app.vue';
import ucomponents from '../src/index';

Vue.use(ucomponents);

// 开启debug模式
Vue.config.debug = true;

new Vue({
  render: h => h(App)
}).$mount('#app');
