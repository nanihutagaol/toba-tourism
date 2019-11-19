import Axios from 'axios'

export default {
  state: {
    restaurantList: [],
    restaurantFiltered: [],
    isFilterActive: false
  },
  getters: {
    restaurantList: state => {
      return state.restaurantList
    },
    restaurantFiltered: state => {
      return state.restaurantFiltered
    },
    isFilterActive: state => {
      return state.isFilterActive
    }
  },
  mutations: {
    setRestaurantList: (state, payload) => {
      state.restaurantList = payload
    },
    setRestaurantFiltered: (state, payload) => {
      state.restaurantFiltered = payload
    },
    setIsFilterActive: (state, payload) => {
      state.isFilterActive = payload
    }
  },
  actions: {
    getRestaurantList ({commit}) {
      Axios
        .get('http://demo8100119.mockable.io/toba-tourism/restoran')
        .then(response => {
          commit('setRestaurantList', response.data.data)
        }).catch((e) => {
          console.log(e)
        })
    },
    addRestaurant ({commit, dispatch}, restaurant) {
      Axios
        .post('http://demo8100119.mockable.io/toba-tourism/restoran')
        .then(response => {
          console.log('success')
        }).catch((e) => {
          console.log(e)
        })
    },
    onsetRestaurantFiltered ({commit}, restaurants) {
      commit('setRestaurantFiltered', restaurants)
      commit('setIsFilterActive', true)
      console.log('waw')
    },
    onSetIsFilterActive ({commit}) {
      commit('setIsFilterActive', true)
    }
  }
}
