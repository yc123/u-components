<template>
  <div class="seller">
    <seller-detail></seller-detail>
    <seller-detail-list></seller-detail-list>
  </div>
</template>

<script>
import SellerDetail from '@/components/seller/SellerDetail.vue'
import SellerDetailList from '@/components/seller/SellerDetailList.vue'
export default {
  name: 'seller',
  components: {
    SellerDetail,
    SellerDetailList
  }
}
</script>
<style lang="scss">
  .seller{
    background-color: #f5f5f5;
  }
</style>
