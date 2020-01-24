import Axios from 'axios'
const PROXY = 'http://192.168.43.139'
const URL_API = PROXY + ':9090/api'
const LOCALHOST = 'localhost'

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
    getCulinaryList ({commit}) {
      Axios
        .get(URL_API + '/culinary')
        // .get('http://www.amock.io/api/nanihutagao/toba-tourism/culinary')
        .then(response => {
          let out = []
          response.data.data.forEach(restaurant => {
            let imagesRestaurant = []
            restaurant.restaurantImage.forEach(image => {
              let temp = image.replace(LOCALHOST, PROXY)
              imagesRestaurant.push(temp)
            })
            restaurant.restaurantImage = imagesRestaurant

            let culinaries = []
            restaurant.culinaryList.forEach(culinary => {
              let imagesCulinary = []
              culinary.culinaryImage.forEach(image => {
                let temp = image.replace(LOCALHOST, PROXY)
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
    addCulinary ({commit, dispatch}, data) {
      console.log(data)
      const formData = new FormData()

      formData.append('culinaryImage', data.culinary.culinaryImage)
      formData.append('culinaryName', data.culinary.culinaryName)
      formData.append('culinaryPrice', data.culinary.culinaryPrice)

      Axios
        .post(URL_API + '/restaurant/' + data.restaurantId + '/culinary', formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
          console.log(response.data.message)
        }).catch((e) => {
          console.log(e)
        })
    },
    updateCulinary ({commit, dispatch}, data) {
      console.log(data)
      const formData = new FormData()
      formData.append('culinaryName', data.culinary.culinaryName)
      formData.append('culinaryPrice', data.culinary.culinaryPrice)

      Axios
        .put(URL_API + '/restaurant/' + data.restaurantId + '/culinary/' + data.culinary.culinaryId, formData, {
          'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          console.log(response.data.message)
        }).catch((e) => {
          console.log(e)
        })
    },
    updateCulinaryImage ({commit, dispatch}, data) {
      console.log(data)
      const formData = new FormData()
      formData.append('culinaryImage', data.culinary.culinaryImage)

      Axios
        .post(URL_API + '/restaurant/image/' + data.restaurantId + '/culinary/' + data.culinary.culinaryId, formData, {
          'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          console.log(response.data.message)
        }).catch((e) => {
          console.log(e)
        })
    },
    deleteCulinary ({commit, state}, data) {
      console.log(data)
      Axios
        .delete(URL_API + '/restaurant/' + data.restaurantId + '/culinary/' + data.culinaryId)
        .then(response => {
          if (response.data.status === 'OK') {
            // commit('deleteRestaurant', restaurant)
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
