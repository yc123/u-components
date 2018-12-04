<template>
  <div class="user-demand">
    <div class="base-title-block test-border">
      <span class="title active">全部需求</span>
      <button class="fr btb-btn" @click="operate()">发布求购</button>
    </div>
    <div class="base-title-block test-border operate">
      更多操作：<button class="u-btn u-btn-cancel" @click="batchDelete">批量删除</button>
    </div>
    <table class="base-table test-border demand-list">
      <thead>
      <tr>
        <th width="10%">
          <u-check-box
            v-model="checkAll"
            boxId="checkAll"
            @input="onCheckAll"
          ></u-check-box>
        </th>
        <th width="10%">品牌</th>
        <th width="10%">型号</th>
        <th width="10%">规格</th>
        <th width="10%">需求数量</th>
        <th width="10%">预计交期</th>
        <th width="20%">截止日期</th>
        <th width="20%">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="demand in demandList" :key="demand.code">
        <td>
          <u-check-box
            v-model="demand.checked"
            :boxId="`check_${demand.code}`"
            @input="onCheckItem()"
          >
          </u-check-box>
        </td>
        <td v-text="demand.brand"></td>
        <td v-text="demand.model"></td>
        <td v-text="demand.spec"></td>
        <td v-text="demand.amount"></td>
        <td v-text="`${demand.leastDelivery}-${demand.lastDelivery}`"></td>
        <td v-text="demand.deadlineDate"></td>
        <td><a @click="operate(demand)">修改</a> | <a @click="deleteItem(demand)">删除</a></td>
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
    <u-dialog fixId="pickerWrapper" :title="updatingObj.code ? '修改需求信息' : '发布求购'" v-model="showUpdate">
      <div slot="content">
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>品牌：</span>
          <div class="content inline-block">
            <u-input placeholder="请输入品牌" v-model="updatingObj.brand"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>型号：</span>
          <div class="content inline-block">
            <u-input placeholder="请输入型号" v-model="updatingObj.model"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block">规格：</span>
          <div class="content inline-block">
            <u-input placeholder="请输入规格" v-model="updatingObj.spec"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>数量：</span>
          <div class="content inline-block">
            <u-input reg="^\d*$" placeholder="请输入数量" v-model.number="updatingObj.amount"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>预计交期：</span>
          <div class="content inline-block">
            <u-input reg="^\d*$" class="inline-block date-input" v-model.number="updatingObj.leastDelivery"></u-input>
            -
            <u-input reg="^\d*$" class="inline-block date-input" v-model.number="updatingObj.lastDelivery"></u-input> 天
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>截止日期：</span>
          <div class="content inline-block">
            <u-date-picker fixId="pickerWrapper" class="date-picker" v-model="updatingObj.deadlineDate"></u-date-picker>
          </div>
        </div>
      </div>
      <template slot="footer">
        <button class="u-btn u-btn-cancel" @click="showUpdate = false">取消</button>
        <button class="u-btn u-btn-submit" @click="submit">确定</button>
      </template>
    </u-dialog>
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
    date: '',
    showUpdate: false,
    demandList: [],
    updatingObj: {
      brand: '',
      model: '',
      spec: '',
      amount: '',
      leastDelivery: '',
      lastDelivery: '',
      deadlineDate: ''
    }
  }),
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.apis.demand.myPageDemand({ pageSize: this.pager.size, pageNumber: this.pager.page })
        .then(res => {
          this.requestDeal(res, data => {
            this.demandList = data.demand || []
            this.demandList.forEach(item => {
              this.$set(item, 'checked', false)
            })
            this.pager.count = data.pagingInfo.totalCount
          })
        })
    },
    resizeData (size) {
      this.pager.size = size
    },
    deleteItem (demand) {
      this.$confirm('确认要删除选中的内容吗？').then(() => {
        this.apis.demand.delDemand({ code: demand.code }).then(res => {
          this.requestDeal(res, () => {
            this.$message.success('删除成功')
            this.loadData()
          })
        }, err => {
          this.errDeal(err, '删除失败')
        })
      }, () => {})
    },
    // 新增/修改点击
    operate (item) {
      if (item) {
        for (let key in this.updatingObj) {
          this.updatingObj[key] = item[key]
        }
        this.updatingObj.code = item.code
      } else {
        this.updatingObj = {
          brand: '',
          model: '',
          spec: '',
          amount: '',
          leastDelivery: '',
          lastDelivery: '',
          deadlineDate: ''
        }
      }
      this.showUpdate = true
    },
    // 新增/修改校验
    check () {
      for (let key in this.updatingObj) {
        if (key !== 'spec' && !this.updatingObj[key]) {
          this.$message.info('请输入必填项')
          return false
        }
      }
      return true
    },
    submit () {
      this.check() && this.doSubmit().then(res => {
        this.requestDeal(res, () => {
          this.$message.success(`${this.updatingObj.code ? '修改' : '发布'}成功`)
          this.showUpdate = false
          this.loadData()
        })
      })
    },
    doSubmit () {
      return this.updatingObj.code ? this.apis.demand.modifyDemand({ demand: this.updatingObj }) : this.apis.demand.addDemand({ demand: this.updatingObj })
    },
    getCheckedItems () {
      return this.demandList.reduce((arr, item) => {
        item.checked && arr.push(item)
        return arr
      }, [])
    },
    onCheckAll () {
      this.demandList.forEach(item => {
        item.checked = this.checkAll
      })
    },
    onCheckItem () {
      let checkItems = this.getCheckedItems()
      if (checkItems.length === this.demandList.length) {
        // 全选状态
        this.checkAll = true
      } else if (checkItems.length < this.demandList.length) {
        // 半选/未选状态
        this.checkAll = false
      }
    },
    // 批量删除
    batchDelete () {
      let checkedItems = this.getCheckedItems()
      if (checkedItems.length) {
        this.$confirm('确认要批量删除吗？').then(() => {
          let codeItems = checkedItems.reduce((arr, item) => {
            arr.push(item.code)
            return arr
          }, [])
          this.apis.demand.batchDelete({ code: codeItems }).then(res => {
            this.requestDeal(res, () => {
              this.$message.success('删除成功')
              this.loadData()
            }, err => {
              this.errDeal(err, '删除失败')
            })
          })
        }, () => {})
      } else {
        this.$message.info('请勾选要删除的需求')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .user-demand {
    .operate {
      height: 48px;
      line-height: 48px;
    }
    .demand-list {
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
