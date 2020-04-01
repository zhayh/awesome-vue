<template>
  <div class="page">
    <!-- <h2>id={{$route.params.id}}的文章页面</h2> -->
    <h2>id={{id}}的文章页面，信息：{{name}} -- {{age}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: ['id', 'name', 'age']
}
</script>

<style scoped>
  
</style>