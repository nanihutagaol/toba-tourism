import Axios from 'axios'
const PROXY = 'http://192.168.43.140'
const URL_API = 'http://192.168.43.140:9090/api'
const LOCALHOST = 'localhost'

export default {
  state: {
    tourismDetail: {},
    tourismList: []
  },
  getters: {
    tourismDetail: state => {
      return state.tourismDetail
    },
    tourismList: state => {
      return state.tourismList
    }
  },
  mutations: {
    setTourismDetail: (state, payload) => {
      state.tourismDetail = payload
    },
    setTourismList: (state, payload) => {
      state.tourismList = payload
    }
  },
  actions: {
    getTourismList ({commit}) {
      Axios
        // .get(URL_API + '/tourism')
        .get('http://www.amock.io/api/nanihutagao/toba-tourism/tourism')
        .then(response => {
          console.log(response)
          let out = []
          response.data.data.forEach(tourism => {
            let images = []
            tourism.tourismImage.forEach(image => {
              let temp = image.replace(LOCALHOST, PROXY)
              images.push(temp)
            })
            tourism.tourismImage = images
            out.push(tourism)
          })
          commit('setTourismList', out)
        }).catch((e) => {
          console.log(e)
        })
    },
    getTourismDetail ({commit}, tourismId) {
      Axios
        .get(URL_API + '/tourism/' + tourismId)
        // .get('http://www.amock.io/api/nanihutagao/toba-tourism/tourism/detail')
        .then(response => {
          console.log(response)
          let tourism = response.data.data
          let images = []
          tourism.tourismImage.forEach(image => {
            let temp = image.replace(LOCALHOST, PROXY)
            images.push(temp)
          })
          tourism.tourismImage = images
          commit('setTourismDetail', tourism)
        }).catch((e) => {
          console.log(e)
        })
    },
    addTourism ({commit, dispatch}, tourism) {
      console.log(tourism)
      const formData = new FormData()

      formData.append('tourismImage', tourism.tourismImage)
      formData.append('tourismName', tourism.tourismName)
      formData.append('tourismDescription', tourism.tourismDescription)
      formData.append('tourismLocation', tourism.tourismLocation)
      formData.append('tourismContact', tourism.tourismContact)

      Axios
        .post(URL_API + '/tourism', formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
          console.log('success')
        }).catch((e) => {
          console.log(e)
        })
    },
    updateTourism ({commit, dispatch}, tourism) {
      console.log(tourism)
      const formData = new FormData()
      formData.append('tourismName', tourism.tourismName)
      formData.append('tourismDescription', tourism.tourismDescription)
      formData.append('tourismLocation', tourism.tourismLocation)
      formData.append('tourismContact', tourism.tourismContact)

      Axios
        .put(URL_API + '/tourism/' + tourism.tourismId, formData)
        .then(response => {
          console.log('success')
        }).catch((e) => {
          console.log(e)
        })
    },
    updateTourismImage ({commit, dispatch}, tourism) {
      console.log(tourism)
      const formData = new FormData()
      formData.append('tourismImage', tourism.tourismImage)

      Axios
        .put(URL_API + '/tourism/image' + tourism.tourismId, formData)
        .then(response => {
          console.log('success')
        }).catch((e) => {
          console.log(e)
        })
    },
    deleteTourism ({commit, state}, tourismId) {
      console.log(tourismId)
      Axios
        .delete(URL_API + '/tourism/' + tourismId)
        .then(response => {
          if (response.data.status === 'OK') {
            console.log('bisa dong')
          }
        }).catch((e) => {
          console.log(e)
        })
    }
  }
}
