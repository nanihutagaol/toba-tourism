import Axios from 'axios'

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
      // .get('http://192.168.43.139:9090/api/tourism')
        .get('http://www.amock.io/api/nanihutagao/toba-tourism/tourism')
        .then(response => {
          console.log(response)
          let out = []
          response.data.data.forEach(tourism => {
            let images = []
            tourism.tourismImage.forEach(image => {
              let temp = image.replace('localhost', 'http://192.168.43.139')
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
      // .get('http://192.168.43.139:9090/api/tourism/' + tourismId)
        .get('http://www.amock.io/api/nanihutagao/toba-tourism/tourism/detail')
        .then(response => {
          console.log(response)
          let tourism = response.data.data
          let images = []
          tourism.tourismImage.forEach(image => {
            let temp = image.replace('localhost', 'http://192.168.43.139')
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
        .post('http://192.168.43.139:9090/api/tourism', formData, {
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
        .put('http://192.168.43.139:9090/api/tourism/' + tourism.tourismId, formData)
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
        .put('http://192.168.43.139:9090/api/tourism/' + tourism.tourismId, formData)
        .then(response => {
          console.log('success')
        }).catch((e) => {
          console.log(e)
        })
    },
    deleteTourism ({commit, state}, tourismId) {
      console.log(tourismId)
      Axios
        .delete('http://192.168.43.139:9090/api/tourism/' + tourismId)
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
