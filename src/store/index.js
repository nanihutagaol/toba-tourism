import Vue from 'vue'
import Vuex from 'vuex'
import restaurant from '@/store/restaurantStore'
import culinaryStore from '@/store/culinaryStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    restaurant,
    culinaryStore
  }
})
