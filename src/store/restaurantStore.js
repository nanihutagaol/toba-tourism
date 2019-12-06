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
    },
    deleteRestaurant: (state, payload) => {
      state.restaurantList.splice(payload.index, 1)
    }
  },
  actions: {
    getRestaurantList ({commit}) {
      Axios
        .get('http://demo8100119.mockable.io/toba-tourism/restoran')
        .then(response => {
          let out = []
          let index = 0

          response.data.data.forEach(function (restaurant) {
            restaurant.index = index++
            out.push(restaurant)
          })

          commit('setRestaurantList', out)
        }).catch((e) => {
          console.log(e)
        })
    },
    addRestaurant ({commit, dispatch}, restaurant) {
      Axios
        .post('http://demo8100119.mockable.io/toba-tourism/restoran', JSON.stringify(restaurant), {
          'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          console.log('success')
        }).catch((e) => {
          console.log(e)
        })
    },
    updateRestaurant ({commit, dispatch}, restaurant) {
      Axios
        .post('http://demo8100119.mockable.io/toba-tourism/restoran', JSON.stringify(restaurant), {
          'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          console.log('success')
        }).catch((e) => {
          console.log(e)
        })
    },
    deleteRestaurant ({commit, state}, restaurant) {
      restaurant.restoranId = '{restoran_id}' // delete after real api
      Axios
        .delete('http://demo8100119.mockable.io/toba-tourism/restoran/' + restaurant.restoranId)
        .then(response => {
          if (response.data.status === 'OK') {
            commit('deleteRestaurant', restaurant)
            console.log('bisa dong')
          }
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
