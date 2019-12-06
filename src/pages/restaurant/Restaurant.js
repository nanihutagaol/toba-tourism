import { mapGetters } from 'vuex'
import BannerCategory from '@/components/BannerCategory'
import FilterCulinary from '@/components/FilterCulinary'
import SortCulinary from '@/components/SortCulinary'
import CardItemRestaurant from '@/components/CardItemRestaurant'
import RestaurantForm from '@/components/RestaurantForm'
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
      restaurant: '',
      showModalForm: false
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
      return this.sortRestaurantByName (restaurants,'asc')
    }
  },
  methods: {
    onCloseModal () {
      this.showModalForm = false
      this.restaurant = ''
    },
    getRestaurants () {
      this.$store.dispatch('getRestaurantList')
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
      this.restaurant = restaurant
      this.showModalForm = true
    },
    onDeleteRestaurant (restaurant) {
      console.log(restaurant.index)
      this.$store.dispatch('deleteRestaurant', restaurant)
    }
  }
}
