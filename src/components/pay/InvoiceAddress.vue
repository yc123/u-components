<template>
  <div class="pay-operate-modal shipping-address">
    <div class="content-line">
      <span class="title"><i class="must">*</i>收票地址：</span>
      <u-address-select :fixId="fixId" class="addr-input"></u-address-select>
      <u-input placeholder="请填写详细地址" class="base-input"></u-input>
    </div>
    <div class="content-line">
      <span class="title"><i class="must">*</i>收票人：</span>
      <u-input placeholder="请输入收票人姓名" class="base-input"></u-input>
    </div>
    <div class="content-line">
      <span class="title"><i class="must">*</i>联系电话：</span>
      <u-input placeholder="请输入联系电话" class="base-input"></u-input>
    </div>
    <div class="footer">
      <u-check-box v-model="isDefault">设为默认</u-check-box>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    isDefault: true
  }),
  props: {
    fixId: {
      default: null,
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/css/payModal";
  .shipping-address {
    .addr-input {
      width: 164px;
      display: inline-block;
      margin-right: 8px;
      vertical-align: middle;
    }
  }
</style>
