<template>
  <div class="page">
    <!-- 子组件修改数据 -->
    <button @click="$store.commit('add')">+1</button>&nbsp;
    <span>计数值：{{ $store.state.counter }}</span>&nbsp;
    <button @click="$store.commit('sub')">-1</button>    
    <!-- <button @click="$store.commit('add',5)">+5</button>&nbsp;
    <span>计数值：{{ $store.state.counter }}</span>&nbsp;
    <button @click="$store.commit('sub',5)">-5</button> -->
    <!-- <button @click="$store.commit('add',{a:5, b:2})">+5</button>&nbsp;
    <span>计数值：{{ $store.state.counter }}</span>&nbsp;
    <button @click="$store.commit('sub',{a:5, b:2})">-5</button> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  }
}
</script>
