<template>
  <div class="home-part-warp">
    <div class="container">
      <apply-purchase></apply-purchase>
      <store-list></store-list>
    </div>
  </div>
</template>
<script>
import ApplyPurchase from './ApplyPurchase.vue'
import StoreList from './StoreList.vue'
export default {
  components: {
    ApplyPurchase,
    StoreList
  }
}
</script>
<style lang="scss">
 .home-part-warp {
   background: #f5f5f5;
   .container {
     margin: 0 auto;
     padding-bottom: 42px;
     width: 1190px;
     text-align: center;
   }
 }
</style>
