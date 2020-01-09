import { mapGetters } from 'vuex'
import BannerCategory from '@/components/BannerCategory'
import FilterCulinary from '@/components/FilterCulinary'
import SortCulinary from '@/components/SortCulinary'
import CardItemCulinary from '@/components/CardItemCulinary'
import ModalShowImage from '@/components/Modal/ModalShowImage'
import Loading from '@/components/Examples/Loading'

export default {
  name: 'Culinary',
  components: {
    BannerCategory,
    FilterCulinary,
    SortCulinary,
    CardItemCulinary,
    ModalShowImage,
    Loading
  },
  data () {
    return {
      bannerImage: require('@/image/Banner/culinary.png'),
      showImageView: false,
      culinaryImage: ''
    }
  },
  created () {
    this.$store.dispatch('getCulinaryList')
  },
  computed: {
    ...mapGetters([
      'restaurantList', 'culinaryFiltered', 'isCulinaryFilterActive'
    ]),
    filteredRestaurantList () {
      // console.log(this.culinaryList)
      // if (this.isFilterActive === true) {
      //   return this.culinaryFiltered
      // } else {
      //   return this.culinaryList
      // }
    }
  },
  methods: {
    onCloseModal () {
      this.showImageView = false
    },
    onClickImage (image) {
      this.showImageView = true
      this.culinaryImage = image
    },
    onFilterByName (selectedName) {
      let restaurantList = [...this.restaurantList]
      let filteredRestaurants = this.filterByRestaurantName(restaurantList, selectedName)
      this.$store.dispatch('onsetRestaurantFiltered', filteredRestaurants)
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
    onSort(criteria) {
      let restaurantList = []
      let sortedRestaurants = []

      if (this.isFilterActive === true) {
        restaurantList = [...this.restaurantFiltered]
      } else {
        restaurantList = [...this.restaurantList]
      }

      sortedRestaurants = this.doSortByCriteria(restaurantList, criteria)

      console.log(sortedRestaurants)
      this.$store.dispatch('onsetRestaurantFiltered', sortedRestaurants)
    },
    groupFoodList (restaurantsList) {
    },
    doSortByCriteria (restaurantList, criteria) {
      let sorted = []
      if (criteria.param === 'name') {
        sorted = this.sortByName(restaurantList, criteria.type)
      } else if (criteria.param === 'price') {
        sorted = this.sortByPrice(restaurantList, criteria.type)
      }
      return sorted;
    },
    sortByName (restaurantList, type) {
      return restaurantList.sort((a, b) => {
        if (type === 'asc')
          return a.foodName - b.foodName
        else
          return b.foodName - a.foodName
      })
    },
    sortByPrice (restaurantList, type) {
      return restaurantList.sort((a, b) => {
        if (type === 'asc')
          return a.foodPrice - b.foodPrice
        else
          return b.foodPrice - a.foodPrice
      })
    }
  }
}
