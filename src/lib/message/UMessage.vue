<template>
  <div class="u-message" v-show="visible" id="u-message">
    <i class="iconfont" :class="[typeClass, type]"></i>
    {{message}}
  </div>
</template>
<script>
  export default {
    name: 'UMessage',
    data: () => ({
      // 是否显示
      visible: false,
      // 定时器时长
      duration: 1500,
      // 定时器
      timer: null,
      // 提示类型
      type: 'success',
      // 提示内容
      message: ''
    }),
    computed: {
      typeClass () {
        return `icon-${this.type}`
      }
    },
    mounted() {
      this.startTimer()
    },
    methods: {
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            this.close()
            this.clearTimer()
          }, this.duration)
        }
      },
      clearTimer() {
        clearTimeout(this.timer)
      },
      close () {
        this.clearTimer()
        this.$destroy(true)
        this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
        this.visible = false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .u-message {
    position: fixed;
    top: calc(100vh / 2 - 20px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    pointer-events: none;
    text-align: left;
    border-radius: 4px;
    padding: 9px 16px;
    min-width: 278px;
    line-height: 22px;
    background: #FFFFFF;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,0.15);
    i {
      font-size: 18px;
      line-height: 22px;
      float: left;
      margin-right: 8px;
      &.success {
        color: #52C41A;
      }
      &.error {
        font-size: 14px;
        color: #DB3725;
      }
      &.info {
        color: #FAAD14;
      }
    }
  }
</style>
