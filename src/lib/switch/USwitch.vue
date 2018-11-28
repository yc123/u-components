<template>
  <div class="u-switch">
    <i class="iconfont icon-switch-OFF" v-show="!open" @click="setOpen(true)"></i>
    <i class="iconfont icon-switch-ON" v-show="open" @click="setOpen(false)"></i>
  </div>
</template>
<script>
  export default {
    name: 'USwitch',
    data: () => ({
      open: false
    }),
    props: {
      value: {}
    },
    watch: {
      value: {
        handler (val) {
          this.open = val
        },
        immediate: true
      }
    },
    methods: {
      setOpen (open) {
        this.open = open
        this.$emit('input', open)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .u-switch {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    i {
      font-size: 36px;
      cursor: pointer;
      &.icon-switch-ON {
        color: #1890FF;
      }
      &.icon-switch-OFF {
        color: rgba(0,0,0,0.25);
      }
    }
  }
</style>
