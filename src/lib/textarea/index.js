import '../../assets/css/icon.css'
import '../../assets/css/app.scss'
import UTextarea from './UTextarea'

/* istanbul ignore next */
UTextarea.install = function(Vue) {
  Vue.component(UTextarea.name, UTextarea);
};

export default UTextarea;
