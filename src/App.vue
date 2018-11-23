<template>
  <div id="app">
    <date-picker></date-picker>
  </div>
</template>

<script>
  import DatePicker from './lib/datePicker/index'
export default {
  name: 'app',
  components: {
    DatePicker
  }
}
</script>
<style>
  #app {
    padding: 10% 36%;
  }
</style>
