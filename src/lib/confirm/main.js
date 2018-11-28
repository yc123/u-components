import Vue from 'vue'
import UConfirm from './UConfirm.vue'

const UConfirmConstructor = Vue.extend(UConfirm)

let instance

/*
* @text 必填
* @description 可选
* */
const Confirm = (text = '确定进行此操作吗？', description = '') => {

  instance && instance.close()

  instance = new UConfirmConstructor({
    data: {
      text: text,
      description: description
    }
  })

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.visible = true
  return new Promise((resolve, reject) => {
    instance.resolve = resolve
    instance.reject = reject
  })
}

export default Confirm
