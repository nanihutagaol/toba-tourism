<template>
  <div class="card-item-culinary">
    <card-item
      :image="culinary.kuliner_gambar"
      :title="culinary.kuliner_nama"
      :caption1="currency(culinary.kuliner_harga)"
      :caption2="restaurant.restoran_nama"
      :caption3="restaurant.restoran_lokasi"
    >
      <span slot="caption2">
        <img src="@/image/Icon/home.png" alt="altText" class="caption_icon">
      </span>
      <span slot="caption3">
        <img src="@/image/Icon/location.png" alt="altText" class="caption_icon">
      </span>
    </card-item>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem'
export default {
  name: 'CardItemCulinary',
  props: {
    restaurant: {
      type: Object
    },
    culinary: {
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
  .caption_icon {
    width: 25px;
    height: 20px;
    margin: 1px;
  }
</style>
