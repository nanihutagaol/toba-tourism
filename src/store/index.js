import Vue from 'vue'
import Vuex from 'vuex'
import sampleStore from '@/store/sampleStore'
import ExperienceStore from '@/store/ExperienceStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sampleStore,
    ExperienceStore
  }
})
