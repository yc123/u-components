<template>
  <div id="app">
    <!--<loading></loading>-->
    <main-header></main-header>
    <main-nav></main-nav>
    <router-loading></router-loading>
    <router-view/>
    <main-footer></main-footer>
    <scroll-to-top></scroll-to-top>
  </div>
</template>
<script>
import { Header, Footer, Nav } from '@/components/main'
import { ScrollToTop, RouterLoading } from '@/components/base'
export default {
  name: 'Mall',
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
