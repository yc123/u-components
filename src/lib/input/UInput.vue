<template>
  <div class="u-input-wrap" :class="'u-input-wrap-' + size">
    <span class="u-input-prefix" v-if="prefix"><i class="iconfont" :class="prefix ? prefix: ''"></i></span>
    <input :type="type"
           ref="comInput"
           :class="[{'error': !isValid, 'u-input-width-prefix': !!prefix}, 'u-input-' + size]"
           class="base-input"
           :placeholder="placeholder"
           :readonly="readonly"
           @blur="onBlur"
           @keyup.enter="enterEvent"
           @input="onInput($event)">
    <div class="append-icon cursor-default">
      <i class="iconfont icon-close clear" v-if="clearable" @click.prevent="clear"></i>
      <slot name="append-icon"></slot>
    </div>
    <div class="u-input-err-msg" :style="rule.style" v-show="!isValid">{{rule.message}}</div>
  </div>
</template>
<script>
  export default {
    name: 'UInput',
    data () {
      return {
        lastValue: '',
        isValid: true
      }
    },
    props: {
      type: {
        type: String,
        default: 'text'
      },
      prefix: {
        type: String,
        default: ''
      },
      // 正则输入校验（不符合的不能输入）
      reg: {
        type: String,
        default: ''
      },
      // 正则合法性校验（不符合的输入框变红）
      checkReg: {
        type: String,
        default: null
      },
      // 最大字数
      maxLength: {
        type: Number,
        default: null
      },
      // 是否必填
      required: {
        type: Boolean,
        default: false
      },
      //验证
      rule: {
        type: Object,
        default () {
          return {}
        }
      },
      // 绑定值
      value: {},
      placeholder: {
        type: String,
        default: ''
      },
      clearable: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      // 是否失去焦点判断
      blurCheck: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'default'
      }
    },
    watch: {
      value: {
        handler: function (val) {
          this.$nextTick(() => {
            this.$refs.comInput.value = typeof val !== 'undefined' ? val  : ''
          })
        },
        immediate: true
      }
    },
    created () {
      this.$on('isValidate', (value) => {
        this.isValid = value
      })
    },
    methods: {
      // 监听回车
      enterEvent (e) {
        let target = e.target || e.srcElement
        this.$emit('keyup')
        target.blur()
      },
      onInput (e) {
        this.check(e)
      },
      check (e) {
        // 输入限制正则校验
        if (this.reg) {
          let regExp = new RegExp(this.reg)
          if (!regExp.test(e.target.value)) {
            e.target.value = this.lastValue
          }
        }
        // 最大字数输入校验
        if (this.maxLength) {
          if (e.target.value.length > this.maxLength) {
            e.target.value = e.target.value.substr(0, this.maxLength)
          }
        }
        this.checkValid()
        this.lastValue = e.target.value
        this.$emit('input', e.target.value)
      },
      // 提示校验
      checkValid () {
        let value = this.$refs.comInput.value
        if (value) {
          // 输入提示正则校验
          this.isValid = true
          if (this.checkReg) {
            let checkRegExp = new RegExp(this.checkReg)
            this.isValid = checkRegExp.test(value)
          }
        } else {
          if (this.rule && this.rule.use) {
            this.isValid = !this.rule.required
          } else {
            this.isValid = !this.required
          }
        }
      },
      clear () {
        this.checkValid()
        this.$refs.comInput.value = ''
        this.$emit('input', '')
        this.lastValue = ''
        this.$refs.comInput.focus()
      },
      customRuleCallback (error) {
        this.isValid = !error
      },
      onBlur (e) {
        if (this.rule.trigger === 'blur' && this.rule.use) {
          this.rule.validator(this.rule, e.target.value, this.customRuleCallback)
        } else {
          // 保留原来逻辑
          this.blurCheck && this.check(e)
        }
        this.$emit('blur', this.isValid)
        this.$emit('adderBlur', e.target.value)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .u-input-wrap {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: 32px;
    line-height: normal;
    $base-color: #3597D5;
    $err-color: #DB3725;
    position: relative;
    .u-input-err-msg {
      position: absolute;
      top: 0;
      right: -100%;
      padding-left: 15px;
      width: 100%;
      color: #f56c6c;
      font-size: 14px;
      line-height: 32px;
    }
    .u-input-prefix {
      width: 32px;
      height: 100%;
      text-align: center;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      i {
        font-size: 16px;
        line-height: 32px;
        color: #808695;
      }
    }
    .append-icon {
      position: absolute;
      right: 10px;
      top: 0;
      line-height: 32px;
      i {
        color: rgba(0,0,0,.25);
        &.clear:hover {
          color: rgba(0,0,0,.45);
          cursor: pointer;
        }
      }
    }
    .base-input {
      width: 100%;
      height: 100%;
      background: #FFFFFF;
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: 4px;
      padding: 0 8px;
      &:focus {
        border-color: $base-color;
      }
      &.error {
        border-color: $err-color;
      }
      &[readonly] {
        border-color: rgba(0,0,0,0.15);
        cursor: default;
      }
    }
    .u-input-width-prefix {
      padding-left: 28px;
    }
  }
  .u-input-wrap-large {
    height: 40px;
    .u-input-prefix {
      width: 40px;
      i {
        line-height: 40px;
        font-size: 24px;
      }
    }
    .u-input-large {
      height: 40px;
    }
    .u-input-width-prefix {
      padding-left: 32px;
    }
    .append-icon {
      line-height: 40px;
    }
    .u-input-err-msg {
      line-height: 40px;
    }
  }
</style>
