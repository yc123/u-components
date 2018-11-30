<template>
  <nav class="nav-list">
    <div class="container">
      <router-link to="/" class="item item-first" tag="div">
        <div>产品类别</div>
      </router-link>
      <router-link to="/" class="item" exact>
        <span>首&nbsp;&nbsp;页</span>
      </router-link>
      <router-link to="/applyPurchase" class="item">
        <span>询价求购</span>
      </router-link>
      <router-link to="/seller" class="item">
        <span>商家</span>
      </router-link>
      <router-link to="/product" class="item">
        <span>产品</span>
      </router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'navView'
}
</script>
<style lang="scss" scoped>
  $nav-height: 40px;
  .nav-list a span{
    font-size: 16px;
  }
  .nav-list {
    background-color: #f5f5f5;
    height: 56px;
    .container{
      width: 1190px;
      height: $nav-height;
      margin: 0 auto;
    }

    .item {
      display: inline-block;
      height: $nav-height;
      line-height: $nav-height;
      width: 121px;
      text-align: center;
      margin: 0;
      vertical-align: middle;
      color: #474443;

      > span {
        padding: 5px 2px;
      }

      &.router-link-active, &.active, &:not(.expand-item):hover {
        > span {
          color: #333;
          border-bottom: #666 3px solid;
        }
      }
      &.item-first {
        width: 220px;
        margin: 0;
        background-color: #999;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        color: #fff;
        cursor: pointer;
        position: relative;
        &:hover {
          #kindCategory {
            display: block;
          }
        }
      }
    }
  }
</style>
