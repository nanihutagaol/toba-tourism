<template>
  <form class="transportation-form" @submit.prevent="validateForm" ref="form">
    <div class="form-group">
      <div for="transportationName">Nama restoran</div>
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
      transportation: {
        transportationName: '',
        transportationDescription: '',
        transportationContact: '',
        transportationRoute: ''
      }
    }
  },
  created () {
    this.transportation = this.formData
  },
  computed: {
  },
  methods: {
    validateForm () {
      this.$store.dispatch('updateTransportation', this.transportation)
      this.$emit('onSubmitTransportation')
    }
  }
}
</script>

<style scoped>

</style>
