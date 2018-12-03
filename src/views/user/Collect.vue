<template>
  <div class="user-collect">
    <div class="base-title-block test-border">
      <span class="title active">产品收藏</span>
    </div>
    <div class="base-title-block test-border operate">
      更多操作：<button class="u-btn u-btn-cancel" @click="batchDelete">批量删除</button>
    </div>
    <table class="base-table test-border collect-list">
      <thead>
      <tr>
        <th width="10%">
          <u-check-box v-model="checkAll" boxId="checkAll" @input="onCheckAll"></u-check-box></th>
        <th width="10%">品牌</th>
        <th width="10%">型号</th>
        <th width="10%">规格</th>
        <th width="20%">企业名称</th>
        <th width="20%">联系方式</th>
        <th width="20%">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(collect, index) in collectList" :key="collect.code">
        <td>
          <u-check-box
            v-model="collect.checked"
            :boxId="`check_${index}`"
            @click="onCheckItem"
          ></u-check-box></td>
        <td>{{ collect.brand }}</td>
        <td>{{ collect.model }}</td>
        <td>{{ collect.spec }}</td>
        <td>{{ collect.enterprise.enName }}</td>
        <td>
          {{ collect.enterprise.contactName }}
          <br/>
          {{ collect.enterprise.contactPhone }}
        </td>
        <td><a @click="deleteItem(collect)">删除</a></td>
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
      this.loadData()
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
  .user-collect {
    .operate {
      height: 48px;
      line-height: 48px;
    }
    .collect-list {
      thead {
        height: 40px;
        line-height: 40px;
        background: rgba(0,0,0,0.02);
      }
      tbody tr {
        height: 70px;
        line-height: 70px;
        border-bottom: 1px solid #ccc;
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
