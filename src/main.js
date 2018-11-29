import Vue from 'vue'
import App from './App.vue'

import uComps from './lib/index'
let {
  UDatePicker,
  USelect,
  UPager,
  UInput,
  UTextarea,
  UCheckBox,
  UCheckGroup,
  URadioBox,
  URadioGroup,
  UStepAdder,
  USwitch,
  UDialog,
  UUpload,
  UAddressSelect,
  Message,
  Confirm
} = uComps

Vue.use(UDatePicker)
Vue.use(USelect)
Vue.use(UPager)
Vue.use(UInput)
Vue.use(UTextarea)
Vue.use(UCheckBox)
Vue.use(UCheckGroup)
Vue.use(URadioBox)
Vue.use(URadioGroup)
Vue.use(UStepAdder)
Vue.use(USwitch)
Vue.use(UDialog)
Vue.use(UUpload)
Vue.use(UAddressSelect)

Vue.prototype.$message = Message
Vue.prototype.$confirm = Confirm

new Vue({
  el: '#app',
  render: h => h(App)
})
