import '../../assets/css/icon.css'
import '../../assets/css/app.scss'
import UDialog from './UDialog'

/* istanbul ignore next */
UDialog.install = function(Vue) {
  Vue.component(UDialog.name, UDialog);
};

export default UDialog;
