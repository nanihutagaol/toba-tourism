<template>
<div class="kuliner-by-admin">
  <BannerCategory/>

  <div class="container">
    <h1>
      Kuliner Populer
    </h1>

    <div class="row">
      <div class="col-sm-4">
        <FilterKuliner/>

        <div class="collapsible">
          <div class="collapsible-header">
            <slot name="header">
              label
            </slot>
            <div
              class="icon expanded">
              <i class="bli-down-arrow"/>
            </div>
          </div>
          <div
            class="collapsible-content expanded">
            ahjsakjsa<br>adnald
          </div>
        </div>

      </div>
      <div class="col-sm-8 kuliner-title-group">
        <div class="kuliner-add-button">
          <button class="btn btn-success">Tambah</button>
        </div>
      </div>
      <div class="row list-kuliner-group">
        <div class="col-sm-3 list-kuliner" v-for="list in 5" :key="list">
          <CardKuliner/>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script src="./KulinerCustomer.js"></script>

<style src="./KulinerCustomer.css" scoped></style>
