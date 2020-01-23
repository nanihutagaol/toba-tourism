import { mapGetters } from 'vuex'
import BannerCategory from '@/components/BannerCategory'
import CardItemTourism from '@/components/CardItemTourism'
import FormCreate from '@/components/Form/TourismForm'
import FormUpdate from '@/components/Form/TourismForm/UpdateData.vue'
import ModalForm from '@/components/Modal'
import ModalShowImage from '@/components/Modal/ModalShowImage'
import ModalApproval from '@/components/Modal/ModalApproval'
import ButtonSearch from '@/components/ButtonSearch'
import NotFound from '@/components/Examples/NotFound'
import Loading from '@/components/Examples/Loading'

export default {
  name: 'Tourism',
  components: {
    BannerCategory,
    CardItemTourism,
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
      bannerImage: require('@/image/Banner/tourism.jpg'),
      tourismImage: '',
      tourism: '',
      showCreateForm: false,
      showUpdateForm: false,
      showDeleteForm: false,
      showImageForm: false,
      showImageView: false
    }
  },
  created () {
    this.getTourism()
  },
  computed: {
    ...mapGetters([
      'tourismList'
    ])
  },
  methods: {
    getTourism () {
      this.$store.dispatch('getTourismList')
    },
    onClickEdit (tourism) {
      this.tourism = tourism
      this.showUpdateForm = true
    },
    onClickImage (image) {
      this.tourismImage = image
      this.showImageView = true
    },
    onClickCamera (tourism) {
      this.tourism = tourism
      this.showImageForm = true
    },
    onClickDelete (tourism) {
      this.tourism = tourism
      this.showDeleteForm = true
    },
    onSubmitTourism () {
      this.getTourism()
      this.onCloseModal()
      setTimeout(function () {
        location.reload();
      }, 1000)
    },
    onViewDetail (tourism) {
      this.$store.dispatch('getTourismDetail', tourism)
    },
    onEditTourismImage () {
      this.$store.dispatch('updateTourismImage', this.tourism)
      this.onSubmitTourism()
    },
    onDeleteTourism () {
      this.$store.dispatch('deleteTourism', this.tourism.tourismId)
      this.onSubmitTourism()
    },
    onCloseModal () {
      this.showCreateForm = false
      this.showUpdateForm = false
      this.showDeleteForm = false
      this.showImageForm = false
      this.showImageView = false
      this.tourism = ''
    }
  }
}
