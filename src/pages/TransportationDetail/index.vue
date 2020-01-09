<template>
 <div class="transportationDetail">
   <div class="container" v-if="transportationDetail.length === 0">
     <loading/>
   </div>
   <div v-else class="transportation-group">
     <div class="transportation-image">
       <banner-detail
         :bannerImage="transportationDetail.transportationImage[0]"
         :bannerName="transportationDetail.transportationName"
         :bannerLocation="transportationDetail.transportationRoute"
         :bannerContact="transportationDetail.transportationContact"
       />
     </div>
     <div class="container description">
       {{transportationDetail.transportationDescription}}
     </div>
   </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '@/components/Examples/Loading'
import BannerDetail from '@/components/BannerDetail'

export default {
  name: 'transportationDetail',
  data () {
    return {
      transportationId: ''
    }
  },
  created () {
    this.transportationId = this.$route.params.id
    this.$store.dispatch('getTransportationDetail', this.transportationId)
  },
  components: {
    Loading,
    BannerDetail
  },
  computed: {
    ...mapGetters([
      'transportationDetail'
    ])
  },
  methods: {
    getTransportation () {
      this.$store.dispatch('getTransportationDetail')
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
