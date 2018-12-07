<template>
  <div class="user-order-detail">
    <div class="order-content-warp">
      <div class="order-detail-nav">订单信息</div>
      <table class="base-table order-table order-detail">
        <thead>
        <tr>
          <th width="184">产品信息</th>
          <th width="188">销售信息</th>
          <th width="73">交期</th>
          <th width="118">单价</th>
          <th width="92">采购数量</th>
          <th width="118">小计</th>
          <th width="185">备注</th>
        </tr>
        </thead>
        <tbody>
        <tr class="en-info">
          <td colspan="7">
            <span class="order-number">订单号：<a href="">12131241241411</a></span>
            <div class="fr">
              <span>卖家：哈哈哈哈哈哈哈哈</span>
              <i class="iconfont icon-shouji"></i> 1133333339
              <i class="iconfont icon-dianhua"></i> 0755-8888999999
              <span>订单状态：待支付</span>
            </div>
          </td>
        </tr>
        <tr class="product">
          <td>
            <template>品牌：adasda<br/></template>
            <template>型号：adasda<br/></template>
            <template>规格：adasda<br/> </template>
          </td>
          <td>
            <template>包装方式：adasda<br/></template>
            <template>最小包装数：adasda<br/></template>
            <template>起订：adasda<br/></template>
            <template>库存：adasda<br/></template>
            <template>可拆买<br/></template>
          </td>
          <td>
            <template>2-19天<br/></template>
          </td>
          <td>
            <template>￥单价<br/></template>
          </td>
          <td>
            <template>224242<br/></template>
          </td>
          <td>
            <template>￥9999.999999<br/></template>
          </td>
          <td class="text-center"><template>备注<br/></template></td>
        </tr>
        <tr class="product">
          <td>
            <template>品牌：adasda<br/></template>
            <template>型号：adasda<br/></template>
            <template>规格：adasda<br/> </template>
          </td>
          <td>
            <template>包装方式：adasda<br/></template>
            <template>最小包装数：adasda<br/></template>
            <template>起订：adasda<br/></template>
            <template>库存：adasda<br/></template>
            <template>可拆买<br/></template>
          </td>
          <td>
            <template>2-19天<br/></template>
          </td>
          <td>
            <template>￥单价<br/></template>
          </td>
          <td>
            <template>224242<br/></template>
          </td>
          <td>
            <template>￥9999.999999<br/></template>
          </td>
          <td class="text-center"><template>备注<br/></template></td>
        </tr>
        <tr class="product">
          <td>
            <template>品牌：adasda<br/></template>
            <template>型号：adasda<br/></template>
            <template>规格：adasda<br/> </template>
          </td>
          <td>
            <template>包装方式：adasda<br/></template>
            <template>最小包装数：adasda<br/></template>
            <template>起订：adasda<br/></template>
            <template>库存：adasda<br/></template>
            <template>可拆买<br/></template>
          </td>
          <td>
            <template>2-19天<br/></template>
          </td>
          <td>
            <template>￥单价<br/></template>
          </td>
          <td>
            <template>224242<br/></template>
          </td>
          <td>
            <template>￥9999.999999<br/></template>
          </td>
          <td class="text-center"><template>备注<br/></template></td>
        </tr>
        </tbody>
      </table>
      <div class="order-remark clearfix">
        <div class="remark fl clearfix">
          <span class="fl">订单备注：</span>
          <div class="fl">订单备注订单备注订单备注订单备注订单备注订单备注订单备注订单备注订单备注订单备注单备注订单备注订单备注订单备注订单备注订单备注订单备注订单备注订单备注订单备注订单备注订单备注单备注订单备注</div>
        </div>
        <div class="count fr">
          <div>总计：￥9999，999999</div>
          <a href="">去支付</a>
        </div>
      </div>
      <div class="order-info">
        <div class="order-info-list clearfix"><span class="fl">收货人：</span><div class="fl">哈哈哈哈哈</div></div>
        <div class="order-info-list clearfix"><span class="fl">收货地址：</span><div class="fl">哈哈哈哈哈</div></div>
        <div class="order-info-list clearfix"><span class="fl">联系方式：</span><div class="fl">哈哈哈哈哈</div></div>
      </div>
      <!--发票信息 暂时隐藏-->
      <div style="display: none;">
        <div class="order-detail-nav invoice">发票信息</div>
        <div class="order-info invoice-info">
          <div class="order-info-list clearfix"><span class="fl">发票类型：</span><div class="fl">哈哈哈哈哈</div></div>
          <div class="order-info-list clearfix"><span class="fl">公司名称：</span><div class="fl">哈哈哈哈哈</div></div>
          <div class="order-info-list clearfix"><span class="fl">纳税人识别号：</span><div class="fl">哈哈哈哈哈</div></div>
          <div class="order-info-list clearfix"><span class="fl">开户银行：</span><div class="fl">哈哈哈哈哈</div></div>
          <div class="order-info-list clearfix"><span class="fl">开户银行账号：</span><div class="fl">哈哈哈哈哈</div></div>
          <div class="order-info-list clearfix"><span class="fl">注册固定电话：</span><div class="fl">哈哈哈哈哈</div></div>
          <div class="order-info-list clearfix"><span class="fl">企业注册地址：</span><div class="fl">哈哈哈哈哈</div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({})
}
</script>
<style lang="scss" scoped>
  @import "../../assets/css/order";
  .user-order-detail {
    width: 996px;
    padding: 16px;
    background: #fff;
    .order-content-warp {
      margin: 0 auto;
      width: 964px;
      text-align: center;
      .order-detail-nav {
        text-align: left;
        font-size: 16px;
        color: rgba(0,0,0,0.65);
        line-height: 24px;
        &.invoice{
          margin-top: 24px;
          height: 64px;
          line-height: 64px;
          border-top: 1px solid rgba(0,0,0,0.09);
        }
      }
      .order-detail{
        margin-top: 16px;
        thead{
          tr{
            background: rgba(0,0,0,0.02);
            border: 1px solid rgba(0,0,0,0.09);
          }
        }
        tbody{
          tr{
            border: 1px solid rgba(0,0,0,0.09);
            &.en-info {
              .fr{
                span{
                  margin-left: 24px;
                }
              }
            }
            &.product{
              td{
                padding: 16px 8px;
              }
            }
          }
        }
      }
      .order-remark{
        margin: 8px auto 16px;
        .remark{
          padding-left: 16px;
          width: 731px;
          text-align: left;
          span{
            display: inline-block;
            width: 70px;
            font-size: 14px;
            color: rgba(0,0,0,0.45);
            line-height: 22px;
          }
          div{
            width: 645px;
            font-size: 14px;
            color: rgba(0,0,0,0.65);
            line-height: 22px;
          }
        }
        .count{
          text-align: right;
          div{
            margin-bottom: 8px;
            font-size: 16px;
            color: #F5222D;
            text-align: right;
            line-height: 24px;
          }
          a{
            display: inline-block;
            width: 72px;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            color: #FFFFFF;
            text-align: center;
            background: #999999;
            border-radius: 4px;
          }
        }
      }
      .order-info{
        padding: 16px;
        width: 100%;
        background: rgba(0,0,0,0.02);
        .order-info-list{
          line-height: 30px;
          text-align: left;
          span{
            width: 70px;
            display: inline-block;
            font-size: 14px;
            color: rgba(0,0,0,0.45);
          }
          div{
            font-size: 14px;
            color: rgba(0,0,0,0.65);
          }
        }
        &.invoice-info{
          span{
            width: 98px;
          }
        }
      }
    }
  }
</style>
