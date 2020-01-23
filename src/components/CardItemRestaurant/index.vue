<template>
  <div class="card-item-restaurant">
    <card-item
      :url="url"
      :image="restaurant.restaurantImage[0]"
      :title="restaurant.restaurantName"
      :caption2="restaurant.restaurantLocation"
      :caption3="restaurant.restaurantContact"
      @onClickEdit="onClickEdit"
      @onClickDelete="onClickDelete"
      @onClickImage="onClickImage"
      @onClickCamera="onClickCamera"
    >
      <span slot="caption2">
        <i class="fa fa-map-marker"></i>
      </span>
      <span slot="caption3">
        <i class="fa fa-whatsapp" @click="onClickWhatsApp"></i>
      </span>
    </card-item>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem'
export default {
  name: 'CardItemRestaurant',
  props: {
    restaurant: {
      type: Object
    }
  },
  components: {
    CardItem
  },
  computed: {
    url () {
      return '/restoran/detail/' + this.restaurant.restaurantId
    }
  },
  methods: {
    onClickEdit () {
      this.$emit('onClickEdit', this.restaurant)
    },
    onClickDelete () {
      this.$emit('onClickDelete', this.restaurant)
    },
    onClickImage () {
      this.$emit('onClickImage', this.restaurant.restaurantImage[0])
    },
    onClickCamera (image) {
      let restaurant = {
        restaurantId: this.restaurant.restaurantId,
        restaurantImage: image
      }
      this.$emit('onClickCamera', restaurant)
    },
    onClickWhatsApp () {
      let message = this.chatMessage('makanan di restoran ' + this.restaurant.restaurantName)
      this.startChat(this.restaurant.restaurantContact, message)
    }
  }
}
</script>

<style scoped>

</style>
