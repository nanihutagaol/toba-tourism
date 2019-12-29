<template>
  <div class="card-item-culinary">
    <card-item
      :image="culinary.culinaryImage[0]"
      :title="culinary.culinaryName"
      :caption1="currency(culinary.culinaryPrice)"
      :isAdminMode="isAdminMode"
      @onClickEdit="onClickEdit"
      @onClickDelete="onClickDelete"
      @onClickImage="onClickImage"
      @onClickCamera="onClickCamera"
    />
  </div>
</template>

<script>
import CardItem from '@/components/CardItem'
export default {
  name: 'CardItemRestaurantDetail',
  props: {
    restaurant: {
      type: Object
    },
    culinary: {
      type: Object
    },
    isAdminMode: {
      type: Boolean,
      default: true
    }
  },
  components: {
    CardItem
  },
  data () {
    return {
    }
  },
  methods: {
    onClickEdit () {
      this.$emit('onClickEdit', this.culinary)
    },
    onClickDelete () {
      this.$emit('onClickDelete', this.culinary)
    },
    onClickImage () {
      this.$emit('onClickImage', this.culinary.culinaryImage[0])
    },
    onClickCamera (image) {
      let culinary = {
        culinaryId: this.culinary.culinaryId,
        culinaryImage: image
      }
      this.$emit('onClickCamera', culinary)
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
