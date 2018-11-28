import '../../assets/css/icon.css'
import '../../assets/css/app.scss'
import URadioGroup from './URadioGroup'

/* istanbul ignore next */
URadioGroup.install = function(Vue) {
  Vue.component(URadioGroup.name, URadioGroup);
};

export default URadioGroup;
