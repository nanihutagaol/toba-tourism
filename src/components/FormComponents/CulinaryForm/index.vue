<template>
  <form class="culinary-form" @submit.prevent="validateForm" ref="form" >
    <div class="form-group">
      <div for="culinaryName">Nama Kuliner</div>
      <input id="culinaryName" class="form-control" v-model="culinary.culinaryName" type="text" name="culinaryName">
    </div>

    <div class="form-group">
      <div for="culinaryPrice">Harga</div>
      <input id="culinaryPrice" class="form-control" v-model="culinary.culinaryPrice" type="number" name="culinaryPrice" min="0">
    </div>

    <div class="form-group">
      <div for="culinaryImage">File Gambar</div>
      <input id="culinaryImage" ref="myFiles" class="" @change="previewFiles" type="file" multiple >
    </div>

    <div class="form-group" style="margin-bottom: 0">
      <input class="form-control btn toba-btn-success" type="submit"  :value="formData === '' ? 'Tambah' : 'Ubah'">
    </div>
  </form>
</template>

<script>
export default {
  name: 'CulinaryForm',
  props: {
    formData: '',
    restaurantId: ''
  },
  data () {
    return {
      culinary: {
        culinaryName: '',
        culinaryPrice: '',
        culinaryImage: ''
      },
      isUpdateFormActive: false
    }
  },
  created () {
    if (this.formData === '') {
      this.isUpdateFormActive = false
    } else {
      this.culinary = this.formData
      this.isUpdateFormActive = true
    }
  },
  computed: {
  },
  methods: {
    validateForm () {
      if (this.isUpdateFormActive === true) {
        this.onUpdateCulinary()
      } else {
        this.onAddCulinary()
      }
      this.$emit('onSubmitCulinary')
    },
    onAddCulinary () {
      let temp = {
        restaurantId: this.restaurantId,
        culinary: this.culinary
      }
      this.$store.dispatch('addCulinary', temp)
    },
    onUpdateCulinary () {
      let temp = {
        restaurantId: this.restaurantId,
        culinary: this.culinary
      }
      this.$store.dispatch('updateCulinary', temp)
    },
    previewFiles () {
      this.culinary.culinaryImage = this.$refs.myFiles.files[0]
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
