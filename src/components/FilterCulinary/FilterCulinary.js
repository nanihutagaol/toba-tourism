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
      this.listOfRestaurant.forEach(function (list) {
        if (list.restaurantId == restaurant.restaurantId) {
          list.isActive = !list.isActive
        }
      })
      this.$emit('onFilterByName', this.listOfRestaurant)
    }
  }
}
