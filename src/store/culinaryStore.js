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
    getCulinaryList ({commit}) {
      Axios
        .get('http://demo8100119.mockable.io/toba-tourism/kuliner')
        .then(response => {
          console.log(response.data.data)
          commit('setCulinaryList', response.data.data)
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
