<template>
<div class="banner-detail">
  <img :src="bannerImage" class="carousel-image">
  <div class="content-group">
    <p class="content-title">
      {{bannerName}}
    </p>
    <div class="display-flex" style="justify-content: center">
      <div><i class="fa fa-map-marker"></i></div>
      <div>{{bannerLocation}}</div>
    </div>
    <div class="display-flex" style="justify-content: center">
      <div @click="onClickWhatsApp"><i class="fa fa-whatsapp"></i></div>
      <div>{{bannerContact}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BannerDetail',
  props: {
    bannerImage: {
      type: Array
    },
    bannerName: {
      type: String
    },
    bannerLocation: {
      type: String
    },
    bannerContact: {
      type: String
    }
  },
  methods: {
    onClickWhatsApp () {
      let message = this.chatMessage('makanan di restoran ' + this.bannerName)
      this.startChat(this.bannerContact, message)
    }
  }
}
</script>

<style scoped>
  .content-group {
    position: absolute;
    font-size: 15px;
    color: black;
    right: 0;
    top: 25%;
    width: 30%;
    /*text-align: center;*/
    background-color: #ffffffb8;
    z-index: 999;
    padding-bottom: 1em;
  }
  .content-title {
    padding: 6px;
    font-size: 36px;
    font-weight: bold;
    color: #1081e0;
    text-shadow: 1px 1px 2px white, 0 0 25px #1081e0, 0 0 10px white;
  }
  .caption_icon {
    width: 25px;
    height: 20px;
    margin: 1px;
  }
  img{
    width: 100%;
    height: 350px;
    position: relative;
    z-index: 1;
    top: 0px;
    background-color: white;
    filter: blur();
  }

</style>
