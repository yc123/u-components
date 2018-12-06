<template>
  <div id="app">
    <!--<loading></loading>-->
    <main-header></main-header>
    <main-nav v-if="isShow"></main-nav>
    <router-loading></router-loading>
    <router-view/>
    <main-footer></main-footer>
    <scroll-to-top></scroll-to-top>
  </div>
</template>
<script>
import { Header, Footer, Nav } from '@/components/main'
import { ScrollToTop, RouterLoading } from '@/components/base'
import { comHeader } from '@/utils/mixins'
export default {
  name: 'Mall',
  mixins: [comHeader],
  components: {
    MainHeader: Header,
    MainFooter: Footer,
    MainNav: Nav,
    // Loading,
    RouterLoading,
    ScrollToTop
  }
}
</script>
