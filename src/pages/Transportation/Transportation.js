import { mapGetters } from 'vuex'
import BannerCategory from '@/components/BannerCategory'
import CardItemTransportation from '@/components/CardItemTransportation'
import FormCreate from '@/components/Form/TransportationForm'
import FormUpdate from '@/components/Form/TransportationForm/UpdateData.vue'
import ModalForm from '@/components/Modal'
import ModalShowImage from '@/components/Modal/ModalShowImage'
import ModalApproval from '@/components/Modal/ModalApproval'
import ButtonSearch from '@/components/ButtonSearch'
import NotFound from '@/components/Examples/NotFound'
import Loading from '@/components/Examples/Loading'

export default {
  name: 'transportation',
  components: {
    BannerCategory,
    CardItemTransportation,
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
      bannerImage: require('@/image/Banner/transportation.jpg'),
      transportationImage: '',
      transportation: '',
      showCreateForm: false,
      showUpdateForm: false,
      showDeleteForm: false,
      showImageForm: false,
      showImageView: false
    }
  },
  created () {
    this.getTransportation()
  },
  computed: {
    ...mapGetters([
      'transportationList'
    ])
  },
  methods: {
    getTransportation () {
      this.$store.dispatch('getTransportationList')
    },
    onClickEdit (transportation) {
      this.transportation = transportation
      this.showUpdateForm = true
    },
    onClickImage (image) {
      this.transportationImage = image
      this.showImageView = true
    },
    onClickCamera (transportation) {
      this.transportation = transportation
      this.showImageForm = true
    },
    onClickDelete (transportation) {
      this.transportation = transportation
      this.showDeleteForm = true
    },
    onSubmitTransportation () {
      this.getTransportation()
      this.onCloseModal()
    },
    onViewDetail (transportation) {
      this.$store.dispatch('getTransportationDetail', transportation)
    },
    onEditTransportationImage () {
      this.$store.dispatch('updateTransportationImage', this.transportation)
      this.onSubmitTransportation()
    },
    onDeleteTransportation () {
      this.$store.dispatch('deleteTransportation', this.transportation.transportationId)
      this.onSubmitTransportation()
    },
    onCloseModal () {
      this.showCreateForm = false
      this.showUpdateForm = false
      this.showDeleteForm = false
      this.showImageForm = false
      this.showImageView = false
      this.transportation = ''
    }
  }
}
