<template>
  <div class="u-step-adder">
    <input type="number" v-model.number="number" :placehoder="placeholder" @input="$emit('input', Number($event.target.value))">
    <div class="adder">
      <div class="icon-wrap" @click="setNumber(true)">
        <i class="iconfont icon-arrow-up"></i>
      </div>
      <div class="icon-wrap" @click="setNumber(false)">
        <i class="iconfont icon-arrow-down"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'UStepAdder',
    data: () => ({
      number: 0
    }),
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      // 递增/递减间隔
      step: {
        type: Number,
        default: 1
      },
      value: {}
    },
    watch: {
      value: {
        handler (val) {
          if (!isNaN(val)) {
            this.number = val
          }
        },
        immediate: true
      }
    },
    methods: {
      setNumber (isAdd) {
        this.number = isAdd ? this.number + this.step : this.number - this.step
        this.$emit('input', Number(this.number))
      }
    }
  }
</script>
<style lang="scss" scoped>
  .u-step-adder {
    display: inline-block;
    position: relative;
    input {
      height: 32px;
      width: 88px;
      background: #FFFFFF;
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: 4px;
      padding: 0 34px 0 12px;
    }
    .adder {
      position: absolute;
      right: 0;
      top: 0;
      width: 22px;
      $border: 1px solid rgba(0,0,0,0.15);
      .icon-wrap {
        text-align: center;
        border-left: $border;
        cursor: pointer;
        height: 16px;
        &:first-child {
          border-bottom: $border;
        }
        &:active {
          background: #ddd;
        }
        i {
          font-size: 10px;
          line-height: 16px;
        }
      }
    }
  }
</style>
