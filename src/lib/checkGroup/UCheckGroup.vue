<template>
  <div class="com-check-group">
    <u-check-box
      class="check-group-item"
      v-for="(item, index) in items"
      :class="{disabled: item.disabled}"
      :key="index"
      :boxId="`${boxId}_${index}`"
      v-model="item.checked"
      @input="onCheckChange"
      :disabled="item.disabled"
    >{{item.label}}</u-check-box>
  </div>
</template>
<script>
  import UCheckBox from '../checkBox'
  export default {
    name: 'UCheckGroup',
    components: {
      UCheckBox
    },
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
      boxId: {
        default: 'checkGroup'
      },
      // 选择选定的属性，不选择默认对象
      itemValue: {
        type: String,
        default: 'value'
      },
      value: {
        type: Array,
        default: () => []
      },
      onlyValue: {
        type: Boolean,
        default: false
      },
      // 是否反选
      reserve: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value: {
        handler: function (val) {
          let emptyValue = val && val.length > 0
          this.items.forEach((item) => {
            let findObj
            if (!this.reserve) {
              findObj = emptyValue && val.find(valueItem => valueItem === item[this.itemValue] || valueItem[this.itemValue] === item[this.itemValue])
            } else {
              findObj = !emptyValue || val.every(valueItem => valueItem !== item[this.itemValue] && valueItem[this.itemValue] !== item[this.itemValue])
            }
            this.$set(item, 'checked', Boolean(findObj))
          })
        },
        immediate: true
      }
    },
    methods: {
      onCheckChange () {
        let checkedArr = []
        this.items.forEach(item => {
            ((!this.reserve && item.checked) || (this.reserve && !item.checked)) && !item.disabled && checkedArr.push(this.onlyValue ? item[this.itemValue] : item)
          // item.checked && checkedArr.push(item)
        })
        this.$emit('input', checkedArr)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .com-check-group {
    .check-group-item {
      margin-right: 20px !important;
      &.disabled {
        color: rgba(0,0,0,0.25);
        cursor: not-allowed;
      }
    }
  }
</style>
