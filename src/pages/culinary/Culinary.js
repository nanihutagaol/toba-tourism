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
      'restaurantList', 'restaurantFiltered', 'isFilterActive', 'culinaryFiltered', 'isCulinaryFilterActive'
    ]),
    restaurants () {
      if (this.isFilterActive === true) {
        return this.restaurantFiltered
      } else {
        return this.restaurantList
      }
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
    onClickedSort(criteria) {
      let restaurantList = []
      let sortedRestaurants = []

      if (this.isFilterActive === true) {
        restaurantList = [...this.restaurantFiltered]
        console.log('active')
      } else {
        restaurantList = [...this.restaurantList]
        console.log('false')
      }

      sortedRestaurants = this.doSortByCriteria(restaurantList, criteria)

      // console.log(sortedRestaurants)
      // this.$store.dispatch('onSetRestaurantFiltered', sortedRestaurants)
    },
    onFilterByName (selectedName) {
      let restaurantList = [...this.restaurantList]
      let filteredRestaurants = this.filterByRestaurantName(restaurantList, selectedName)
      this.$store.dispatch('onSetRestaurantFiltered', filteredRestaurants)
    },
    filterByRestaurantName (restaurantList, selectedName) {
      let out = []
      selectedName.forEach(function (selected) {
        if (selected.isActive === true) {
          out.push(selected)
        }
      })
      return out
    },
    doSortByCriteria (restaurantList, criteria) {
      let sorted = []
      if (criteria.param === 'name') {
        sorted = this.sortByName(restaurantList, criteria.type)
      } else if (criteria.param === 'price') {
        sorted = this.sortByPrice(restaurantList, criteria.type)
      }

      console.log(sorted)
      return sorted;
    },
    sortByName (restaurantList, type) {
      return restaurantList.sort((a, b) => {
        if (type === 'asc')
          return a.foodName - b.foodName
        else{
          console.log(a)
          console.log(b)
          return b.foodName - a.foodName
        }
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
