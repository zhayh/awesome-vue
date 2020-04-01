<template>
  <div class="home">
    <h1>主页</h1>
    <!-- <router-link to="/home/article/1"><h3>id=1的文章</h3></router-link>
    <router-link to="/home/article/2"><h3>id=2的文章</h3></router-link> -->
    <!-- 命名路由，传参 -->
    <router-link :to="{name: 'Article', params: {id: 1}}"><h3>id=1的文章</h3></router-link>
    <router-link to="/home/article/2"><h3>id=2的文章</h3></router-link>
    <router-link to="/home/news"><h3>新闻</h3></router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'Home'
}
</script>
