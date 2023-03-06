import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/uJoinView',
    name: 'uJoinView',
    component: () => import('../views/user/uJoinView.vue')
  },
  {
    path: '/uMainView',
    name: 'uMainView',
    component: () => import('../views/user/uMainView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
