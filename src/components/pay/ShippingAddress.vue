<template>
  <div class="pay-operate-modal shipping-address">
    <div class="content-line">
      <span class="title"><i class="must">*</i>收货地址：</span>
      <u-address-select :fixId="fixId" v-model="addrObj" class="addr-input"></u-address-select>
      <u-input placeholder="请填写详细地址" class="base-input" v-model="addrObj.addr"></u-input>
    </div>
    <div class="content-line">
      <span class="title"><i class="must">*</i>收货人：</span>
      <u-input placeholder="请输入收货人姓名" class="base-input" v-model="addrObj.buyerName"></u-input>
    </div>
    <div class="content-line">
      <span class="title"><i class="must">*</i>联系电话：</span>
      <u-input placeholder="请输入联系电话" class="base-input" v-model="addrObj.phone"></u-input>
    </div>
    <div class="footer">
      <u-check-box v-model="addrObj.defaultOption">设为默认</u-check-box>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    addrObj: {
      // 省
      province: '',
      // 市
      city: '',
      // 区
      district: '',
      // 详细地址
      addr: '',
      // 收货人姓名
      buyerName: '',
      // 联系电话
      phone: '',
      // 是否默认
      defaultOption: false
    }
  }),
  props: {
    fixId: {
      default: null,
      type: String
    },
    addr: {
      default: null,
      type: Object
    }
  },
  watch: {
    addr: {
      handler: function (val) {
        if (val) {
          for (let key in val) {
            this.addrObj[key] = val[key]
          }
        }
      },
      immediate: true
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
