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
            <div class="collect"
                 :class="{active: productDetail.collectStatus=== '已收藏'}"
                 @click="isCollect(productDetail)"><span><i class="iconfont icon-shoucang"></i>{{productDetail.collectStatus}}</span></div>
            <div class="product-info">
              <div>品牌 <span>{{productDetail.brand}}</span></div>
              <div>型号 <span>{{productDetail.model}}</span></div>
              <div>规格 <span>{{productDetail.spec}}</span></div>
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
          .collect {
            margin: 24px auto 10px;
            text-align: right;
            font-size: 14px;
            color: #333333;
            line-height: 22px;
            span{
              cursor: pointer ;
            }
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
          .product-info{
            padding: 16px 0 0 44px;
            width: 718px;
            height: 114px;
            background: #F5F5F5;
            div{
              margin-bottom: 8px;
              font-size: 14px;
              color: #666666;
              text-align: left;
              line-height: 22px;
              span{
                color: #333333;
              }
            }
          }
        }
      }
    }
  }
</style>
