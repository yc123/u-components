import '../../assets/css/icon.css'
import '../../assets/css/app.scss'
import UInput from './UInput'

/* istanbul ignore next */
UInput.install = function(Vue) {
  Vue.component(UInput.name, UInput);
};

export default UInput;
