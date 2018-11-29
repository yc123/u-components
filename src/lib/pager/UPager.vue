<template>
  <div class="com-pager-wrap" v-if="totalCount > pageSize">
    <ul class="com-pagination list-inline inline-block">
      <li class="prev" @click="onPrev">
        <i class="iconfont icon-arrow-left1"></i>
      </li>
      <li v-for="pager in pagerList"
          :class="{
          'less': pager.isBack && pager.type === 'more',
           'more': !pager.isBack && pager.type === 'more',
            'active': pager.page === page
            }"
          @click="onPageSelect(pager)">
        <span v-if="pager.type === 'page'">{{pager.page}}</span>
        <span v-if="pager.type === 'more'">
          <i class="iconfont icon-icon_more"></i>
          <i class="iconfont icon-arrowleftdl arrow" v-if="pager.isBack"></i>
          <i class="iconfont icon-arrowrightdl arrow" v-else></i>
        </span>
      </li>
      <li class="last" @click="onLast">
        <i class="iconfont icon-arrow-right1"></i>
      </li>
    </ul>
    <u-select class="inline-block size-select"
              v-model="bindingSize"
              :list="pageSizeList"
              @input="changeSize"
    ></u-select>
    <div class="input-wrap inline-block">
      跳至&nbsp;
      <input type="number"
             class="page-number inline-block"
             @keyup.13="onInputChange"
             v-model.number="bindingPage"
      >
      &nbsp;页
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UPager',
    data () {
      return {
        page: 1,
        bindingPage: 1,
        pagerList: [],
        totalPage: 0,
        pageSizeList: [
          {
            text: '10条/页',
            value: 10
          },
          {
            text: '20条/页',
            value: 20
          },
          {
            text: '30条/页',
            value: 30
          },
          {
            text: '50条/页',
            value: 50
          }
        ],
        bindingSize: 10
      }
    },
    watch: {
      value: {
        handler: function (val = 1) {
          this.page = Number(val)
          this.bindingPage = this.page
          this.initPagerList()
        },
        immediate: true
      },
      totalCount: {
        handler: function () {
          this.initPagerList()
        },
        immediate: true
      },
      pageSize: {
        handler: function (val = 10) {
          this.bindingSize = val
          this.initPagerList()
        },
        immediate: true
      }
    },
    props: {
      totalCount: {
        type: Number,
        default: 0
      },
      pageSize: {
        type: Number,
        default: 10
      },
      value: {}
    },
    methods: {
      initPagerList () {
        this.totalPage = Math.ceil(this.totalCount / this.bindingSize) || 1
        this.pagerList = []
        if (this.totalPage < 8) {
          for (let page = 1; page <= this.totalPage; page++) {
            this.pushPagerList('page', page)
          }
        } else {
          for (let page = 1; page <= this.totalPage; page++) {
            if (this.page <= 4) {
              if (page <= 6) {
                this.pagerList.push({
                  page: page,
                  current: this.page === page,
                  type: 'page'
                })
              } else if (page === 7) {
                this.pushPagerList('more', page)
              } else if (page === this.totalPage) {
                this.pushPagerList('page', page)
              }
            } else if (this.page >= this.totalPage - 3) {
              if (page === 1) {
                this.pushPagerList('page', page)
              } else if (page === this.totalPage - 6) {
                this.pushPagerList('more', page)
              } else if (page > this.totalPage - 6) {
                this.pushPagerList('page', page)
              }
            } else {
              if (page === 1 || page === this.totalPage || ((page > this.page - 3) && (page < this.page + 3))) {
                this.pushPagerList('page', page)
              } else if (page === 2 || page === this.totalPage - 1) {
                this.pushPagerList('more', page)
              }
            }
          }
        }
      },
      pushPagerList(type, page) {
        if (type === 'page') {
          this.pagerList.push({
            page: page,
            current: this.page === page,
            type: 'page'
          })
        } else if (type === 'more') {
          this.pagerList.push({
            type: 'more',
            isBack: page < this.page
          })
        }
      },
      setPage (page) {
        if (page < 1) {
          this.page = 1
        } else if (page > this.totalPage) {
          this.page = this.totalPage
        } else {
          this.page = page
        }
        this.bindingPage = this.page
        this.initPagerList()
        this.$emit('input', this.page)
      },
      onPageSelect (pager) {
        if (pager.type === 'page' && !pager.current) {
          this.setPage(pager.page)
        } else if (pager.type === 'more') {
          this.setPage(pager.isBack ? (this.page - 5) : (this.page + 5))
        }
      },
      onPrev () {
        this.setPage(1)
      },
      onLast () {
        this.setPage(this.totalPage)
      },
      onInputChange () {
        this.setPage(this.bindingPage)
      },
      changeSize () {
        this.initPagerList()
        this.$emit('sizeChangeAction', this.bindingSize)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .com-pager-wrap {
    $base-color: #1890FF;
    margin: 40px 0;
    text-align: right;
    padding-right: 20px;
    .com-pagination {
      font-size: 0;
      li {
        background-color: #fff;
        border: 1px solid #d9d9d9;
        font-size: 14px;
        min-width: 32px;
        height: 32px;
        line-height: 30px;
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
        user-select: none;
        margin-right: 8px;
        padding: 0 12px;
        &.prev, &.last {
          i {
            font-size: 12px;
            font-weight: bold;
          }
        }
        &.less, &.more {
          background: transparent;
          border: none;
          .arrow {
            display: none;
          }
          &:hover {
            .arrow {
              display: inherit;
            }
            .icon-icon_more {
              display: none;
            }
          }
        }
        &:hover {
          background: #e6f7ff;
        }
        &.active {
          background: $base-color;
          color: #fff;
        }
      }
    }
    .size-select {
      width: 94px;
    }
    .input-wrap {
      margin-left: 10px;
      .page-number {
        width: 48px;
        height: 32px;
        padding: 0 10px;
        font-size: 14px;
        border-radius: 4px;
        border: 1px solid #D9D9D9;
        &:focus {
          border-color: $base-color;
        }
      }
    }
  }
</style>
