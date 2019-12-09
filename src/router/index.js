import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/pages/Homepage')
    },
    {
      path: '/kuliner',
      name: 'KulinerCustomer',
      component: () => import('@/pages/culinary')
    },
    {
      path: '/restoran',
      name: 'Restaurant',
      component: () => import('@/pages/restaurant')
    }
  ]
})
