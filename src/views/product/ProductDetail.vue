<template>
  <div class="product-detail-warp">
    <div class="container">
      <div class="product-detail">
        <div class="header">
          <div>{{sellerDetail.enName || '-'}}</div>
          <div class="com-hover">
            <em class="cart"></em>
            <p>{{sellerDetail.enName || '-'}}</p>
            <div class="adr">{{sellerDetail.address || '-'}}</div>
            <div class="com-style">
              <span>营业范围</span>
              <div class="com-rang">{{sellerDetail.scope || '-'}}</div>
            </div>
            <div class="com-style">
              <span>联系方式</span>
              <div class="com-rang">
                <div class="clearfix"><span>联系人：</span><span>{{sellerDetail.contactName || '-'}}</span></div>
                <div class="clearfix"><span>手机：</span><span>{{sellerDetail.contactPhone || '-'}}</span></div>
                <div class="clearfix"><span>固话：</span><span>{{sellerDetail.tel || '-'}}</span></div>
                <div class="clearfix"><span>邮箱：</span><span>{{sellerDetail.contactEMail || '-'}}</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-content">
          <div class="product-img"><img src="" alt=""></div>
          <div class="product-content-show">
            <div class="collect-content clearfix">
              <span class="collect"
                    :class="{active: productDetail.collectStatus=== '已收藏'}"
                    @click="isCollect(productDetail)"><i class="iconfont icon-shoucang"></i>{{productDetail.collectStatus}}</span>
              <div class="code">HF2160-1A-12DE</div>
            </div>
            <div class="product-info clearfix">
              <div><span>品牌 </span><span>{{productDetail.brand || '-'}}</span></div>
              <div><span>规格 </span><span>{{productDetail.spec || '-'}}</span></div>
              <div><span>包装方式 </span><span>包装方式</span></div>
              <div><span>最小包装数 </span><span>包装方式</span></div>
              <div><span>起订 </span><span>300</span></div>
              <div><span>是否可拆买 </span><span>是</span></div>
            </div>
            <div class="price-grad">
              <div class="com-price-level product-level">
                <div class="line">
                  <span>价格梯度(PCS)</span>
                  <span>价格(¥)</span>
                </div>
                <div class="line">
                  <span>1+</span>
                  <span>9999.999999</span>
                </div>
              </div>
            </div>
            <div class="purchase-info">
              <div class="clearfix purchase-list">
                <span>采购数量</span>
                <div class="clearfix">
                  <template>
                    <u-stepAdder>
                    </u-stepAdder>
                  </template>
                  <div class="stock">库存 <span>200000000</span></div>
                </div>
              </div>
              <div class="clearfix purchase-list">
                <span>交期</span>
                <div class="purchase-detail">5-10天</div>
              </div>
              <div class="clearfix purchase-list">
                <span>小计</span>
                <div class="purchase-detail total">￥18，0000</div>
              </div>
            </div>
            <div class="pur-btn">
              <a class="btn-buy">立即购买</a>
              <a class="btn-cart">加入购物车</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productDetail',
  data: () => ({
    productDetail: [],
    sellerDetail: []
  }),
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.apis.product.getProduct({ code: this.$route.params.code })
        .then(res => {
          this.requestDeal(res, data => {
            this.productDetail = data.product
            this.apis.seller.getEnterprise({ enuu: this.productDetail.enterprise.enuu })
              .then(res => {
                this.requestDeal(res, data => {
                  this.sellerDetail = data.enterprise
                })
              })
          })
        })
    },
    isCollect (item) {
      if (item.collectStatus === '未收藏') {
        this.apis.product.collect({ code: item.code }).then(res => {
          this.requestDeal(res, () => {
            this.$message.success('收藏成功')
            this.loadData()
          })
        })
      } else if (item.collectStatus === '已收藏') {
        this.apis.product.revokeCollectByProduct({ productCode: item.code }).then(res => {
          this.requestDeal(res, () => {
            this.$message.success('取消收藏')
            this.loadData()
          })
        })
      }
    }
  }
}
</script>
<style lang="scss">
  .product-detail-warp{
    padding-bottom: 60px;
    background-color: #f5f5f5;
    .product-detail {
      padding-bottom: 16px;
      width: 100%;
      background: #fff;
      .header{
        position: relative;
        padding-right: 16px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #F5F5F5;
        background: #999999;
        div{
          float: right;
          font-size: 14px;
          color: #F5F5F5;
          cursor: pointer;
          &:hover + .com-hover {
            display: block;
          }
        }
        .com-hover {
          display: none;
          position: absolute;
          right: 0;
          top: 45px;
          padding: 16px;
          width: 400px;
          background: #FFFFFF;
          border: 1px solid #D9D9D9;
          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
          border-radius: 4px;
          .cart {
            position: absolute;
            top: -10px;
            right: 90px;
            display: inline-block;
            width: 0;
            height: 0;
            border-left: 10px dotted transparent;
            border-right: 10px dotted transparent;
            border-bottom:10px solid #fff;;
          }
          p{
            text-align: left;
            font-size: 14px;
            color: #333333;
            line-height: 22px;
          }
          .adr{
            float: left;
            font-size: 14px;
            color: #666666;
            text-align: justify;
            line-height: 22px;
          }
          .com-style{
            overflow: hidden;
            span{
              display: inline-block;
              margin-right: 24px;
              float: left;
              width: 56px;
              font-size: 14px;
              color: #666666;
              text-align: justify;
              line-height: 22px;
            }
            div.com-rang{
              float: left;
              width: 286px;
              font-size: 14px;
              color: #333333;
              line-height: 22px;
              text-align: left;
              >div {
                span{
                  display: inline-block;
                  margin-right: 0;
                  font-size: 14px;
                  color: #333333;
                  line-height: 22px;
                  &:first-child {
                    width: 56px;
                    text-align: right;
                  }
                  &:last-child {
                    width: 210px;
                    text-align: left;
                  }
                }
              }
            }
          }
        }
      }
      .product-content{
        overflow: hidden;
        width: 100%;
        background: #fff;
        .product-img{
          margin: 20px 0 0 24px;
          float: left;
          width: 400px;
          height: 400px;
          border: 1px solid #979797;
        }
        .product-content-show{
          margin-left: 24px;
          float: right;
          padding-right: 24px;
          .collect-content{
            margin: 24px auto 10px;
            .collect {
              float: right;
              font-size: 14px;
              color: #333333;
              line-height: 22px;
              cursor: pointer ;
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
            .code {
              float: left;
              font-size: 20px;
              color: #4A4A4A;
            }
          }
          .product-info{
            padding: 16px 0 0 16px;
            width: 718px;
            height: 114px;
            background: #F5F5F5;
            div{
              margin-bottom: 8px;
              text-align: left;
              line-height: 22px;
              span{
                display: inline-block;
                font-size: 14px;
                color: #666666;
                &:first-child {
                  margin-right: 16px;
                  width: 70px;
                  color: #333333;
                  text-align: right;
                }
                &:last-child {
                  width: 215px;
                }
              }
              &:nth-child(odd) {
                float: left;
                width: 340px;
                span{
                  &:first-child {
                    width: 56px;
                  }
                }
              }
              &:nth-child(even) {
                padding-left: 16px;
                width: 359px;
                float: right;
              }
            }
          }
          .price-grad {
            margin: 16px auto;
            width: 718px;
            border: 1px solid rgba(0,0,0,0.15);
            .product-level {
                padding: 0;
              .line{
                padding: 0 24px;
                margin-bottom: 0;
                height: 32px;
                line-height: 32px;
                border-bottom:1px solid rgba(0,0,0,0.09);
                span{
                  font-size: 14px;
                  color: #333333;
                  &:first-child {
                    padding-left: 63px;
                  }
                }
              }
            }
          }
          .purchase-info {
            .purchase-list {
              height: 32px;
              margin-bottom: 16px;
              >span{
                margin-right: 16px;
                display: inline-block;
                float: left;
                width: 56px;
                line-height: 32px;
                text-align: right;
              }
              >div.clearfix{
                float: left;
                .u-step-adder{
                  float: left;
                  input{
                    width: 193px;
                  }
                }
                >.stock{
                  margin-left: 8px;
                  display: inline-block;
                  float: left;
                  line-height: 32px;
                  font-size: 14px;
                  color: rgba(0,0,0,0.45);
                  span{
                    color: rgba(0,0,0,0.65);
                  }
                }
              }
              .purchase-detail {
                float: left;
                font-size: 14px;
                line-height: 32px;
                color: #333333;
                &.total{
                  font-size: 20px;
                  color: #333333;
                }
              }
            }
          }
          .pur-btn {
            margin-left: 74px;
            a{
              width: 116px;
              height: 40px;
              line-height: 40px;
            }
          }
        }
      }
    }
  }
</style>
