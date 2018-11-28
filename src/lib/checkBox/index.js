import '../../assets/css/icon.css'
import '../../assets/css/app.scss'
import UCheckBox from './UCheckBox'

/* istanbul ignore next */
UCheckBox.install = function(Vue) {
  Vue.component(UCheckBox.name, UCheckBox);
};

export default UCheckBox;
