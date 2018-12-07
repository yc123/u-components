<template>
  <div class="home-store">
    <div class="home-store-warp">
        <div class="fl">
          <span>最新商家</span><router-link to="/seller"><i class="iconfont icon-xiangyouyuanjiantouyoujiantouxiangyouxianxing"></i>查找更多商家</router-link>
        </div>
      </div>
    <div class="home-store-list">
      <ul>
        <li v-for="seller in sellerList.slice(0,8)" :key="seller.enuu">
          <div class="com-head">
            <div class="com-name">{{seller.enName || '-'}}</div>
            <span>营业范围</span>
            <div class="com-rang">{{seller.scope || '-'}}</div>
          </div>
          <div class="com-footer">
            <router-link :to="`/seller/${seller.enuu}`">更多产品</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    pager: {
      size: 10,
      count: 0,
      page: 1
    },
    sellerList: []
  }),
  created () {
    this.apis.seller.getEnterprisesPage({ pageSize: this.pager.size, pageNumber: this.pager.page })
      .then(res => {
        this.requestDeal(res, data => {
          this.sellerList = data.enterprises
          this.pager.count = data.pagingInfo.totalCount
        })
      })
  }
}
</script>
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
          height: 160px;
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
