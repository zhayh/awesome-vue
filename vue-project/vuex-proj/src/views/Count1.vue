<template>
  <div class="page">
    <!-- 子组件修改数据 -->
    <!-- <button @click="$store.commit('add')">+1</button>&nbsp;
    <span>计数值：{{ $store.state.counter }}</span>&nbsp;
    <button @click="$store.commit('sub')">-1</button>     -->
    <!-- 使用vuex的函数展开-->
    <button @click="btnAdd">+1</button>&nbsp;
    <span>计数值：{{ counter }}</span>&nbsp;
    <span>{{showNum}}</span>&nbsp;
    <button @click="btnSub">-1</button>    
    <button @click="btnSub2">异步触发-1</button>    
    <!-- <button @click="$store.commit('add',5)">+5</button>&nbsp;
    <span>计数值：{{ $store.state.counter }}</span>&nbsp;
    <button @click="$store.commit('sub',5)">-5</button> -->
    <!-- <button @click="$store.commit('add',{a:5, b:2})">+5</button>&nbsp;
    <span>计数值：{{ $store.state.counter }}</span>&nbsp;
    <button @click="$store.commit('sub',{a:5, b:2})">-5</button> -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      // counter: 0
    }
  },
  computed: {
    ...mapState(['counter']),  // 展开运算符
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['add', 'sub']),
    ...mapActions(['subAction']),
    btnAdd () {
      this.add()
    },
    btnSub () {
      this.sub()
    },
    btnSub2 () {
      this.subAction()
    }
  }
}
</script>
