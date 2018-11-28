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
      }
    },
    watch: {
      value: {
        handler: function (val) {
          if (val && val.length) {
            val.forEach((valueItem) => {
              let findObj = this.items.find(item => valueItem[this.itemValue] === item[this.itemValue])
              if (findObj) {
                this.$set(findObj, 'checked', true)
              }
            })
          }
        },
        immediate: true
      }
    },
    methods: {
      onCheckChange () {
        let checkedArr = []
        this.items.forEach(item => {
          // item.checked && checkedArr.push(this.itemValue ? item[this.itemValue] : item)
          item.checked && checkedArr.push(item)
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
