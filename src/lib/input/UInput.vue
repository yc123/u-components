<template>
  <div class="u-input-wrap">
    <input type="text"
           ref="comInput"
           :class="{error: !isValid}"
           class="base-input"
           :placeholder="placeholder"
           @input="onInput($event)">
    <i class="iconfont icon-close"></i>
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
      // 绑定值
      value: {},
      placeholder: {
        type: String,
        default: ''
      }
    },
    watch: {
      value: {
        handler: function (val) {
          if (val) {
            this.$nextTick(() => {
              this.$refs.comInput.value = val
            })
          }
        },
        immediate: true
      }
    },
    methods: {
      onInput (e) {
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
        this.$emit('input', e.target.value)
        this.lastValue = e.target.value
      },
      // 提示校验
      checkValid () {
        if (this.$refs.comInput.value) {
          // 输入提示正则校验
          this.isValid = true
          if (this.checkReg) {
            let checkRegExp = new RegExp(this.checkReg)
            this.isValid = checkRegExp.test(this.$refs.comInput.value)
          }
        } else {
          this.isValid = !this.required
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .u-input-wrap {
    $base-color: #1890FF;
    $err-color: #F5222D;
    position: relative;
    i {
      position: absolute;
      right: 10px;
      top: 0;
      line-height: 32px;
      cursor: pointer;
      color: rgba(0,0,0,.25);
      &:hover {
        color: rgba(0,0,0,.45);
      }
    }
    .base-input {
      width: 100%;
      height: 32px;
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
    }
  }
</style>
