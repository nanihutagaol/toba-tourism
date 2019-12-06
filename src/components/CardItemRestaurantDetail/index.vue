<template>
  <div class="card-item-culinary">
    <card-item
      :image="culinary.culinaryImage[0]"
      :title="culinary.culinaryName"
      :caption1="currency(culinary.culinaryPrice)"
      @onClickEdit="onClickEdit"
      @onClickDelete="onClickDelete"
    />
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
  },
  methods: {
    onClickEdit () {
      this.$emit('onClickEdit', this.culinary)
    },
    onClickDelete () {
      this.$emit('onClickDelete', this.culinary)
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
