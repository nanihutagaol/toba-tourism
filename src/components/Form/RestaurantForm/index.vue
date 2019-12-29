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

    <div class="form-group">
      <div for="restaurantImage">File Gambar</div>
      <input id="restaurantImage" ref="myFiles" class="" @change="previewFiles" type="file" required>
      <div style="font-size: 11px; color: #FF3D3D" v-if="isError">File harus dalam format 'image/*'</div>
    </div>

    <div class="form-group" style="margin-bottom: 0">
      <input class="form-control btn toba-btn-success" type="submit"  value="Tambah">
    </div>
  </form>
</template>

<script>
export default {
  name: 'RestaurantForm',
  props: {
    formData: ''
  },
  data () {
    return {
      restaurant: {
        restaurantName: '',
        restaurantContact: '',
        restaurantLocation: '',
        restaurantImage: ''
      },
      isError: false
    }
  },
  methods: {
    validateForm () {
      if (this.restaurant.restaurantImage !== '') {
        this.$store.dispatch('addRestaurant', this.restaurant)
        this.$emit('onSubmitRestaurant')
      }
    },
    previewFiles (event) {
      if (event.target.files[0].type.match('image/*')) {
        this.restaurant.restaurantImage = event.target.files[0]
        this.isError = false
      } else {
        this.isError = true
      }
    }
  }
}
</script>

<style scoped>

</style>
