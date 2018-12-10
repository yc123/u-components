<template>
  <div class="product-list">
    <table class="base-table order-table product-table">
      <thead>
      <tr>
        <th width="296">产品信息</th>
        <th width="296">销售信息</th>
        <th width="134">交期</th>
        <th width="308">价格梯度</th>
        <th width="152">操作</th>
      </tr>
      </thead>
      <tbody v-for="product in productList" :key="product.code" @click="goDetail(product)">
      <tr class="en-info">
        <td colspan="5">
          <b :title="product.enterprise.enName" style="font-weight: normal">{{product.enterprise.enName || '-'}}</b>
        </td>
      </tr>
      <tr class="product">
        <td>
          <template :title="product.brand">品牌：{{product.brand || '-'}}<br/></template>
          <template :title="product.model">型号：{{product.model || '-'}}<br/></template>
          <template :title="product.spec">规格：{{product.spec || '-'}}<br/> </template>
        </td>
        <td>
          <template :title="product.packing">包装方式：{{product.packing || '-'}}<br/></template>
          <template :title="product.mpq">最小包装数：{{product.mpq || '-'}}<br/></template>
          <template :title="product.moq">起订：{{product.moq || '-'}}<br/></template>
          <template :title="product.reserve">库存：{{product.reserve || '-'}}<br/></template>
          <template :title="product.detachable ? '可拆买' : ''" v-if="product.detachable">可拆买<br/></template>
        </td>
        <td>
          <template :title="`${product.minDelivery}-${product.maxDelivery}天`">{{product.minDelivery}}-{{product.maxDelivery}}天</template>
        </td>
        <td>
          <div class="com-price-level">
            <div class="line">
              <span>价格梯度(PCS)</span>
              <span>价格(¥)</span>
            </div>
            <div class="line" v-for="(item, index) in product.ladderOffer" :key="index">
              <span>{{item.start}}+</span>
              <span>{{item.price}}</span>
            </div>
          </div>
        </td>
        <td class="text-center">
          <div class="list-btn btn-buy">立即购买</div>
          <div class="list-btn btn-cart">加入购物车</div>
        </td>
      </tr>
      </tbody>
    </table>
    <u-pager
      v-model="pager.page"
      :totalCount="pager.count"
      :pageSize="pager.size"
      @input="loadData"
      @sizeChangeAction="resizeData"
    ></u-pager>
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
    productList: []
  }),
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.apis.product.getProductsPage({ pageSize: this.pager.size, pageNumber: this.pager.page })
        .then(res => {
          this.requestDeal(res, data => {
            this.productList = data.product
            this.pager.count = data.pagingInfo.totalCount
          })
        })
    },
    resizeData (size) {
      this.pager.size = size
    },
    isCollect (item) {
      if (this.user.logged) {
        if (item.collectStatus === '未收藏') {
          this.apis.product.collect({ code: item.code }).then(res => {
            this.requestDeal(res, () => {
              this.$message.success('收藏成功')
              this.loadData()
            })
          })
        } else if (item.collectStatus === '已收藏') {
          this.apis.product.revokeCollectByProduct({ productCode: item.code }).then(res => {
            this.requestDeal(res, () => {
              this.$message.success('取消收藏')
              this.loadData()
            })
          })
        }
      } else {

      }
    },
    goDetail (item) {
      this.$router.push(`/product/${item.code}`)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/css/order";
 .product-list {
   padding-bottom: 40px;
   margin: 0 auto;
   width: 1190px;
   text-align: center;
   .product-table{
     thead{
       tr{
         th{
           border-right: none;
         }
       }
     }
     tbody{
       border-bottom: 8px solid #f5f5f5;
       &:last-child {
         border-bottom: none;
       }
       &:hover{
         tr{
           background: rgba(0,174,255,0.04);
         }
       }
     }
   }
 }
</style>
