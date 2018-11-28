<template>
  <label class="com-radio-wrap">
    <input type="radio"
           :ref="radioId"
           :Id="radioId"
           :value="radioValue"
           :name="radioName"
           :disabled="disabled"
           @change="onInput($event)">
    <label :for="radioId">
      <i class="iconfont icon-radiobuttonon"></i>
      <i class="iconfont icon-radiobuttonoff"></i>
    </label>
    <slot></slot>
  </label>
</template>
<script>
  export default {
    name: 'URadioBox',
    props: {
      radioId: {
        type: String,
        default: 'checkRadio'
      },
      radioName: {
        type: String,
        default: 'checkRadio'
      },
      // 单选框的值
      radioValue: {},
      // 单选框当前选中的值，做初始化用
      checkedValue: {},
      disabled: {
        default: false,
        type: Boolean
      }
    },
    watch: {
      checkedValue: {
        handler: function (val) {
          this.$nextTick(() => {
            this.$refs[this.radioId].checked = val === this.radioValue
          })
        },
        immediate: true
      }
    },
    methods: {
      onInput (e) {
        this.$emit('input', e.target.checked && e.target.value)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .com-radio-wrap {
    margin: 0;
    display: inline-block;
    user-select: none;
    font-weight: normal;
    input {
      display: none !important;
      & + label{
        display: inline-block;
        margin: 0;
        vertical-align: middle;
        .icon-radiobuttonoff {
          display: initial;
          color: #D9D9D9;
        }
        .icon-radiobuttonon {
          display: none;
          color: #1890FF;
        }
      }
      &:checked + label {
        .icon-radiobuttonoff {
          display: none;
        }
        .icon-radiobuttonon {
          display: initial;
        }
      }
      &:disabled + label{
        cursor: not-allowed;
        .icon-radiobuttonoff, .icon-radiobuttonon {
          color: rgba(0,0,0,0.25);
        }
      }
    }
  }
  /* checkbox end */
</style>
