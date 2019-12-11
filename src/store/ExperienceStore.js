import Vue from 'vue'

export default {
  state: {
    popularExperience: []
  },
  getters: {
    popularExperience: state => {
      return state.popularExperience
    }
  },
  mutations: {
    setPopularExperience: (state, payload) => {
      state.popularExperience = payload
    }
  },
  actions: {
    getPopularExperience ({commit}) {
      Vue.http
        .get('/api/experience/popular')
        .then(response => {
          console.log(response)
        })
        .catch((e) => {
          console.log('failed')
        })
    }
  }
}
