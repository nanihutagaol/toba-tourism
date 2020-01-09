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
    },
    {
      path: '/restoran/detail/:id',
      name: 'DetailRestoran',
      component: () => import('@/pages/RestaurantDetail')
    },
    {
      path: '/pariwisata',
      name: 'Pariwisata',
      component: () => import('@/pages/Tourism')
    },
    {
      path: '/pariwisata/detail/:id',
      name: 'DetailPariwisata',
      component: () => import('@/pages/TourismDetail')
    },
    {
      path: '/transportasi',
      name: 'Transportasi',
      component: () => import('@/pages/Transportation')
    },
    {
      path: '/transportasi/detail/:id',
      name: 'DetailTransportasi',
      component: () => import('@/pages/TransportationDetail')
    }
  ]
})
