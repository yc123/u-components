<template>
  <div class="center-wrap">
    <div class="container center-view clearfix">
      <left-nav :list="list" class="fl"></left-nav>
      <div class="fr view-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import LeftNav from './LeftNav'
export default {
  components: {
    LeftNav
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
  .center-wrap {
    background: #f5f5f5;
  }
  .center-view {
    padding: 8px 0;
    .view-right {
      width: 996px;
    }
  }
</style>
