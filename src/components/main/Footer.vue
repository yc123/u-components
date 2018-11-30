<template>
  <footer class="footer">
    <div class="footer-container container">
      <div class="footer-guide">
        <div class="item">
          <h5>用户指南</h5>
          <ul class="list-unstyled">
            <li><a href="http://www.usoftmall.com/help/helpDetail/50" target="_blank">服务条款</a></li>
            <li><a href="http://www.usoftmall.com/help/helpDetail/16" target="_blank">买卖条例</a></li>
            <li><a href="http://www.usoftmall.com/help/helpDetail/51" target="_blank">代收代付协议</a></li>
          </ul>
        </div>
        <div class="item">
          <h5>关于我们</h5>
          <ul class="list-unstyled">
            <li><a href="http://www.usoftmall.com/help/helpDetail/1" target="_blank">公司简介</a></li>
            <li><a href="http://www.usoftmall.com/help/helpDetail/28" target="_blank">公司地址</a></li>
            <li><a href="https://www.usoftmall.com/help/helpDetail/28" target="_blank">联系我们</a></li>
          </ul>
        </div>
        <div class="item">
          <h5>更多服务</h5>
          <ul class="list-unstyled">
            <li><a href="http://www.usoftchina.com/"  target="_blank">优软科技</a></li>
            <li><a href="http://www.ubtob.com" target="_blank">优软云</a></li>
          </ul>
        </div>
        <div class="item">
          <h5>商城公众号</h5>
          <img src="@/assets/img/qrcode/mall.png" />
        </div>
          <div class="item">
          <h5>科技公众号</h5>
          <img src="@/assets/img/qrcode/uas.png" />
        </div>
      </div>
      <ul class="footer-link list-unstyled">
        <span>友情链接：</span>
        <li v-for="(link, index) in links" :key="index" class="footer-link-item">
          <span v-if="index !== 0" class="separation">|</span>
          <a :href="link.url" target="_blank" :title="link.title">{{ link.title }}</a>
        </li>
      </ul>
      <ul class="footer-notice list-unstyled">
        <li>客服电话：400-830-1818</li>
        <li>公司地址：深圳市南山区英唐大厦一楼</li>
        <li>©2016 深圳市优软科技有限公司 粤ICP备15112126号-4</li>
      </ul>
      <div class="footer-credit">
        <a href="javascript:void(0)"><img src="@/assets/img/credit/1.jpg" /></a>
        <a href="javascript:void(0)"><img src="@/assets/img/credit/2.jpg" /></a>
        <a href="javascript:void(0)"><img src="@/assets/img/credit/3.jpg" /></a>
        <a href="javascript:void(0)"><img src="@/assets/img/credit/4.jpg" /></a>
        <a href="javascript:void(0)"><img src="@/assets/img/credit/5.jpg" /></a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'footerView',
  data () {
    return {
      links: [{
        url: 'http://www.worldshine.net',
        title: '深圳华商龙'
      }, {
        url: 'http://www.yitoa.com',
        title: '深圳市英唐智能科技'
      }, {
        url: 'http://www.usoftchina.com/usoft',
        title: '深圳市优软科技'
      }, {
        url: 'http://www.51cube.com',
        title: '酷比魔方'
      }, {
        url: 'http://www.szsoling.com/home',
        title: 'SOLING 索菱'
      }, {
        url: 'http://www.huashangweitai.com',
        title: '深圳市华商维泰显示科技'
      }, {
        url: 'http://www.szmadigi.com',
        title: '迈迪杰科技'
      }, {
        url: 'http://www.hi-mantech.com',
        title: '怡海能达'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
  .footer-guide h5{
    font-size: 16px;
    margin-bottom: 10px;
  }
  .footer {
    font-size: 12px;
    background-color: #E9E9E9;

    .footer-container {
      position: relative;
      width: 1190px;
      margin: 0 auto;
      text-align: center;
      text-transform: uppercase;
      a {
        color: #474443;
        &:hover {
          color: #f44336;
        }
      }

      .footer-guide {
        margin-bottom: 1em;

        > .item {
          display: inline-block;
          width: 16%;
          text-align: center;
          vertical-align: top;

          > h5 {
            font-weight: bold;
          }

          > ul > li {
            padding: 4px;
          }
        }
      }

      .footer-link {
        margin-bottom: 1em;
        color: #999;

        .footer-link-item {
          display: inline-block;
          margin-left: 1em;

          .separation {
            margin-right: 1em;
          }
        }
      }

      .footer-notice {
        border-top: 1px solid #c9c9c9;
        padding: 1.5em 0;

        > li {
          display: inline-block;
          padding: 0 2em;
        }
      }

      .footer-credit {
        padding-bottom: 3em;

        > a {
          margin: 0 8px;
        }
      }
    }
  }
</style>
