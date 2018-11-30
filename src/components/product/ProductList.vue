<template>
  <div>
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
        <tr>
          <td class="com-name">
            <p>深圳市博瑞泰电子有限公司</p>
            <div><span>张先生</span><span>19320625035</span></div>
          </td>
          <td>Harvatek</td>
          <td>Harvatek</td>
          <td>Harvatek</td>
          <td class="handle"><div class="active"><i class="iconfont icon-shoucang"></i>已收藏</div></td>
        </tr>
        </tbody>
      </table>
      <u-pager
        v-model="pager.page"
        :totalCount="pager.count"
        :pageSize="pager.size"
      ></u-pager>
    </div>
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
