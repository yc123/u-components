<template>
  <left-nav-entry :list="list"></left-nav-entry>
</template>
<script>
import LeftNavEntry from '@/components/common/LeftNavEntry'
export default {
  components: {
    LeftNavEntry
  },
  data: () => ({
    list: [
      {
        title: '卖家中心',
        url: '/vendor/home'
      },
      {
        title: '产品管理',
        url: '/vendor/product'
      },
      {
        title: '销售订单',
        url: '/vendor/order'
      }
    ]
  })
}
</script>
