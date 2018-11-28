import '../../assets/css/icon.css'
import '../../assets/css/app.scss'
import UAddressSelect from './UAddressSelect'

/* istanbul ignore next */
UAddressSelect.install = function(Vue) {
  Vue.component(UAddressSelect.name, UAddressSelect);
};

export default UAddressSelect;
