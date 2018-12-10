<template>
  <div class="user-pay">
    <div class="container">
      <p class="title">填写并核对订单信息</p>
      <div class="bg-white content">
        <div class="block">
          <p class="block-title">收货信息
            <a class="fr base-color" @click="setShowShipping(true)">新增收货信息</a>
          </p>
          <div class="block-content">
            <ul class="item-list" v-if="deliveryAddr.length">
              <li class="hover" v-for="addr in deliveryAddr" :key="addr.code">
                <button class="item-btn">{{ addr.buyerName }} <i class="iconfont icon-checktriangle"></i></button>
                {{ addr.province }}
                {{ addr.city }}
                {{ addr.district }}
                {{ addr.addr }}
                收货人：
                {{ addr.buyerName }}
                {{ addr.phone }}
                <span class="default-addr" v-if="addr.defaultOption">默认地址</span>
                <div class="fr operate">
                  <a v-if="!addr.defaultOption" @click="setDefaultDeliveryAddr(addr)">设为默认地址</a>
                  <a @click="setShowShipping(true, addr)">编辑</a>
                  <a @click="deleteShipping(addr)">删除</a>
                </div>
              </li>
            </ul>
            <div class="empty" v-else>
              暂无收货信息，<a class="base-color" @click="setShowShipping(true)">新增收货信息</a>
            </div>
          </div>
        </div>
        <!--<div class="block">
          <p class="block-title">发票信息
            <a class="fr base-color" @click="showInvoiceModal = true">新增发票信息</a>
          </p>
          <div class="block-content">
            &lt;!&ndash;<div class="empty">
              暂无收货信息，<a class="base-color">新增收货信息</a>
            </div>&ndash;&gt;
            <ul class="item-list">
              <li>
                <button class="item-btn">需要发票<i class="iconfont icon-checktriangle"></i></button>
                <button class="item-btn">暂不开票<i class="iconfont icon-checktriangle"></i></button>
              </li>
              <li>发票列表：</li>
              <li class="hover">
                <button class="item-btn">射手座撒大大傻傻的 <i class="iconfont icon-checktriangle"></i></button>
                增值税专用发票
                <div class="fr operate">
                  <a>设为默认</a>
                  <a>编辑</a>
                  <a>删除</a>
                </div>
              </li>
              <li class="hover">
                <button class="item-btn">张三 <i class="iconfont icon-checktriangle"></i></button>
                增值税普通发票
                <div class="fr operate">
                  <a>设为默认</a>
                  <a>编辑</a>
                  <a>删除</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="block">
          <p class="block-title">发票寄送地址
            <a class="fr base-color" @click="showInvoiceAddrModal = true">新增收货信息</a>
          </p>
          <div class="block-content">
            &lt;!&ndash;<div class="empty">
              暂无收货信息，<a class="base-color">新增收货信息</a>
            </div>&ndash;&gt;
            <ul class="item-list">
              <li class="hover">
                <button class="item-btn">张三 <i class="iconfont icon-checktriangle"></i></button>
                广东 深圳市 南山区 科技南五路英唐大厦一楼
                收货人：张三 12312312312
                <span class="default-addr">默认地址</span>
                <div class="fr operate">
                  <a>设为默认地址</a>
                  <a>编辑</a>
                  <a>删除</a>
                </div>
              </li>
              <li class="hover">
                <button class="item-btn">张三 <i class="iconfont icon-checktriangle"></i></button>
                广东 深圳市 南山区 科技南五路英唐大厦一楼
                收货人：张三 12312312312
                <span class="default-addr">默认地址</span>
                <div class="fr operate">
                  <a>设为默认地址</a>
                  <a>编辑</a>
                  <a>删除</a>
                </div>
              </li>
            </ul>
          </div>
        </div>-->
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
    <u-dialog title="新增收货地址" fixId="shippingAddressFixId" v-model="showShippingModal" :width="720">
      <shipping-address
        slot="content"
        fixId="shippingAddressFixId"
        :addr="updatingDeliveryAddr"
        ref="shippingAddress"></shipping-address>
      <template slot="footer">
        <button class="u-btn u-btn-cancel" @click="showShippingModal = false">取消</button>
        <button class="u-btn u-btn-submit" @click="submitShippingAddressEdit">确定</button>
      </template>
    </u-dialog>
    <!--<u-dialog title="新增开票信息" v-model="showInvoiceModal" :width="584">
      <invoice-info slot="content"></invoice-info>
      <template slot="footer">
        <button class="u-btn u-btn-cancel" @click="showInvoiceModal = false">取消</button>
        <button class="u-btn u-btn-submit">确定</button>
      </template>
    </u-dialog>
    <u-dialog title="新增收票信息" fixId="invoiceAddrFixId" v-model="showInvoiceAddrModal " :width="720">
      <invoice-address slot="content" fixId="invoiceAddrFixId"></invoice-address>
      <template slot="footer">
        <button class="u-btn u-btn-cancel" @click="showInvoiceAddrModal = false">取消</button>
        <button class="u-btn u-btn-submit">确定</button>
      </template>
    </u-dialog>-->
  </div>
</template>
<script>
import ShippingAddress from '@/components/pay/ShippingAddress'
// import InvoiceInfo from '@/components/pay/InvoiceInfo'
// import InvoiceAddress from '@/components/pay/InvoiceAddress'
export default {
  data: () => ({
    checkAll: false,
    deliveryAddr: [],
    updatingDeliveryAddr: null,
    // 收货地址模态框
    showShippingModal: false
    // // 开票信息模态框
    // showInvoiceModal: false,
    // // 收票地址模态框
    // showInvoiceAddrModal: false
  }),
  components: {
    ShippingAddress
    // InvoiceInfo,
    // InvoiceAddress
  },
  created () {
    this.getDeliveryAddrList()
  },
  methods: {
    // 获取收货地址列表
    getDeliveryAddrList () {
      this.apis.trade.getDeliveryAddrList().then(res => {
        this.requestDeal(res, data => {
          this.deliveryAddr = data.deliveryAddr
        })
      })
    },
    // 设置收货地址的展示
    setShowShipping (flag, obj) {
      this.showShippingModal = flag
      if (obj) {
        this.updatingDeliveryAddr = obj
      }
    },
    // 删除收货地址
    deleteShipping (addr) {
      this.$confirm('确定要删除此收货地址吗？').then(() => {
        this.apis.trade.delDeliveryAddr({ code: addr.code }).then(res => {
          this.requestDeal(res, () => {
            this.$message.success('删除成功')
            this.getDeliveryAddrList()
          })
        }, err => {
          this.errDeal(err, '删除失败')
        })
      }, () => {})
    },
    // 校验收货地址
    checkShippingAddress (obj) {
      for (let key in obj) {
        if (key !== 'defaultOption' && !obj[key]) {
          this.$message.info('请填写完整信息')
          return false
        }
      }
      return true
    },
    // 编辑/新增收货地址
    submitShippingAddressEdit () {
      let addr = this.$refs.shippingAddress.addrObj
      if (this.checkShippingAddress(this.$refs.shippingAddress.addrObj)) {
        this.apis.trade[addr.code ? 'modifyDeliveryAddr' : 'addDeliveryAddr']({ deliveryAddr: this.$refs.shippingAddress.addrObj })
          .then(res => {
            this.requestDeal(res, () => {
              this.$message.success(`${addr.code ? '修改' : '新增'}地址成功`)
              this.setShowShipping(false)
              this.getDeliveryAddrList()
            })
          }, err => {
            this.errDeal(err, `${addr.code ? '修改' : '新增'}地址失败`)
          })
      }
    },
    // 设置默认收货地址
    setDefaultDeliveryAddr (addr) {
      this.apis.trade.defaultDeliveryAddr({ code: addr.code })
        .then(res => {
          this.requestDeal(res, () => {
            this.$message.success('设置默认地址成功')
            this.getDeliveryAddrList()
          })
        }, err => {
          this.errDeal(err, '设置默认地址失败')
        })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../assets/css/order';
  @import '../../assets/css/variable';
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
        padding: 16px 0 32px;
        &:last-child {
          margin-bottom: 0;
          border-bottom: none;
        }
        .block-title {
          font-weight: bold;
          a {
            font-weight: normal;
          }
        }
        .block-content {
          padding: 0 0 0 16px;
          .empty {
            text-align: center;
            padding: 16px 0;
          }
          .item-btn {
            min-width: 152px;
            padding: 0 16px;
            height: 32px;
            border: 1px solid rgba(0,0,0,0.65);
            border-radius: 4px;
            position: relative;
            background: #fff;
            overflow: hidden;
            margin-right: 16px;
            i {
              position: absolute;
              right: -1px;
              bottom: -1px;
            }
          }
          .item-list {
            li {
              margin-top: 16px;
              line-height: 32px;
              height: 32px;
              &.hover:hover {
                background: rgba(0,0,0,0.04);
              }
              .default-addr {
                margin-left: 16px;
                display: inline-block;
                vertical-align: middle;
                padding: 4px 2px;
                line-height: normal;
                text-align: center;
                background: #D8D8D8;
                border-radius: 2px;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
              }
              .operate {
                padding-right: 24px;
                a {
                  margin-left: 16px;
                }
              }
            }
          }
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
