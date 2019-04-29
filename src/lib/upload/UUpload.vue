<template>
  <div class="img-upload" :class="{borderSolid: imgUrl}" :style="{ width: `${width}px`, height: `${height}px` }">
    <template v-if="imgUrl">
      <img class="preview img" :src="imgUrl" v-if="isPicture(imgUrl)" alt="">
      <img class="preview img" src="../../assets/img/file.png" v-if="!isPicture(imgUrl)" alt="">
    </template>
    <template v-else>
      <div v-show="progress > -1" class="upload-progress" :style="{ 'line-height': `${height}px` }">{{ progress }}%</div>
      <slot>
        <div class="upload-preview">
          <i class="iconfont icon-jiahao"></i>
          <p>上传文件</p>
        </div>
      </slot>
    </template>
    <input type="file" :style="{ width: `${width}px`, height: `${height}px` }" ref="fileUpload" :accept="accept" :multiple="multiple"  @change="upload($event)">
    <div class="hover-show" :title="fileName" :style="{ width: `${width}px`, height: `${height}px` }">
      <i class="iconfont icon-search" @click="showPreviewImg" v-if="preview"></i>
      <div class="option" v-if="!readonly" :style="{ height: `${24 / 125 * height}px`, lineHeight: `${24 / 125 * height}px` }">
        <a class="inline-block option-btn" @click="reUpload">替换</a>
        <a class="inline-block option-btn" @click="deleteImg">删除</a>
      </div>
    </div>
    <div class="img-modal" v-if="showImg">
      <div class="img-modal-wrap">
        <i class="iconfont icon-close" @click="showImg = false"></i>
        <img :src="imgUrl" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import axios from './axios'
  export default {
    name: 'UUpload',
    data () {
      return {
        imgUrl: '',
        showImg: false,
        // 上传进度 -1表示未上传
        progress: -1,
        fileName: ''
      }
    },
    props: {
      // 预览图片的url
      url: {
        type: String,
        default: ''
      },
      // 最大尺寸（MB）
      maxSize: {
        type: Number,
        default: 100
      },
      // 是否多文件上传
      multiple: {
        type: Boolean,
        default: false
      },
      // 上传类型
      accept: {
        type: String,
//        default: 'image/jpeg,image/jpg,image/gif,image/bmp,image/png,.pdf'
        default: '*'
      },
      // 是否显示预览
      showPreview: {
        type: Boolean,
        default: true
      },
      // 需要传递给父组件的参数
      params: {
        default: null
      },
      readonly: {
        default: false,
        type: Boolean
      },
      preview: {
        default: true,
        type: Boolean
      },
      // 图片上传区域整体宽度
      width: {
        default: 125,
        type: Number
      },
      // 图片上传区域整体高度
      height: {
        default: 125,
        type: Number
      },
      // 文件上传的url
      uploadFileUrl: {
        type: String,
        default: 'https://filerest.uuzcc.cn/file/upload'
      },
      // 图片上传的url
      uploadImgUrl: {
        type: String,
        default: 'https://filerest.uuzcc.cn/image/upload'
      },
      postParams: {
        default: null,
        type: Object
      }
    },
    watch: {
      url: {
        handler (val) {
          this.imgUrl = val
        },
        immediate: true
      }
    },
    methods: {
      upload (e) {
        this.imgUrl = ''
        let filesArr = Array.from(e.target.files || [])
        if (filesArr.length && !filesArr.find(item => this.isInvalidFileSize(item))) {
          if (this.accept === '*' || this.accept.indexOf(filesArr[0].type.toLowerCase()) > -1) {
            let param = new FormData()
            param.append('stream', filesArr[0])
            param.append('name', filesArr[0].name)
            param.append('contentType', filesArr[0].type)
            if (this.postParams) {
              for (let key in this.postParams) {
                param.append(key, this.postParams[key])
              }
            }
            let config = {
              headers: {'Content-Type': 'multipart/form-data'},
              onUploadProgress: progressEvent => {
                this.progress = progressEvent.loaded / progressEvent.total * 100 | 0
              }
            }
            if (this.isPicture(filesArr[0].name)) {
              this.uploadImg(filesArr[0], param, config)
            } else {
              this.uploadFile(filesArr[0], param, config)
            }
          } else {
            this.$message.error('请上传正确的格式')
            this.emptyFileInput()
          }
        } else {
          if (!filesArr.length) {
            this.$message.info('请选择文件')
          } else {
            this.$message.error(`上传文件请勿超过${this.maxSize}M`)
            this.emptyFileInput()
          }
        }
      },
      uploadImg (file, param, config) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        let _this = this
        reader.onloadend = function (e) {
          let image = new Image()
          image.setAttribute('src', e.target.result)
          image.onload = function () {
            param.append('width', this.width)
            param.append('height', this.height)
            _this.doUpload(file, param, config, _this.uploadImgUrl)
          }
        }
      },
      uploadFile (file, param, config) {
        this.doUpload(file, param, config, this.uploadFileUrl)
      },
      doUpload (file, param, config, uploadUrl) {
        axios.post(uploadUrl, param, config)
          .then(response => {
            this.emitAction('change', response.data)
            this.emptyFileInput()
            this.fileName = file.name
            if (this.showPreview) {
              this.imgUrl = response.data.image && response.data.image.url
                || response.data.file && response.data.file.url
            }
          }, err => {
            this.$message.error('上传失败')
            this.emptyFileInput()
            console.log(err)
          })
      },
      // 非法尺寸
      isInvalidFileSize (file) {
        return file.size > this.maxSize * 1024 * 1024
      },
      // 清空file列表
      emptyFileInput  () {
        this.$refs.fileUpload && (this.$refs.fileUpload.value = '')
        this.progress = -1
      },
      // 移除图片
      deleteImg () {
        this.imgUrl = ''
        this.emptyFileInput()
        this.emitAction('deleteAction')
      },
      // 重新上传
      reUpload () {
        this.$refs.fileUpload.click()
      },
      // 提交事件
      emitAction (action, data = null) {
        this.$emit(action, {
          params: this.params,
          data: data
        })
      },
      showPreviewImg () {
        if (this.isPicture(this.imgUrl)) {
          this.showImg = true
        } else {
          window.open(this.imgUrl)
        }
      },
      endWith (str, s) {
        let reg = new RegExp(s + '$')
        return reg.test(str)
      },
      isPicture (url) {
        url = url.toLowerCase()
        return this.endWith(url, '.jpg')
          || this.endWith(url, '.jpeg')
          || this.endWith(url, '.png')
          || this.endWith(url, '.gif')
          || this.endWith(url, '.bmp')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .img-upload {
    line-height: 188px;
    background: rgba(0,0,0,0.02);
    border: 1px dashed rgba(0,0,0,0.15);
    border-radius: 4px;
    position: relative;
    text-align: center;
    overflow: hidden;
    &.borderSolid {
      border: 1px solid rgba(0,0,0,0.15);
    }
    input {
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
    }
    .hover-show {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .3);
      -webkit-transition: top ease-in-out .3s;
      -moz-transition: top ease-in-out .3s;
      -ms-transition: top ease-in-out .3s;
      -o-transition: top ease-in-out .3s;
      transition: top ease-in-out .3s;
      i {
        font-size: 32px;
        color: #fff;
        line-height: normal;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        cursor: pointer;
        /*&.readonly {
          margin-top: -20px;
        }*/
      }
      .option {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 24px;
        background: rgba(0, 0, 0, .4);
        line-height: 22px;
        font-size: 0;
        .option-btn {
          color: #fff;
          height: 100%;
          width: 50%;
          font-size: 14px;
          &:first-child {
            border-right: 1px solid #a6a5a5;
          }
        }
      }
    }
    .preview {
      max-height: 128px;
      max-width: 122px;
      &.img {
        width: 100%;
        height: 100%;
        max-height: unset;
        max-width: unset;
        & + input {
          z-index: -1;
        }
        & ~ .hover-show {
          display: block;
        }
      }
    }
    &:hover {
      .hover-show {
        top: 0;
      }
    }
    .img-modal {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, .3);
      text-align: center;
      overflow-y: auto;
      z-index: 2;
      .img-modal-wrap {
        position: absolute;
        left: 50%;
        top: 50%;
        width: auto;
        height: calc(100vh - 200px);
        -webkit-transform: translate(-50%, calc(((200px - 100vh) / 2)));
        -moz-transform: translate(-50%, calc(((200px - 100vh) / 2)));
        -ms-transform: translate(-50%, calc(((200px - 100vh) / 2)));
        -o-transform: translate(-50%, calc(((200px - 100vh) / 2)));
        transform: translate(-50%, calc(((200px - 100vh) / 2)));
        img {
          max-width: calc(100vw - 400px);
          max-height: calc(100vh - 200px);
        }
        i {
          color: #fff;
          line-height: normal;
          font-size: 40px;
          position: absolute;
          right: -20px;
          top: -20px;
          cursor: pointer;
        }
      }
    }
    .upload-progress {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      font-size: 30px;
      line-height: 290px;
      position: absolute;
      color: #fff;
      z-index: 1;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .upload-preview {
      line-height: normal;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      i {
        font-size: 24px;
        color: rgba(0,0,0,0.45);
      }
      p {
        margin-top: 10px;
        font-size: 14px;
      }
    }
  }
</style>
