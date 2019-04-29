<template>
  <button @click="clickEvent" class="u-btn" :class="[{ 'u-btn-long': long }, 'u-btn-' + size]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
  export default {
    name: 'UButton',
    props: {
      long: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'default'
      }
    },
    methods: {
      clickEvent () {
        this.$emit('click')
      }
    }
  }

</script>
<style lang="scss" scoped>
  .u-btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    border-radius: 4px;
    user-select: none;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    color: #FFFFFF;
    vertical-align: middle;
    line-height: 1.5;
    height: 32px;
    background-color: #5078CA
  }
  .u-btn-long {
    width: 100%;
  }
  .u-btn-large {
    height: 40px;
  }
</style>
