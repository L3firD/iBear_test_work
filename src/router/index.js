import Vue from 'vue'
import VueRouter from 'vue-router'
import Dash from '../views/Dash.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Dash
  },
  
  {
    path: '/transact',
    component: () => import('../views/Transact.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
 
export default router
