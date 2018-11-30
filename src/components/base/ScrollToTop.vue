<template>
  <div class="scroll-top" @click="toTop" v-if="show">
    <i class="iconfont icon-xiangshangjiantouarrowup"></i>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: false
  }),
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', () => {
        let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        this.show = scrolled > 500
      }, false)
    })
  },
  methods: {
    toTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style lang="scss" scoped>
  .scroll-top {
    position: fixed;
    bottom: 40px;
    right: 20px;
    width: 52px;
    height: 52px;
    line-height: 52px;
    background: #6E747A;
    cursor: pointer;
    text-align: center;
    i {
      font-size: 42px;
      color: #fff;
      margin-right: -3px;
    }
  }
</style>
