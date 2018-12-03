<template>
  <div class="seller">
    <seller-detail></seller-detail>
  </div>
</template>

<script>
import SellerDetail from '@/components/seller/SellerDetail.vue'
export default {
  name: 'seller',
  components: {
    SellerDetail
  }
}
</script>
<style lang="scss">
  .seller{
    background-color: #f5f5f5;
  }
</style>
