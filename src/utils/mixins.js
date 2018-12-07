export const comHeader = {
  computed: {
    isShow () {
      let path = this.$route.path
      return !this.baseUtils.startWith(path, '/user') &&
        !this.baseUtils.startWith(path, '/vendor') &&
        !this.baseUtils.startWith(path, '/pay')
    }
  }
}
