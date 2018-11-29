
import Vue from 'vue'
import baseUtils from '@/utils/baseUtils'

Vue.mixin({
  computed: {
    baseUtils () {
      return baseUtils
    },
    user () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    goRouter (url) {
      if (url) {
        this.$router.push(url)
      }
    },
    loginInterceptor (callback) {
      if (!this.$store.state.auth.user.logged) {
        window.location.href = this.$store.getters['options/loginUrl'] + `&returnURL=${window.location.href}`
      } else {
        callback.call()
      }
    },
    getRequestDeal (res, call, errCall) {
      if (res.data.respHeader && res.data.respHeader.code === 0) {
        call(res.data)
      } else {
        errCall && errCall()
        this.$message.show(res.data.respHeader.msg)
      }
    }
  }
})
