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
    >
      <span slot="caption2">
        <img src="@/image/Icon/location.png" alt="altText" class="caption_icon">
      </span>
      <span slot="caption3">
        <img src="@/image/Icon/phone.png" alt="altText" class="caption_icon">
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
  created () {
    console.log()
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
    }
  }
}
</script>

<style scoped>
.caption_icon {
  width: 25px;
  height: 20px;
  margin: 1px;
}
</style>
