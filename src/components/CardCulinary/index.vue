<template>
  <div class="culinary">
    <img :src="food.foodImage" alt="altText" class="card-culinary">
    <div class="culinary-caption">
      <div class="culinary-price">Rp {{food.foodPrice}}/orang</div>
      <div class="culinary-name">{{food.foodName}}</div>
      <div class="culinary-button">
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-danger">Hapus</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardCulinary',
  props: {
    food: {
      foodImage: {
        type: String,
        default: 'https://cdn.idntimes.com/content-images/community/2017/12/babi-panggang-1024x683-3f219d4c8f75b5d95b81c33d967b3836_600x400.jpg'
      },
      foodPrice: {
        type: String,
        default: 'foodPrice'
      },
      foodName: {
        type: String,
        default: 'foodName'
      }
    }
  }
}
</script>

<style scoped>
  .culinary {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .culinary:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.35), 0 6px 20px 0 rgba(0, 0, 0, 0.35);
  }
  .culinary-caption {
    padding: 0.75em;
    line-height: 1.5em;
  }
  .culinary-button {
    margin-top: 0.5em;
  }
  .culinary-price {
    font-size: 12px;
  }
  .culinary-name {
    font-size: 18px;
    color: cornflowerblue;
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
    border-radius: 1em;
    margin: 0 0.5em;
    min-width: 85px;
  }
</style>
