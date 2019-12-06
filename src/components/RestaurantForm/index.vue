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
    </div>

    <div class="form-group" style="margin-bottom: 0">
      <input class="form-control btn toba-btn-success" type="submit"  :value="formData === '' ? 'Tambah' : 'Ubah'">
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
      isUpdateFormActive: false
    }
  },
  created () {
    if (this.formData === '') {
      this.isUpdateFormActive = false
    } else {
      this.restaurant = this.formData
      this.isUpdateFormActive = true
    }
  },
  computed: {
  },
  methods: {
    validateForm () {
      if (this.isUpdateFormActive === true) {
        this.onUpdateRestaurant()
      } else {
        this.onAddRestaurant()
      }
      this.$emit('onSubmitRestaurant')
    },
    onAddRestaurant () {
      this.$store.dispatch('addRestaurant', this.restaurant)
    },
    onUpdateRestaurant () {
      this.$store.dispatch('updateRestaurant', this.restaurant)
    },
    previewFiles (event) {
      this.restaurant.restaurantImage = event.target.files[0]
    }
  }
}
</script>

<style scoped>
.restaurant-form{
  padding: 1em 0;
  /*border-radius: 10px;*/
}

.form-group {
  text-align: left;
}
</style>
