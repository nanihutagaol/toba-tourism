<template>
<div class="banner-category">
  <div>
    <img :src="bannerImage" alt="altText" class="banner-kuliner">
  </div>
  <div class="container">
    <div class="row banner-text">
      <div class="col-sm-3 left-banner">
        <slot name="left-banner"></slot>
      </div>
      <div class="col-sm-6 banner-caption">
        <h2>{{bannerCaption}}</h2>
      </div>
      <div class="col-sm-3 right-banner" >
        <slot name="right-banner"></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BannerCategory',
  props: {
    bannerImage: {
      type: String,
      default: require('@/image/Banner/culinary.png')
    },
    bannerCaption: {
      type: String,
      default: 'Default'
    }
  },
  data () {
    return {
    }
  },
  created () {
    // let images = require(this.bannerImage)
    // console.log(images)
  }
}
</script>

<style scoped>
  img{
    width: 100%;
    height: 350px;
    position: relative;
    z-index: 1;
    top: 0px;
    background-color: white;
    filter: blur();
  }
  .banner-text{
    /*position: absolute;*/
    margin-top: 1em;
    background-color: #ffffff;
    padding: 0.5em 0.5em 0 0.5em;
    line-height: 0.55em;
    top: 70%;
    border-radius: 0.35em;
    /*border-bottom: 1px solid #cdcbcc;*/
    box-shadow: 0px 1px 10px -2px #cdcbcc;
    /*box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.19);*/
    z-index: 10;
  }
  .banner-caption {
    text-align: center;
    color: #2c3e50;
  }
  .right-banner {
    text-align: right;
    padding: 0;
  }
  .left-banner {
    text-align: left;
    padding: 0;
  }
</style>
