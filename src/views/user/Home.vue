<template>
  <div class="user-home clearfix">
    <div class="info fl test-border">
      <p class="title">基本信息</p>
      <div class="content">
        <p class="name">用户名：{{userInfo.name}}</p>
        <p class="phone">{{ userInfo.tel | phoneFilter }} <a>修改手机</a></p>
      </div>
    </div>
    <div class="collect fr test-border">
      <p class="title">我的关注</p>
      <router-link tag="div" to="/user/collect" class="content">
        <div class="img"></div>
        我的收藏
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    userInfo: {}
  }),
  created () {
    this.apis.seller.getLoginUser().then(res => {
      this.requestDeal(res, data => {
        this.userInfo = data.user
      })
    })
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/css/variable.scss';
  .user-home {
    .title {
      color: #333;
      height: 40px;
      line-height: 40px;
      padding-left: 8px;
      font-size: 16px;
      border-bottom: 1px solid #D6D7DC;
    }
    .info {
      width: 660px;
      height: 136px;
      .content {
        padding: 24px 8px;
        .phone {
          font-size: 12px;
          margin-top: 8px;
          a {
            color: $base-color;
            margin-left: 16px;
          }
        }
      }
    }
    .collect {
      width: 320px;
      height: 136px;
      padding: 0 8px;
      .content {
        cursor: pointer;
        .img {
          width: 45px;
          height: 45px;
          background: #D8D8D8;
          border: 1px solid #979797;
          margin: 8px;
        }
      }
    }
  }
</style>
