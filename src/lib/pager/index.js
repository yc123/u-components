import '../../assets/css/icon.css'
import '../../assets/css/app.scss'
import UPager from './UPager'

/* istanbul ignore next */
UPager.install = function(Vue) {
  Vue.component(UPager.name, UPager);
};

export default UPager;
