<template>
  <div>
    <header class="main-header">
      <div class="container header-wrap">
        <div class="fr">
          <template v-if="!user.logged">
            <span class="item" @click="login">登录</span>
            <span class="item" @click="register">注册</span>
          </template>
          <div class="inline-block drop-down" v-else>
            <span class="item item-user">欢迎您，{{user.vipName}}&nbsp;|&nbsp;{{user.spaceName}}&nbsp;&nbsp;</span>
            <span class="item" @click="logout">[退出]</span>
            <ul>
              <li class="menu-item-first">您可切换至以下账户：</li>
              <li v-for="(en, index) in user.enterprises" @click="switchEn(en)" :title="en.spaceName" :key="index">
                <a v-text="en.spaceName"></a>
              </li>
            </ul>
          </div>
          <router-link to="/" class="item">商城首页</router-link>
          <template v-if="user.logged">
            <router-link to="/user/home" class="item">买家中心</router-link>
            <router-link to="/vendor/home" class="item">卖家中心</router-link>
            <a :href="ssoCenterUrl" target="_blank" class="item">账户中心</a>
          </template>
        </div>
      </div>
    </header>
    <div class="header-icon">
      <div class="container">
        <router-link to="/">
          <img src="@/assets/img/nav-logo.png" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('options', {
      loginUrl: 'loginUrl',
      logoutUrl: 'logoutUrl',
      ssoUrl: 'ssoUrl',
      registerUrl: 'registerUrl',
      ssoCenterUrl: 'ssoCenterUrl'
    })
  },
  methods: {
    login () {
      window.location.href = this.loginUrl + `&returnURL=${encodeURIComponent(window.location.href)}`
    },
    logout () {
      window.location.href = this.logoutUrl + `&returnURL=${encodeURIComponent(window.location.origin)}`
    },
    register () {
      window.location.href = this.registerUrl + `?returnURL=${encodeURIComponent(window.location.href)}`
    },
    switchEn (en) {
      this.apis.sso.switchEnterprise(en.spaceuu).then(res => {
        this.$router.push('/')
        this.$store.dispatch('auth/getAuth')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .main-header {
    height: 32px;
    line-height: 32px;
    width: 100%;
    background: #474443;
    .header-wrap {
      width: 1190px;
      margin: 0 auto;
      font-size: 14px;
      color: #fff;
      .header-logo {
        color: #fff;
        img {
          margin-right: 3px;
          vertical-align: middle;
          margin-top: -5px;
          width: 21px;
        }
      }
      .fr {
        .item {
          color: #fff;
          cursor: pointer;
          margin-right: 12px;
          margin-left: 12px;
          &.item-user {
            cursor: default;
            margin-right: 5px;
          }
        }
        .drop-down {
          position: relative;
          ul {
            position: absolute;
            display: none;
            width: 100%;
            padding: 0 6px 13px;
            line-height: normal;
            border: 1px solid #999;
            border-top: none;
            max-height: 300px;
            overflow-y: auto;
            background: #f6f6f6;
            z-index: 2;
            li {
              padding: 0 12px;
              height: 30px;
              line-height: 30px;
              max-width: 300px;
              color: #333;
              overflow: hidden;
              cursor: pointer;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 12px;
              a {
                color: #333;
                &:hover {
                  color: #5078cb;
                }
              }
            }
          }
          .menu-item-first {
            background: #eee;
            padding: 0 12px;
            line-height: 30px;
            font-size: 12px;
            font-weight: bold;
          }
          &:hover {
            background: #fff;
            .item {
              color: #333;
            }
            ul {
              display: block;
            }
          }
        }
      }
    }
  }
  .header-icon {
    height: 103px;
    background: #fff;
    .container {
      margin: 0 auto;
      width: 1190px;
      height: 100%;
      img {
        margin-top: 21px;
        cursor: pointer;
      }
    }
  }
</style>
