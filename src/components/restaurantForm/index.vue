<template>
  <form class="restaurant-form" @submit.prevent="validateForm" ref="form" >
    <div class="form-group">
      <div for="restoran_nama">Nama Restoran</div>
      <input id="restoran_nama" class="form-control" v-model="restoran.restoran_nama" type="text" name="restoran_nama">
    </div>

    <div class="form-group">
      <div for="restoran_lokasi">Lokasi</div>
      <input id="restoran_lokasi" class="form-control" v-model="restoran.restoran_lokasi" type="text" name="restoran_lokasi">
    </div>

    <div class="form-group">
      <div for="restoran_kontak">Kontak</div>
      <input id="restoran_kontak" class="form-control" v-model="restoran.restoran_kontak" type="text" name="restoran_kontak">
    </div>

    <div class="form-group">
      <div for="restoran_gambar">File Gambar</div>
      <input id="restoran_gambar" ref="myFiles" class="" @change="previewFiles" type="file" multiple >
    </div>

    <div class="form-group">
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
      restoran: {
        restoran_nama: '',
        restoran_kontak: '',
        restoran_lokasi: '',
        restoran_gambar: ''
      },
      isUpdateFormActive: false
    }
  },
  created () {
    if (this.formData === '') {
      this.isUpdateFormActive = false
    } else {
      this.restoran = this.formData
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
      this.$store.dispatch('addRestaurant', this.restoran)
    },
    onUpdateRestaurant () {
      this.$store.dispatch('updateRestaurant', this.restoran)
    },
    previewFiles () {
      this.restoran.restoran_gambar = this.$refs.myFiles.files
      console.log(this.restoran.restoran_gambar)
    }
  }
}
</script>

<style scoped>
.restaurant-form{
  /*border: 1px solid #cdcbcc;*/
  padding: 1em 0;
  /*border-radius: 10px;*/
}

.form-group {
  text-align: left;
}
</style>
