<template>
  <transition name="modal">
    <div class="modal-mask" transition="modal">
      <div class="modal-container" >

        <div class="modal-title">
          <div class="modal-title-coloumn">
            <div></div>
            <div>
              <slot name="modal-title">
                Default Title
              </slot>
            </div>
            <div>
              <i class="fa fa-times" @click="closeModal"></i>
            </div>
          </div>
          <hr>
        </div>

        <div class="modal-body">
          <slot name="modal-body">
            Default Body
          </slot>
        </div>

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
* {
    box-sizing: border-box;
  }

  .modal-mask {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
  }

  .modal-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 45%;
    margin: 40px auto 0;
    padding: 20px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all 3s ease;
    z-index: 1000;
  }

  .modal-title {
    font-size: 22px;
  }

  .modal-title-coloumn{
    display: flex;
    justify-content: space-between;
  }

  .modal-body {
    text-align: center;
    padding: 0;
    /*overflow: scroll;*/
    /*height: 500px;*/
  }

  .modal-enter, .modal-leave {
    opacity: 0;
  }
  .modal-enter .modal-container,
  .modal-leave .modal-container {
    -webkit-transform: scale(.7);
    transform: scale(.7);
  }

  .modal-close{
    float: right;
    color: #000;
    font-size: 16px;
    cursor: pointer;
  }

</style>
