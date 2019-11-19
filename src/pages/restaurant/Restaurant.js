import { mapGetters } from 'vuex'
import BannerCategory from '@/components/BannerCategory'
import FilterCulinary from '@/components/FilterCulinary'
import SortCulinary from '@/components/SortCulinary'
import CardItemRestaurant from '@/components/CardItemRestaurant'
import RestaurantForm from '@/components/restaurantForm'

export default {
  name: 'Restaurant',
  components: {
    BannerCategory,
    FilterCulinary,
    SortCulinary,
    CardItemRestaurant,
    RestaurantForm
  },
  data () {
    return {
      isAddButtonActive: false
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
    getRestaurants () {
      this.$store.dispatch('getRestaurantList')
    },
    activateAddButton () {
      this.isAddButtonActive = true
    },
    switchOffAddButton () {
      this.isAddButtonActive = false
    },
    reCallRestaurants () {
      this.getRestaurants()
      this.switchOffAddButton();
    },
    sortRestaurantByName (restaurantList, type) {
      console.log(restaurantList)
      return restaurantList.sort((a, b) => {
        if (type === 'asc')
          return a.restoran_nama - b.restoran_nama
        else
          return b.restoran_nama - a.restoran_nama
      })
    }
  }
}
