import { mapGetters } from 'vuex'
import BannerCategory from '@/components/BannerCategory'
import FilterCulinary from '@/components/FilterCulinary'
import SortCulinary from '@/components/SortCulinary'
import CardCulinary from '@/components/CardCulinary'

export default {
  name: 'Culinary',
  components: {
    BannerCategory,
    FilterCulinary,
    SortCulinary,
    CardCulinary
  },
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('getRestaurantList')
  },
  computed: {
    ...mapGetters([
      'restaurantList', 'restaurantFiltered', 'isFilterActive'
    ]),
    filteredRestaurantList () {
      if (this.isFilterActive === true){
        return this.restaurantFiltered
      } else {
        return this.restaurantList
      }
    }
  },
  methods: {
    onFilterByName (selectedName) {
      let restaurantList = [...this.restaurantList]
      let restaurants = this.filterByRestaurantName(restaurantList, selectedName)
      this.$store.dispatch('onSetRestaurantFiltered', restaurants)
    },
    filterByRestaurantName (restaurantList, selectedName) {
      let out = [];

      restaurantList.forEach(function (restaurant) {
        selectedName.forEach(function (selected) {
          if (selected && selected.isActive === true && selected.restaurantId === restaurant.restaurantId) {
            out.push(restaurant);
            return;
          }
        });
      })

      return out;
    },
    onSortBy(criteria) {
      console.log(criteria)
    },
    sortByPrice (restaurantList, type) {
      return restaurantList.sort((a, b) => {
        if (type === 'asc')
          return a.offerFare - b.offerFare
        else
          return b.offerFare - a.offerFare
      })
    },
  }
}
