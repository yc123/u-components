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
    <table>
      <thead>
      <tr>
        <td width="374">品牌</td>
        <td width="350">型号</td>
        <td width="350">规格</td>
        <td width="116">操作</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in productList" :key="product.code" @click="goDetail(product)">
        <td :title="product.brand">{{product.brand}}</td>
        <td :title="product.model">{{product.model}}</td>
        <td :title="product.spec">{{product.spec}}</td>
        <td><div class="collect" :class="{active: product.collectStatus=== '已收藏'}" @click.prevent.stop="isCollect(product)"><i class="iconfont icon-shoucang"></i>{{product.collectStatus}}</div></td>
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
 .seller-list-warp {
   padding-bottom: 40px;
   margin: 0 auto;
   width: 1190px;
   text-align: center;
   .seller-list{
     background: #FFFFFF;
     padding: 16px;
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
   table{
     margin-top: 16px;
     table-layout: fixed;
     background: #FFFFFF;
     thead{
       width: 100%;
       height: 40px;
       background: rgba(0,0,0,0.02);
       tr{
         height: 40px;
         border-bottom: 1px solid rgba(0,0,0,0.09);
       }
     }
     tbody{
       tr{
         height: 58px;
         border-bottom: 1px solid rgba(0,0,0,0.09);
         td{
           div{
             i{
               padding-right: 4px;
               font-size: 16px;
               color: #999;
             }
             &.active{
               i{
                 color: #F5BA09;
               }
             }
             &.collect{
               cursor: pointer;
             }
           }
         }
         &:hover {
           background: #E6F7FF;
         }
       }
     }
     tr{
       font-size: 14px;
       color: #333333;
       vertical-align: middle;
       td{
         text-align: left;
         padding: 0 8px;
         &:first-child {
           padding: 0 8px 0 24px;
         }
       }
     }
   }
 }
</style>
