import '../../assets/icon.css'
import '../../assets/app.scss'
import DatePicker from './DatePicker'

/* istanbul ignore next */
DatePicker.install = function(Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

export default DatePicker;
