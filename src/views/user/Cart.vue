<template>
  <div class="cart">
    <table class="base-table cart-table bg-white order-table">
      <thead>
      <tr>
        <th width="48">
          <u-check-box v-model="checkAll"></u-check-box>
        </th>
        <th width="190">产品信息</th>
        <th width="204">销售信息</th>
        <th width="86">交期</th>
        <th width="134">单价</th>
        <th width="128">采购数量</th>
        <th width="134">小计</th>
        <th width="65">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr class="en-info">
        <td colspan="8">
          <u-check-box v-model="checkAll"></u-check-box>
          <b>深圳市休息下有限公司</b>
          <div class="fr">
            <i class="iconfont icon-shouji"></i> 1133333339
            <i class="iconfont icon-dianhua"></i> 0755-8888999999
          </div>
        </td>
      </tr>
      <tr class="product">
        <td class="text-center"><u-check-box v-model="checkAll"></u-check-box></td>
        <td>
          品牌：sda<br/>
          型号：sda123123123<br/>
          规格：sda123<br/>
        </td>
        <td>
          包装方式：爱空间水电费half开讲啦发送<br/>
          最小包装数：sda<br/>
          起订：sda123123123<br/>
          库存：sda123<br/>
        </td>
        <td>28-31天</td>
        <td class="step-td">
          ¥9999999<br/>
          <div class="step">
            价格梯度 <i class="iconfont icon-Eye"></i>
            <div class="com-price-level price-level">
              <div class="line">
                <span>价格梯度(PCS)</span>
                <span>价格(¥)</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
            </div>
          </div>
        </td>
        <td class="text-center">
          <u-step-adder class="step-adder"></u-step-adder><br/>
          PCS
        </td>
        <td>¥9999999</td>
        <td class="text-center"><a>删除</a></td>
      </tr>
      <tr class="product">
        <td class="text-center"><u-check-box v-model="checkAll"></u-check-box></td>
        <td>
          品牌：sda<br/>
          型号：sda123123123<br/>
          规格：sda123<br/>
        </td>
        <td>
          包装方式：爱空间水电费half开讲啦发送<br/>
          最小包装数：sda<br/>
          起订：sda123123123<br/>
          库存：sda123<br/>
        </td>
        <td>28-31天</td>
        <td class="step-td">
          ¥9999.999999<br/>
          <div class="step">
            价格梯度 <i class="iconfont icon-Eye"></i>
            <div class="com-price-level price-level">
              <div class="line">
                <span>价格梯度(PCS)</span>
                <span>价格(¥)</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
            </div>
          </div>
        </td>
        <td class="text-center">
          <u-step-adder class="step-adder"></u-step-adder><br/>
          PCS
        </td>
        <td>¥9999999</td>
        <td class="text-center"><a>删除</a></td>
      </tr>
      </tbody>
      <tbody>
      <tr class="en-info">
        <td colspan="8">
          <u-check-box v-model="checkAll"></u-check-box>
          <b>深圳市休息下有限公司</b>
          <div class="fr">
            <i class="iconfont icon-shouji"></i> 1133333339
            <i class="iconfont icon-dianhua"></i> 0755-8888999999
          </div>
        </td>
      </tr>
      <tr class="product">
        <td class="text-center"><u-check-box v-model="checkAll"></u-check-box></td>
        <td>
          品牌：sda<br/>
          型号：sda123123123<br/>
          规格：sda123<br/>
        </td>
        <td>
          包装方式：爱空间水电费half开讲啦发送<br/>
          最小包装数：sda<br/>
          起订：sda123123123<br/>
          库存：sda123<br/>
        </td>
        <td>28-31天</td>
        <td class="step-td">
          ¥9999999<br/>
          <div class="step">
            价格梯度 <i class="iconfont icon-Eye"></i>
            <div class="com-price-level price-level">
              <div class="line">
                <span>价格梯度(PCS)</span>
                <span>价格(¥)</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
            </div>
          </div>
        </td>
        <td class="text-center">
          <u-step-adder class="step-adder"></u-step-adder><br/>
          PCS
        </td>
        <td>¥9999999</td>
        <td class="text-center"><a>删除</a></td>
      </tr>
      <tr class="product">
        <td class="text-center"><u-check-box v-model="checkAll"></u-check-box></td>
        <td>
          品牌：sda<br/>
          型号：sda123123123<br/>
          规格：sda123<br/>
        </td>
        <td>
          包装方式：爱空间水电费half开讲啦发送<br/>
          最小包装数：sda<br/>
          起订：sda123123123<br/>
          库存：sda123<br/>
        </td>
        <td>28-31天</td>
        <td class="step-td">
          ¥9999.999999<br/>
          <div class="step">
            价格梯度 <i class="iconfont icon-Eye"></i>
            <div class="com-price-level price-level">
              <div class="line">
                <span>价格梯度(PCS)</span>
                <span>价格(¥)</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
            </div>
          </div>
        </td>
        <td class="text-center">
          <u-step-adder class="step-adder"></u-step-adder><br/>
          PCS
        </td>
        <td>¥9999999</td>
        <td class="text-center"><a>删除</a></td>
      </tr>
      </tbody>
      <tbody>
      <tr class="en-info">
        <td colspan="8">
          <u-check-box v-model="checkAll"></u-check-box>
          <b>深圳市休息下有限公司</b>
          <div class="fr">
            <i class="iconfont icon-shouji"></i> 1133333339
            <i class="iconfont icon-dianhua"></i> 0755-8888999999
          </div>
        </td>
      </tr>
      <tr class="product">
        <td class="text-center"><u-check-box v-model="checkAll"></u-check-box></td>
        <td>
          品牌：sda<br/>
          型号：sda123123123<br/>
          规格：sda123<br/>
        </td>
        <td>
          包装方式：爱空间水电费half开讲啦发送<br/>
          最小包装数：sda<br/>
          起订：sda123123123<br/>
          库存：sda123<br/>
        </td>
        <td>28-31天</td>
        <td class="step-td">
          ¥9999999<br/>
          <div class="step">
            价格梯度 <i class="iconfont icon-Eye"></i>
            <div class="com-price-level price-level">
              <div class="line">
                <span>价格梯度(PCS)</span>
                <span>价格(¥)</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
            </div>
          </div>
        </td>
        <td class="text-center">
          <u-step-adder class="step-adder"></u-step-adder><br/>
          PCS
        </td>
        <td>¥9999999</td>
        <td class="text-center"><a>删除</a></td>
      </tr>
      <tr class="product">
        <td class="text-center"><u-check-box v-model="checkAll"></u-check-box></td>
        <td>
          品牌：sda<br/>
          型号：sda123123123<br/>
          规格：sda123<br/>
        </td>
        <td>
          包装方式：爱空间水电费half开讲啦发送<br/>
          最小包装数：sda<br/>
          起订：sda123123123<br/>
          库存：sda123<br/>
        </td>
        <td>28-31天</td>
        <td class="step-td">
          ¥9999.999999<br/>
          <div class="step">
            价格梯度 <i class="iconfont icon-Eye"></i>
            <div class="com-price-level price-level">
              <div class="line">
                <span>价格梯度(PCS)</span>
                <span>价格(¥)</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
            </div>
          </div>
        </td>
        <td class="text-center">
          <u-step-adder class="step-adder"></u-step-adder><br/>
          PCS
        </td>
        <td>¥9999999</td>
        <td class="text-center"><a>删除</a></td>
      </tr>
      </tbody>
      <tbody>
      <tr class="en-info">
        <td colspan="8">
          <u-check-box v-model="checkAll"></u-check-box>
          <b>深圳市休息下有限公司</b>
          <div class="fr">
            <i class="iconfont icon-shouji"></i> 1133333339
            <i class="iconfont icon-dianhua"></i> 0755-8888999999
          </div>
        </td>
      </tr>
      <tr class="product">
        <td class="text-center"><u-check-box v-model="checkAll"></u-check-box></td>
        <td>
          品牌：sda<br/>
          型号：sda123123123<br/>
          规格：sda123<br/>
        </td>
        <td>
          包装方式：爱空间水电费half开讲啦发送<br/>
          最小包装数：sda<br/>
          起订：sda123123123<br/>
          库存：sda123<br/>
        </td>
        <td>28-31天</td>
        <td class="step-td">
          ¥9999999<br/>
          <div class="step">
            价格梯度 <i class="iconfont icon-Eye"></i>
            <div class="com-price-level price-level">
              <div class="line">
                <span>价格梯度(PCS)</span>
                <span>价格(¥)</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
            </div>
          </div>
        </td>
        <td class="text-center">
          <u-step-adder class="step-adder"></u-step-adder><br/>
          PCS
        </td>
        <td>¥9999999</td>
        <td class="text-center"><a>删除</a></td>
      </tr>
      <tr class="product">
        <td class="text-center"><u-check-box v-model="checkAll"></u-check-box></td>
        <td>
          品牌：sda<br/>
          型号：sda123123123<br/>
          规格：sda123<br/>
        </td>
        <td>
          包装方式：爱空间水电费half开讲啦发送<br/>
          最小包装数：sda<br/>
          起订：sda123123123<br/>
          库存：sda123<br/>
        </td>
        <td>28-31天</td>
        <td class="step-td">
          ¥9999.999999<br/>
          <div class="step">
            价格梯度 <i class="iconfont icon-Eye"></i>
            <div class="com-price-level price-level">
              <div class="line">
                <span>价格梯度(PCS)</span>
                <span>价格(¥)</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
              <div class="line">
                <span>1+</span>
                <span>9999.999999</span>
              </div>
            </div>
          </div>
        </td>
        <td class="text-center">
          <u-step-adder class="step-adder"></u-step-adder><br/>
          PCS
        </td>
        <td>¥9999999</td>
        <td class="text-center"><a>删除</a></td>
      </tr>
      </tbody>
    </table>
    <div class="pay" ref="payLine">
      <div class="pay-wrap" :class="{ 'fix-wrap': fixed }">
        <u-check-box v-model="checkAll">全选</u-check-box>
        <a class="batch-delete">批量删除</a>
        <div class="fr">
          已选择 1 件产品
          <span class="total">总计：¥9999999</span>
          <button>去结算</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    checkAll: false,
    fixed: false
  }),
  mounted () {
    this.initPayLine()
    this.$nextTick(() => {
      document.body.addEventListener('scroll', this.initPayLine)
    })
  },
  beforeDestroy () {
    document.body.removeEventListener('scroll', this.initPayLine)
  },
  methods: {
    initPayLine () {
      let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      this.fixed = this.$refs.payLine.offsetTop - scrolled - document.body.clientHeight + 200 > 0
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../assets/css/order';
  .cart {
    position: relative;
    .cart-table {
      tbody {
        border-bottom: 8px solid #f5f5f5;
        &:last-child {
          border-bottom: none;
        }
        tr td.step-td {
          overflow: initial;
          .price {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .step {
            color: rgba(0,0,0,0.45);
            position: relative;
            .price-level {
              display: none;
              position: absolute;
              width: 230px;
              background: #fff;
              box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
              border-radius: 4px;
              z-index: 1;
              &:before {
                content: '';
                width: 0;
                height: 0;
                border: {
                  bottom: 6px solid #fff;
                  left: 5px solid transparent;
                  right: 5px solid transparent;;
                  top: none;
                }
                position: absolute;
                top: -6px;
                left: 63px;
              }
            }
            i:hover + .price-level {
              display: block;
            }
          }
          .step-adder {
            width: 96px;
          }
        }
      }
    }
    .pay {
      height: 56px;
      margin-top: 24px;
      .pay-wrap {
        width: 996px;
        background: #fff;
        height: 56px;
        line-height: 56px;
        padding: 0 0 0 16px;
        .batch-delete {
          margin-left: 16px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .total {
          font-size: 16px;
          color: #F5222D;
          margin: 0 16px;
        }
        button {
          height: 56px;
          width: 80px;
          background: rgba(0,0,0,0.85);
          border: 1px solid rgba(0,0,0,0.85);
          color: #fff;
        }
        &.fix-wrap {
          position: fixed;
          bottom: 0;
          z-index: 10;
        }
      }
    }
  }
</style>
