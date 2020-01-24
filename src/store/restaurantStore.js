import Axios from 'axios'
const PROXY = 'http://192.168.43.139'
const URL_API = PROXY + ':9090/api'
const LOCALHOST = 'localhost'

export default {
  state: {
    restaurantDetail: {},
    restaurantList: [],
    restaurantFiltered: [],
    isFilterActive: false
  },
  getters: {
    restaurantDetail: state => {
      return state.restaurantDetail
    },
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
    setRestaurantDetail: (state, payload) => {
      state.restaurantDetail = payload
    },
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
        .get(URL_API + '/restaurant')
        // .get('http://www.amock.io/api/nanihutagao/toba-tourism/restaurant')
        .then(response => {
          console.log(response)
          let out = []
          response.data.data.forEach(restaurant => {
            let images = []
            restaurant.restaurantImage.forEach(image => {
              let temp = image.replace(LOCALHOST, PROXY)
              images.push(temp)
            })
            restaurant.restaurantImage = images
            out.push(restaurant)
          })
          commit('setRestaurantList', out)
        }).catch((e) => {
          console.log(e)
        })
    },
    getRestaurantDetail ({commit}, restaurantId) {
      Axios
        .get(URL_API + '/restaurant/' + restaurantId)
        // .get('http://www.amock.io/api/nanihutagao/toba-tourism/restaurant/detail')
        .then(response => {
          console.log(response)
          let restaurant = response.data.data
          console.log(restaurant)
          let images = []
          restaurant.restaurantImage.forEach(image => {
            let temp = image.replace(LOCALHOST, PROXY)
            images.push(temp)
          })
          restaurant.restaurantImage = images

          let culinaryList = []
          if (restaurant.culinaryList !== null) {
            restaurant.culinaryList.forEach(culinary => {
              let imagesCulinary = []
              culinary.culinaryImage.forEach(image => {
                let temp = image.replace(LOCALHOST, PROXY)
                imagesCulinary.push(temp)
              })
              culinary.culinaryImage = imagesCulinary
              culinaryList.push(culinary)
            })
          }
          restaurant.culinaryList = culinaryList

          commit('setRestaurantDetail', restaurant)
        }).catch((e) => {
          console.log(e)
        })
    },
    addRestaurant ({commit, dispatch}, restaurant) {
      console.log(restaurant)
      const formData = new FormData()

      formData.append('restaurantImage', restaurant.restaurantImage)
      formData.append('restaurantName', restaurant.restaurantName)
      formData.append('restaurantLocation', restaurant.restaurantLocation)
      formData.append('restaurantContact', restaurant.restaurantContact)

      Axios
        .post(URL_API + '/restaurant', formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
          console.log('success')
        }).catch((e) => {
          console.log(e)
        })
    },
    updateRestaurant ({commit, dispatch}, restaurant) {
      console.log(restaurant)
      const formData = new FormData()
      formData.append('restaurantName', restaurant.restaurantName)
      formData.append('restaurantLocation', restaurant.restaurantLocation)
      formData.append('restaurantContact', restaurant.restaurantContact)

      Axios
        .put(URL_API + '/restaurant/' + restaurant.restaurantId, formData)
        .then(response => {
          console.log('success')
        }).catch((e) => {
          console.log(e)
        })
    },
    updateRestaurantImage ({commit, dispatch}, restaurant) {
      console.log(restaurant)
      const formData = new FormData()
      formData.append('restaurantImage', restaurant.restaurantImage)

      Axios
        .post(URL_API + '/restaurant/image/' + restaurant.restaurantId, formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
          console.log('success')
        }).catch((e) => {
          console.log(e)
        })
    },
    deleteRestaurant ({commit, state}, restaurantId) {
      console.log(restaurantId)
      Axios
        .delete(URL_API + '/restaurant/' + restaurantId)
        .then(response => {
          if (response.data.status === 'OK') {
            // commit('deleteRestaurant', restaurant)
            console.log('bisa dong')
          }
        }).catch((e) => {
          console.log(e)
        })
    },
    onSetRestaurantFiltered ({commit}, restaurants) {
      commit('setRestaurantFiltered', restaurants)
      commit('setIsFilterActive', true)
    },
    onSetIsFilterActive ({commit}) {
      commit('setIsFilterActive', true)
    }
  }
}
