<template>
  <div class="user-pay">
    <div class="container">
      <p class="title">填写并核对订单信息</p>
      <div class="bg-white content">
        <div class="block">
          <p class="block-title">收货信息</p>
        </div>
        <div class="block">
          <p class="block-title">发票信息</p>
        </div>
        <div class="block">
          <p class="block-title">发票寄送地址</p>
        </div>
        <div class="block">
          <p class="block-title">订单信息</p>
          <table class="base-table bg-white order-table pay-table">
            <thead>
            <tr>
              <th width="240">产品信息</th>
              <th width="200">销售信息</th>
              <th width="89">交期</th>
              <th width="134">单价</th>
              <th width="108">采购数量</th>
              <th width="134">小计</th>
              <th width="253">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr class="en-info">
              <td colspan="8">
                <b>深圳市休息下有限公司</b>
                <i class="iconfont icon-shouji"></i> 1133333339
                <i class="iconfont icon-dianhua"></i> 0755-8888999999
                <div class="fr total">
                  合计：¥9999999
                </div>
              </td>
            </tr>
            <tr class="product">
              <td>
                品牌：sda<br/>
                型号：sda123123123<br/>
              </td>
              <td>
                起订：sda123123123<br/>
              </td>
              <td>28-31天</td>
              <td>
                ¥9999999
              </td>
              <td class="text-center">
                9999999<br/>
                PCS
              </td>
              <td>¥9999999</td>
              <td class="text-center">
                <u-textarea class="remark" placeholder="请输入备注"></u-textarea>
              </td>
            </tr>
            <tr class="product">
              <td>
                品牌：sda<br/>
                型号：sda123123123<br/>
              </td>
              <td>
                起订：sda123123123<br/>
              </td>
              <td>28-31天</td>
              <td>
                ¥9999999
              </td>
              <td class="text-center">
                9999999<br/>
                PCS
              </td>
              <td>¥9999999</td>
              <td class="text-center">
                <u-textarea class="remark" placeholder="请输入备注"></u-textarea>
              </td>
            </tr>
            <tr class="order-remark">
              <td colspan="7">
                <span class="or-title">订单备注：</span>
                <u-textarea class="order-remark-input" placeholder="请输入"></u-textarea>
              </td>
            </tr>
            </tbody>
            <tbody>
            <tr class="en-info">
              <td colspan="8">
                <b>深圳市休息下有限公司</b>
                <i class="iconfont icon-shouji"></i> 1133333339
                <i class="iconfont icon-dianhua"></i> 0755-8888999999
                <div class="fr total">
                  合计：¥9999999
                </div>
              </td>
            </tr>
            <tr class="product">
              <td>
                品牌：sda<br/>
                型号：sda123123123<br/>
              </td>
              <td>
                起订：sda123123123<br/>
              </td>
              <td>28-31天</td>
              <td>
                ¥9999999
              </td>
              <td class="text-center">
                9999999<br/>
                PCS
              </td>
              <td>¥9999999</td>
              <td class="text-center">
                <u-textarea class="remark" placeholder="请输入备注"></u-textarea>
              </td>
            </tr>
            <tr class="product">
              <td>
                品牌：sda<br/>
                型号：sda123123123<br/>
              </td>
              <td>
                起订：sda123123123<br/>
              </td>
              <td>28-31天</td>
              <td>
                ¥9999999
              </td>
              <td class="text-center">
                9999999<br/>
                PCS
              </td>
              <td>¥9999999</td>
              <td class="text-center">
                <u-textarea class="remark" placeholder="请输入备注"></u-textarea>
              </td>
            </tr>
            <tr class="order-remark">
              <td colspan="7">
                <span class="or-title">订单备注：</span>
                <u-textarea class="order-remark-input" placeholder="请输入"></u-textarea>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="submit-area">
        <a class="back-to-cart"><i class="iconfont icon-arrowleftdl"></i>返回购物车</a>
        <div class="fr">
          <p>总额：<span class="total">$999999</span></p>
          <p>未选择收货地址</p>
          <button class="u-btn u-btn-submit">提交订单</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    checkAll: false
  })
}
</script>
<style lang="scss" scoped>
  @import '../../assets/css/order';
  .user-pay {
    background: #f5f5f5;
    padding: 24px 0;
    .title {
      font-weight: bold;
      font-size: 20px;
      margin: 0 0 8px;
    }
    .content {
      padding: 16px;
      .block {
        border-bottom: 1px solid rgba(0,0,0,0.09);
        margin-bottom: 24px;
        &:last-child {
          margin-bottom: 0;
          border-bottom: none;
        }
        .block-title {
          font-size: 14px;
          font-weight: bold;
        }
        .pay-table {
          margin-top: 8px;
          .total {
            font-weight: bold;
          }
          .product {
            height: 72px;
            td {
              border: 1px solid rgba(0, 0, 0, 0.04);
            }
            .remark {
              width: 237px;
              height: 66px;
            }
          }
          .order-remark {
            border-bottom: none;
            td {
              padding: 16px 0 24px;
            }
            .or-title {
              vertical-align: top;
            }
            .order-remark-input {
              width: 1077px;
              height: 64px;
              display: inline-block;
            }
          }
        }
      }
    }
    .submit-area {
      height: 136px;
      line-height: 26px;
      background: rgba(0,0,0,0.04);
      padding: 16px 8px 16px 16px;
      .back-to-cart {
        line-height: 104px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        i {
          vertical-align: middle;
          font-size: 14px;
        }
      }
      .total {
        color: #F5222D;
        font-size: 18px;
      }
      p {
        margin-bottom: 8px;
      }
    }
  }
</style>
