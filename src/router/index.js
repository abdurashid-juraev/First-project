import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('/src/views/login.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'main' },
    component: () => import('/src/views/categories.vue')
  },
  {
    path: '/detail-record',
    name: 'detail-record',
    meta: { layout: 'main' },
    component: () => import('/src/views/detail-record.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
