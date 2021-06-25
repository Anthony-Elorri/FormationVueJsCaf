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
    path: '/directives',
    name: 'Directives',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Directives" */ '../views/Directives.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import(/* webpackChunkName: "Vuex" */'../views/Vuex.vue')
  },
  {
    path: '/local-data',
    name: 'LocalData',
    component: () => import(/* webpackChunkName: "LocalData" */'../views/LocalData.vue')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import(/* webpackChunkName: "axios" */'../views/Axios.vue')
  },
  {
    path: '/chart',
    name: 'ChartJs',
    component: () => import(/* webpackChunkName: "LocalData" */'../views/ChartJs.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */'../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
