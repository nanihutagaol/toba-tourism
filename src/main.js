// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import FontAwesome from 'font-awesome/css/font-awesome.css'
import mixins from './mixins'
import config from '../config'
// import ShardsVue from 'shards-vue'
import VueCarousel from 'vue-carousel'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'
// import 'shards-ui/dist/css/shards.css'

Vue.use(VueResource)
Vue.use(Bootstrap)
Vue.use(BootstrapVue)
Vue.use(FontAwesome)
Vue.mixin(mixins)
Vue.use(VueCarousel)
// Vue.use(ShardsVue)
window.config = config

Vue.config.productionTip = false

// if (process.env.NODE_ENV !== 'production') {
//   if (process.env.MOCK_ENV !== 'false') {
//     require('@/api-mock/vue-mock')
//   }
//   Vue.config.devtools = true
// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
