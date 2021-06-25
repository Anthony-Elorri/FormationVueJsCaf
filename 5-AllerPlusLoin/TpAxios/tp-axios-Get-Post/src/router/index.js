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
    path: '/axios-get',
    name: 'Axios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Axios.vue')
  },
  {
    path: '/axios-component',
    name: 'ComponentBaseExample',    
    component: () => import(/* webpackChunkName: "about" */ '../views/ComponentBaseExample.vue')
  },
  {
    path: '/axios-post',
    name: 'AxiosPost',
    component: () => import(/* webpackChunkName: "about" */ '../views/AxiosPost.vue')
  },  
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
