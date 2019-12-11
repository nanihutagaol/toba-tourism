import Vue from 'vue'
import Vuex from 'vuex'
import ExperienceStore from '@/store/ExperienceStore'
import restaurant from '@/store/restaurantStore'
import culinaryStore from '@/store/culinaryStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ExperienceStore,
    restaurant,
    culinaryStore
  }
})
