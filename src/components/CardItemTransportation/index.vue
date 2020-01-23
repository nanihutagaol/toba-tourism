<template>
  <div class="card-item">
    <div class="card-content row">
      <div class="col-sm-3">
        <div class="card-img">
          <div class="card-camera-icon" v-if="isAdminMode">
            <label for="cameraIcon"><i class="icon-select-image fa fa-camera"></i></label>
            <input id="cameraIcon" ref="myFiles" class="" @change="previewFiles" type="file" required>
          </div>
          <img :src="transportation.transportationImage[0]" @click="onClickImage">
        </div>
      </div>
      <div class="col-sm-9">
        <div class="card-title">
          <span style="color: #17a2b8">{{transportation.transportationName}}</span>
        </div>
        <p>
          {{transportationDescription}}
          <a :href="url" style="padding: 0.25em 1em" v-if="transportation.transportationDescription.length > 250">Baca lebih lanjut</a>
        </p>
        <div class="display-flex">
          <div><i class="fa fa-road"></i></div>
          <div>{{transportation.transportationRoute}}</div>
        </div>
        <div class="display-flex">
          <div @click="onClickWhatsApp"><i class="fa fa-whatsapp"></i></div>
          <div>{{transportation.transportationContact}}</div>
        </div>
        <div class="card-button" v-if="isAdminMode">
          <button class="btn toba-btn-info" @click="onClickEdit">Edit</button>
          <button class="btn toba-btn-danger" @click="onClickDelete">Hapus</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    transportation: {
      type: Object
    },
    isAdminMode: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      cardImage: ''
    }
  },
  computed: {
    transportationDescription () {
      let description = this.transportation.transportationDescription.substr(0, 250)
      return description
    },
    url () {
      return '/transportasi/detail/' + this.transportation.transportationId
    }
  },
  methods: {
    onClickEdit () {
      this.$emit('onClickEdit', this.transportation)
    },
    onClickDelete () {
      this.$emit('onClickDelete', this.transportation)
    },
    onClickImage () {
      this.$emit('onClickImage', this.transportation.transportationImage)
    },
    onClickCamera (image) {
      let transportation = {
        transportationId: this.transportation.transportationId,
        transportationImage: image
      }
      this.$emit('onClickCamera', transportation)
    },
    previewFiles (event) {
      let image = event.target.files[0]
      if (image !== null && image !== undefined && image.type.match('image/*')) {
        this.onClickCamera(image)
      }
    },
    onClickWhatsApp () {
      let message = this.chatMessage('transportasi ' + this.transportation.transportationName)
      this.startChat(this.transportation.transportationContact, message)
    }
  }
}
</script>

<style scoped>
  .card-item {
    padding: 1em;
    text-align: justify;
  }
  .card-item:hover {
    background: #f8f9fa;
  }
  .card-title {
    font-size: 28px;
    font-family: "Times New Roman";
    font-weight: bold;
    color: cornflowerblue;
  }
  .card-title span {
    border-bottom: 3px solid ;
  }
  .card-button {
    margin-top: 0.5em;
  }
  .card-img {
    line-height: 1.5em;
    border-radius: 10px;
    display: inline;
  }
  img{
    min-width: 250px;
    max-width: 250px;
    min-height: 250px;
    max-height: 250px;
    position: relative;
    top: 0px;
    background-color: white;
    filter: blur();
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
    cursor: pointer;
  }
  img:hover {
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.35);
  }
  button {
    font-size: 12px;
    border-radius: 1em;
    /*margin: 0 0.5em;*/
    min-width: 65px;
    padding: 0.25em;
  }
  .icon-select-image, .icon-update-image {
    left: 45%;
    top: 45%;
    padding: 0.5em;
    z-index: 10;
    position:absolute;
    border-radius: 1em;
  }
  .icon-select-image {
    top: 50%x;
    background: white;
  }
  .icon-update-image {
    top: 50%;
    background: #B6EEC3;
  }
  .icon-select-image:hover{
    cursor: pointer;
    background: #f2f3f4;
  }
  .icon-update-image:hover {
    cursor: pointer;
    background: #63E882;
  }
  .card-camera-icon > #cameraIcon, .card-upload-icon > #uploadIcon
  {
    width:0;
    height:0;
    visibility:hidden;
    display: none;
  }
  .card-camera-icon > label, .card-upload-icon > label {
    display: inline;
  }
  .tag-desc {
    color: #fff;
    background: #007bff;
    padding: 0.1em 0.5em;
  }
</style>
