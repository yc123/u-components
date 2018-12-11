<template>
  <div class="user-order">
    <div class="base-title-block bg-white">
      <span class="title active">全部订单</span>
    </div>
    <table class="base-table order-table user-order-table">
      <thead>
      <tr>
        <th width="239">产品信息</th>
        <th width="106">交期</th>
        <th width="149">单价</th>
        <th width="124">采购数量</th>
        <th width="134">总计</th>
        <th width="88">订单状态</th>
        <th width="150">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr class="en-info" v-for="order in orderList" :key="order.code">
        <td colspan="7">
          <span class="order-number" v-for="item in order.orderProduct" :key="item.code">订单号：<router-link :to="`order/${order.code}`">{{item.orderCode}}</router-link></span>
          <div class="fr">
            <span>{{order.sellerName}}</span>
            <i class="iconfont icon-shouji"></i> {{order.sellerAdmMobile}}
            <i class="iconfont icon-dianhua"></i> {{order.sellerTelephone}}
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data: () => ({
    pager: {
      page: 1,
      count: 0,
      size: 10
    },
    orderList: []
  }),
  created () {
    let path = this.$route.path
    if (path === '/user/order') {
      this.loadBuyerData()
    } else if (path === '/vendor/order') {
      this.loadVendorData()
    }
  },
  methods: {
    loadBuyerData () {
      this.apis.trade.buyerPageOrderList({ pageSize: this.pager.size, pageNumber: this.pager.page })
        .then(res => {
          this.requestDeal(res, data => {
            this.orderList = data.order
            this.pager.count = data.pagingInfo.totalCount
          })
        })
    },
    loadVendorData () {
      this.apis.trade.sellerPageOrderList({ pageSize: this.pager.size, pageNumber: this.pager.page })
        .then(res => {
          this.requestDeal(res, data => {
            this.orderList = data.order
            this.pager.count = data.pagingInfo.totalCount
          })
        })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/css/order";
  .user-order {
    .user-order-table{
      thead{
        display: none;
      }
      tbody{
        .en-info {
          border-bottom: 8px solid #f5f5f5;
          &:hover{
            background: none;
            span.order-number{
              a{
                cursor: pointer ;
                color: #1890ff;
              }
            }
          }
        }
      }
    }
  }
</style>
