<template>
  <div class="culinary-by-admin">
    <banner-category bannerCaption="Restaurant" bannerImage="@/image/Banner/banner_restaurant.png">
      <div slot="right-banner">
        <button class="btn toba-btn-success" @click="showModalForm=true"><i class="fa fa-plus"></i> Tambah</button>
      </div>
    </banner-category>

    <div class="container">
      <div class="row">

        <div v-if="restaurantList.length == 0 || !restaurantList" class="culinary-row" style="margin-bottom: 2em">
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated"
                 role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
          </div>
        </div>

        <div v-else class="culinary-row row">
          <div class="col-sm-3 food-cart" v-for="restaurant in restaurantList" :key="restaurant.restaurant_id">
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

    <!--  ============== Modal to Show Restaurant Form ==============  -->
    <modal-form v-if="showModalForm" @onCloseModal="onCloseModal">
      <div slot="modal-title">
        {{restaurant === '' ? 'Tambah Restoran' : 'Ubah Restoran'}}
      </div>
      <div slot="modal-body">
        <RestaurantForm class="col-sm-12"
          @onSubmitRestaurant="onSubmitRestaurant"
          :formData="restaurant"
        />
      </div>
    </modal-form>

  </div>
</template>

<script src="./Restaurant.js"></script>

<style src="./Restaurant.css" scoped></style>
