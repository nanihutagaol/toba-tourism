import Vue from 'vue'
import Vuex from 'vuex'
import ExperienceStore from '@/store/ExperienceStore'
import restaurantStore from '@/store/restaurantStore'
import culinaryStore from '@/store/culinaryStore'
import tourismStore from '@/store/tourismStore'
import transportationStore from '@/store/transportationStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ExperienceStore,
    restaurantStore,
    culinaryStore,
    tourismStore,
    transportationStore
  }
})
