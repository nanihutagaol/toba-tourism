<template>
  <form class="culinary-form" @submit.prevent="validateForm" ref="form" >
    <div class="form-group">
      <div for="culinaryName">Nama Kuliner</div>
      <input id="culinaryName" class="form-control" v-model="culinary.culinaryName" type="text" name="culinaryName" required>
    </div>

    <div class="form-group">
      <div for="culinaryPrice">Harga</div>
      <input id="culinaryPrice" class="form-control" v-model="culinary.culinaryPrice" type="number" name="culinaryPrice" min="0" required>
    </div>

    <div class="form-group">
      <div for="culinaryImage">File Gambar</div>
      <input id="culinaryImage" ref="myFiles" class="" @change="previewFiles" type="file" multiple required>
      <div style="font-size: 11px; color: #FF3D3D" v-if="isError">File harus dalam format 'image/*'</div>
    </div>

    <div class="form-group" style="margin-bottom: 0">
      <input class="form-control btn toba-btn-success" type="submit" value="Tambah">
    </div>
  </form>
</template>

<script>
export default {
  name: 'CulinaryForm',
  props: {
    restaurantId: ''
  },
  data () {
    return {
      culinary: {
        culinaryName: '',
        culinaryPrice: '',
        culinaryImage: ''
      },
      isError: false
    }
  },
  methods: {
    validateForm () {
      if (this.culinary.culinaryImage !== '') {
        let temp = {
          restaurantId: this.restaurantId,
          culinary: this.culinary
        }
        this.$store.dispatch('addCulinary', temp)
        this.$emit('onSubmitCulinary')
      }
    },
    previewFiles (event) {
      if (event.target.files[0].type.match('image/*')) {
        this.culinary.culinaryImage = event.target.files[0]
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
