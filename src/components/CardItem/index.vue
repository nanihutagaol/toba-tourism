<template>
  <div class="card-item">
    <div class="card-img">
      <div class="card-camera-icon" v-if="isAdminMode">
        <label for="cameraIcon"><i class="icon-select-image fa fa-camera"></i></label>
        <input id="cameraIcon" ref="myFiles" class="" @change="previewFiles" type="file" required>
      </div>
      <img :src="image" @click="onClickImage">
    </div>
    <div class="card-description">
      <div class="card-title">
        <a :href="url">{{title}}</a>
      </div>
      <div class="card-caption1">
        <div>{{caption1}}</div>
      </div>
      <div class="card-caption2">
        <div><slot name="caption2"></slot></div>
        <div>{{caption2}}</div>
      </div>
      <div class="card-caption3">
        <div><slot name="caption3"></slot></div>
        <div>{{caption3}}</div>
      </div>
      <div class="card-button" v-if="isAdminMode">
        <button class="btn toba-btn-info" @click="onClickEdit">Edit</button>
        <button class="btn toba-btn-danger" @click="onClickDelete">Hapus</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    url: {
      type: String
    },
    image: {
      type: String
    },
    title: {
      type: String
    },
    caption1: {
      type: String
    },
    caption2: {
      type: String
    },
    caption3: {
      type: String
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
  methods: {
    onClickEdit () {
      this.$emit('onClickEdit')
    },
    onClickDelete () {
      this.$emit('onClickDelete')
    },
    onClickImage () {
      this.$emit('onClickImage')
    },
    onClickCamera (image) {
      this.$emit('onClickCamera', image)
    },
    previewFiles (event) {
      this.cardImage = event.target.files[0]
      if (this.cardImage !== null && this.cardImage !== undefined && this.cardImage.type.match('image/*')) {
        this.onClickCamera(this.cardImage)
      }
    }
  }
}
</script>

<style scoped>
  .card-item {
    box-shadow: 0 2px 6px rgba(0,0,0,.2);
    margin-bottom: 1em;
    border-radius: 10px;
  }
  .card-item:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .card-title {
    font-size: 18px;
    color: cornflowerblue;
  }
  .card-description {
    padding: 0.75em;
    line-height: 1.5em;
  }
  .card-caption2, .card-caption3 {
    font-size: 12px;
    line-height: 1.3em;
    text-align: justify;
    margin-bottom: 3px;
    display: flex;
    justify-content: left;
  }
  .card-caption1 {
    font-size: 16px;
    text-align: center;
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
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 225px;
    position: relative;
    top: 0px;
    background-color: white;
    filter: blur();
  }
  img {
    cursor: pointer;
  }
  button {
    font-size: 12px;
    border-radius: 1em;
    /*margin: 0 0.5em;*/
    min-width: 65px;
    padding: 0.25em;
  }
  .icon-select-image, .icon-update-image {
    right: 20px;
    padding: 0.5em;
    z-index: 10;
    position:absolute;
    border-radius: 1em;
  }
  .icon-select-image {
    top: 6px;
    background: white;
  }
  .icon-update-image {
    top: 10%;
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
</style>
