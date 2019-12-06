<template>
  <div class="card-item">
    <div class="card-img">
      <img :src="image" @click="onClickImage">
    </div>
    <div class="card-description">
      <div class="card-title"><a :href="url">{{title}}</a> </div>
      <div class="card-caption card-caption1"><slot name="caption1"></slot>{{caption1}}</div>
      <div class="card-caption"><slot name="caption2"></slot>{{caption2}}</div>
      <div class="card-caption"><slot name="caption3"></slot>{{caption3}}</div>
      <div class="card-button" v-if="isShowButton">
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
    isShowButton: {
      type: Boolean,
      default: true
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
  .card-img {
    line-height: 1.5em;
    border-radius: 10px;
  }
  img {
    border-radius: 10px 10px 0 0;
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
    line-height: 1.3em;
    text-align: justify;
    margin-bottom: 3px;
  }
  .card-caption1 {
    text-align: center;
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
    /*margin: 0 0.5em;*/
    min-width: 65px;
    padding: 0.25em;
  }
</style>
