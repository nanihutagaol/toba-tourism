import { mapGetters } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'
import FormCreate from '@/components/Form/CulinaryForm'
import FormUpdate from '@/components/Form/CulinaryForm/UpdateData.vue'
import ModalForm from '@/components/Modal'
import ModalShowImage from '@/components/Modal/ModalShowImage'
import ModalApproval from '@/components/Modal/ModalApproval'
import CardItemRestaurantDetail from '@/components/CardItemRestaurantDetail'
import Loading from '@/components/Examples/Loading'

export default {
  name: 'RestaurantDetail',
  data () {
    return {
      restaurantId: '',
      culinary: '',
      culinaryImage: '',
      showCreateForm: false,
      showUpdateForm: false,
      showDeleteForm: false,
      showImageForm: false,
      showImageView: false
    }
  },
  created () {
    this.restaurantId = this.$route.params.id
    this.$store.dispatch('getRestaurantDetail', this.restaurantId)
  },
  components: {
    Carousel,
    Slide,
    FormCreate,
    FormUpdate,
    ModalForm,
    ModalShowImage,
    ModalApproval,
    CardItemRestaurantDetail,
    Loading
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
    onClickEdit (culinary) {
      this.culinary = culinary
      this.showUpdateForm = true
    },
    onClickDelete (culinary) {
      this.culinary = culinary
      this.showDeleteForm = true
    },
    onClickImage (image) {
      this.culinaryImage = image
      this.showImageView = true
    },
    onClickCamera (culinary) {
      this.culinary = culinary
      this.showImageForm = true
    },
    onSubmitCulinary () {
      this.getRestaurants()
      this.onCloseModal()
    },
    onCloseModal () {
      this.showCreateForm = false
      this.showUpdateForm = false
      this.showDeleteForm = false
      this.showImageForm = false
      this.showImageView = false
      this.culinary = ''
    },
    onEditCulinary () {
      let data = {
        culinaryId: this.culinary,
        restaurantId: this.restaurantId
      }
      this.$store.dispatch('updateCulinary', data)
      this.onSubmitCulinary()
    },
    onEditCulinaryImage () {
      let data = {
        restaurantId: this.restaurantId,
        culinary: this.culinary
      }
      this.$store.dispatch('updateCulinaryImage', data)
      this.onSubmitCulinary()
    },
    onDeleteCulinary () {
      let data = {
        culinaryId: this.culinary.culinaryId,
        restaurantId: this.restaurantId
      }
      this.$store.dispatch('deleteCulinary', data)
      this.onSubmitCulinary()
    }
  }
}
