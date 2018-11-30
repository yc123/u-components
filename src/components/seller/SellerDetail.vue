<template>
  <div class="seller-list-warp">
    <div class="seller-list">
      <div class="seller-content">
        <div class="seller-name">深圳市博瑞泰电子有限公司</div>
        <div class="seller-style seller-rang"><span>营业范围：<em>医疗电子，消费电子，通信网络，汽车电子，家电，仪表仪器，电源电子，红绿灯。</em></span></div>
        <div class="seller-style">
          <span>联系方式：<em>张先生</em></span>
          <span>手机：<em>1923232343</em></span>
          <span>固话：<em>0755-07884344</em></span>
          <span>邮箱：<em>mixie_xm@kitchenPro.com</em></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 .seller-list-warp {
   margin: 0 auto 16px;
   width: 1190px;
   text-align: center;
   background: #FFFFFF;
   .seller-list{
     overflow: hidden;
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
           &:nth-child(2),&:nth-child(3) {
             margin-left: 16px;
           }
         }
         &.seller-rang {
           margin: 16px auto 8px;
         }
       }
     }
   }
 }
</style>
<script>
  export default {
    components: {}
  }
</script>
