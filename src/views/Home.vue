<template>
  <div class="home">
    <carousel></carousel>
    <part-list></part-list>
  </div>
</template>

<script>
import Carousel from '@/components/home/Carousel.vue'
import PartList from '@/components/home/PartList.vue'
export default {
  name: 'home',
  components: {
    Carousel,
    PartList
  }
}
</script>
