<template>
  <div class="com-select" @click.stop="setShowSelect($event, !showSelect)">
    <template v-if="selectedIndex > -1">
      {{list[selectedIndex].text}}
    </template>
    <span class="u-placeholder" v-else>{{ placeholder }}</span>
    <i class="iconfont icon-arrow-down"></i>
    <ul class="u-select-ul" v-show="!onlyOne && showSelect" v-if="(list && list.length > 1) || (list.length === 1 && selectedIndex !== 0)">
      <li @click.stop="setSelect(item, index)" v-for="(item, index) in list" v-show="index !== selectedIndex" v-text="item.text"></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'USelect',
    props: {
      list: {
        default: () => [],
        type: Array
      },
      onlyOne: {
        type: Boolean,
        default: false
      },
      value: {},
      placeholder: {
        type: String,
        default: '请选择'
      }
    },
    watch: {
      value: {
        handler: function (val) {
          if (val) {
            this.selectedIndex = this.list.findIndex(item => item.value === val) || 0
          }
        },
        immediate: true
      }
    },
    data () {
      return {
        selectedIndex: -1,
        showSelect: false
      }
    },
    mounted () {
      this.$nextTick(() => {
        window.addEventListener('click', this.clearShowSelect, false)
      })
    },
    beforeDestroy () {
      window.removeEventListener('click', this.clearShowSelect, false)
    },
    methods: {
      setShowSelect (event, flag) {
        if (this.onlyOne) {
          event = event || {}
          let selects = [...document.getElementsByClassName('com-select')]
          selects.forEach((el, index) => {
            if (el !== (event.target || event.srcElement)) {
              el.querySelector('.u-select-ul').style.display = 'none'
            } else {
              el.querySelector('.u-select-ul').style.display = 'block'
            }
          })
        } else {
          this.showSelect = flag
        }

      },
      setSelect (item, index) {
        this.$emit('input', item.value)
        this.selectedIndex = index
        this.setShowSelect(null, false)
      },
      clearShowSelect () {
        this.setShowSelect(null, false)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .com-select {
    display: inline-block;
    vertical-align: middle;
    width: 310px;
    height: 32px;
    line-height: 32px;
    padding: 0 12px;
    background: #FFFFFF;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 4px;
    position: relative;
    cursor: default;
    text-align: left;
    i {
      font-size: 12px;
      color: rgba(0,0,0,0.25);
      position: absolute;
      right: 12px;
    }
    ul {
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      background: #FFFFFF;
      border: 1px solid #D9D9D9;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
      border-radius: 4px;
      z-index: 1;
      max-height: 160px;
      overflow-y: auto;
      li {
        height: 32px;
        line-height: 32px;
        padding: 0 12px;
        cursor: pointer;
        &:hover {
          background: #EDF2F5;
        }
      }
    }
  }
</style>
