<template>
  <div class="seller-list-warp">
    <div class="seller-list clearfix">
      <div class="seller-content">
        <div class="seller-name" :title="sellerDetail.enName">{{sellerDetail.enName || '-'}}</div>
        <div class="seller-style seller-rang"><span :title="sellerDetail.scope">营业范围：<em>{{sellerDetail.scope || '-'}}</em></span></div>
        <div class="seller-style">
          <span :title="sellerDetail.contactName">联系人：<em>{{sellerDetail.contactName || '-'}}</em></span>
          <span :title="sellerDetail.contactPhone">手机：<em>{{sellerDetail.contactPhone || '-'}}</em></span>
          <span :title="sellerDetail.tel">固话：<em>{{sellerDetail.tel || '-'}}</em></span>
          <span :title="sellerDetail.contactEMail">邮箱：<em>{{sellerDetail.contactEMail || '-'}}</em></span>
        </div>
      </div>
    </div>
    <table class="base-table order-table">
      <thead>
      <tr>
        <th width="296px">产品信息</th>
        <th width="296px">销售信息</th>
        <th width="134px">交期</th>
        <th width="308px">价格梯度</th>
        <th width="152px">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr class="product" v-for="product in productList" :key="product.code" @click="goDetail(product)">
        <td>
         <template :title="product.brand">品牌：{{product.brand || '-'}}<br/></template>
          <template :title="product.model">型号：{{product.model || '-'}}<br/></template>
          <template :title="product.spec">规格：{{product.spec || '-'}}<br/> </template>
        </td>
        <td>
          <template :title="product.brand">包装方式：{{product.brand || '-'}}<br/></template>
          <template :title="product.model">最小包装数：{{product.model || '-'}}<br/></template>
          <template :title="product.spec">起订：{{product.spec || '-'}}<br/></template>
          <template :title="product.spec">库存：{{product.spec || '-'}}<br/></template>
          <template :title="product.spec">可拆买<br/></template>
        </td>
        <td>
          <template :title="product.brand">2-18天</template>
        </td>
        <td>
          <div class="com-price-level">
            <div class="line">
              <span>价格梯度(PCS)</span>
              <span>价格(¥)</span>
            </div>
            <div class="line">
              <span>1+</span>
              <span>9999.999999</span>
            </div>
            <div class="line">
              <span>1+</span>
              <span>9999.999999</span>
            </div>
            <div class="line">
              <span>1+</span>
              <span>9999.999999</span>
            </div>
            <div class="line">
              <span>1+</span>
              <span>9999.999999</span>
            </div>
            <div class="line">
              <span>1+</span>
              <span>9999.999999</span>
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
      page: 1,
      count: 0,
      size: 10
    },
    sellerDetail: [],
    productList: []
  }),
  created () {
    this.loadData()
    this.apis.seller.getEnterprise({ enuu: this.$route.params.enuu })
      .then(res => {
        this.requestDeal(res, data => {
          this.sellerDetail = data.enterprise
        })
      })
  },
  methods: {
    loadData () {
      this.apis.product.getProductsPageByEnterprise({ enuu: this.$route.params.enuu, pageSize: this.pager.size, pageNumber: this.pager.page })
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
    },
    goDetail (item) {
      this.$router.push(`/product/${item.code}`)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/css/order";
 .seller-list-warp {
   padding-bottom: 40px;
   margin: 0 auto;
   width: 1190px;
   text-align: center;
   .seller-list{
     background: #FFFFFF;
     padding: 16px;
     margin-bottom: 16px;
     .seller-content {
       float: left;
       text-align: left;
       line-height: 22px;
       .seller-name {
         font-size: 14px;
         color: #333333;
       }
       .seller-adr{
         margin-bottom: 8px;
         font-size: 14px;
         color: #666666;
       }
       .seller-style {
         font-size: 14px;
         color: #333333;
         span{
           color: #666666;
           em{
             color: #333;
             font-weight: normal;
           }
           &:nth-child(2),&:nth-child(3),&:nth-child(4) {
             margin-left: 16px;
           }
         }
         &.seller-rang {
           margin: 16px auto 8px;
         }
       }
     }
   }
   .order-table{
     thead{
       tr{
         border-bottom: 1px solid rgba(0,0,0,0.09);
       }
     }
   }
 }
</style>
