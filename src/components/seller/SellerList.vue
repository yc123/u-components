<template>
  <div class="seller-list-warp">
    <div class="seller-list" v-for="seller in sellerList" :key="seller.enuu">
      <div class="seller-content">
        <div class="seller-name" :title="seller.enName">{{seller.enName || '-'}}</div>
        <div class="seller-adr" :title="seller.address">{{seller.address || '-'}}</div>
        <div class="seller-style"><span :title="seller.scope">营业范围：<em>{{seller.scope || '-'}}</em></span></div>
        <div class="seller-style">
          <span>联系人：<em>{{seller.contactName || '-'}}</em></span>
          <span>手机：<em>{{seller.contactPhone || '-'}}</em></span>
          <span>固话：<em>{{seller.tel || '-'}}</em></span>
          <span>邮箱：<em>{{seller.contactEMail || '-'}}</em></span>
        </div>
      </div>
      <div class="seller-more">
        <router-link :to="`/seller/${seller.enuu}`">更多产品</router-link>
      </div>
    </div>
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
    sellerList: []
  }),
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.apis.seller.getEnterprisesPage({ pageSize: this.pager.size, pageNumber: this.pager.page })
        .then(res => {
          this.requestDeal(res, data => {
            this.sellerList = data.enterprises
            this.pager.count = data.pagingInfo.totalCount
          })
        })
    },
    resizeData (size) {
      this.pager.size = size
      this.loadData()
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
     overflow: hidden;
     padding: 16px;
     border-bottom: 1px solid rgba(0,0,0,0.09);
     background: #FFFFFF;
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
       }
     }
     .seller-more {
       margin-top: 38px;
       float: right;
       a{
         display: inline-block;
         width: 88px;
         height: 24px;
         font-size: 14px;
         color: #FFFFFF;
         text-align: center;
         line-height: 24px;
         background: #666666;
         border-radius: 4px;
       }
     }
   }
 }
</style>
