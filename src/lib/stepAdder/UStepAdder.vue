<template>
  <div class="u-step-adder">
    <u-input class="adder-input"
             :reg="reg"
             :disabled="disabled"
             v-model.number="number"
             :placehoder="placeholder"
             @change="onInput"
             @adderBlur="adderBlur"></u-input>
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
      number: null
    }),
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      // 递增/递减间隔
      step: {
        type: Number,
        default: 0
      },
      value: {},
      min: {
        type: Number,
        default: null
      },
      max: {
        type: Number,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      reg: {
        type: String,
        default: '^[0-9]*$'
      }
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
        if (!this.disabled) {
          this.number = this.validator(isAdd ? this.number + this.step : this.number - this.step)
          this.$emit('input', this.number)
        }
      },
      // 校验
      validator (num) {
        if (typeof this.min === 'number') {
          if (num < this.min) {
            num = this.min
          }
        }
        if (typeof this.max === 'number') {
          if (num > this.max) {
            num = this.max
          }
        }
        return Number(num)
      },
      // onChange ($event) {
      //   this.$emit('input', this.validator($event.target.value))
      // },
      onInput ($event) {
        this.$emit('input', this.validator($event.target.value))
      },
      adderBlur (value) {
        this.$emit('input', this.validator(value))
      }
    }
  }
</script>
<style lang="scss" scoped>
  .u-step-adder {
    display: inline-block;
    position: relative;
    width: 88px;
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
        line-height: 16px;
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
    /deep/ .adder-input input {
      width: 100%;
      height: 32px;
      background: #FFFFFF;
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: 4px;
      padding: 0 34px 0 12px;
      &[disabled] {
        background: rgba(0,0,0,0.09);
        border: 1px solid rgba(0,0,0,0.09);
        cursor: not-allowed;
        color: rgba(0, 0, 0, .25);
        & + .adder .icon-wrap {
          cursor: not-allowed;
          &:active {
            background: inherit;
          }
        }
      }
    }
  }
</style>
