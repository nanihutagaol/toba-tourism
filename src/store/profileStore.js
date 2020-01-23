import Axios from 'axios'

export default {
    state: {
        profileDetail: {}
    },
    getters: {
        profileDetail: state => {
            return state.profileDetail
        },
    },
    mutations: {
        setProfileDetaill: (state, payload) => {
            state.profileDetail = payload
        },
    },
    actions: {
        getProfileDetail({ commit }, userId) {
            Axios
                .get('http://192.168.43.139:9090/api/profile/' + userId)
                .then(response => {
                    console.log(response)
                    let profile = response.data.data
                    commit('setProfileDetaill', profile)
                }).catch((e) => {
                    console.log(e)
                })
        }
    }
}