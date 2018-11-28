import UDatePicker from './datePicker/index.js'
import UPager from  './pager/index.js'
import UInput from './input/index.js'
import UTextarea from './textarea/index.js'
import USelect from './select/index.js'
import UCheckBox from './checkBox/index.js'
import UCheckGroup from './checkGroup/index.js'
import URadioBox from './radioBox/index.js'
import URadioGroup from './radioGroup/index.js'
import UStepAdder from './stepAdder/index.js'
import USwitch from './switch/index.js'
import UDialog from './dialog/index.js'
import UUpload from './upload/index.js'
import UAddressSelect from './addressSelect/index.js'

import Confirm from './confirm/index.js'
import Message from './message/index.js'

const components = [
  UDatePicker,
  UPager,
  UInput,
  UTextarea,
  USelect,
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
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$message = Message;
  Vue.prototype.$confirm = Confirm
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// module.exports = {
//   install,
//   DatePicker
// }
//
// module.exports.default = module.exports

export default {
  install,
  UDatePicker,
  UPager,
  UInput,
  UTextarea,
  USelect,
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
}
