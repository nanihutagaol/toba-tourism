<template>
  <form class="tourism-form" @submit.prevent="validateForm" ref="form">
    <div class="form-group">
      <div for="tourismName">Nama Pariwisata</div>
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
      tourism: {
        tourismName: '',
        tourismDescription: '',
        tourismContact: '',
        tourismLocation: ''
      }
    }
  },
  created () {
    this.tourism = this.formData
  },
  computed: {
  },
  methods: {
    validateForm () {
      this.$store.dispatch('updateTourism', this.tourism)
      this.$emit('onSubmitTourism')
    }
  }
}
</script>

<style scoped>

</style>
