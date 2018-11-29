<template>
  <div id="app">
    <div class="comps">
      <p>datePicker：</p>
      <p>model：{{date}}</p>
      <u-date-picker v-model="date"></u-date-picker>
    </div>
    <div class="comps">
      <p>pager：</p>
      <p>model：{{pager.page}}</p>
      <u-pager
        @input="pagerChange"
        @sizeChangeAction="sizeChange"
        v-model="pager.page"
        :totalCount="pager.count"
        :pageSize="pager.size"></u-pager>
    </div>
    <div class="comps">
      <p>input：</p>
      <p>model：{{inputModel}}</p>
      <u-input v-model="inputModel" :clearable="true"></u-input>
    </div>
    <div class="comps">
      <p>textarea：</p>
      <p>model：{{textareaModel}}</p>
      <u-textarea v-model="textareaModel"></u-textarea>
    </div>
    <div class="comps">
      <p>select：</p>
      <p>model：{{selectObj.value}}</p>
      <u-select v-model="selectObj.value" :list="selectObj.list"></u-select>
    </div>
    <div class="comps">
      <p>checkbox：</p>
      <p>model：{{checkModel}}</p>
      <u-check-box v-model="checkModel">选项1</u-check-box>
    </div>
    <div class="comps">
      <p>checkGroup：</p>
      <p>model：{{checkGroup.value}}</p>
      <u-check-group v-model="checkGroup.value" :items="checkGroup.items"></u-check-group>
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
      <u-step-adder v-model="stepAddrModel" :step="12"></u-step-adder>
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
      <u-dialog v-model="showDialog" title="测试啊啊克鲁赛德黄蜡石">
        <div slot="content">测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息</div>
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
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    date: '2018-11-26',
    pager: {
      page: 3,
      count: 1000,
      size: 10
    },
    inputModel: 123,
    textareaModel: '1sd',
    selectObj: {
      value: '',
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
      value: [{value: 'item3'}],
      items: [
        {
          label: '选项1',
          value: 'item1'
        },
        {
          label: '选项2',
          value: 'item2',
          disabled: true
        },
        {
          label: '选项3',
          value: 'item3'
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
    stepAddrModel: 1,
    switchModel: true,
    showDialog: false,
    addressModel: {
      province: '湖北省'
    }
  }),
  methods: {
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
