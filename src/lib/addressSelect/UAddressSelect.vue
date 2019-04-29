<template>
  <div class="u-address-select" ref="uAddressSelect" @click.stop>
    <div class="uas-input"
         :class="{'u-placeholder' : !done, 'hide-bottom-border': show}"
         :title="done ? `${currentAddress.province}/${currentAddress.city}/${currentAddress.district}` : ''"
         @click="setShow(!show)">
      {{done ? `${currentAddress.province}/${currentAddress.city}/${currentAddress.district}` : '-请选择地区-'}}
      <i class="iconfont icon-arrow-down"></i>
    </div>
    <div class="u-address-box" v-show="show" @click.stop ref="selectBox" :style="{'left': `${boxPosition.left}px`, 'top': `${boxPosition.top}px`, 'position': boxPosition.position}">
      <i class="hover-border" :style="{width: $refs.uAddressSelect && `${$refs.uAddressSelect.clientWidth - 2}px`}"></i>
      <div class="uas-box-title">
        <div class="item" :class="{active: activeObj.type === 'province'}" v-if="currentAddress.province" @click="reselect('province')">{{ currentAddress.province }}<i class="iconfont icon-arrow-down"></i></div>
        <div class="item" :class="{active: activeObj.type === 'city'}" v-if="currentAddress.city" @click="reselect('city')">{{ currentAddress.city }}<i class="iconfont icon-arrow-down"></i></div>
        <div class="item" :class="{active: !activeObj.type}" @click="reselect()">请选择<i class="iconfont icon-arrow-down"></i></div>
        <i class="iconfont icon-close1 fr" @click="close"></i>
      </div>
      <ul class="uas-box-content">
        <li v-for="item in currentItems"
            :key="item"
            :title="item"
            :class="{ active: item === activeObj.item }"
        >
          <span @click="setItem(item)">{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'UAddressSelect',
    data () {
      return {
        currentAddress: {
          province: null,
          city: null,
          district: null
        },
        show: false,
        activeObj: {
          type: '',
          item: ''
        },
        boxPosition: {
          left: 0,
          top: 0,
          position: 'fixed'
        }
      }
    },
    props: {
      value: {},
      fixId: {
        type: String,
        default: ''
      },
      flexId: {
        type: String,
        default: ''
      }
    },
    mounted () {
      window.addEventListener('click', this.close, false)
    },
    beforeDestroy () {
      window.removeEventListener('click', this.close, false)
    },
    watch: {
      value: {
        handler: function (val) {
          if (val) {
            for (let key in val) {
              this.currentAddress[key] = val[key]
            }
            if (this.currentAddress.district) {
              this.activeObj.type = 'district'
              this.activeObj.item = this.currentAddress.district
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      areaData () {
        return require('../../assets/data/city.json')
      },
      selectingProvince () {
        return !this.currentAddress.province || this.activeObj.type === 'province'
      },
      selectingCity () {
        return this.currentAddress.province && !this.currentAddress.city || this.activeObj.type === 'city'
      },
      selectingArea () {
        return this.currentAddress.province && this.currentAddress.city
      },
      done () {
        return this.currentAddress.province && this.currentAddress.city && this.currentAddress.district
      },
      province () {
        let province = []
        for (let prov in this.areaData) {
          province.push(prov)
        }
        return province
      },
      city () {
        let cities = []
        if (this.currentAddress.province) {
          for (let city in this.areaData[this.currentAddress.province]) {
            cities.push(city)
          }
        }
        return cities
      },
      area () {
        let areas = []
        if (this.currentAddress.province && this.currentAddress.city) {
          this.areaData[this.currentAddress.province][this.currentAddress.city].forEach(item => {
            areas.push(item)
          })
        }
        return areas
      },
      // 当前选择的地址
      currentItems () {
        return this.selectingProvince && this.province
          || this.selectingCity && this.city
          || this.selectingArea && this.area
      }
    },
    methods: {
      selectProvince (item) {
        this.currentAddress.city = null
        this.currentAddress.district = null
        this.currentAddress.province = item
      },
      selectCity (item) {
        this.currentAddress.district = null
        this.currentAddress.city = item
      },
      selectArea (item) {
        this.currentAddress.district = item
        this.emitSelect()
      },
      setItem (item) {
        if (this.selectingProvince) {
          this.selectProvince(item)
        } else if (this.selectingCity) {
          this.selectCity(item)
        } else if (this.selectingArea) {
          this.selectArea(item)
        }
        this.clearReselect()
      },
      emitSelect () {
        this.$emit('input', JSON.parse(JSON.stringify(this.currentAddress)))
        this.close()
      },
      close () {
        if (this.show) {
          this.clearReselect()
          this.setShow(false)
        }
      },
      setShow (flag) {
        if (flag) {
          let offsetY
          let offsetX
          if (!this.fixId) {
            let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
            offsetY = this.$refs.uAddressSelect.offsetTop - scrolled + this.$refs.uAddressSelect.clientHeight - 2
            offsetX = this.$refs.uAddressSelect.offsetLeft
            if (this.flexId) {
              let obj = document.getElementById(this.flexId)
              let boxRect = obj.getBoundingClientRect()
              // rect计算需要补充scrolled高度
              offsetY += boxRect.y + scrolled
              offsetX += boxRect.x
            }
            this.boxPosition.position = 'absolute'
          } else {
            let obj = document.getElementById(this.fixId)
            offsetY = this.$refs.uAddressSelect.offsetTop + obj.offsetTop - obj.clientHeight / 2 + this.$refs.uAddressSelect.clientHeight - 2
            offsetX = this.$refs.uAddressSelect.offsetLeft + obj.offsetLeft - obj.clientWidth / 2
            this.boxPosition.position = 'fixed'
          }
          this.boxPosition.left = offsetX
          this.boxPosition.top = offsetY
          document.body.appendChild(this.$refs.selectBox)
          document.body.addEventListener('scroll', this.reloadBox)
          window.addEventListener('resize', this.reloadBox)
        } else {
          this.$refs.selectBox && document.body.removeChild(this.$refs.selectBox)
          document.body.removeEventListener('scroll', this.reloadBox)
          window.removeEventListener('resize', this.reloadBox)
        }
        this.show = flag
      },
      hide () {
        this.show && this.setShow(false)
      },
      reloadBox () {
        this.hide()
        this.setShow(true)
      },
      reselect (type) {
        if (type) {
          this.activeObj.type = type
          this.activeObj.item = this.currentAddress[type]
        } else {
          this.clearReselect()
          if (this.currentAddress.district) {
            this.activeObj.item = this.currentAddress.district
          }
        }
      },
      clearReselect () {
        this.activeObj.type = ''
        this.activeObj.item = ''
      }
    }
  }
</script>
<style lang="scss" scoped>
  .u-address-select {
    position: relative;
    display: inline-block;
    width: 278px;
    .uas-input {
      background: #FFFFFF;
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: 2px;
      font-size: 14px;
      width: 100%;
      overflow: hidden;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 32px;
      line-height: 32px;
      padding: 0 10px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      &.hide-bottom-border {
        position: relative;
        z-index: 1;
        border-bottom-color: #fff;
      }
      i {
        float: right;
        font-size: 12px;
        color: rgba(0,0,0,0.25);
      }
    }
  }
</style>
