<template>
  <div class="user-collect">
    <div class="base-title-block bg-white">
      <span class="title active">产品收藏</span>
    </div>
    <div class="base-title-block bg-white operate">
      更多操作：<button class="u-btn u-btn-cancel" @click="batchDelete">批量删除</button>
    </div>
    <table class="base-table order-table collect-list">
      <thead>
      <tr>
        <th width="48">
          <u-check-box v-model="checkAll" boxId="checkAll" @input="onCheckAll"></u-check-box></th>
        <th width="190">产品信息</th>
        <th width="204">销售信息</th>
        <th width="86">交期</th>
        <th width="216">价格梯度</th>
        <th width="247">操作</th>
      </tr>
      </thead>
      <tbody v-for="(collect, index) in collectList" :key="collect.code">
      <tr class="en-info">
        <td colspan="6">
          <u-check-box v-model="checkAll"></u-check-box>
          <b>{{collect.enName || '-'}}</b>
          <div class="fr">
            <i class="iconfont icon-shouji"></i> 1133333339
            <i class="iconfont icon-dianhua"></i> 0755-8888999999
          </div>
        </td>
      </tr>
      <tr class="product">
        <td class="text-center"> <u-check-box
          v-model="collect.checked"
          :boxId="`check_${index}`"
          @click="onCheckItem"
        ></u-check-box></td>
        <td>
          <template :title="collect.brand">品牌：{{ collect.brand || '-' }}<br/></template>
          <template :title="collect.model">型号：{{ collect.model || '-' }}<br/></template>
          <template :title="collect.spec">规格：{{ collect.spec || '-' }}<br/></template>
        </td>
        <td>
          <template :title="collect.brand">起订：{{ collect.brand || '-' }}<br/></template>
          <template :title="collect.model">剩余库存：{{ collect.model || '-' }}<br/></template>
        </td>
        <td>
          <template :title="collect.model">2-18天<br/></template>
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
        <td class="text-center"><a @click="deleteItem(collect)">删除</a></td>
      </tr>
      </tbody>
    </table>
    <u-pager
      v-model="pager.page"
      :totalCount="pager.count"
      :pageSize="pager.size"
      @input="loadData"
      @sizeChangeAction="resizeData"
    ></u-pager>
  </div>
</template>
<script>
export default {
  data: () => ({
    checkAll: false,
    pager: {
      size: 10,
      count: 0,
      page: 1
    },
    collectList: []
  }),
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.checkAll = false
      this.apis.product.getCollectionsPage({ pageNumber: this.pager.page, pageSize: this.pager.size })
        .then(res => {
          this.requestDeal(res, data => {
            this.collectList = data.productCollections
            this.pager.count = data.pagingInfo.totalCount
            this.collectList.forEach(item => {
              this.$set(item, 'checked', false)
            })
          })
        })
    },
    resizeData (size) {
      this.pager.size = size
    },
    deleteItem (collect) {
      this.$confirm('确认要删除吗？').then(() => {
        this.apis.product.revokeCollect({ code: collect.code })
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
    getCheckedItems () {
      return this.collectList.reduce((arr, item) => {
        item.checked && arr.push(item)
        return arr
      }, [])
    },
    onCheckAll () {
      this.collectList.forEach(item => {
        item.checked = this.checkAll
      })
    },
    onCheckItem () {
      let checkItems = this.getCheckedItems()
      if (checkItems.length === this.collectList.length) {
        // 全选状态
        this.checkAll = true
      } else if (checkItems.length < this.collectList.length) {
        // 半选/未选状态
        this.checkAll = false
      }
    },
    // 批量删除
    batchDelete () {
      let checkedItems = this.getCheckedItems()
      if (checkedItems.length) {
        this.$confirm('确认要删除选中的内容吗？').then(() => {
          let codeItems = checkedItems.reduce((arr, item) => {
            arr.push(item.code)
            return arr
          }, [])
          this.apis.product.batchrevokeCollect({ code: codeItems }).then(res => {
            this.requestDeal(res, () => {
              this.$message.success('删除成功')
              this.loadData()
            }, err => {
              this.errDeal(err, '删除失败')
            })
          })
        }, () => {})
      } else {
        this.$message.info('请勾选要删除的产品')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/css/order";
  .user-collect {
    .operate {
      height: 48px;
      line-height: 48px;
    }
    .collect-list {
      thead {
        tr{
          border: 1px solid rgba(0,0,0,0.09);
        }
      }
      tbody{
        border-bottom: 8px solid #f5f5f5;
        &:last-child {
          border-bottom: none;
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
      }
      .content {
        width: 352px;
        .date-input {
          width: 80px;
        }
        .date-picker {
          width: 100%;
        }
      }
    }
  }
</style>
