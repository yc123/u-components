<template>
  <div class="seller">
    <seller-list></seller-list>
  </div>
</template>

<script>
import SellerList from '@/components/seller/SellerList.vue'
export default {
  name: 'seller',
  components: {
    SellerList
  }
}
</script>
<style lang="scss">
  .seller{
    background-color: #f5f5f5;
  }
</style>
