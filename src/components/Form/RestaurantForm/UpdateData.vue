<template>
  <form class="restaurant-form" @submit.prevent="validateForm" ref="form">
    <div class="form-group">
      <div for="restaurantName">Nama restoran</div>
      <input id="restaurantName" class="form-control" v-model="restaurant.restaurantName" type="text" name="restaurantName" required>
    </div>

    <div class="form-group">
      <div for="restaurantLocation">Lokasi</div>
      <input id="restaurantLocation" class="form-control" v-model="restaurant.restaurantLocation" type="text" name="restaurantLocation" required>
    </div>

    <div class="form-group">
      <div for="restaurantContact">Kontak</div>
      <input id="restaurantContact" class="form-control" v-model="restaurant.restaurantContact" type="text" name="restaurantContact" required>
    </div>

    <div class="form-group" style="margin-bottom: 0">
      <input class="form-control btn toba-btn-success" type="submit"  value="Ubah">
    </div>
  </form>
</template>

<script>
export default {
  name: 'UpdateForm',
  props: {
    formData: ''
  },
  data () {
    return {
      restaurant: {
        restaurantName: '',
        restaurantContact: '',
        restaurantLocation: ''
      }
    }
  },
  created () {
    this.restaurant = this.formData
  },
  computed: {
  },
  methods: {
    validateForm () {
      this.$store.dispatch('updateRestaurant', this.restaurant)
      this.$emit('onSubmitRestaurant')
    }
  }
}
</script>

<style scoped>

</style>
