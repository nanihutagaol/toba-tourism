import Collapsible from '@/components/Collapsible'
export default {
  name: 'FilterKuliner',
  components: {
    Collapsible
  },
  props: {
    culinaryList: {
      type: Array
    }
  },
  computed: {
    listOfRestaurant () {
      return this.getUniqueRestaurant(this.culinaryList)
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
