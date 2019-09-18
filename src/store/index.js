import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import sampleStore from '@/store/sampleStore'

export default new Vuex.Store({
  modules: {
    sampleStore
  }
})
