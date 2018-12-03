<template>
  <div class="apply-publish container">
    <div class="publish-demand">
      <div class="header">发布求购</div>
      <div slot="content" class="content clearfix">
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>品牌：</span>
          <div class="content inline-block">
            <u-input placeholder="请输入品牌"
                     v-model="publishObj.brand"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>型号：</span>
          <div class="content inline-block">
            <u-input placeholder="请输入型号"
                     v-model="publishObj.model"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block">规格：</span>
          <div class="content inline-block">
            <u-input placeholder="请输入规格"
                     v-model="publishObj.spec"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>数量：</span>
          <div class="content inline-block">
            <u-input placeholder="请输入数量"
                     reg="^\d*$"
                     v-model="publishObj.amount"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>预计交期：</span>
          <div class="content inline-block">
            <u-input class="inline-block date-input"
                     placeholder="请输入"
                     reg="^\d*$"
                     v-model="publishObj.leastDelivery"></u-input> - <u-input class="inline-block date-input"
                                                                              placeholder="请输入"
                                                                              reg="^\d*$"
                                                                      v-model="publishObj.lastDelivery"></u-input> 天
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>截止日期：</span>
          <div class="content inline-block content-data">
            <u-date-picker class="date-picker"
                           placeholder="请先择"
                           v-model="publishObj.deadlineDate"></u-date-picker>
          </div>
        </div>
      </div>
      <div class="footer">
        <a class="publish-submit" @click="publish">发布求购</a>
      </div>
    </div>
    <table class="base-table publish-list">
      <thead>
      <tr>
        <th width="246">买家名称</th>
        <th width="156">品牌</th>
        <th width="216">型号</th>
        <th width="216">规格</th>
        <th width="132">需求数量</th>
        <th width="112">预计交期</th>
        <th width="112">截止日期</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="demand in demandList" :key="demand.code">
        <td :title="demand.uuName">{{demand.uuName || '-'}}</td>
        <td :title="demand.brand">{{demand.brand || '-'}}</td>
        <td :title="demand.model">{{demand.model || '-'}}</td>
        <td :title="demand.spec">{{demand.spec || '-'}}</td>
        <td :title="demand.amount">{{demand.amount || '-'}}</td>
        <td :title="`${demand.leastDelivery} - ${demand.lastDelivery}`">{{demand.leastDelivery}} - {{demand.lastDelivery}}天</td>
        <td :title="demand.deadlineDate">{{demand.deadlineDate || '-'}}</td>
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
    pager: {
      size: 10,
      count: 0,
      page: 1
    },
    date: '',
    publishObj: {
      brand: '',
      model: '',
      spec: '',
      amount: '',
      leastDelivery: '',
      lastDelivery: '',
      deadlineDate: ''
    },
    demandList: []
  }),
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.apis.demand.indexGetDemand({ pageSize: this.pager.size, pageNumber: this.pager.page })
        .then(res => {
          this.requestDeal(res, data => {
            this.demandList = data.demand
            this.pager.count = data.pagingInfo.totalCount
          })
        })
    },
    resizeData (size) {
      this.pager.size = size
      this.loadData()
    },
    publish () {
      if (this.publishObj.brand && this.publishObj.model && this.publishObj.amount && this.publishObj.leastDelivery && this.publishObj.lastDelivery && this.publishObj.deadlineDate) {
        this.apis.demand.addDemand({ demand: this.publishObj })
          .then(res => {
            this.requestDeal(res, () => {
              this.$message.success('发布成功')
              for (let key in this.publishObj) {
                this.publishObj[key] = ''
              }
            })
          })
      } else {
        this.$message.info('请填写完整信息')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .apply-publish {
    padding-bottom: 20px;
    .publish-demand {
      margin-bottom: 16px;
      background: #fff;
      .header{
        padding-left: 24px;
        height: 56px;
        line-height: 56px;
        font-size: 16px;
        color: rgba(0,0,0,0.85);
        border-bottom: 1px solid rgba(0,0,0,0.09);
      }
      .content {
        .form-line {
          float: left;
          width: 50%;
          text-align: center;
          .content-data{
            text-align: left;
          }
          &:first-child, &:nth-child(2){
            margin-top: 16px;
          }
          &:nth-child(even) {
            text-align: left;
          }
        }
      }
      .footer{
        margin: 0 auto;
        width: 100%;
        height: 64px;
        line-height: 64px;
        text-align: center;
        border-top: 1px solid rgba(0,0,0,0.09);
        .publish-submit{
          display: inline-block;
          width: 88px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          font-size: 14px;
          color: #FFFFFF;
          background: #555A68;
          border-radius: 4px;
        }
      }
    }
    .publish-list {
      background: #fff;
      thead {
        height: 40px;
        line-height: 40px;
        background: rgba(0,0,0,0.02);
      }
      tr th, tr td{
        &:first-child {
          padding-left: 16px;
        }
      }
      tbody tr {
        height: 58px;
        line-height: 58px;
        border-bottom: 1px solid rgba(0,0,0,0.09);
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
        text-align: left;
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
