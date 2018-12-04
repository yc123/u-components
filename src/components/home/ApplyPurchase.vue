<template>
  <div class="home-purchase">
    <div class="home-purchase-warp">
        <div class="fl">
          <span>询价求购</span><router-link to="/applyPurchase"><i class="iconfont icon-xiangyouyuanjiantouyoujiantouxiangyouxianxing"></i>寻找更多商机</router-link>
        </div>
        <div class="fr"><router-link to="/applyPurchase">发布需求</router-link></div>
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
        <li v-for="demand in demandList" :key="demand.code">
          <div :title="user.logged ? demand.uuName : null">{{[demand.uuName, user] | enterpriseFilter}}</div>
          <div :title="demand.brand">{{demand.brand || '-'}}</div>
          <div :title="demand.model">{{demand.model || '-'}}</div>
          <div :title="demand.spec">{{demand.spec || '-'}}</div>
          <div :title="demand.amount">{{demand.amount || '-'}}</div>
          <div :title="`${demand.leastDelivery}-${demand.lastDelivery}天`">{{demand.leastDelivery}}-{{demand.lastDelivery}}天</div>
          <div :title="demand.deadlineDate">{{demand.deadlineDate || '-'}}</div>
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
    demandList: []
  }),
  filters: {
    enterpriseFilter ([str, user]) {
      if (!user.logged) {
        return str ? str.length > 4 ? str.substring(0, 2) + '**' + str.substring(str.length - 2, str.length) : str : '-'
      } else {
        return str || '-'
      }
    }
  },
  created () {
    this.apis.demand.indexGetDemand({ pageSize: this.pager.size, pageNumber: this.pager.page })
      .then(res => {
        this.requestDeal(res, data => {
          this.demandList = data.demand
          this.pager.count = data.pagingInfo.totalCount
        })
      })
  }
}
</script>
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
      height: 168px;
      padding: 10px 0 1px;
      background: #fff;
      overflow: hidden;
      li{
        padding: 0 16px;
        margin-bottom: 10px;
        overflow: hidden;
        line-height: 22px;
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
