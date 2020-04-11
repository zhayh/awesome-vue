import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    firstName: '',
    lastName: ''
  },
  mutations: {
    add (state) {
      state.counter++
    },
    sub (state) {
      state.counter--
    },
    // add (state, num) {
    //   state.counter += num
    // },
    // sub (state, num) {
    //   state.counter -= num
    // },
    // add (state, payload) {
    //   state.counter += payload.a * payload.b
    // },
    // sub (state, payload) {
    //   state.counter -= payload.a * payload.b
    // },
    // handleFirstName (state, payload) {
    //   state.firstName = payload
    // },
    // handleLastName (state, payload) {
    //   state.lastName = payload
    // },
    // submitBtn (state) {
    //   state.firstName = 'mary'
    // }
  },
  getters: {
    fullName (state) {
      console.log(state.firstName + "  " + state.lastName)
      return state.firstName + " " + state.lastName
    },
    showNum (state) {
      return "当前的计算结果：" + state.counter
    }
  },
  actions: {
    sumbitAction (context) {
      setTimeout(() => {
        context.commit('submitBtn')
      }, 1000)
    },
    subAction (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    }
  },
  modules: {
    cart,
    products
  }
})
