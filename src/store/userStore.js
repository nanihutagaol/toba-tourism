import Axios from 'axios'
const PROXY = 'http://192.168.43.139'
const URL_API = PROXY + ':8000/api'

export default {
  state: {
    profileDetail: {},
    isAuthError: false
  },
  getters: {
    profileDetail: state => {
      return state.profileDetail
    },
    isAuthError: state => {
      return state.isAuthError
    },
    authMessageError: state => {
      return state.authMessageError
    }
  },
  mutations: {
    setProfileDetaill: (state, payload) => {
      state.profileDetail = payload
    },
    setIsAuthError: (state, payload) => {
      state.isAuthError = payload
    },
    setAuthMessageError: (state, payload) => {
      state.authMessageError = payload
    }
  },
  actions: {
    getProfileDetail ({commit}, userId) {
      Axios
        .get(URL_API + '/profile/' + userId)
        .then(response => {
          console.log(response)
          // let profile = response.data.data
          // commit('setProfileDetaill', profile)
        }).catch((e) => {
          console.log(e)
        })
    },
    doLogin ({commit}, user) {
      Axios
        .post(URL_API + '/user/login', user)
        .then(response => {
          console.log(response)
          if (response.data.status === true) {
            document.cookie = 'token=' + response.data.auth.token
            document.cookie = 'username=' + response.data.auth.username
            document.cookie = 'role=' + response.data.auth.role
            document.cookie = 'message=' + response.data.message
            document.cookie = 'status=' + response.data.status
            commit('setAuthMessageError', '')
          } else {
            commit('setAuthMessageError', response.data.message)
          }
        }).catch((e) => {
          console.log(e)
        })
    },
    doRegister ({commit}, data) {
      console.log(data)
      const formData = new FormData()
      formData.append('username', data.username)
      formData.append('password', data.password)
      formData.append('fullname', data.fullname)
      formData.append('email', data.email)
      formData.append('nohp', data.nohp)
      formData.append('alamat', data.alamat)
      formData.append('dob', data.dob)
      formData.append('social_media', data.social_media)
      formData.append('role', data.role)

      Axios
        .post(URL_API + '/user/new', formData)
        .then(response => {
          console.log(response.data.message)
          if (response.data.status === false) {
            commit('setIsAuthError', true)
            commit('setAuthMessageError', response.data.message)
          } else {
            commit('setAuthMessageError', '')
          }
        }).catch((e) => {
          console.log(e)
        })
    }
  }
}
