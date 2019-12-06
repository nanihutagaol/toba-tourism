import Axios from 'axios'

export default {
  state: {
    culinaryList: [],
    culinaryFiltered: [],
    isCulinaryFilterActive: false
  },
  getters: {
    culinaryList: state => {
      return state.culinaryList
    },
    culinaryFiltered: state => {
      return state.culinaryFiltered
    },
    isCulinaryFilterActive: state => {
      return state.isCulinaryFilterActive
    }
  },
  mutations: {
    setCulinaryList: (state, payload) => {
      state.culinaryList = payload
    },
    setCulinaryFiltered: (state, payload) => {
      state.culinaryFiltered = payload
    },
    setIsCulinaryFilterActive: (state, payload) => {
      state.isCulinaryFilterActive = payload
    }
  },
  actions: {
    addCulinary ({commit, dispatch}, data) {
      const formData = new FormData()

      formData.append('culinaryImage', data.culinary.culinaryImage)
      formData.append('culinaryName', data.culinary.culinaryName)
      formData.append('culinaryPrice', data.culinary.culinaryPrice)

      Axios
        .post('http://192.168.43.139:9090/api/restaurant/' + data.restaurantId + '/culinary', formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
          console.log(response.data.message)
        }).catch((e) => {
          console.log(e)
        })
    },
    updateCulinary ({commit, dispatch}, data) {
      console.log(data.restoran_id)
      console.log(data.kuliner)
      Axios
      // .post('http://demo8100119.mockable.io/toba-tourism/kuliner', JSON.stringify(data.kuliner), {
        .post('https://demo8100119.mockable.io/toba-tourism/kuliner', JSON.stringify(data.kuliner), {
          'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          console.log(response.data.message)
        }).catch((e) => {
          console.log(e)
        })
    },
    deleteCulinary ({commit, state}, restaurant) {
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
    onSetCulinaryFiltered ({commit}, restaurants) {
      commit('setCulinaryFiltered', restaurants)
      commit('setIsCulinaryFilterActive', true)
    },
    onSetIsCulinaryFilterActive ({commit}) {
      commit('setIsCulinaryFilterActive', true)
    }
  }
}
