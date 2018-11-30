<template>
  <div class="product-list">
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/product/ProductList.vue'
export default {
  name: 'productList',
  components: {
    ProductList
  }
}
</script>
<style lang="scss">
  .product-list{
    background-color: #f5f5f5;
  }
</style>
