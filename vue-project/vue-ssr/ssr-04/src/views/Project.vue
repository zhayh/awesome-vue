<template>
  <div id="project">
    <div class="item vue-main">
      <img src="~/public/vue-visit.png" width="130" alt="">
      <p>
        <a target="_blank" href="https://github.com/vuejs/vue">Vue项目</a>
      </p>
    </div>
    <div class="item vuex-main">
      <img src="~/public/vuex-visit.png" width="130" alt="">
      <p>
        <a target="_blank" href="https://github.com/vuejs/vuex">Vuex项目</a>
      </p>
    </div>
    <div class="item nuxt-main">
      <img src="~/public/nuxt-visit.png" width="130" alt="">
      <p><a target="_blank" href="https://github.com/nuxt/nuxt.js">Nuxt项目</a></p>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Project'
}
</script>

<style scoped lang="stylus">
#project
  display flex
  padding 20px 50px
  .item
    flex 1
    a
      color #f36
</style>