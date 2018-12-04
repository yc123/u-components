<template>
  <div class="product-list">
    <table>
      <thead>
      <tr>
        <td width="324">卖家</td>
        <td width="213">品牌</td>
        <td width="240">型号</td>
        <td width="320">规格</td>
        <td width="93">操作</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in productList" :key="product.code" @click="goDetail(product)">
        <td class="com-name">
          <p :title="product.enterprise.enName">{{product.enterprise.enName || '-'}}</p>
          <div>
            <span :title="product.enterprise.enName">{{product.enterprise.contactName || '-'}}</span>
            <span :title="product.enterprise.contactPhone">{{product.enterprise.contactPhone || '-'}}</span>
          </div>
        </td>
        <td :title="product.brand">{{product.brand || '-'}}</td>
        <td :title="product.model">{{product.model || '-'}}</td>
        <td :title="product.spec">{{product.spec || '-'}}</td>
        <td class="handle">
          <div :class="{active: product.collectStatus=== '已收藏'}"
               @click.prevent.stop="isCollect(product)"><span><i class="iconfont icon-shoucang"></i>{{product.collectStatus}}</span></div></td>
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
      this.loadData()
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
 .product-list {
   padding-bottom: 40px;
   margin: 0 auto;
   width: 1190px;
   text-align: center;
   table{
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
         td.com-name{
           p{
             font-size: 14px;
             color: #333333;
             line-height: 22px;
           }
           div{
             span{
               font-size: 14px;
               color: #333333;
               line-height: 22px;
               &:first-child {
                 margin-right: 8px;
               }
             }
           }
         }
         td.handle{
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
             span{
               cursor: pointer ;
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
