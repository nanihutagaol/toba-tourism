import Vue from 'vue'
import Vuex from 'vuex'
import sampleStore from '@/store/sampleStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sampleStore
  }
})
