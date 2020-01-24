import {mapGetters} from "vuex";

export default {
  name: 'RegisterPage',
  data(){
    return {
      account: {
        username : '',
        password : '',
        fullname: '',
        email: '',
        nohp: '',
        alamat: '',
        dob: '',
        social_media: '',
        role: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'isAuthError', 'authMessageError'
    ])
  },
  methods: {
    validateForm() {
      this.$store.dispatch('doRegister', this.account)
      // this.$emit('onLogin')
    }
  }
}
