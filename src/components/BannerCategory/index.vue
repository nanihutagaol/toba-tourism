<template>
<div>
  <img src="@/image/Kuliner.jpg" alt="altText" class="banner-kuliner">
  <p>{{bannerCaption}}</p>
</div>
</template>

<script>
export default {
  name: 'BannerCategory',
  props: {
    bannerImage: {
      type: String,
      default: '@/image/Kuliner.jpg'
    },
    bannerCaption: {
      type: String,
      default: 'Default'
    }
  }
}
</script>

<style scoped>
  img{
    width: 100%;
    height: 500px;
    position: relative;
    z-index: 1;
    top: 0px;
    background-color: white;
    filter: blur();
  }
  p{
    position: absolute;
    top: 40%;
    right: 15%;
    bottom: 40%;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
    font-size: 80px;
  }
</style>
