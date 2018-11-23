<template>
  <div class="u-date-picker" @click.stop>
    <input class="u-dp-input" :placeholder="label" type="text" v-model="formatDate" readonly @click="setShowDatePicker(!showDatePicker)">
    <i class="icon-subfix iconfont icon-date-o"></i>
    <div class="date-picker" :class="{'auto-height': showDatePicker}">
      <div class="date-picker-title">
        <div class="fl">
          <template v-if="currentPickType === 0">
            <i class="icon iconfont icon-arrowleftdl" @click="setDirectYear('sub')"></i>
            <i class="icon iconfont icon-arrowleftl" @click="setDirectMonth('sub')"></i>
          </template>
          <i v-else class="icon iconfont icon-arrowleftdl" @click="setYearArea('sub')"></i>
        </div>
        <div class="dpt-content">
          <button @click="setCurrentPickType(2)" v-if="currentPickType !== 2">{{ dateObj.year }}年</button>
          <button v-if="currentPickType === 2">{{yearsArrs[0][0].value}}年-{{yearsArrs[3][2].value}}年</button>
          <button @click="setCurrentPickType(1)" v-if="currentPickType === 0">{{ dateObj.month }}月</button>
        </div>
        <div class="fr">
          <template v-if="currentPickType === 0">
            <i class="icon iconfont icon-arrowrightl" @click="setDirectMonth('add')"></i>
            <i class="icon iconfont icon-arrowrightdl" @click="setDirectYear('add')"></i>
          </template>
          <i v-else class="icon iconfont icon-arrowrightdl" @click="setYearArea('add')"></i>
        </div>
      </div>
      <div v-if="currentPickType === 0" class="date-picker-content">
        <ul class="dpc-title">
          <li><div class="dpc-content-item">日</div></li>
          <li><div class="dpc-content-item">一</div></li>
          <li><div class="dpc-content-item">二</div></li>
          <li><div class="dpc-content-item">三</div></li>
          <li><div class="dpc-content-item">四</div></li>
          <li><div class="dpc-content-item">五</div></li>
          <li><div class="dpc-content-item">六</div></li>
        </ul>
        <ul class="dpc-content" v-for="(days, index) in daysArrs" :key="index">
          <li
            v-for="(day, dayIndex) in days"
            :key="dayIndex"
          >
            <div class="dpc-content-item"
                 :class="{ disabled: day.disabled, active: day.active, today: day.isToday }"
                 @click="setDay(day)"
                 v-text="day.value">
            </div>
          </li>
        </ul>
      </div>
      <div v-if="currentPickType === 1" class="date-picker-content size-l">
        <ul class="dpc-content" v-for="(Months, index) in monthsArrs" :key="index">
          <li
            v-for="(month, MonthIndex) in Months"
            :key="MonthIndex"
          >
            <div class="dpc-content-item"
                 :class="{ disabled: month.disabled, active: month.active, today: month.isToday }"
                 v-text="`${month.value}月`"
                 @click="setMonth(month)">
            </div>
          </li>
        </ul>
      </div>
      <div v-if="currentPickType === 2" class="date-picker-content size-l">
        <ul class="dpc-content" v-for="(years, index) in yearsArrs" :key="index">
          <li
            v-for="(year, yearIndex) in years"
            :key="yearIndex"
          >
            <div class="dpc-content-item"
                 :class="{ disabled: year.disabled, active: year.active, today: year.isToday }"
                 v-text="year.value"
                 @click="setYear(year)">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  // 格式化date对象为字符串
  const _formatDate = (date, fmt) => {
    if (!date) {
      return null
    }
    // fmt = fmt.replace(/-/g, '/')
    if (typeof date === 'string') {
      date = new Date(Date.parse(date.replace(/-/g, '/')))
    }
    let o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  }
  export default {
    name: 'datePicker',
    data: () => ({
      /*
      *  当前选择的类型
      *  0: 日
      *  1: 月
      *  2: 年
      * */
      currentPickType: 0,
      // 31天的月份
      fullMonths: [1, 3, 5, 7, 8, 10, 12],
      // 30天的月份
      middleMonths: [4, 6, 9, 11],
      // 当前显示的时间对象
      dateObj: {
        year: '',
        month: '',
        day: '',
        weekDate: ''
      },
      // 天数选择列表
      daysArrs: [],
      // 月份选择列表
      monthsArrs: [],
      // 年份选择列表
      yearsArrs: [],
      // 是否显示时间选择
      showDatePicker: false,
      formatDate: ''
    }),
    props: {
      /*
      *  v-model绑定的初值，格式:
      *  @yyyy-MM-dd
      *  @timestamp
      *  输出的值为 Date对象
      * */
      value: {},
      label: {
        type: String,
        default: '选择时间'
      }
    },
    watch: {
      value: {
        handler: function (val) {
          this.initDate(val)
          this.initDaysArrs()
        },
        immediate: true
      }
    },
    mounted () {
      this.$nextTick(() => {
        window.addEventListener('click', this.hideDatePicker, false)
      })
    },
    destroyed () {
      window.removeEventListener('click', this.hideDatePicker, false)
    },
    methods: {
      // 初始化时间为当前时间
      initDate (date) {
        let today = date ? new Date(date) : new Date()
        this.dateObj.year = today.getFullYear()
        this.dateObj.month = today.getMonth() + 1
        this.dateObj.day = today.getDate()
        this.dateObj.weekDate = today.getDay()
        date && this.initFormatDate(this.getCurrentDate())
      },
      initFormatDate (currentDate) {
        this.formatDate = _formatDate(currentDate, 'yyyy-MM-dd')
      },
      /*,
      * 初始化daysArrs数组
      * @lastMonthDays：上个月天数
      * @currentMonthDays：本月天数
      * */
      initDays (lastMonthDays, currentMonthDays) {
        // 初始值当前显示的月
        // 从0开始要+1
        let current = 1 - (this.dateObj.weekDate - (this.dateObj.day % 7 - 1))
        // 大于0表示少显示了一排，需补上上一排的起始值
        current > 0 && (current -= 7)
        for (let i = 0; i < 42; i++) {
          if (i % 7 === 0) {
            this.daysArrs.push([])
          }
          let now = new Date()
          let selectedDate = new Date(this.value)
          this.daysArrs[parseInt(i / 7)].push({
            value: current < 1 ? (lastMonthDays + current) : current > currentMonthDays ? (Math.abs(current - currentMonthDays)) : current,
            active: selectedDate.getFullYear() === this.dateObj.year && selectedDate.getMonth() + 1 === this.dateObj.month && selectedDate.getDate() === current,
            disabled: current < 1 || current > currentMonthDays,
            isToday: current === now.getDate() && this.dateObj.month === now.getMonth() + 1 && this.dateObj.year === now.getFullYear()
          })
          current++
        }
      },
      // 初始化daysArrs数组
      initDaysArrs () {
        this.daysArrs = []
        if (this.middleMonths.includes(this.dateObj.month)) {
          // 这周有30天
          // 30天的上个月和下个月必定是31天
          this.initDays(31, 30)
        } else if (this.dateObj.month === 2) {
          // 如果是二月
          this.initDays(31, this.dateObj.year % 4 === 0 ? 29 : 28)
        } else {
          // 这周有31天
          let lastMonthDays
          if (this.fullMonths.includes(this.dateObj.month === 1 ? 12 : this.dateObj.month - 1)) {
            lastMonthDays = 31
          } else if (this.middleMonths.includes(this.dateObj.month === 1 ? 12 : this.dateObj.month - 1)) {
            lastMonthDays = 30
          } else {
            lastMonthDays = this.dateObj.year % 4 === 0 ? 29 : 28
          }
          this.initDays(lastMonthDays, 31)
        }
      },
      initMonthsArrs () {
        this.monthsArrs = []
        for (let i = 1; i <= 12; i++) {
          if (i % 3 === 1) {
            this.monthsArrs.push([])
          }
          this.monthsArrs[parseInt((i - 1) / 3)].push({
            value: i,
            active: this.dateObj.month === i,
            disabled: false,
            isToday: i === new Date().getMonth() + 1
          })
        }
      },
      /*
      * 初始化年数组
      * @startYear => 表示以xxx年为开始显示之后的12年
      * */
      initYearsArrs (startYear) {
        this.yearsArrs = []
        let current = startYear
        for (let i = 0; i < 12; i++) {
          if (i % 3 === 0) {
            this.yearsArrs.push([])
          }
          this.yearsArrs[parseInt(i / 3)].push({
            value: current,
            active: this.dateObj.year === current,
            disabled: false,
            isToday: current === new Date().getFullYear()
          })
          current++
        }
      },
      setCurrentPickType (type) {
        // 选择月份
        if (type === 1) {
          this.initMonthsArrs()
        } else if (type === 2) {
          // 选择年份
          this.initYearsArrs(this.dateObj.year - 5)
        } else {
          // 选择日期
          this.initDaysArrs()
        }
        this.currentPickType = type
      },
      setYear (year) {
        if (!year.disabled) {
          this.dateObj.year = year.value
          this.initWeekDate()
          this.setCurrentPickType(1)
        }
      },
      setMonth (month) {
        if (!month.disabled) {
          this.dateObj.month = month.value
          this.initWeekDate()
          this.setCurrentPickType(0)
        }
      },
      setDay (day) {
        if (!day.disabled) {
          this.dateObj.day = day.value
          let currentDate = this.getCurrentDate()
          this.initFormatDate(currentDate)
          this.$emit('input', currentDate)
          this.setShowDatePicker(false)
        }
      },
      // 获取当前dateObj的Date对象值
      getCurrentDate () {
        return new Date(`${this.dateObj.year}/${this.dateObj.month}/${this.dateObj.day}`)
      },
      // 初始化星期
      initWeekDate () {
        this.dateObj.weekDate = this.getCurrentDate().getDay()
      },
      // 直接年份的加减
      setDirectYear (type) {
        this.dateObj.year = type === 'sub' ? this.dateObj.year - 1 : this.dateObj.year + 1
        this.initWeekDate()
        this.setCurrentPickType(0)
      },
      // 直接月份的加减
      setDirectMonth (type) {
        let month = this.dateObj.month
        if (type === 'sub') {
          if (month > 1) {
            this.setMonth({
              value: month - 1,
              disabled: false
            })
          } else {
            this.setDirectYear('sub')
            this.setMonth({
              value: 12,
              disabled: false
            })
          }
        } else {
          if (month < 12) {
            this.setMonth({
              value: month + 1,
              disabled: false
            })
          } else {
            this.setDirectYear('add')
            this.setMonth({
              value: 1,
              disabled: false
            })
          }
        }
      },
      // 设置年份单独选择的区域
      setYearArea (type) {
        this.initYearsArrs(type === 'sub' ? this.yearsArrs[0][0].value - 12 : this.yearsArrs[0][0].value + 12)
      },
      setShowDatePicker (flag) {
        this.showDatePicker = flag
      },
      hideDatePicker () {
        this.setShowDatePicker(false)
      }
    }
  }
</script>
<style lang="scss">
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(0,0,0,0.25);
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(0,0,0,0.25);
  }
  input:-ms-input-placeholder{
    color: rgba(0,0,0,0.25);
  }
  input::-webkit-input-placeholder{
    color: rgba(0,0,0,0.25);
  }
  .u-date-picker {
    position: relative;
    width: 280px;
    .fl {
      float: left;
    }
    .fr {
      float: right;
    }
    $base-color: #1890FF;
    .u-dp-input {
      width: 100%;
      height: 32px;
      border-radius: 4px;
      background: #FFFFFF;
      border: 1px solid #D9D9D9;
      padding: 0 12px;
      cursor: pointer;
      font-size: 14px;
    }
    .icon-subfix {
      position: absolute;
      right: 12px;
      top: 0;
      line-height: 32px;
      color: rgba(0,0,0,0.25);
    }
    .date-picker {
      width: 280px;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
      overflow: hidden;
      position: absolute;
      top: 37px;
      bottom: 0;
      left: 0;
      -webkit-transition: bottom .4s ease-in-out;
      -moz-transition: bottom .4s ease-in-out;
      -ms-transition: bottom .4s ease-in-out;
      -o-transition: bottom .4s ease-in-out;
      transition: bottom .4s ease-in-out;
      &.auto-height {
        bottom: -279px;
      }
      .date-picker-title {
        padding: 0 16px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, .09);
        .dpt-content {
          line-height: normal;
          display: inline-block;
          button {
            outline: none;
            padding: 5px 7px;
            font-weight: bold;
            border: none;
            background: transparent;
            cursor: pointer;
            &:focus {
              border: none;
            }
            &:hover {
              background: #E6F7FF;
            }
          }
        }
        .icon {
          cursor: pointer;
          font-style: normal;
          color: rgba(0, 0, 0, .45);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .fl {
          height: 40px;
          .icon {
            margin-right: 15px;
            &:last-child {
              margin-right: 0;
            }
          }
        }
        .fr {
          height: 40px;
          .icon {
            margin-left: 15px;
            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
      .date-picker-content {
        height: 234px;
        line-height: 22px;
        padding: 16px 20px 0;
        ul {
          padding: 0;
          margin-bottom: 8px;
          color: rgba(0,0,0,0.65);
          font-size: 0;
          li {
            list-style: none;
            display: inline-block;
            width: 14.2%;
            text-align: center;
            padding: 0 5px;
            font-size: 14px;
            .dpc-content-item {
              border-radius: 2px;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
          }
          &.dpc-content {
            li {
              .dpc-content-item {
                cursor: pointer;
                &.disabled {
                  cursor: not-allowed;
                  color: rgba(0,0,0,0.25);
                }
                &:hover {
                  background: #E6F7FF;
                }
                &.today {
                  opacity: 0.8;
                  border: 1px solid $base-color;
                  border-radius: 2px;
                  color: $base-color;
                }
                &.active {
                  background: $base-color;
                  color: #fff;
                  border: 1px solid $base-color;
                }
              }
            }
          }
        }
        &.size-l {
          padding-top: 25px;
          ul {
            margin-bottom: 30px;
            li {
              width: 33.3%;
            }
          }
        }
      }
    }
  }
</style>
