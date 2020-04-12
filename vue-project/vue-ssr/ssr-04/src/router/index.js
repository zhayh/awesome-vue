import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/project',
        component: () => import('../views/Project.vue')
      },
      {
        path: '/list',
        component: () => import('../views/BlogList.vue')
      },
      {
        path: '/detail/:id(\\d+)?',
        component: () => import('../views/Detail.vue')
      }
    ]
  })
}