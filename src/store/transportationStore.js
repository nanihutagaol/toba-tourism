import Axios from 'axios'

export default {
  state: {
    transportationDetail: {},
    transportationList: []
  },
  getters: {
    transportationDetail: state => {
      return state.transportationDetail
    },
    transportationList: state => {
      return state.transportationList
    }
  },
  mutations: {
    setTransportationDetail: (state, payload) => {
      state.transportationDetail = payload
    },
    setTransportationList: (state, payload) => {
      state.transportationList = payload
    }
  },
  actions: {
    getTransportationList ({commit}) {
      Axios
      // .get('http://192.168.43.139:9090/api/transportation')
        .get('http://www.amock.io/api/nanihutagao/toba-tourism/transportation')
        .then(response => {
          console.log(response)
          let out = []
          response.data.data.forEach(transportation => {
            let images = []
            transportation.transportationImage.forEach(image => {
              let temp = image.replace('localhost', 'http://192.168.43.139')
              images.push(temp)
            })
            transportation.transportationImage = images
            out.push(transportation)
          })
          commit('setTransportationList', out)
        }).catch((e) => {
          console.log(e)
        })
    },
    getTransportationDetail ({commit}, transportationId) {
      console.log(transportationId)
      Axios
      // .get('http://192.168.43.139:9090/api/transportation/' + transportationId)
        .get('http://www.amock.io/api/nanihutagao/toba-tourism/transportation/detail')
        .then(response => {
          console.log(response)
          let transportation = response.data.data
          let images = []
          transportation.transportationImage.forEach(image => {
            let temp = image.replace('localhost', 'http://192.168.43.139')
            images.push(temp)
          })
          transportation.transportationImage = images
          commit('setTransportationDetail', transportation)
        }).catch((e) => {
          console.log(e)
        })
    },
    addTransportation ({commit, dispatch}, transportation) {
      console.log(transportation)
      const formData = new FormData()

      formData.append('transportationImage', transportation.transportationImage)
      formData.append('transportationName', transportation.transportationName)
      formData.append('transportationDescription', transportation.transportationDescription)
      formData.append('transportationRoute', transportation.transportationRoute)
      formData.append('transportationContact', transportation.transportationContact)

      Axios
        .post('http://192.168.43.139:9090/api/transportation', formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
          console.log('success')
        }).catch((e) => {
          console.log(e)
        })
    },
    updateTransportation ({commit, dispatch}, transportation) {
      console.log(transportation)
      const formData = new FormData()
      formData.append('transportationName', transportation.transportationName)
      formData.append('transportationDescription', transportation.transportationDescription)
      formData.append('transportationRoute', transportation.transportationRoute)
      formData.append('transportationContact', transportation.transportationContact)

      Axios
        .put('http://192.168.43.139:9090/api/transportation/' + transportation.transportationId, formData)
        .then(response => {
          console.log('success')
        }).catch((e) => {
          console.log(e)
        })
    },
    updateTransportationImage ({commit, dispatch}, transportation) {
      console.log(transportation)
      const formData = new FormData()
      formData.append('transportationImage', transportation.transportationImage)

      Axios
        .put('http://192.168.43.139:9090/api/transportation/' + transportation.transportationId, formData)
        .then(response => {
          console.log('success')
        }).catch((e) => {
          console.log(e)
        })
    },
    deleteTransportation ({commit, state}, transportationId) {
      console.log(transportationId)
      Axios
        .delete('http://192.168.43.139:9090/api/transportation/' + transportationId)
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
