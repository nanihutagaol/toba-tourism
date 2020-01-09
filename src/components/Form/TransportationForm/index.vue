<template>
  <form class="transportation-form" @submit.prevent="validateForm" ref="form">
    <div class="form-group">
      <div for="transportationName">Nama Transportasi</div>
      <input id="transportationName" class="form-control" v-model="transportation.transportationName" type="text" name="transportationName" required>
    </div>

    <div class="form-group">
      <div for="transportationDescription">Deskripsi</div>
      <textarea id="transportationDescription" class="form-control" v-model="transportation.transportationDescription" type="text" name="transportationDescription" required></textarea>
    </div>

    <div class="form-group">
      <div for="transportationRoute">Lokasi</div>
      <input id="transportationRoute" class="form-control" v-model="transportation.transportationRoute" type="text" name="transportationRoute" required>
    </div>

    <div class="form-group">
      <div for="transportationContact">Kontak</div>
      <input id="transportationContact" class="form-control" v-model="transportation.transportationContact" type="text" name="transportationContact" required>
    </div>

    <div class="form-group">
      <div for="transportationImage">File Gambar</div>
      <input id="transportationImage" ref="myFiles" class="" @change="previewFiles" type="file" required>
      <div style="font-size: 11px; color: #FF3D3D" v-if="isError">File harus dalam format 'image/*'</div>
    </div>

    <div class="form-group" style="margin-bottom: 0">
      <input class="form-control btn toba-btn-success" type="submit"  value="Tambah">
    </div>
  </form>
</template>

<script>
export default {
  name: 'transportationForm',
  props: {
    formData: ''
  },
  data () {
    return {
      transportation: {
        transportationName: '',
        transportationDescription: '',
        transportationContact: '',
        transportationRoute: '',
        transportationImage: ''
      },
      isError: false
    }
  },
  methods: {
    validateForm () {
      if (this.transportation.transportationImage !== '') {
        this.$store.dispatch('addTransportation', this.transportation)
        this.$emit('onSubmitTransportation')
      }
    },
    previewFiles (event) {
      if (event.target.files[0].type.match('image/*')) {
        this.transportation.transportationImage = event.target.files[0]
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
