<template>
  <footer id="footer">
    <div class="top">
      <div class="left top-item">
        <h2>合作伙伴</h2>
        <hr>
        <ul>
          <li>腾讯云</li>
          <li>腾讯开发平台</li>
          <li>Vue项目</li>
        </ul>
      </div>
      <div class="center top-item">
        <h2>FAQ</h2>
        <hr>
        <ul>
          <li>如何搭建一个vue ssr环境？</li>
          <li>有没有像vue-cli那样开箱即用的脚手架？</li>
          <li>如何部署以及与后端结合？</li>
          <li>vue 4.0 什么时候发布？</li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      Copyright© 2019 - {{nowYear}} | All Rights Reserved | Power by <a class="vueLink" href="javascript:;">Vue</a> & <a class="vueLink" href="javascript:;">SSR</a>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'MyFooter',
    created() {
      this.nowYear = new Date().getFullYear()
    }
  }
</script>
<style scoped lang="stylus">
  #footer
    position absolute
    bottom 0
    width 100%
    min-width 800px
    height 210px
    background-color #222
    color #ccc
    clear both
    .top
      width 1263px
      height 150px
      margin 0 auto
      text-align center
      .top-item
        display inline-block
        width 410px
        height 150px
        text-align left
        vertical-align top
        .weiboLink
          color #fc0
        .emailLink
          color #f66
          text-decoration none
        .guestbook
          color #42b983
        h2
          font-size 14px
          font-weight normal
          padding 20px 0 0 20px
        hr
          width 90%
          border 1px dashed #333
        ul
          font-size 12px
          color #777
          text-indent 20px
          line-height 2
      .vue-sell
        position absolute
        top 20px
        left 20px
      .vue-music
        position absolute
        top 20px
        right 20px
    .bottom
      height 60px
      line-height 60px
      text-align center
      color #777
      background-color #000
      border-top 1px solid #444
      .authorLink
        color #f36
      .vueLink
        color #42b983
</style>