<template>
  <div class="u-modal" v-if="show">
    <div class="u-dialog" :id="fixId" :style="{ width: `${width}px` }">
      <p class="udb-title">
        {{ title }}
        <i class="iconfont icon-close1 fr" @click="close"></i>
      </p>
      <div class="ubt-content">
        <slot name="content"></slot>
      </div>
      <div class="ubt-footer u-btn-wrap" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'UDialog',
    data: () => ({
      show: false
    }),
    props: {
      value: {},
      title: {
        type: String,
        default: ''
      },
      fixId: {
        type: String,
        default: ''
      },
      width: {
        type: Number,
        default: 483
      }
    },
    watch: {
      value: {
        handler (val) {
          this.show = val
        },
        immediate: true
      }
    },
    methods: {
      close () {
        this.show = false
        this.$emit('input', false)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .u-dialog {
    max-height: calc(90vh);
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,0.20);
    border-radius: 4px;
    .udb-title {
      height: 55px;
      line-height: 55px;
      border-bottom: 1px solid rgba(0,0,0,0.09);
      font-size: 16px;
      color: rgba(0,0,0,0.85);
      padding: 0 24px;
      position: relative;
      font-weight: bold;
      i {
        color: rgba(0,0,0,.45);
        cursor: pointer;
        &:hover {
          color: rgba(0,0,0,.65);
        }
      }
    }
    .ubt-content {
      padding: 21px 24px;
      word-break: break-all;
    }
    .ubt-footer {
      padding: 10px 0;
      border-top: 1px solid rgba(0,0,0,0.09);
    }
  }
</style>
