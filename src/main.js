// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import FontAwesome from 'font-awesome/css/font-awesome.css'
import mixins from './mixins' 
import config from '../config'
import i18n from './i18n'

Vue.use(Bootstrap)
Vue.use(FontAwesome)
Vue.mixin(mixins) 
window.config = config

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
