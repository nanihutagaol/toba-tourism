<template>
  <div class="card-item-restaurant">
    <card-item
      :image="restaurant.restoran_gambar"
      :title="restaurant.restoran_nama"
      :caption1="restaurant.restoran_lokasi"
      :caption2="restaurant.restoran_kontak"
      @onClickEdit="onClickEdit"
      @onClickDelete="onClickDelete"
    >
      <span slot="caption1">
        <img src="@/image/Icon/location.png" alt="altText" class="caption_icon">
      </span>
      <span slot="caption2">
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
  components: {
    CardItem
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
