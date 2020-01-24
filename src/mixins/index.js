export default {
  data () {
    return {
    }
  },
  created () {
    console.log(document.cookie())
  },
  methods: {
    currency (val) {
      let value = parseInt(val)
      let result = ''
      value = value === null ? 0 : value
      let reverseValue = value.toString().split('').reverse().join('')
      for (let i = 0; i < reverseValue.length; i++) {
        if (i % 3 === 0) {
          result += reverseValue.substr(i, 3) + '.'
        }
      }
      return 'Rp ' + result.split('', result.length - 1).reverse().join('')
    },
    chatMessage (name) {
      return 'Hi... Saya tertarik dengan ' + name + ' milik Anda. Boleh kita diskusi lebih lanjut tentang hal ini? Terimakasih'
    },
    startChat (contact, message) {
      location.href = 'https://api.whatsapp.com/send?phone=' + contact + '&text=' + message
    }
  }
}
