import UDatePicker from './lib/datePicker'
import UPager from  './lib/pager'
import UInput from './lib/input'
import UTextarea from './lib/textarea'
import USelect from './lib/select'
import UCheckBox from './lib/checkBox'
import UCheckGroup from './lib/checkGroup'
import URadioBox from './lib/radioBox'
import URadioGroup from './lib/radioGroup'
import UStepAdder from './lib/stepAdder'
import USwitch from './lib/switch'
import UDialog from './lib/dialog'
import UUpload from './lib/upload'
import UAddressSelect from './lib/addressSelect'
import UButton from './lib/button/UButton'
import UForm from './lib/form/UForm'
import UFormItem from './lib/form/UFormItem'
import UFormInput from './lib/form/UFormInput'
import UTabs from './lib/tabs'

import Confirm from './lib/confirm'
import Message from './lib/message'

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
  Confirm,
  UButton,
  UForm,
  UFormItem,
  UFormInput,
  UTabs,
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

const API = {
  ...components,
  install
}

export default API

export {
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
  UButton,
  UForm,
  UFormItem,
  UFormInput,
  UTabs,
  Message,
  Confirm
}
