<template>
  <div class="user-home clearfix">
    <div class="info fl test-border">
      <p class="title">深圳嘻嘻嘻爱的空间啊实打实的有限公司</p>
      <div class="content">
        <p class="name">用户名：是是是 <a class="fr">账号设置</a></p>
        <p class="phone">133****3333</p>
      </div>
    </div>
    <div class="collect fr test-border">
      <p class="title">待办事项</p>
      <div class="content"></div>
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
        }
        .name {
          a {
            color: $base-color;
            margin-right: 12px;
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
