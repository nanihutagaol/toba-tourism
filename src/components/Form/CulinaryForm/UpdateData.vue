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

    <div class="form-group" style="margin-bottom: 0">
      <input class="form-control btn toba-btn-success" type="submit"  value="Ubah">
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
        culinaryPrice: ''
      }
    }
  },
  created () {
    this.culinary = this.formData
  },
  methods: {
    validateForm () {
      let temp = {
        restaurantId: this.restaurantId,
        culinary: this.culinary
      }
      this.$store.dispatch('updateCulinary', temp)
      this.$emit('onSubmitCulinary')
    }
  }
}
</script>

<style scoped>

</style>
