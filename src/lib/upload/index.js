import '../../assets/css/icon.css'
import '../../assets/css/app.scss'
import UUpload from './UUpload'

/* istanbul ignore next */
UUpload.install = function(Vue) {
  Vue.component(UUpload.name, UUpload);
};

export default UUpload;
