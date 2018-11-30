<template>
  <div class="seller-list-warp">
    <div class="seller-list">
      <div class="seller-content">
        <div class="seller-name">深圳市博瑞泰电子有限公司</div>
        <div class="seller-adr">深圳南山区科技5路</div>
        <div class="seller-style"><span>营业范围：<em>医疗电子，消费电子，通信网络，汽车电子，家电，仪表仪器，电源电子，红绿灯。</em></span></div>
        <div class="seller-style">
          <span>联系方式：<em>张先生</em></span>
          <span>手机：<em>1923232343</em></span>
          <span>邮箱：<em>mixie_xm@kitchenPro.com</em></span>
        </div>
      </div>
      <div class="seller-more">
        <router-link to="/seller/detail">更多产品</router-link>
      </div>
    </div>
    <u-pager
      v-model="pager.page"
      :totalCount="pager.count"
      :pageSize="pager.size"
    ></u-pager>
  </div>
</template>
<script>
export default {
  data: () => ({
    pager: {
      size: 10,
      count: 10,
      page: 1
    }
  })
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
           &:nth-child(2),&:nth-child(3) {
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
