<template>
  <div class="input-group">
    <input type="text" v-model="searchText" class="form-control" placeholder="Masukkan pencarian...">
    <div class="input-group-append">
      <button class="btn toba-btn-basic" type="button" @click="onClickSearch"><li class="fa fa-search"></li></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonSearch',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    onClickSearch () {
      console.log(this.searchText)
    }
  }
}
</script>

<style scoped>

</style>
