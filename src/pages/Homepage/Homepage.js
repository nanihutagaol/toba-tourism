import CustomCarousel from '@/components/Carousel'
import Fitur from '@/components/Fitur'
import Experience from '@/components/Experience'

export default {
  name: 'Homepage',
  components: {
    CustomCarousel,
    Fitur,
    Experience
  },

  computed : {
    popularExperience () {
      this.getPopularExperience()
    }
  },
  methods: {
    getPopularExperience() {
      this.$store.dispatch('getPopularExperience')
    }
  }
}
