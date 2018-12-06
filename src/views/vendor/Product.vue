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
          <template :title="product.brand">包装方式：{{product.brand || '-'}}<br/></template>
          <template :title="product.model">最小包装数：{{product.model || '-'}}<br/></template>
          <template :title="product.spec">起订：{{product.spec || '-'}}<br/></template>
          <template :title="product.spec">库存：{{product.spec || '-'}}<br/></template>
          <template :title="product.spec">可拆买<br/></template>
        </td>
        <td>
          <template :title="product.brand">2-18天</template>
        </td>
        <td>
          <div class="com-price-level">
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
    <u-dialog :title="updatingObj.code ? '修改产品信息' : '单个录入'" v-model="showUpdate">
      <div slot="content" class="insert">
        <div class="form-line">
          <span class="title"><i class="must">*</i>品牌：</span>
          <div class="content">
            <u-input placeholder="请输入品牌" v-model="updatingObj.brand"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title"><i class="must">*</i>型号：</span>
          <div class="content">
            <u-input placeholder="请输入型号" v-model="updatingObj.model"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title"><i class="must">*</i>规格：</span>
          <div class="content">
            <u-input placeholder="请输入规格" v-model="updatingObj.spec"></u-input>
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
      model: '',
      spec: '',
      brand: ''
    },
    productCode: product,
    file: ''
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
      this.apis.product.getMyProductsPage(params)
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
        this.updatingObj = {
          brand: '',
          model: '',
          spec: ''
        }
      }
      this.showUpdate = true
    },
    submitUpdate () {
      if (this.updatingObj.brand && this.updatingObj.model && this.updatingObj.spec) {
        this.apis.product.addOrUpdateProduct(this.updatingObj).then(res => {
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
    }
    .form-line {
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
      .title {
        width: 78px;
        text-align: right;
        display: inline-block;
        vertical-align: middle;
      }
      .content {
        width: 352px;
        display: inline-block;
        vertical-align: middle;
        .date-input {
          width: 80px;
        }
        .date-picker {
          width: 100%;
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
