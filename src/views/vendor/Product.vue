<template>
  <div class="vendor-product">
    <div class="base-title-block bg-white">
      <span class="title" :class="{ active: tab === 0 }" @click="changeTab(0)">全部产品</span>
      <span class="title" :class="{ active: tab === 1 }" @click="changeTab(1)">已上架</span>
      <span class="title" :class="{ active: tab === 2 }" @click="changeTab(2)">未上架</span>
      <button class="fr btb-btn" @click="updateItem()">单个录入</button>
      <button class="fr btb-btn" @click="showImport = true">批量导入</button>
    </div>
    <div class="base-title-block bg-white operate">
      更多操作：
      <button class="u-btn u-btn-cancel" @click="batchOperate('revoke')" v-show="tab === 1">批量下架</button>
      <button class="u-btn u-btn-cancel" @click="batchOperate('invoke')" v-show="tab === 2">批量上架</button>
      <button class="u-btn u-btn-cancel" @click="batchOperate('delete')">删除选中</button>
    </div>
    <table class="base-table order-table product-list">
      <thead>
      <tr>
        <th width="48"><u-check-box v-model="checkAll" boxId="checkAll" @input="onCheckAll"></u-check-box></th>
        <th width="190">产品信息</th>
        <th width="204">销售信息</th>
        <th width="86">交期</th>
        <th width="216">价格梯度</th>
        <th width="247">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, index) in productList" :key="product.code" class="product">
        <td class="text-center"><u-check-box v-model="product.checked" :boxId="`check_${index}`" @input="onCheckItem"></u-check-box></td>
        <td>
          <template :title="product.brand">品牌：{{product.brand || '-'}}<br/></template>
          <template :title="product.model">型号：{{product.model || '-'}}<br/></template>
          <template :title="product.spec">规格：{{product.spec || '-'}}<br/> </template>
        </td>
        <td>
          <template :title="product.packing">包装方式：{{product.packing || '-'}}<br/></template>
          <template :title="product.mpq">最小包装数：{{product.mpq || '-'}}<br/></template>
          <template :title="product.moq">起订：{{product.moq || '-'}}<br/></template>
          <template :title="product.reserve">库存：{{product.reserve || '-'}}<br/></template>
          <template :title="product.frozenQty">冻结库存：{{product.frozenQty || '-'}}<br/></template>
          <template :title="product.detachable ? '可拆买' : '不可拆买'" v-if="product.detachable">可拆买<br/></template>
        </td>
        <td>
          <template :title="`${product.minDelivery}-${product.maxDelivery}天`">{{product.minDelivery}}-{{product.maxDelivery}}天</template>
        </td>
        <td>
          <div class="com-price-level">
            <div class="line">
              <span>价格梯度(PCS)</span>
              <span>价格(¥)</span>
            </div>
            <div class="line" v-for="(item, index) in product.ladderOffer" :key="index">
              <span>{{item.start}}+</span>
              <span>{{item.price}}</span>
            </div>
          </div>
        </td>
        <td class="operate-btn-wrap text-center">
          <button class="u-btn u-btn-cancel voke-btn" v-if="product.status === productCode.status.revoke" @click="invoke(product)">上架 </button>
          <button class="u-btn u-btn-cancel voke-btn" v-if="product.status === productCode.status.invoke" @click="revoke(product)">下架</button>
          <div>
            <a @click="updateItem(product)">修改</a> |
            <a @click="deleteItem(product)">删除</a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <u-pager
      v-model="pager.page"
      :totalCount="pager.count"
      :pageSize="pager.size"
      @input="loadData()"
      @sizeChangeAction="resizeData"
    ></u-pager>
    <u-dialog title="批量导入" v-model="showImport">
      <div slot="content" class="import">
        <p class="title">第一步，下载Excel模板</p>
        <a href="http://static.uuzcc.cn/mall/导入产品并上架-优软商城.xls" class="u-btn u-btn-submit inline-block">下载模板</a>
        <p class="title">第二步，上传产品导入表格</p>
        <label class="import-box">
          {{ file.name }}
          <input type="file" ref="upload" class="box-input" @change="uploadExcel" accept=".xls, .xlsx">
          <button class="u-btn u-btn-submit line-height-normal">选择文件</button>
        </label>
      </div>
      <div slot="footer">
        <button class="u-btn u-btn-cancel" @click="showImport = false">取消</button>
        <button class="u-btn u-btn-submit" @click="submitUpload">确定</button>
      </div>
    </u-dialog>
    <u-dialog
      :title="updatingObj.code ? '修改产品信息' : '单个录入'"
      :width="914"
      v-model="showUpdate"
      class="product-modal">
      <div slot="content" class="insert clearfix">
        <div class="fl">
          <div class="form-line">
            <span class="title"><i class="must">*</i>品牌：</span>
            <div class="content">
              <u-input class="base-input" placeholder="请输入品牌" v-model="updatingObj.brand"></u-input>
            </div>
          </div>
          <div class="form-line">
          <span class="title">最小包装数：</span>
          <div class="content">
            <u-input class="base-input" placeholder="请输入最小包装数" v-model.number="updatingObj.mpq"></u-input>
          </div>
        </div>
          <div class="form-line">
            <span class="title">库存(PCS)：</span>
            <div class="content">
              <u-input class="base-input" placeholder="请输入库存" v-model.number="updatingObj.reserve"></u-input>
            </div>
          </div>
          <div class="form-line">
            <span class="title">交期(天)：</span>
            <div class="content">
              <u-input class="date-input inline-block" v-model.number="updatingObj.minDelivery"></u-input>
              -
              <u-input class="date-input inline-block" v-model.number="updatingObj.maxDelivery"></u-input>
            </div>
          </div>
          <div class="form-line">
            <span class="title">可拆卖：</span>
            <div class="content">
              <u-switch v-model="updatingObj.detachable"></u-switch>
            </div>
          </div>
        </div>
        <div class="fr">
          <div class="form-line">
            <span class="title"><i class="must">*</i>型号：</span>
            <div class="content">
              <u-input class="base-input" placeholder="请输入型号" v-model="updatingObj.model"></u-input>
            </div>
          </div>
          <div class="form-line">
            <span class="title">规格：</span>
            <div class="content">
              <u-input class="base-input" placeholder="请输入规格" v-model="updatingObj.spec"></u-input>
            </div>
          </div>
          <div class="form-line">
            <span class="title"><i class="must">*</i>起订：</span>
            <div class="content">
              <u-input class="base-input" placeholder="请输入起订数量" v-model.number="updatingObj.moq"></u-input>
            </div>
          </div>
          <div class="form-line">
            <span class="title">包装方式：</span>
            <div class="content">
              <u-select class="base-input" :list="packList" v-model="updatingObj.packing"></u-select>
            </div>
          </div>
          <div class="form-line price-level-line">
            <span class="title">价格梯度：</span>
            <div class="content">
              <div class="price-level-input">
                <div class="line line-title">
                  <span class="item">阶梯数(PCS)</span>
                  <span class="item">价格(¥)</span>
                </div>
                <div class="line" v-for="(level, index) in updatingObj.ladderOffer" :key="index">
                  <input type="text" v-model.number="level.start" :readonly="index === 0" class="level-input item">
                  <input type="text" v-model.number="level.price" class="level-input item">
                  <div class="operate">
                    <i class="iconfont icon-jian" v-if="index > 0" @click="setLevel(false, index)"></i>
                    <i class="iconfont icon-jia" v-if="index === updatingObj.ladderOffer.length - 1 && index < 4" @click="setLevel(true)"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer">
        <button class="u-btn u-btn-cancel" @click="showUpdate = false">取消</button>
        <button class="u-btn u-btn-submit" @click="submitUpdate">确定</button>
      </div>
    </u-dialog>
  </div>
</template>
<script>
import { product } from '@/utils/baseCode'
export default {
  data: () => ({
    /*
    * 顶部切换状态
    * 0 => 全部
    * 1 => 已上架
    * 2 => 未上架
    * */
    tab: 0,
    checkAll: false,
    pager: {
      size: 10,
      count: 0,
      page: 1
    },
    productList: [],
    // 展示导入框
    showImport: false,
    // 展示单个录入/修改产品框
    showUpdate: false,
    updatingObj: {
      // 型号
      model: '',
      // 规格
      spec: '',
      // 品牌
      brand: '',
      // 最小包装数
      mpq: '',
      // 起订
      moq: '',
      // 库存
      reserve: '',
      // 最小交期
      minDelivery: '',
      // 最大交期
      maxDelivery: '',
      // 梯度价格
      ladderOffer: [
        {
          start: 1,
          end: null,
          price: null
        }
      ],
      // 是否可拆卖
      detachable: ''
    },
    productCode: product,
    file: '',
    packList: [
      {
        text: '塑料袋',
        value: '塑料袋'
      },
      {
        text: '纸箱',
        value: '纸箱'
      }
    ],
    levels: [{
      price: '',
      count: 1
    }]
  }),
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.checkAll = false
      let params = {
        pageNumber: this.pager.page,
        pageSize: this.pager.size
      }
      if (this.tab === 1) {
        // 已上架
        params.status = this.productCode.status.invoke
      } else if (this.tab === 2) {
        params.status = this.productCode.status.revoke
      }
      this.apis.product.getEnterpriseProducts(params)
        .then(res => {
          this.requestDeal(res, data => {
            this.productList = data.product
            this.pager.count = data.pagingInfo.totalCount
            this.productList.forEach(item => {
              this.$set(item, 'checked', false)
            })
          })
        })
    },
    resizeData (size) {
      this.pager.size = size
    },
    changeTab (tab) {
      this.tab = tab
      this.loadData()
      this.checkAll = false
    },
    deleteItem (product) {
      this.$confirm('确认要删除此产品吗？').then(() => {
        this.apis.product.deleteProduct({ code: product.code })
          .then(res => {
            this.requestDeal(res, () => {
              this.$message.success('删除成功')
              this.loadData()
            })
          }, err => {
            this.errDeal(err, '删除失败')
          })
      }, () => {})
    },
    /*
    * 修改产品信息/单个录入
    * @product: 修改的产品
    * */
    updateItem (product) {
      if (product) {
        for (let key in this.updatingObj) {
          this.updatingObj[key] = product[key]
        }
        this.updatingObj.code = product.code
      } else {
        for (let key in this.updatingObj) {
          this.updatingObj[key] = key === 'ladderOffer' ? [{ start: 1 }] : ''
        }
      }
      this.showUpdate = true
    },
    // 处理梯度价格
    dealLadderOffer () {
      if (this.updatingObj.ladderOffer.length > 1 || (this.updatingObj.ladderOffer.length === 1 && this.updatingObj.ladderOffer[0].price)) {
        for (let i = 0; i < this.updatingObj.ladderOffer.length; i++) {
          if (i !== this.updatingObj.ladderOffer.length - 1) {
            // 取下一梯度的起始数量-1
            this.updatingObj.ladderOffer[i].end = this.updatingObj.ladderOffer[i + 1].start - 1
          } else {
            // 最大库存不超过10亿
            this.updatingObj.ladderOffer[i].end = 999999999
          }
        }
        return this.updatingObj.ladderOffer
      } else {
        return null
      }
    },
    submitUpdate () {
      if (this.updatingObj.brand && this.updatingObj.model && this.updatingObj.moq) {
        let obj = JSON.parse(JSON.stringify(this.updatingObj))
        obj.ladderOffer = this.dealLadderOffer()
        this.apis.product.addOrUpdateProduct({ product: obj }).then(res => {
          this.requestDeal(res, () => {
            this.$message.success(this.updatingObj.code ? '修改成功' : '新增成功')
            this.loadData()
            this.showUpdate = false
          })
        }, err => {
          this.errDeal(err, '修改失败')
        })
      } else {
        this.$message.info('请填写完整信息')
      }
    },
    getCheckedItems () {
      return this.productList.reduce((arr, item) => {
        item.checked && arr.push(item)
        return arr
      }, [])
    },
    onCheckAll () {
      this.productList.forEach(item => {
        item.checked = this.checkAll
      })
    },
    onCheckItem () {
      let checkItems = this.getCheckedItems()
      if (checkItems.length === this.productList.length) {
        // 全选状态
        this.checkAll = true
      } else if (checkItems.length < this.productList.length) {
        // 半选/未选状态
        this.checkAll = false
      }
    },
    /*
   * 批量下架/批量删除
   * @type:
   *     revoke => 下架
   *     delete => 删除
   *     invoke => 上架
   * */
    batchOperate (type) {
      let checkedItems = this.getCheckedItems()
      // operateFunc: 操作的方法名
      let text, operateFunc
      if (type === 'revoke') {
        text = '下架'
        operateFunc = 'batchRevoke'
      } else if (type === 'invoke') {
        text = '上架'
        operateFunc = 'batchRelease'
      } else {
        text = '删除'
        operateFunc = 'batchDelete'
      }
      if (checkedItems.length) {
        this.$confirm(`确认要${text}选中的内容吗？`).then(() => {
          let codeItems = checkedItems.reduce((arr, item) => {
            arr.push(item.code)
            return arr
          }, [])
          this.apis.product[operateFunc]({ code: codeItems }).then(res => {
            this.requestDeal(res, () => {
              this.$message.success(`${text}成功`)
              this.loadData()
              this.checkAll = false
            }, err => {
              this.errDeal(err, `${text}失败`)
            })
          })
        }, () => {})
      } else {
        this.$message.info(`请勾选要${text}的产品`)
      }
    },
    uploadExcel (e) {
      this.file = e.target.files[0]
    },
    submitUpload () {
      if (this.file) {
        this.apis.product.addProducts({ file: this.file }).then(res => {
          this.requestDeal(res, () => {
            this.$message.success('上传成功')
            this.loadData()
            this.showImport = false
            this.emptyUpload()
          })
        }, err => {
          this.errDeal(err, '上传失败，请重试')
        })
      } else {
        this.$message.info('请先选择文件')
      }
    },
    // 清除上传记录
    emptyUpload () {
      this.$refs.upload.value = ''
      this.file = ''
    },
    // 下架
    revoke (product) {
      this.$confirm('确认要下架吗？').then(() => {
        this.apis.product.revoke({ code: product.code }).then(res => {
          this.requestDeal(res, () => {
            this.$message.success('下架成功')
            this.loadData()
          })
        }, err => {
          this.errDeal(err, '下架失败')
        })
      }, () => {})
    },
    // 上架
    invoke (product) {
      this.$confirm('确认要上架吗？').then(() => {
        this.apis.product.release({ code: product.code }).then(res => {
          this.requestDeal(res, () => {
            this.$message.success('上架成功')
            this.loadData()
          })
        }, err => {
          this.errDeal(err, '上架失败')
        })
      }, () => {})
    },
    setLevel (isAdd, index) {
      if (isAdd) {
        this.updatingObj.ladderOffer.push({
          price: null,
          start: null,
          end: null
        })
      } else {
        this.updatingObj.ladderOffer.splice(index, 1)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/css/order";
  .vendor-product {
    .operate {
      height: 48px;
      line-height: 48px;
    }
    .product-list {
      thead {
        tr{
          border: 1px solid rgba(0,0,0,0.09);
        }
      }
      tbody tr {
        background: #fff;
        border-bottom: 8px solid #f5f5f5;
        .operate-btn-wrap {
          line-height: normal;
          .voke-btn {
            height: 24px;
            line-height: 22px;
            padding: 0 13px;
            margin-bottom: 8px;
          }
        }
      }
      td{
        padding: 16px 8px;
      }
    }
    .insert {
      .fl, .fr {
        width: 50%;
      }
      .form-line {
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
        .title {
          width: 84px;
          text-align: right;
          display: inline-block;
          vertical-align: middle;
        }
        .content {
          width: 346px;
          display: inline-block;
          vertical-align: middle;
          .base-input {
            width: 320px;
          }
          .date-input {
            width: 153px;
          }
          .price-level-input {
            width: 320px;
            background: rgba(0,0,0,0.02);
            border: 1px solid rgba(0,0,0,0.15);
            border-radius: 4px;
            .line {
              height: 32px;
              position: relative;
              .operate {
                position: absolute;
                right: -46px;
                top: 0;
                height: 32px;
                line-height: 32px;
                width: 38px;
                i {
                  cursor: pointer;
                  color: rgba(0, 0, 0, .65);
                  &.icon-jian {
                    margin-right: 6px;
                  }
                }
              }
              .item {
                width: 50%;
                display: inline-block;
                padding: 0 8px;
              }
              .level-input {
                $border: 1px solid rgba(0,0,0,0.15);
                outline: none;
                height: 32px;
                border: {
                  top: $border;
                  bottom: 0;
                  left: 0;
                  right: 0;
                }
                &:first-child {
                  border-right: $border;
                }
                &[readonly] {
                  color: rgba(0,0,0,0.25);
                  cursor: default;
                }
              }
              &.line-title .item {
                line-height: 32px;
              }
            }
          }
        }
        &.price-level-line .title {
          vertical-align: top;
        }
      }
    }
    .import {
      .title {
        margin-bottom: 8px;
        &:last-of-type {
          margin-top: 16px;
        }
      }
      .import-box {
        position: relative;
        display: block;
        width: 100%;
        height: 32px;
        line-height: 32px;
        padding: 0 98px 0 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background: #fff;
        border:{
          left: 1px solid rgba(0,0,0,.15);
          top: 1px solid rgba(0,0,0,.15);
          bottom:  1px solid rgba(0,0,0,.15);
        };
        border-radius: 4px;
        .box-input {
          opacity: 0;
          width: 100%;
          height: 32px;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
        }
        button {
          position: absolute;
          right: 0;
          top: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }
      }
    }
  }
</style>
