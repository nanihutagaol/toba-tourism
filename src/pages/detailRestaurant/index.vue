<template>
 <div class="RestaurantDetail">

   <div class="carousel-restaurant">
     <carousel :per-page="1" :autoplay="true" :loop="true" paginationPosition="bottom-overlay" :speed="500">
       <slide v-for="list in restaurantDetail.restaurantImage" :key="list.restaurantId">
         <img :src="list" class="carousel-image">
         <div class="slide-content">
           <p class="content-title">
             {{restaurantDetail.restaurantName}}
           </p>
           <p class="content-location">
             <img src="@/image/Icon/location.png" alt="altText" class="caption_icon">
             {{restaurantDetail.restaurantLocation}}
           </p>
           <p class="content-contact">
             <img src="@/image/Icon/phone.png" alt="altText" class="caption_icon">
             {{restaurantDetail.restaurantContact}}
           </p>
         </div>
       </slide>
     </carousel>

   </div>

   <div class="container container-kuliner">
     <div class="row kuliner-title">
       <div class="col-sm-9 left-kuliner-title">
         <h2 style="text-align: left">List Kuliner</h2>
       </div>
       <div class="col-sm-3 right-kuliner-title">
         <button class="btn toba-btn-success" @click="showModalForm=true"><i class="fa fa-plus"></i> Tambah</button>
       </div>
     </div>
     <hr>

     <div class="row kuliner-group">
       <carousel :per-page="4" :speed="500" slidesToScroll="auto" :scrollPerPage="false">
         <slide v-for="culinary in restaurantDetail.culinaryList" :key="culinary.culinaryId">
           <card-item-restaurant-detail
             class="list-kuliner"
             :restaurant="restaurantDetail"
             :culinary="culinary"
             @onClickEdit="onEditCulinary"
             @onClickDelete="onDeleteCulinary"
           />
         </slide>
       </carousel>
     </div>
   </div>

   <!--  ============== Modal to Show Culinary Form ==============  -->
   <modal-form v-if="showModalForm" @onCloseModal="onCloseModal">
     <div slot="modal-title">
       {{culinary === '' ? 'Tambah Kuliner' : 'Ubah Kuliner'}}
     </div>
     <div slot="modal-body">
       <CulinaryForm class="col-sm-12"
         :restaurantId="restaurantId"
         :formData="culinary"
         @onSubmitRestaurant="onSubmitRestaurant"
       />
     </div>
   </modal-form>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'
import CulinaryForm from '@/components/FormComponents/CulinaryForm'
import ModalForm from '@/components/Modal'
import CardItemRestaurantDetail from '@/components/CardItemRestaurantDetail'

export default {
  name: 'RestaurantDetail',
  data () {
    return {
      culinary: '',
      showModalForm: false,
      restaurantId: ''
    }
  },
  created () {
    this.restaurantId = this.$route.params.id
    this.$store.dispatch('getRestaurantDetail', this.restaurantId)
  },
  components: {
    Carousel,
    Slide,
    CulinaryForm,
    ModalForm,
    CardItemRestaurantDetail
  },
  computed: {
    ...mapGetters([
      'restaurantDetail'
    ])
  },
  methods: {
    getRestaurants () {
      this.$store.dispatch('getRestaurantDetail')
    },
    onSubmitRestaurant () {
      this.getRestaurants()
      this.showModalForm = false
    },
    onCloseModal () {
      this.showModalForm = false
      this.culinary = ''
    },
    onEditCulinary (culinary) {
      this.culinary = culinary
      this.showModalForm = true
    },
    onDeleteCulinary (culinary) {
      this.$store.dispatch('deleteCulinary', culinary)
    },
    test () {
      alert('test alert')
    }
  }
}
</script>

<style scoped>
  .carousel-image {
    height: 350px;
    width: 100%;
  }
  .container-kuliner {
    margin-top: 3em;
    /*background: #ecf0f5;*/
  }
  .kuliner-group {
    padding: 0.5em;
  }
  .list-kuliner {
    padding: 0.5em;
  }
  .right-kuliner-title {
    text-align: right;
  }
  .slide-content {
    position: absolute;
    font-size: 15px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: black;
    bottom: 25%;
    left: 60%;
    width: 40%;
    text-align: center;
    background-color: #ffffffc2;
  }
  .content-title {
    font-size: 36px;
    font-family: "Comic Sans MS";
    color: #1081e0;
    text-shadow: 1px 1px 2px white, 0 0 25px #1081e0, 0 0 10px white;
  }
  .caption_icon {
    width: 25px;
    height: 20px;
    margin: 1px;
  }
</style>
