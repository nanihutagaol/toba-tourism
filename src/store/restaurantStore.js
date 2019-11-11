import Vue from 'vue'

export default {
  state: {
    restaurantList: []
  },
  getters: {
    restaurant: state => {
      return state.restaurantList
    }
  },
  mutations: {
    setCulinary: (state, payload) => {
      state.restaurantList = payload
    }
  },
  actions: {
    getCulinary ({commit}) {
      Vue.http
        .get('/backend/api/get-all-culinary')
        .then(response => {
          commit('setCulinary', response.data.culinaryList)
          console.log(response.data.culinaryList)
        }).catch((e) => {
          console.log(e)
        })
    }
  }
}
