<template>
  <div class="u-input-wrap" :class="'u-input-wrap-' + size">
    <span class="u-input-prefix" v-if="prefix"><i class="iconfont" :class="prefix ? prefix: ''"></i></span>
    <input :type="type"
           ref="comInput"
           :class="[{'u-input-width-prefix': !!prefix}, 'u-input-' + size]"
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
  </div>
</template>
<script>
  export default {
    name: 'UFormInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      prefix: {
        type: String,
        default: ''
      },
      // 最大字数
      maxLength: {
        type: Number,
        default: 0
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
    },
    methods: {
      // 监听回车
      enterEvent (e) {
        let target = e.target || e.srcElement
        target.blur()
      },
      onInput (e) {
        debugger;
        let target = e.target || e.srcElement
        this.$emit('getInputValue', e.target.value)
        // this.check(e)
      },
      clear () {
        this.checkValid()
        this.$refs.comInput.value = ''
        this.$emit('input', '')
        this.lastValue = ''
        this.$refs.comInput.focus()
      },
      onBlur (e) {
                debugger;
        let target = e.target || e.srcElement
        this.$emit('input', e.target.value)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .u-input-wrap {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
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
