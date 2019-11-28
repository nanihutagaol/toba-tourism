import { mapGetters } from 'vuex'
import BannerCategory from '@/components/BannerCategory'
import FilterCulinary from '@/components/FilterCulinary'
import SortCulinary from '@/components/SortCulinary'
import CardItemRestaurant from '@/components/CardItemRestaurant'
import RestaurantForm from '@/components/restaurantForm'
import ModalForm from '@/components/Modal'

export default {
  name: 'Restaurant',
  components: {
    BannerCategory,
    FilterCulinary,
    SortCulinary,
    CardItemRestaurant,
    RestaurantForm,
    ModalForm
  },
  data () {
    return {
      showRestaurantForm: false,
      restaurant: '',
      isShowAlert: true
    }
  },
  created () {
    this.getRestaurants()
  },
  computed: {
    ...mapGetters([
      'restaurantList'
    ]),
    sortedRestaurantList () {
      let restaurants = [...this.restaurantList]
      console.log(restaurants)
      return this.sortRestaurantByName (restaurants,'asc')
    }
  },
  methods: {
    onAlertClose () {
      this.isShowAlert = false
    },
    getRestaurants () {
      this.$store.dispatch('getRestaurantList')
    },
    showTheForm () {
      this.showRestaurantForm = true
    },
    hideTheForm () {
      this.showRestaurantForm = false
      this.restaurant = ''
    },
    reCallRestaurants () {
      this.getRestaurants()
      this.hideTheForm();
    },
    sortRestaurantByName (restaurantList, type) {
      console.log(restaurantList)
      return restaurantList.sort((a, b) => {
        if (type === 'asc')
          return a.restoran_nama - b.restoran_nama
        else
          return b.restoran_nama - a.restoran_nama
      })
    },
    onEditRestaurant (restaurant) {
      console.log(restaurant.restoran_id)
      this.restaurant = restaurant
      this.showTheForm()
    },
    onDeleteRestaurant (restaurant) {
      console.log(restaurant.index)
      this.$store.dispatch('deleteRestaurant', restaurant)
    }
  }
}
