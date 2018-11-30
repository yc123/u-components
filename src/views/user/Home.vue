<template>
  <div class="user-home clearfix">
    <div class="info fl test-border">
      <p class="title">基本信息</p>
      <div class="content">
        <p>用户名：是是是</p>
        <p class="phone">133****3333 <a>修改手机</a></p>
      </div>
    </div>
    <div class="collect fr test-border">
      <p class="title">我的关注</p>
      <router-link tag="div" to="/user/collect" class="content">
        go
      </router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '@/assets/css/variable.scss';
  .user-home {
    .title {
      color: #333;
      height: 40px;
      line-height: 40px;
      padding-left: 8px;
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
    }
  }
</style>
