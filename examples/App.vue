<template>
  <div id="app">
    <div class="comps">
      <p>Tabs：</p>
      <div style="margin-top: 8px">
        <u-tabs @onSelectTab="onSelectTab" :value="tabValue" :list="tabList">
          <div slot="content">
            123233
          </div>
        </u-tabs>
      </div>
    </div>
    <!-- <div class="comps">
      <p>Form:</p>
      <u-form ref="formDemo1" v-model="form">
        <u-input v-model="form.name" style="width:380px;display:block" size="large" required blur-check :rule="{required: true, message: '请输入姓名', style: {right: '-380px'}}"></u-input>
        <u-input v-model="form.phone" style="width:380px;display:block" size="large" required blur-check :rule="{required: true, message: '请输入电话', style: {right: '-380px'}}"></u-input>
        <u-button @click="checkRule('formDemo1')" style="display:block">重置校验或校验</u-button>
      </u-form>
    </div> -->
    <div class="comps">
      <p>基本按钮：</p>
      <div style="margin-top: 8px">
        <button class="u-btn u-btn-submit">主要按钮</button>
        <button class="u-btn u-btn-submit u-btn-small">主要按钮</button>
        <button class="u-btn u-btn-submit" disabled>主要按钮</button>
        <button class="u-btn u-btn-submit u-btn-small" disabled>主要按钮</button>
      </div>
      <div style="margin-top: 8px">
        <button class="u-btn u-btn-cancel">普通按钮</button>
        <button class="u-btn u-btn-cancel u-btn-small">普通按钮</button>
        <button class="u-btn u-btn-cancel" disabled>普通按钮</button>
        <button class="u-btn u-btn-cancel u-btn-small" disabled>普通按钮</button>
      </div>
      <div style="margin-top: 8px">
        <button class="u-btn u-btn-sub">次要按钮</button>
        <button class="u-btn u-btn-sub u-btn-small">次要按钮</button>
        <button class="u-btn u-btn-sub" disabled>次要按钮</button>
        <button class="u-btn u-btn-sub u-btn-small" disabled>次要按钮</button>
      </div>
    </div>
    <div class="comps">
      <p>datePicker：</p>
      <p>model：{{date}} <button @click="date = ''">清除date</button></p>
      <u-date-picker v-model="date" :pickerOptions="pickerOptions"></u-date-picker>
    </div>
    <div class="comps">
      <p>pager：</p>
      <p>model：{{pager.page}}</p>
      <u-pager
        @input="pagerChange"
        @sizeChangeAction="sizeChange"
        v-model="pager.page"
        :totalCount="pager.count"
        hide-size
        :pageSize="pager.size"></u-pager>
    </div>
    <div class="comps">
      <p>input组件 rule validator trigger 测试</p>
      <p>model：{{input3}}</p>
      <u-input :maxLength="30" v-model.number="numberTest"></u-input>
      <u-input :rule="{trigger: 'blur',validator: checkDemo, use: true}" v-model="input3"></u-input>
      <p>input组件 rule style 测试</p>
      <p>model：{{input2}}</p>
      <u-input v-model="input2" style="width:380px;" size="large" required blur-check :rule="{required: true, message: '请输入验证码', style: {left: '-380px'}}"></u-input>
      <p>maxLength测试：</p>
      <p>model：{{input1}}</p>
      <u-input v-model="input1" style="width:380px;" :maxLength="9" required blur-check :rule="{required: true, message: '请输入验证码'}"></u-input>
      <p>带有头像，size为large 测试</p>
      <u-input prefix="icon-yonghu" size="large" v-model="inputModel" :clearable="true" required blur-check>
        <i slot="append-icon">PCS</i>
      </u-input>
    </div>
    <div class="comps">
      <p>textarea：</p>
      <p>model：{{textareaModel}}</p>
      <u-textarea v-model="textareaModel" :maxLength="120"  :rule="{trigger: 'blur',validator: checkDemos}"></u-textarea>
    </div>
    <div class="comps">
      <p>select：只允许下拉一个 添加onlyOne</p>
      <p>model：{{selectObj.value}}</p>
      <u-select onlyOne v-model="selectObj.value" :list="selectObj.list"></u-select>
      <u-select onlyOne v-model="selectObj.value" :list="selectObj.list"></u-select>
    </div>
    <div class="comps">
      <p>select：</p>
      <p>model：{{selectObj.value}}</p>
      <u-select  v-model="selectObj.value" :list="selectObj.list"></u-select>
      <u-select  v-model="selectObj.value" :list="selectObj.list"></u-select>
    </div>
    <div class="comps">
      <p>checkbox：</p>
      <p>model：{{checkModel}}</p>
      <u-check-box v-model="checkModel">选项1{{checkModel}}</u-check-box>
      <button @click="checkModel = !checkModel">修改状态</button>
    </div>
    <div class="comps">
      <p>checkGroup：</p>
      <p>model：{{checkGroup.value}}</p>
      <u-check-group v-model="checkGroup.value" :items="checkGroup.items" :onlyValue="true" reserve></u-check-group>
    </div>
    <div class="comps">
      <p>radioGroup：</p>
      <p>model：{{radioGroup.value}}</p>
      <u-radio-group v-model="radioGroup.value" :items="radioGroup.items"></u-radio-group>
    </div>
    <div class="comps">
      <p>message：</p>
      <p>model：</p>
      <button @click="showMessage('success')">success</button>
      <button @click="showMessage('info')">info</button>
      <button @click="showMessage('error')">error</button>
    </div>
    <div class="comps">
      <p>stepAdder：</p>
      <p>model：{{stepAddrModel}} step: 12</p>
      <u-step-adder reg="^([1-9]\d{0,8})?$" v-model="stepAddrModel" :step="12" :min="10" :max="100"></u-step-adder>
    </div>
    <div class="comps">
      <p>switch：</p>
      <p>model：{{switchModel}}</p>
      <u-switch v-model="switchModel"></u-switch>
    </div>
    <div class="comps">
      <p>dialog：</p>
      <p>model：{{showDialog}}</p>
      <button @click="setShowDialog">显示dialog</button>
      <u-dialog v-model="showDialog" fixId="datePickerWrapper" title="测试啊啊克鲁赛德黄蜡石">
        <div slot="content">
          <u-date-picker fixId="datePickerWrapper"></u-date-picker>
          <u-address-select fixId="datePickerWrapper"></u-address-select>
        </div>
        <template slot="footer">
          <button class="u-btn u-btn-cancel" @click="showDialog = false">取消</button>
          <button class="u-btn u-btn-cancel">保存</button>
          <button class="u-btn u-btn-submit">确定</button>
        </template>
      </u-dialog>
    </div>
    <div class="comps">
      <p>confirm：</p>
      <p>model：</p>
      <button @click="showConfirm">显示confirm</button>
    </div>
    <div class="comps">
      <p>upload：</p>
      <p>model：</p>
      <u-upload
        uploadImgUrl="https://filerest.uuzcc.cn/image/upload"
        uploadFileUrl="https://filerest.uuzcc.cn/file/upload"
        :postParams="{
          appCode: 'FRONT'
        }"
        @change="upload"
      ></u-upload>
    </div>
    <div class="comps">
      <p>address：</p>
      <p>model：{{addressModel}}</p>
      <u-address-select v-model="addressModel"></u-address-select>
    </div>
    <div class="comps">
      <p>按钮：</p>
      <u-button>default</u-button>
      <hr>
      <u-button size="long">long</u-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    tabValue: 'baoguo1',
    formValidate: {
      name: '',
      phone: ''
    },
    date: '',
    pickerOptions: {
      disabledDate (timeStamp) {
        return timeStamp < Date.now()
      }
    },
    tabList: [{label: '包裹1', value: 'baoguo1'}, {label: '包裹2', value: 'baoguo2'}],
    pager: {
      page: 3,
      count: 44,
      size: 10
    },
    input1: 1,
    input2: 2,
    input3: 3,
    inputModel: 123,
    textareaModel: '1sd',
    selectObj: {
      value: 'asdad',
      list: [
        {
          text: 'asdad',
          value: 'asdad'
        },
        {
          text: 'asdad1',
          value: 'asdad1'
        },
        {
          text: 'asdad2',
          value: 'asdad2'
        }
      ]
    },
    checkModel: true,
    checkGroup: {
      value: ['item1', 'item3'],
      items: [
        {
          label: '选项1',
          value: 'item1'
        },
        {
          label: '选项2',
          value: 'item2'
        },
        {
          label: '选项3',
          value: 'item3'
        },
        {
          label: '选项4',
          value: 'item4'
        },
        {
          label: '选项5',
          value: 'item5'
        },
        {
          label: '选项6',
          value: 'item6'
        }
      ]
    },
    radioGroup: {
      value: 'item2',
      items: [
        {
          label: '选项1',
          value: 'item1'
        },
        {
          label: '选项2',
          value: 'item2'
        },
        {
          label: '选项3',
          value: 'item3',
          disabled: true
        }
      ]
    },
    stepAddrModel: '',
    switchModel: true,
    showDialog: false,
    addressModel: {
      province: '湖北省'
    },
    numberTest: null
  }),
  methods: {
    onSelectTab (name) {
      this.tabValue = name;
      console.log(this.tabValue)
    },
    checkRule (name) {
      this.$refs[name].resetFields()
    },
      checkDemo (rule, value, callback) {
      if (value === '') {
        callback(new Error('err'))
        this.$message.error('品牌不能为空')
        return
      }
      if (value) {
        if (!/^\d{1,4}(\.\d{1,6})?$/.test(value)) {
          callback(new Error('err'))
          this.$message.error('单价只能填小于1万的正数')
          return
        } else {
          callback()
        }
        callback()
      }
    },
    checkDemos (rule, value, callback) {
      if (value === '') {
        callback(new Error('err'))
        this.$message.error('xxxxx不能为空')
        return
      }
      callback()
    },
    pagerChange () {
      alert(this.pager.page)
    },
    sizeChange (size) {
      // alert(size)
    },
    showMessage (type) {
      this.$message({
        type: type,
        message: '初三党是'
      })
    },
    setShowDialog () {
      this.showDialog = !this.showDialog
    },
    showConfirm () {
      this.$confirm('确定删除吗').then(() => {
        this.$message.success('成功')
      }, () => {
        this.$message.info('取消')
      })
    },
    upload (file) {
      console.log(file)
    }
  }
}
</script>
<style lang="scss" scoped>
  #app {
    padding: 0 10% 20%;
    .comps {
      padding: 30px 0;
      border-bottom: 1px solid #000;
      p {
        margin-bottom: 15px;
      }
    }
  }
</style>
