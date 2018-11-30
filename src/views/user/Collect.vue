<template>
  <div class="user-demand">
    <div class="base-title-block test-border">
      <span class="title active">全部需求</span>
    </div>
    <div class="base-title-block test-border operate">
      更多操作：<button>批量删除</button>
    </div>
    <table class="base-table test-border demand-list">
      <thead>
      <tr>
        <th width="10%"><u-check-box v-model="check1" boxId="check1"></u-check-box></th>
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
      <tr>
        <td><u-check-box v-model="check2" boxId="check2"></u-check-box></td>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td>asdhasdasdsaadad</td>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td><a @click="deleteItem">删除</a></td>
      </tr>
      <tr>
        <td><u-check-box v-model="check3" boxId="check3"></u-check-box></td>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td><a>删除</a></td>
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
    check1: false,
    check2: false,
    check3: false,
    pager: {
      size: 10,
      count: 1000,
      page: 1
    }
  }),
  methods: {
    deleteItem () {
      this.$confirm('确认要批量删除吗？').then(() => {
        this.$message.success('删除成功')
      }, () => {})
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
