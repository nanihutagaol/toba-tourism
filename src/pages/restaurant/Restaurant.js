import { mapGetters } from 'vuex'
import BannerCategory from '@/components/BannerCategory'
import FilterCulinary from '@/components/FilterCulinary'
import SortCulinary from '@/components/SortCulinary'
import CardItemRestaurant from '@/components/CardItemRestaurant'
import FormCreate from '@/components/Form/RestaurantForm'
import FormUpdate from '@/components/Form/RestaurantForm/UpdateData.vue'
import ModalForm from '@/components/Modal'
import ModalShowImage from '@/components/Modal/ModalShowImage'
import ModalApproval from '@/components/Modal/ModalApproval'
import ButtonSearch from '@/components/ButtonSearch'
import NotFound from '@/components/Examples/NotFound'
import Loading from '@/components/Examples/Loading'

export default {
  name: 'Restaurant',
  components: {
    BannerCategory,
    FilterCulinary,
    SortCulinary,
    CardItemRestaurant,
    FormCreate,
    FormUpdate,
    ModalForm,
    ModalShowImage,
    ModalApproval,
    ButtonSearch,
    NotFound,
    Loading
  },
  data () {
    return {
      bannerImage: require('@/image/Banner/restaurant.png'),
      restaurantImage: '',
      restaurant: '',
      showCreateForm: false,
      showUpdateForm: false,
      showDeleteForm: false,
      showImageForm: false,
      showImageView: false
    }
  },
  created () {
    this.getRestaurants()
  },
  computed: {
    ...mapGetters([
      'restaurantList'
    ])
  },
  methods: {
    getRestaurants () {
      this.$store.dispatch('getRestaurantList')
    },
    onClickEdit (restaurant) {
      this.restaurant = restaurant
      this.showUpdateForm = true
    },
    onClickImage (image) {
      this.restaurantImage = image
      this.showImageView = true
    },
    onClickCamera (restaurant) {
      this.restaurant = restaurant
      this.showImageForm = true
    },
    onClickDelete (restaurant) {
      this.restaurant = restaurant
      this.showDeleteForm = true
    },
    onSubmitRestaurant () {
      this.getRestaurants()
      this.onCloseModal()
      setTimeout(function () {
        location.reload();
      }, 1000)
    },
    onViewDetail (restaurant) {
      this.$store.dispatch('getRestaurantDetail', restaurant)
    },
    onEditRestaurantImage () {
      this.$store.dispatch('updateRestaurantImage', this.restaurant)
      this.onSubmitRestaurant()
    },
    onDeleteRestaurant () {
      this.$store.dispatch('deleteRestaurant', this.restaurant.restaurantId)
      this.onSubmitRestaurant()
    },
    onCloseModal () {
      this.showCreateForm = false
      this.showUpdateForm = false
      this.showDeleteForm = false
      this.showImageForm = false
      this.showImageView = false
      this.restaurant = ''
    }
  }
}
