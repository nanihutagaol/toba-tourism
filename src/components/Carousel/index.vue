<template>
    <div  class="carousel">
      <b-carousel
        id="carousel-fade"
        class="carousel"
        :interval="4000"
        controls
        fade
        indicators background="#ababab"
      >
        <b-carousel-slide
          v-for="image in images"
          :key="image.id"
          :text="image.text"
        >
          <template slot="img">
            <img :src="image.source" class="d-block img-slot">
            <div class="bg-text">
              <p class="bg-head">TOBA TOURISM</p>
              <p class="bg-desc">Travel With Unique Experience</p>
            </div>
          </template>
        </b-carousel-slide>
      </b-carousel>
      <div>
        <input type="text" class="search-form">
        <button class="btn btn-success search-btn" type="submit">
          Cari
        </button>
      </div>
    </div>
</template>

<script src="./Carousel.js"></script>

<style scoped lang="css" src="./Carousel.css"></style>
