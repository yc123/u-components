import '../../assets/css/icon.css'
import '../../assets/css/app.scss'
import USelect from './USelect'

/* istanbul ignore next */
USelect.install = function(Vue) {
  Vue.component(USelect.name, USelect);
};

export default USelect;
