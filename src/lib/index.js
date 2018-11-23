import DatePicker from './datePicker/index.js'

const components = [ DatePicker ]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  DatePicker
}

module.exports.default = module.exports
