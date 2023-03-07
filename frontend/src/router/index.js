import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
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
  {//유저메인화면
  {
    path: '/uJoinView',
    name: 'uJoinView',
    component: () => import('../views/user/uJoinView.vue')
  },
  {
    path: '/uMainView',
    name: 'uMainView',
    component: () => import('../views/user/uMainView.vue')
  },
  {

    path: '/aMainView',
    name: 'aMainView',
    component: () => import('../views/admin/aMainView.vue')
  },
  {
    path: '/cMainView',
    name: 'cMainView',
    component: () => import('../views/company/cMainView.vue')
  },
  {
    path: '/cEmpModiView',
    name: 'cEmpModiView',
    component: () => import('../views/company/cEmpModiView.vue')
  },
  {
    path: '/cJoinView',
    name: 'cJoinView',
    component: () => import('../views/company/cJoinView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
