<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">

        <slot name="slot-container">
          <div class="modal-container">

              <div class="modal-header" >
                <div></div>
                <div>
                  <slot name="modal-title">
                    Default Title
                  </slot>
                </div>
                <div class="modal-close">
                  <i class="fa fa-times" @click="closeModal"></i>
                </div>
              </div>

              <div class="modal-body">
                <slot name="modal-body">
                  default body
                </slot>
              </div>

          </div>
        </slot>

      </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'Modal',
  methods: {
    closeModal () {
      this.$emit('onCloseModal')
    }
  }
}
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 40%;
    margin: 0px auto;
    padding: 10px 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
    font-size: 22px;
  }

  .modal-body {
    margin: 10px 0;
    text-align: justify;
    padding: 0;
    /*overflow: scroll;*/
    /*height: 500px;*/
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .modal-header {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    padding: 0.75em 0;
  }

  .modal-close{
    float: right;
    color: #000;
    cursor: pointer;
  }

</style>
