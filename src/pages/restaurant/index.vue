<template>
  <div class="culinary-by-admin">
    <div v-if="!showRestaurantForm">
      <banner-category bannerCaption="Restaurant">
        <div slot="right-banner">
          <button class="btn toba-btn-success" @click="showTheForm"><i class="fa fa-plus"></i> Tambah</button>
        </div>
      </banner-category>

      <div class="container">
        <div class="row">

          <div v-if="sortedRestaurantList.length == 0 || !sortedRestaurantList" class="culinary-row" style="margin-bottom: 2em">
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated"
                   role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
            </div>
          </div>

          <div v-else class="culinary-row row">
            <div class="col-sm-3 food-cart" v-for="restaurant in sortedRestaurantList" :key="restaurant.restaurant_id">
              <div class="">
                <card-item-restaurant
                  :restaurant="restaurant"
                  @onClickEdit="onEditRestaurant"
                  @onClickDelete="onDeleteRestaurant"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <button color="secondary" block type="submit" @click="isShowAlert=true" size="small">
      klik
    </button>
    <modal-form v-if="isShowAlert" @onAlertClose="onAlertClose">
      <div slot="modal-title">
        Tambah Restoran
      </div>

      <div slot="modal-body">
        <RestaurantForm class="col-sm-12"
                        @onSubmitRestaurant="reCallRestaurants"
                        :formData="restaurant"
        />
      </div>

<!--      <div slot="modal-footer">-->
<!--        <div style="margin-bottom: 1em">-->
<!--          <button color="secondary" block type="submit" @click.prevent="onAlertClose" size="small">-->
<!--            button-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
    </modal-form>

    <div v-if="showRestaurantForm">
      <banner-category bannerCaption="Tambah Restaurant">
        <div slot="left-banner">
          <button class="btn toba-btn-success left-point" @click="hideTheForm">Kembali</button>
        </div>
      </banner-category>

      <div class="container">
        <div class="culinary-row row">
          <RestaurantForm class="col-sm-12"
            @onSubmitRestaurant="reCallRestaurants"
            :formData="restaurant"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Restaurant.js"></script>

<style src="./Restaurant.css" scoped></style>
