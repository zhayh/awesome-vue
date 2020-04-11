import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import Shopcart from '@/views/Shopcart'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'GoodsList', component: GoodsList },
    { path: '/shopcart', name: 'Shopcart', component: Shopcart }
  ]
})
