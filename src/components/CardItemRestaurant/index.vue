<template>
  <div class="card-item-restaurant">
    <card-item
      :image="restaurant.restoran_gambar"
      :title="restaurant.restoran_nama"
      :caption1="restaurant.restoran_lokasi"
      :caption2="restaurant.restoran_kontak"
    />
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
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
