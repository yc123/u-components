import Vue from 'vue'
import UMessage from './UMessage.vue'

const MESSAGE_TYPES = ['success', 'warning', 'info', 'error']

const UMessageConstructor = Vue.extend(UMessage)

let instance

const Message = (options = {}) => {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  instance && instance.close()

  instance = new UMessageConstructor({
    data: options
  })

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  return instance.vm
}

MESSAGE_TYPES.forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

export default Message
