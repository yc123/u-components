<template>
  <div class="u-address-select" @click.stop>
    <div class="uas-input"
         :class="{'u-placeholder' : !done, 'hide-bottom-border': show}"
         :title="done ? `${currentAddress.province}/${currentAddress.city}/${currentAddress.area}` : ''"
         @click="show = !show">
      {{done ? `${currentAddress.province}/${currentAddress.city}/${currentAddress.area}` : '-请选择地区-'}}
      <i class="iconfont icon-arrow-down"></i>
    </div>
    <div class="uas-box" v-show="show">
      <div class="uas-box-title">
        <div class="item" :class="{active: activeObj.type === 'city'}" v-if="currentAddress.city" @click="reselect('city')">{{ currentAddress.city }}<i class="iconfont icon-arrow-down"></i></div>
        <div class="item" :class="{active: activeObj.type === 'province'}" v-if="currentAddress.province" @click="reselect('province')">{{ currentAddress.province }}<i class="iconfont icon-arrow-down"></i></div>
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
          area: null
        },
        show: false,
        activeObj: {
          type: '',
          item: ''
        }
      }
    },
    props: {
      value: {}
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
            if (this.currentAddress.area) {
              this.activeObj.type = 'area'
              this.activeObj.item = this.currentAddress.area
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
        return this.currentAddress.province && this.currentAddress.city && this.currentAddress.area
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
        this.currentAddress.area = null
        this.currentAddress.province = item
      },
      selectCity (item) {
        this.currentAddress.area = null
        this.currentAddress.city = item
      },
      selectArea (item) {
        this.currentAddress.area = item
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
        this.clearReselect()
        this.show = false
      },
      reselect (type) {
        if (type) {
          this.activeObj.type = type
          this.activeObj.item = this.currentAddress[type]
        } else {
          this.clearReselect()
          if (this.currentAddress.area) {
            this.activeObj.item = this.currentAddress.area
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
    .uas-input {
      background: #FFFFFF;
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: 2px;
      font-size: 14px;
      width: 278px;
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
    .uas-box {
      position: absolute;
      left: 0;
      top: 31px;
      background: #fff;
      border: 1px solid rgba(0,0,0,0.15);
      width: 456px;
      padding: 8px 16px;
      border-radius: 0 4px 4px 4px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      .uas-box-title {
        height: 24px;
        line-height: 24px;
        border-bottom: 1px solid #1890FF;
        font-size: 0;
        .item {
          display: inline-block;
          $border: 1px solid rgba(0,0,0,0.15);
          font-size: 14px;
          height: 24px;
          line-height: 24px;
          padding: 0 4px;
          margin-right: 4px;
          border: {
            top: $border;
            left: $border;
            right: $border;
            radius: 2px;
          }
          cursor: pointer;
          i {
            font-size: 12px;
            margin-left: 4px;
          }
          &.active {
            $border-active: 1px solid #1890FF;
            border: {
              top: $border-active;
              left: $border-active;
              right: $border-active;
              bottom: 1px solid #fff;
            }
          }
        }
        > i {
          cursor: pointer;
          color: rgba(0,0,0,0.45);
          &:hover {
            color: rgba(0,0,0,0.65);
          }
        }
      }
      .uas-box-content {
        font-size: 0;
        li {
          font-size: 14px;
          display: inline-block;
          vertical-align: middle;
          width: 25%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-right: 16px;
          height: 26px;
          margin-top: 8px;
          span {
            display: inline-block;
            padding: 0 5px;
            cursor: pointer;
            border-radius: 2px;
            line-height: 26px;
            &:hover {
              background: #E6F7FF;
            }
          }
          &.active {
            span {
              background: #1890FF;
              color: #fff;
            }
          }
          &:nth-child(4n) {
            padding-right: 0;
          }
        }
      }
    }
  }
</style>
