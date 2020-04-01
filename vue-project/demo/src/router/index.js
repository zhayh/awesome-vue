import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article'
import News from '../views/News'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'article/:id',
        name: 'Article',
        props: route => ({ id: route.params.id, name: 'niit', age: 20}),
        component: Article
      }, {
        path: 'news',
        component: News
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
