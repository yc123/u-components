import '../../assets/css/icon.css'
import '../../assets/css/app.scss'
import USwitch from './USwitch'

/* istanbul ignore next */
USwitch.install = function(Vue) {
  Vue.component(USwitch.name, USwitch);
};

export default USwitch;
