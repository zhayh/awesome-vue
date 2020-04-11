<template>
  <div>
    <div>
      <label for="firstName">firstName：</label>
      <input type="text" v-model="firstName" id="firstName" /><br />
      <label for="lastName">lastName：</label>
      <input type="text" v-model="lastName" id="lastName" />
    </div>
    <div>Name1组件</div>
    <div>
      fullName：{{ $store.getters.fullName }}
    </div>
    
    <button @click="$store.dispatch('sumbitAction')">触发异步操作</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default  {
  data () {
    return {

    }
  },
  computed: {
    firstName: {
      get () {
        return this.$store.state.firstName
      },
      set (newVal) {
        this.$store.commit('handleFirstName', newVal)
      }
    },
    lastName: {
      get () {
        return this.$store.state.lastName
      },
      set (newVal) {
        this.$store.commit('handleLastName', newVal)
      }
    }
  }
}
</script>

<style>
</style>
