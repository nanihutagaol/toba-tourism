<template>
  <modal-form @onCloseModal="onCloseModal">
    <div slot="slot-container">
      <i class="icon-close-image fa fa-times" @click="onCloseModal"></i>
      <img class="modal-image" :src="image">
    </div>
  </modal-form>
</template>

<script>
import ModalForm from '@/components/Modal'

export default {
  name: 'ModalImage',
  components: {
    ModalForm
  },
  props: {
    image: {
      type: String
    }
  },
  methods: {
    onCloseModal () {
      this.$emit('onCloseModal')
    }
  }
}
</script>

<style scoped>
  .modal-image {
    height: 400px;
  }
  .icon-close-image {
    font-size: 36px;
    right: 20px;
    top: 6px;
    padding: 0.5em;
    z-index: 10;
    color: white;
    position:absolute;
    border-radius: 1em;
    cursor: pointer;
  }
  .icon-close-image:hover {
    color: #f1f3f4;
  }
</style>
