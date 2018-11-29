<template>
  <ul class="left-nav">
    <router-link
      class="nav-item"
      tag="li"
      v-for="(item, index) in list"
      :key="index"
      v-text="item.title"
      :to="item.url"></router-link>
  </ul>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
  .left-nav {
    width: 178px;
    .nav-item {
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #E9E9E9;
      margin-bottom: 8px;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0;
      }
      &.router-link-active {
        background: #999;
        color: #fff;
      }
    }
  }
</style>
