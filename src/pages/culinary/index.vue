<template>
<div class="culinary-by-admin">
  <BannerCategory/>

  <div class="container">
    <div class="culinary-title-group">
      <h1>
        Kuliner Populer
      </h1>
      <div class="culinary-add-button">
        <button class="btn btn-success">Tambah</button>
      </div>
    </div>
    <div class="row list-culinary-group">
      <div class="col-sm-3 list-culinary" v-for="culinary in culinaryList" :key="culinary">
        <CardCulinary/>
      </div>
    </div>
  </div>
</div>
</template>

<script src="./CulinaryAdmin.js"></script>

<style src="./CulinaryAdmin.css" scoped></style>
