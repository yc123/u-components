<template>
  <div class="home-store">
    <div class="home-store-warp">
        <div class="fl">
          <span>最新商家</span><a href=""><i class="iconfont icon-xiangyouyuanjiantouyoujiantouxiangyouxianxing"></i>查找更多店铺</a>
        </div>
      </div>
    <div class="home-store-list">
      <ul>
        <li>
          <div class="com-head">
            <div class="com-name">深圳市博瑞泰电子有限公司</div>
            <span>营业范围</span>
            <div class="com-rang">医疗电子，消费电子，通信网络，汽车电子，家电，仪表仪器，电源电子，红绿灯。</div>
          </div>
          <div class="com-footer">
            <a href="">更多产品</a>
          </div>
        </li>
        <li>
          <div class="com-head">
            <div class="com-name">深圳市博瑞泰电子有限公司</div>
            <span>营业范围</span>
            <div class="com-rang">医疗电子，消费电子，通信网络，汽车电子，家电，仪表仪器，电源电子，红绿灯。</div>
          </div>
          <div class="com-footer">
            <a href="">更多产品</a>
          </div>
        </li>
        <li>
          <div class="com-head">
            <div class="com-name">深圳市博瑞泰电子有限公司</div>
            <span>营业范围</span>
            <div class="com-rang">医疗电子，消费电子，通信网络，汽车电子，家电，仪表仪器，电源电子，红绿灯。</div>
          </div>
          <div class="com-footer">
            <a href="">更多产品</a>
          </div>
        </li>
        <li>
          <div class="com-head">
            <div class="com-name">深圳市博瑞泰电子有限公司</div>
            <span>营业范围</span>
            <div class="com-rang">医疗电子，消费电子，通信网络，汽车电子，家电，仪表仪器，电源电子，红绿灯。</div>
          </div>
          <div class="com-footer">
            <a href="">更多产品</a>
          </div>
        </li>
        <li>
          <div class="com-head">
            <div class="com-name">深圳市博瑞泰电子有限公司</div>
            <span>营业范围</span>
            <div class="com-rang">医疗电子，消费电子，通信网络，汽车电子，家电，仪表仪器，电源电子，红绿灯。</div>
          </div>
          <div class="com-footer">
            <a href="">更多产品</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 .home-store {
  .home-store-warp{
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
  }
  .home-store-list{
    margin: 0 auto;
    width: 1190px;
    text-align: center;
    ul{
      overflow: hidden;
      li{
        float: left;
        margin: 0 16px 16px 0;
        width: 285px;
        height: 217px;
        background: #FFFFFF;
        .com-head{
          padding: 0 16px;
          text-align: left;
          border-bottom: 1px solid rgba(0,0,0,0.09);
          .com-name {
            padding-top: 16px;
            width: 100%;
            overflow: hidden;
            font-size: 16px;
            font-weight: bold;
            color: #333333;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          span{
            display: inline-block;
            margin: 12px auto 4px;
            font-size: 14px;
            color: #666666;
          }
          .com-rang {
            margin-bottom: 16px;
            font-size: 14px;
            color: #333333;
            text-align: justify;
            line-height: 22px;
          }
        }
        .com-footer{
          height: 56px;
          line-height: 56px;
          a{
            display: inline-block;
            width: 72px;
            height: 24px;
            line-height: 24px;
            font-size: 14px;
            color: #333333;
            border: 1px solid rgba(0,0,0,0.15);
            border-radius: 4px;
          }
        }
        &:nth-child(4), &:nth-child(8){
          margin-right: 0;
        }
      }
    }
  }
 }
</style>
