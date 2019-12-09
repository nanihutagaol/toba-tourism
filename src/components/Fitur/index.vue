<template>
    <div class="row fitur">
      <div class="column" v-for="fitur in features" :key="fitur.key">
        <div class="card mb-3 fitur">
          <div class="container">
            <img :src="fitur.image" class="card-img image" alt="">
            <div class="middle">
              <p class="text">{{fitur.description}}</p>
            </div>
          </div>
          <div class="judul">
            <div class="card-body">
              <h1 class="card-title">{{ fitur.name }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script src="./Fitur.js"></script>
<style  lang="css" src="./Fitur.css" scoped></style>
