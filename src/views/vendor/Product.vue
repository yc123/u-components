<template>
  <div class="vendor-product">
    <div class="base-title-block test-border">
      <span class="title active">全部产品</span>
      <span class="title">已上架</span>
      <span class="title">未上架</span>
      <button class="fr" @click="updateItem('insert')">单个录入</button>
      <button class="fr" @click="showImport = true">批量导入</button>
    </div>
    <div class="base-title-block test-border operate">
      更多操作：
      <button @click="batchOperate('revoke')">批量下架</button>
      <button @click="batchOperate('delete')">删除选中</button>
    </div>
    <table class="base-table test-border product-list">
      <thead>
      <tr>
        <th width="20%"><u-check-box v-model="check1" boxId="check1"></u-check-box></th>
        <th width="20%">品牌</th>
        <th width="20%">型号</th>
        <th width="20%">规格</th>
        <th width="20%">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><u-check-box v-model="check2" boxId="check2"></u-check-box></td>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td>
          <button>上架 </button>
          <button>下架</button>
          <div>
            <a @click="updateItem('update')">修改</a> |
            <a @click="deleteItem">删除</a>
          </div>
        </td>
      </tr>
      <tr>
        <td><u-check-box v-model="check3" boxId="check3"></u-check-box></td>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td>asdhadad</td>
        <td>
          <button>下架</button>
          <div>
            <a>修改</a> |
            <a>删除</a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <u-pager
      v-model="pager.page"
      :totalCount="pager.count"
      :pageSize="pager.size"
    ></u-pager>
    <u-dialog title="批量导入" v-model="showImport">
      <div slot="content" class="import">
        <p class="title">第一步，下载Excel模板</p>
        <button class="u-btn u-btn-submit">下载模板</button>
        <p class="title">第二步，上传产品导入表格</p>
        <label class="import-box">
          <input type="file" class="box-input">
          <button class="u-btn u-btn-submit">选择文件</button>
        </label>
      </div>
      <div slot="footer">
        <button class="u-btn u-btn-cancel" @click="showImport = false">取消</button>
        <button class="u-btn u-btn-submit">确定</button>
      </div>
    </u-dialog>
    <u-dialog :title="updateType === 'update' ? '修改产品信息' : '单个录入'" v-model="showUpdate">
      <div slot="content" class="insert">
        <div class="form-line">
          <span class="title">品牌：</span>
          <div class="content">
            <u-input placeholder="请输入"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title">型号：</span>
          <div class="content">
            <u-input placeholder="请输入"></u-input>
          </div>
        </div>
        <div class="form-line">
          <span class="title">规格：</span>
          <div class="content">
            <u-input placeholder="请输入"></u-input>
          </div>
        </div>
      </div>
      <div slot="footer">
        <button class="u-btn u-btn-cancel" @click="showUpdate = false">取消</button>
        <button class="u-btn u-btn-submit">确定</button>
      </div>
    </u-dialog>
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
    },
    showImport: false,
    showUpdate: false,
    updateType: ''
  }),
  methods: {
    deleteItem () {
      this.$confirm('确认要批量删除吗？').then(() => {
        this.$message.success('删除成功')
      }, () => {})
    },
    /*
    * 修改产品信息/单个录入
    * @type:
    *     insert => 单个录入
    *     update => 修改
    * */
    updateItem (type) {
      this.updateType = type
      this.showUpdate = true
    },
    /*
   * 批量下架/批量删除
   * @type:
   *     revoke => 下架
   *     delete => 删除
   * */
    batchOperate (type) {
      if (type === 'revoke') {
        this.$confirm('确定要批量下架吗？').then(() => {
          this.$message.success('下架成功')
        }, () => {})
      } else {
        this.$confirm('确定要批量删除吗？').then(() => {
          this.$message.success('删除成功')
        }, () => {})
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .vendor-product {
    .operate {
      height: 48px;
      line-height: 48px;
    }
    .product-list {
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
