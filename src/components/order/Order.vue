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
      <tr class="en-info">
        <td colspan="7">
          <span class="order-number">订单号：<a href="">12131241241411</a></span>
          <div class="fr">
            <span>哈哈哈哈哈哈哈哈</span>
            <i class="iconfont icon-shouji"></i> 1133333339
            <i class="iconfont icon-dianhua"></i> 0755-8888999999
          </div>
        </td>
      </tr>
      <tr class="en-info">
        <td colspan="7">
          <span class="order-number">订单号：<a href="">12131241241411</a></span>
          <div class="fr">
            <span>哈哈哈哈哈哈哈哈</span>
            <i class="iconfont icon-shouji"></i> 1133333339
            <i class="iconfont icon-dianhua"></i> 0755-8888999999
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data: () => ({})
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
