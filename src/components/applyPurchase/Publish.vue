<template>
  <div class="apply-publish container">
    <div class="publish-demand">
      <div class="header">发布求购</div>
      <div slot="content" class="content">
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>品牌：</span>
          <div class="content inline-block">
            <u-input placeholder="请输入品牌"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>型号：</span>
          <div class="content inline-block">
            <u-input placeholder="请输入品牌"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block">规格：</span>
          <div class="content inline-block">
            <u-input placeholder="请输入品牌"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>数量：</span>
          <div class="content inline-block">
            <u-input placeholder="请输入品牌"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>预计交期：</span>
          <div class="content inline-block">
            <u-input class="inline-block date-input"></u-input> - <u-input class="inline-block date-input"></u-input> 天
          </div>
        </div>
        <div class="form-line">
          <span class="title inline-block"><i class="must">*</i>截止日期：</span>
          <div class="content inline-block content-data">
            <u-date-picker fixId="pickerWrapper" class="date-picker" v-model="date"></u-date-picker>
          </div>
        </div>
      </div>
      <template slot="footer">
        <button class="u-btn u-btn-submit">发布求购</button>
      </template>
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
      <tr>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td>asdhasdasdsaadad</td>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td>asdhadad</td>
      </tr>
      </tbody>
    </table>
    <u-pager
      v-model="pager.page"
      :totalCount="pager.count"
      :pageSize="pager.size"
    ></u-pager>
  </div>
</template>
<script>
export default {
  data: () => ({
    pager: {
      size: 10,
      count: 1000,
      page: 1
    },
    date: ''
  })
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
        overflow: hidden;
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
