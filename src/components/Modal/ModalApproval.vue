<template>
  <modal-form @onCloseModal="onCloseModal" >
    <div slot="slot-container" class="modal-container">
      <label class="modal-message">{{message}}</label>
      <div class="card-button">
        <button class="btn toba-btn-danger" @click="onCloseModal">Batal</button>
        <button class="btn toba-btn-success" @click="onClickContinue">Lanjut</button>
      </div>
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
    message: {
      type: String
    }
  },
  methods: {
    onCloseModal () {
      this.$emit('onCloseModal')
    },
    onClickContinue () {
      this.$emit('onClickContinue')
    }
  }
}
</script>

<style scoped>
.modal-container{
  width: 25%;
  margin: 0px auto;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.card-button {
  display: flex;
  justify-content: space-evenly;
}
.modal-message {
  padding: 0.5em;
}
</style>
