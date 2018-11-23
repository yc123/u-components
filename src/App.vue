<template>
  <div id="app">
    <date-picker></date-picker>
  </div>
</template>

<script>
  import DatePicker from './lib'
export default {
  name: 'app',
  components: {
    DatePicker
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
  #app {
    padding: 10% 36%;
  }
</style>
