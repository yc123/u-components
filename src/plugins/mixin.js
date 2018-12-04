import Vue from 'vue'
import baseUtils from '@/utils/baseUtils'
import apis from '../api'

Vue.mixin({
  computed: {
    baseUtils () {
      return baseUtils
    },
    user () {
      return this.$store.state.auth.user
    },
    apis () {
      return apis
    }
  },
  filters: {
    phoneFilter: function (tel) {
      if (tel) {
        if (typeof tel === 'number') {
          tel = tel.toString()
        }
        return tel.substr(0, 3) + '****' + tel.substr(7, 4)
      } else {
        return ''
      }
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
    requestDeal (res, call, errCall) {
      if (res.data.respHeader) {
        if (res.data.respHeader.code === 0) {
          call(res.data)
        } else {
          errCall && errCall()
          this.$message.error(res.data.respHeader.msg)
        }
      } else {
        this.$message.error(res.data || '系统错误')
      }
    },
    errDeal (err, msg) {
      console.log(err)
      this.$message.error(err.response.data || msg || '系统错误')
    }
  }
})
