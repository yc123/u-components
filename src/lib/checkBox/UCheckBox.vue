<template>
  <label class="check-box-wrap">
    <input type="checkbox" :disabled="disabled" :ref="boxId" :id="boxId" @change="onInput($event)">
    <label :for="boxId">
      <i class="iconfont icon-check-box-outline-blank"></i>
      <i class="iconfont icon-check-box"></i>
    </label>
    <slot></slot>
  </label>
</template>
<script>
  export default {
    name: 'UCheckBox',
    props: {
      boxId: {
        default: 'checkAll'
      },
      value: {},
      disabled: {
        default: false,
        type: Boolean
      }
    },
    watch: {
      value: {
        handler: function (val) {
          this.$nextTick(() => {
            this.$refs[this.boxId].checked = val
          })
        },
        immediate: true
      }
    },
    methods: {
      onInput (e) {
        this.$emit('input', e.target.checked)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .check-box-wrap {
    margin: 0;
    display: inline-block;
    user-select: none;
    font-weight: normal;
    input {
      display: none;
      & + label{
        display: inline-block;
        vertical-align: middle;
        margin: 0;
        .icon-check-box {
          display: none;
          color: #1890FF;
        }
        .icon-check-box-outline-blank {
          color: #D9D9D9;
        }
      }
      &:checked + label {
        .icon-check-box {
          display: initial;
        }
        .icon-check-box-outline-blank {
          display: none;
        }
      }
      &:disabled + label {
        cursor: not-allowed;
        .icon-check-box, .icon-check-box-outline-blank {
          color: rgba(0,0,0,0.25);
        }
      }
    }
  }
</style>
