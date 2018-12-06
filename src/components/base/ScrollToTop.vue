<template>
  <div>
    <div class="right-bar-warp">
      <div class="right-bar">
        <router-link :to="`/user/cart`">
          <i class="iconfont icon-gouwucheman"></i>
          <p>购物车</p>
        </router-link>
      </div>
      <div class="right-bar">
        <router-link :to="`/user/collect`">
          <i class="iconfont icon-shoucang"></i>
          <p>收藏</p>
        </router-link>
      </div>
    </div>
    <div class="scroll-top" @click="toTop" v-if="show">
      <i class="iconfont icon-xiangshangjiantouarrowup"></i>
    </div>
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
  .right-bar-warp {
    position: fixed;
    top: 730px;
    right: 20px;
    background: #6E747A;
    cursor: pointer;
    text-align: center;
    .right-bar {
      padding-top: 4px;
      width: 52px;
      height: 52px;
      p{
        font-size: 12px;
        color: #FFFFFF;
        text-align: center;
        line-height: 22px;
      }
      i {
        font-size: 22px;
        color: #fff;
      }
    }
  }
</style>
