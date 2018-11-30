<template>
  <div class="home-purchase">
    <div class="home-purchase-warp">
        <div class="fl">
          <span>询价求购</span><a href=""><i class="iconfont icon-xiangyouyuanjiantouyoujiantouxiangyouxianxing"></i>寻找更多商机</a>
        </div>
        <div class="fr"><a href="">发布需求</a></div>
      </div>
    <div class="home-purchase-list">
      <div class="header">
        <span>买家名称</span>
        <span>品牌</span>
        <span>型号</span>
        <span>规格</span>
        <span>需求数量</span>
        <span>预计交期</span>
        <span>截至日期</span>
      </div>
      <ul>
        <li>
          <div>深圳普联网络科技有限公司</div>
          <div>ABDABDABDABDABD</div>
          <div>CC0805KKX7R8AAB</div>
          <div>PLCC32PLCC32</div>
          <div>2003043454</div>
          <div>5-10天</div>
          <div>2018-12-30</div>
        </li>
        <li>
          <div>深圳普联网络科技有限公司</div>
          <div>ABDABDABDABDABD</div>
          <div>CC0805KKX7R8AAB</div>
          <div>PLCC32PLCC32</div>
          <div>2003043454</div>
          <div>5-10天</div>
          <div>2018-12-30</div>
        </li>
        <li>
          <div>深圳普联网络科技有限公司</div>
          <div>ABDABDABDABDABD</div>
          <div>CC0805KKX7R8AAB</div>
          <div>PLCC32PLCC32</div>
          <div>2003043454</div>
          <div>5-10天</div>
          <div>2018-12-30</div>
        </li>
        <li>
          <div>深圳普联网络科技有限公司</div>
          <div>ABDABDABDABDABD</div>
          <div>CC0805KKX7R8AAB</div>
          <div>PLCC32PLCC32</div>
          <div>2003043454</div>
          <div>5-10天</div>
          <div>2018-12-30</div>
        </li>
        <li>
          <div>深圳普联网络科技有限公司</div>
          <div>ABDABDABDABDABD</div>
          <div>CC0805KKX7R8AABCC0805KKX7R8AABCC0805KKX7R8AAB</div>
          <div>PLCC32PLCC32PLCC32PLCC32</div>
          <div>20030434542003043454</div>
          <div>5-10天</div>
          <div>2018-12-30</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 .home-purchase {
  .home-purchase-warp{
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
    height: 56px;
    line-height: 56px;
    text-align: center;
    .fl{
      float: left;
      span{
        font-size: 20px;
        color: #333333;
      }
      i{
        margin-left: 8px;
        color: #999999;
      }
      a{
        font-size: 14px;
        color: #999999;
      }
    }
    .fr{
      float: right;
      a{
        display: inline-block;
        width: 96px;
        height: 32px;
        line-height: 32px;
        font-size: 16px;
        color: #333333;
        border: 1px solid #999999;
        border-radius: 2px;
      }
    }
  }
  .home-purchase-list{
    margin: 0 auto;
    width: 1190px;
    text-align: center;
    .header {
      padding: 0 16px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #999999;
      span{
        padding: 0 8px;
        display: inline-block;
        font-size: 14px;
        color: #FFF;
        &:first-child {
          padding: 0;
          text-align: left;
          width: 228px;
        }
        &:nth-child(2){
          width: 148px;
        }
        &:nth-child(3){
          width: 228px;
        }
        &:nth-child(4){
          width: 208px;
        }
        &:nth-child(5){
          width: 124px;
        }
        &:nth-child(6){
          width: 104px;
        }
        &:nth-child(7){
          width: 96px;
        }
      }
    }
    ul{
      padding: 10px 0 1px;
      background: #fff;
      li{
        padding: 0 16px;
        margin-bottom: 10px;
        overflow: hidden;
        div{
          float: left;
          padding: 0 8px;
          width: 100%;
          overflow: hidden;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:first-child {
            text-align: left;
            width: 228px;
          }
          &:nth-child(2){
            width: 148px;
          }
          &:nth-child(3){
            width: 228px;
          }
          &:nth-child(4){
            width: 208px;
          }
          &:nth-child(5){
            width: 124px;
          }
          &:nth-child(6){
            width: 104px;
          }
          &:nth-child(7){
            width: 96px;
          }
        }
      }
    }
  }
 }
</style>
