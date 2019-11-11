import { mapGetters } from 'vuex'
import BannerCategory from '@/components/BannerCategory'
import CardCulinary from '@/components/CardCulinary'
import FilterCulinary from '@/components/FilterCulinary'

export default {
  name: 'CulinaryPage',
  components: {
    BannerCategory,
    CardCulinary,
    FilterCulinary
  },
  data () {
    return {}
  },
  created () {
    this.$store.dispatch('getCulinary')
  },
  computed: {
    ...mapGetters('culinary', [
      'culinary'
    ])
  },
  methods: {
  }
}
