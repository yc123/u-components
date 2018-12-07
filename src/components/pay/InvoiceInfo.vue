<template>
  <div class="pay-operate-modal invoice-info">
    <div class="content-line">
      <i class="must">*</i>发票信息：
      <u-radio-group class="inline-block" :items="items" v-model.number="invoiceType"></u-radio-group>
    </div>
    <div class="content-line" v-show="invoiceType === 2">
      <span class="title"><i class="must">*</i>类型：</span>
      <u-select :list="types" v-model="type" class="base-input"></u-select>
    </div>
    <template v-if="invoiceType === 1 || type === 1">
      <div class="content-line">
        <span class="title"><i class="must">*</i>公司名称：</span>
        <u-input placeholder="请填写公司名称" class="base-input"></u-input>
      </div>
      <div class="content-line">
        <span class="title"><i class="must">*</i>纳税人识别号：</span>
        <span class="content">
        <u-input placeholder="请输入纳税人识别号" class="base-input"></u-input>
      </span>
      </div>
      <div class="content-line">
        <span class="title"><i class="must">*</i>开户银行：</span>
        <span class="content">
        <u-input placeholder="请输入开户银行" class="base-input"></u-input>
      </span>
      </div>
      <div class="content-line">
        <span class="title"><i class="must">*</i>开户银行账号：</span>
        <span class="content">
        <u-input placeholder="请输入开户银行账号" class="base-input"></u-input>
      </span>
      </div>
      <div class="content-line">
        <span class="title"><i class="must">*</i>注册固定电话：</span>
        <span class="content">
        <u-input placeholder="请输入注册固定电话" class="base-input"></u-input>
      </span>
      </div>
      <div class="content-line">
        <span class="title"><i class="must">*</i>企业注册地址：</span>
        <span class="content">
        <u-input placeholder="请输入企业注册地址" class="base-input"></u-input>
      </span>
      </div>
    </template>
    <div class="content-line" v-else>
      <span class="title"><i class="must">*</i>姓名：</span>
      <span class="content">
        <u-input placeholder="请输入姓名" class="base-input"></u-input>
      </span>
    </div>
    <div class="footer">
      <u-check-box v-model="isDefault">设为默认</u-check-box>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    invoiceType: 2,
    isDefault: false,
    items: [
      {
        label: '增值税专用发票(一般纳税人公司)',
        value: 1
      },
      {
        label: '增值税普通发票(不可抵扣)',
        value: 2
      }
    ],
    types: [
      {
        text: '企业',
        value: 1
      },
      {
        text: '个人',
        value: 2
      }
    ],
    type: 1
  })
}
</script>
<style lang="scss" scoped>
  @import "../../assets/css/payModal";
  .invoice-info {
    .content-line .title {
      width: 106px;
    }
  }
</style>
