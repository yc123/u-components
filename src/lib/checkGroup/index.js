import '../../assets/css/icon.css'
import '../../assets/css/app.scss'
import UCheckGroup from './UCheckGroup'

/* istanbul ignore next */
UCheckGroup.install = function(Vue) {
  Vue.component(UCheckGroup.name, UCheckGroup);
};

export default UCheckGroup;
