import '../../assets/css/icon.css'
import '../../assets/css/app.scss'
import URadioBox from './URadioBox'

/* istanbul ignore next */
URadioBox.install = function(Vue) {
  Vue.component(URadioBox.name, URadioBox);
};

export default URadioBox;
