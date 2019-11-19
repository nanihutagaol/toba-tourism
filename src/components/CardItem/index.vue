<template>
  <div class="card-item">
    <div class="card-img">
      <img :src="image">
    </div>
    <div class="card-description">
      <div class="card-title">{{title}}</div>
      <div class="card-caption">{{caption1}}</div>
      <div class="card-caption">{{caption2}}</div>
      <div class="card-button">
        <button class="btn toba-btn-info">Edit</button>
        <button class="btn toba-btn-danger">Hapus</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
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
    }
  }
}
</script>

<style scoped>
  .card-item {
    box-shadow: 0 2px 6px rgba(0,0,0,.2);
    margin-bottom: 1em;
  }
  .card-item:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .card-img {
    line-height: 1.5em;
  }
  .card-title {
    font-size: 18px;
    color: cornflowerblue;
  }
  .card-description {
    padding: 0.75em;
    line-height: 1.5em;
  }
  .card-caption {
    font-size: 12px;
    line-height: 1.5em;
  }
  .card-button {
    margin-top: 0.5em;
  }
  img{
    width: 100%;
    height: 225px;
    position: relative;
    top: 0px;
    background-color: white;
    filter: blur();
    border: 1px solid #c7c7c7
  }
  p{
    text-align: center;
  }
  button {
    font-size: 12px;
    border-radius: 1em;
    margin: 0 0.5em;
    min-width: 75px;
    padding: 0.25em;
  }
</style>
