<template>
  <div class="scroll-top" @click="toTop" v-if="show">
    <i class="iconfont icon-fanhuidingbu"></i>
    <p>返回顶部</p>
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
        this.show = scrolled > 625
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
    cursor: pointer;
    text-align: center;
    i {
      font-size: 45px;
      color: #DC6025;
      margin-right: -3px;
    }
    p {
      color: #DC6025;
      font-size: 16px;
      margin-top: -6px;
    }
  }
</style>
