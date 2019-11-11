// import { mapGetters } from 'vuex'
import BannerCategory from '@/components/BannerCategory'
import CardCulinary from '@/components/CardCulinary'

export default {
  name: 'CulinaryAdmin',
  components: {
    BannerCategory,
    CardCulinary
  },
  data () {
    return {}
  },
  created () {
    this.$store.dispatch('getCulinary')
  },
  computed: {
    culinaryList: function () {
      return this.$store.getters.culinaryList
    }
    // ...mapGetters('culinary', [
    //   'culinaryList'
    // ])
  },
  methods: {
  }
}
