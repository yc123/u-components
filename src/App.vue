<template>
  <div id="app">
    <loading></loading>
    <main-header></main-header>
    <router-loading></router-loading>
    <router-view/>
    <main-footer></main-footer>
    <scroll-to-top></scroll-to-top>
  </div>
</template>
<script>
import Header from '@/components/main/Header'
import Footer from '@/components/main/Footer'
import { Loading, ScrollToTop, RouterLoading } from '@/components/base'
export default {
  name: 'Mall',
  components: {
    MainHeader: Header,
    MainFooter: Footer,
    Loading,
    RouterLoading,
    ScrollToTop
  }
}
</script>
