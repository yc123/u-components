import '../../assets/css/icon.css'
import '../../assets/css/app.scss'
import UDatePicker from './UDatePicker'

/* istanbul ignore next */
UDatePicker.install = function(Vue) {
  Vue.component(UDatePicker.name, UDatePicker);
};

export default UDatePicker;
