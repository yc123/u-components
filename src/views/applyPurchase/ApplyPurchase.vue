<template>
  <div class="applyPurchase">
    <publish></publish>
  </div>
</template>

<script>
import Publish from '@/components/applyPurchase/Publish.vue'
export default {
  name: 'seller',
  components: {
    Publish
  }
}
</script>
<style lang="scss">
  .applyPurchase{
    background-color: #f5f5f5;
  }
</style>
