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
        title: '买家中心',
        url: '/user/home'
      },
      {
        title: '我的需求',
        url: '/user/demand'
      }
    ]
  })
}
</script>
