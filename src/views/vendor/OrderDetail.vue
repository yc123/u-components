<template>
  <div class="order">
    <order-detail></order-detail>
  </div>
</template>

<script>
import OrderDetail from '@/components/order/OrderDetail.vue'
export default {
  name: 'seller',
  components: {
    OrderDetail
  }
}
</script>
