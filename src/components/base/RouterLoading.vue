<template>
  <div class="router-loading" v-show="showLoading">
    <div class="wrap">
      <div class="outer"></div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    showLoading () {
      return this.$store.state.options.routerLoading
    }
  }
}
</script>
<style scoped lang="scss">
  @keyframes spin {
    0%   { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }
  }
  .router-loading {
    width:  100%;
    height: calc(100vh - 140px);
    z-index: 1000;
    text-align: center;
    position: relative;
    .wrap {
      width: 64px;
      height: 64px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -32px;
      margin-top: -32px;
    }
    .outer {
      background-repeat: no-repeat;
      background-size:100%;
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url('../../assets/img/base/loading.png');
      animation: spin 800ms infinite linear;
    }
  }
</style>
