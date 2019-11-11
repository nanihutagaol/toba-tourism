import Collapsible from '@/components/Collapsible'
export default {
  name: 'FilterKuliner',
  components: {
    Collapsible
  },
  props: {
    restaurantList: {
      type: Array
    }
  },
  computed: {
    listOfRestaurant () {
      return this.getUniqueRestaurant(this.restaurantList)
    }
  },
  methods: {
    getUniqueRestaurant (restaurants) {
      let list = []
      restaurants.forEach(function (restaurant){
        restaurant.isActive = true
        list.push(restaurant)
      })
      return list
    },
    onCheckRestaurant (restaurant) {
      restaurant.isActive = !restaurant.isActive
      this.$emit('onFilterByName', restaurant)
    }
  }
}
