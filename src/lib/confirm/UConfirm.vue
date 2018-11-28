<template>
  <div class="u-modal">
    <div class="u-confirm">
      <p class="u-confirm-title"><i class="iconfont icon-question"></i>{{text}}</p>
      <p class="u-confirm-text" v-if="description">{{description}}</p>
      <div class="u-confirm-footer u-btn-wrap">
        <button class="u-btn u-btn-cancel" @click="cancel">取消</button>
        <button class="u-btn u-btn-submit" @click="sure">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'UConfirm',
    data: () => ({
      text: '',
      description: '',
      visible: false,
      resolve: null,
      reject: null
    }),
    methods: {
      cancel () {
        this.reject && this.reject()
        this.close()
      },
      sure () {
        this.resolve && this.resolve()
        this.close()
      },
      close () {
        this.$destroy(true)
        this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
        this.visible = false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .u-confirm {
    background: #FFFFFF;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,0.20);
    border-radius: 4px;
    max-height: calc(90vh);
    overflow-y: auto;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 32px 32px 24px;
    max-width: 443px;
    word-break: break-all;
    min-width: 278px;
    .u-confirm-title {
      font-size: 16px;
      color: rgba(0,0,0,0.85);
      line-height: 24px;
      position: relative;
      text-align: center;
      i {
        color: #F5222D;
        font-size: 22px;
        margin-right: 10px;
      }
    }
    .u-confirm-text {
      margin-top: 12px;
      font-size: 14px;
      line-height: 22px;
      padding-left: 38px;
    }
    .u-confirm-footer {
      margin-top: 24px;
    }
  }
</style>
