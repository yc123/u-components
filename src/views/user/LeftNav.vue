<template>
  <div class="container center-view clearfix">
    <left-nav :list="list" class="fl"></left-nav>
    <div class="fr view-right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import LeftNav from '@/components/common/LeftNav'
export default {
  components: {
    LeftNav
  },
  data: () => ({
    list: [
      {
        title: '买家中心',
        url: '/user/home'
      },
      {
        title: '我的需求',
        url: '/user/demand'
      }
    ]
  })
}
</script>
<style lang="scss" scoped>
  .center-view {
    margin: 8px auto;
    .view-right {
      width: 996px;
    }
  }
</style>
