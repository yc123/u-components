<template>
  <div class="com-radio-group">
    <u-radio-box
      class="radio-group-item"
      :class="{disabled: item.disabled}"
      v-for="(item, index) in items"
      :key="index"
      :radioName="radioName"
      :radioId="`${radioName}_${index}`"
      :radioValue="item.value"
      :checkedValue="value"
      :disabled="item.disabled"
      @input="onCheckChange"
    >{{item.label}}</u-radio-box>
  </div>
</template>
<script>
  import URadioBox from '../radioBox/URadioBox'
  export default {
    name: 'URadioGroup',
    props: {
      /*
      * 数据格式：[
      *   {
      *     label: xxx,
      *     value: xxx
      *   }
      * ]
      * */
      items: {
        type: Array,
        default: () => []
      },
      radioName: {
        default: 'radioGroup'
      },
      // 初始化值
      value: {}
    },
    components: {
      URadioBox
    },
    methods: {
      onCheckChange (value) {
        this.$emit('input', value)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .com-radio-group {
    .radio-group-item {
      margin-right: 20px !important;
      &.disabled {
        color: rgba(0,0,0,0.25);
        cursor: not-allowed;
      }
    }
  }
</style>
