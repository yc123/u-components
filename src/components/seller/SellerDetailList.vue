<template>
  <div class="seller-detail-list">
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
      <tr>
        <td>Harvatek</td>
        <td>Harvatek</td>
        <td>Harvatek</td>
        <td><div class="active"><i class="iconfont icon-shoucang"></i>已收藏</div></td>
      </tr>
      <tr>
        <td>Harvatek</td>
        <td>Harvatek</td>
        <td>Harvatek</td>
        <td><div><i class="iconfont icon-shoucang"></i>收藏</div></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss" scoped>
 .seller-detail-list {
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
           }
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
<script>
  export default {
    components: {}
  }
</script>
