import '../../assets/css/icon.css'
import '../../assets/css/app.scss'
import UStepAdder from './UStepAdder'

/* istanbul ignore next */
UStepAdder.install = function(Vue) {
  Vue.component(UStepAdder.name, UStepAdder);
};

export default UStepAdder;
