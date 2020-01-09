<template>
  <form class="tourism-form" @submit.prevent="validateForm" ref="form">
    <div class="form-group">
      <div for="tourismName">Nama Tempat Wisata</div>
      <input id="tourismName" class="form-control" v-model="tourism.tourismName" type="text" name="tourismName" required>
    </div>

    <div class="form-group">
      <div for="tourismDescription">Deskripsi</div>
      <textarea id="tourismDescription" class="form-control" v-model="tourism.tourismDescription" type="text" name="tourismDescription" required></textarea>
    </div>

    <div class="form-group">
      <div for="tourismLocation">Lokasi</div>
      <input id="tourismLocation" class="form-control" v-model="tourism.tourismLocation" type="text" name="tourismLocation" required>
    </div>

    <div class="form-group">
      <div for="tourismContact">Kontak</div>
      <input id="tourismContact" class="form-control" v-model="tourism.tourismContact" type="text" name="tourismContact" required>
    </div>

    <div class="form-group">
      <div for="tourismImage">File Gambar</div>
      <input id="tourismImage" ref="myFiles" class="" @change="previewFiles" type="file" required>
      <div style="font-size: 11px; color: #FF3D3D" v-if="isError">File harus dalam format 'image/*'</div>
    </div>

    <div class="form-group" style="margin-bottom: 0">
      <input class="form-control btn toba-btn-success" type="submit"  value="Tambah">
    </div>
  </form>
</template>

<script>
export default {
  name: 'TourismForm',
  props: {
    formData: ''
  },
  data () {
    return {
      tourism: {
        tourismName: '',
        tourismDescription: '',
        tourismContact: '',
        tourismLocation: '',
        tourismImage: ''
      },
      isError: false
    }
  },
  methods: {
    validateForm () {
      if (this.tourism.tourismImage !== '') {
        this.$store.dispatch('addTourism', this.tourism)
        this.$emit('onSubmitTourism')
      }
    },
    previewFiles (event) {
      if (event.target.files[0].type.match('image/*')) {
        this.tourism.tourismImage = event.target.files[0]
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
