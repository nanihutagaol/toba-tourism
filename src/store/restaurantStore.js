import Axios from 'axios'

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
        .get('http://192.168.43.139:9090/api/restaurant')
        .then(response => {
          let out = []
          response.data.data.forEach(restaurant => {
            let images = []
            restaurant.restaurantImage.forEach(image => {
              let temp = image.replace('localhost', 'http://192.168.43.139')
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
    getCulinaryList ({commit}) {
      Axios
        .get('http://192.168.43.139:9090/api/culinary')
        .then(response => {
          console.log(response.data.data)
          let out = []
          response.data.data.forEach(restaurant => {
            let imagesRestaurant = []

            restaurant.restaurantImage.forEach(image => {
              let temp = image.replace('localhost', 'http://192.168.43.139')
              imagesRestaurant.push(temp)
            })
            restaurant.restaurantImage = imagesRestaurant

            let culinaries = []
            restaurant.culinaryList.forEach(culinary => {
              let imagesCulinary = []
              culinary.culinaryImage.forEach(image => {
                let temp = image.replace('localhost', 'http://192.168.43.139')
                imagesCulinary.push(temp)
              })
              culinary.culinaryImage = imagesCulinary
              culinaries.push(culinary)
            })
            restaurant.culinaryList = culinaries

            out.push(restaurant)
          })
          console.log(out)
          commit('setRestaurantList', out)
        }).catch((e) => {
          console.log(e)
        })
    },
    getRestaurantDetail ({commit}, restaurantId) {
      Axios
        .get('http://192.168.43.139:9090/api/restaurant/' + restaurantId)
        .then(response => {
          let restaurant = response.data.data

          let images = []
          restaurant.restaurantImage.forEach(image => {
            let temp = image.replace('localhost', 'http://192.168.43.139')
            images.push(temp)
          })
          restaurant.restaurantImage = images

          let culinaryList = []
          restaurant.culinaryList.forEach(culinary => {
            let imagesCulinary = []
            culinary.culinaryImage.forEach(image => {
              let temp = image.replace('localhost', 'http://192.168.43.139')
              imagesCulinary.push(temp)
            })
            culinary.culinaryImage = imagesCulinary
            culinaryList.push(culinary)
          })
          restaurant.culinaryList = culinaryList

          commit('setRestaurantDetail', restaurant)
        }).catch((e) => {
          console.log(e)
        })
    },
    addRestaurant ({commit, dispatch}, restaurant) {
      const formData = new FormData()

      formData.append('restaurantImage', restaurant.restaurantImage)
      formData.append('restaurantName', restaurant.restaurantName)
      formData.append('restaurantLocation', restaurant.restaurantLocation)
      formData.append('restaurantContact', restaurant.restaurantContact)

      Axios
        .post('http://192.168.43.139:9090/api/restaurant', formData, {
          headers: {'Content-Type': 'multipart/form-data'}
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
