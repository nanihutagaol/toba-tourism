import Axios from 'axios'

export default {
  state: {
    sample: []
  },
  getters: {
    sample: state => {
      return state.sample
    }
  },
  mutations: {
    setSample: (state, payload) => {
      state.sample = payload
    }
  },
  actions: {
    getSample ({commit}) {
      Axios
        .get()
        .then(response => {
          commit('setSample', response)
        }).catch((e) => {
          console.log(e)
        })
    }
  }
}
