<template>
  <div class="u-form-item" :class="{'ivu-form-item-error': showError}">
    <slot @getInputValue="getInputValue"></slot>
    <div class="err-msg" v-show="showError">{{message}}</div>
  </div>
</template>
<script>
  export default {
    name: 'UFormItem',
    props: {
        prop: {
            type: String
        },
        rules: {
            type: Array | Object
        }
    },
    data () {
        return {
            showError: true,
            message: ''
        }
    },
    created () {
        console.log(this.$parent.rules[this.prop])
    },
    methods: {
        getInputValue (value) {
            debugger
            console.log(value)
        }
    }
  }

</script>
<style>
  .err-msg {
    position: absolute;
    top: 0;
    right: -100%;
    padding-left: 15px;
    width: 100%;
    color: #f56c6c;
    font-size: 14px;
    line-height: 32px;
  }
</style>
