<template>
 <div class="tourismDetail">
   <div class="container" v-if="tourismDetail.length === 0">
     <loading/>
   </div>
   <div v-else class="tourism-group">
     <div class="tourism-image">
       <banner-detail
         :bannerImage="tourismDetail.tourismImage[0]"
         :bannerName="tourismDetail.tourismName"
         :bannerLocation="tourismDetail.tourismLocation"
         :bannerContact="tourismDetail.tourismContact"
       />
     </div>
     <div class="container description">
       {{tourismDetail.tourismDescription}}
     </div>
   </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '@/components/Examples/Loading'
import BannerDetail from '@/components/BannerDetail'

export default {
  name: 'tourismDetail',
  data () {
    return {
      tourismId: ''
    }
  },
  created () {
    this.tourismId = this.$route.params.id
    this.$store.dispatch('getTourismDetail', this.tourismId)
  },
  components: {
    Loading,
    BannerDetail
  },
  computed: {
    ...mapGetters([
      'tourismDetail'
    ])
  },
  methods: {
    getTourism () {
      this.$store.dispatch('getTourismDetail')
    }
  }
}
</script>

<style scoped>
.description {
  margin-top: 3em;
  text-align: justify;
}
</style>
