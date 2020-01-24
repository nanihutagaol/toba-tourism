export default {
  name: 'LoginPage',
  data(){
    return {
      user: {
        username : '',
        password : ''
      }
    }
  },
  methods: {
    validateForm() {
      this.$store.dispatch('doLogin', this.user)
      // this.$emit('onLogin')
    }
  }
}
