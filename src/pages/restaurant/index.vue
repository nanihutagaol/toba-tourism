<template>
  <div class="culinary-by-admin">
    <banner-category bannerCaption="Restoran" :bannerImage="bannerImage">
      <div slot="right-banner">
        <button class="btn toba-btn-success" @click="showCreateForm=true">
          <i class="fa fa-plus"></i> Tambah
        </button>
      </div>
    </banner-category>

    <div class="container" v-if="restaurantList.length === 0">
      <loading/>
    </div>

    <div class="container">
      <div class="row">
        <div class="culinary-row row ">
          <div class="col-sm-3 food-cart animate-bottom" v-for="restaurant in restaurantList" :key="restaurant.restaurant_id">
            <div class="">
              <card-item-restaurant
                :restaurant="restaurant"
                @onClickEdit="onClickEdit"
                @onClickDelete="onClickDelete"
                @onClickImage="onClickImage"
                @onClickCamera="onClickCamera"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  ============== Modal to Show Create Restaurant Form ==============  -->
    <modal-form v-if="showCreateForm" @onCloseModal="onCloseModal">
      <div slot="modal-title">
        TAMBAH RESTORAN
      </div>
      <div slot="modal-body">
        <form-create class="col-sm-12"
                    @onSubmitRestaurant="onSubmitRestaurant"
        />
      </div>
    </modal-form>

    <!--  ============== Modal to Show Update Restaurant Form ==============  -->
    <modal-form v-if="showUpdateForm" @onCloseModal="onCloseModal">
      <div slot="modal-title">
        UBAH DATA RESTORAN
      </div>
      <div slot="modal-body">
        <form-update class="col-sm-12"
                    @onSubmitRestaurant="onSubmitRestaurant"
                    :formData="restaurant"
        />
      </div>
    </modal-form>

    <!--  ============== Modal to Approval Delete Image ==============  -->
    <modal-approval v-if="showDeleteForm"
                    message="Lanjutkan Hapus Restoran?"
                    @onClickContinue="onDeleteRestaurant"
                    @onCloseModal="onCloseModal"
    />

    <!--  ============== Modal to Show Approval Update Image ==============  -->
    <modal-approval v-if="showImageForm"
                    message="Lanjutkan Mengubah Gambar?"
                    @onClickContinue="onEditRestaurantImage"
                    @onCloseModal="onCloseModal"
    />

    <!--  ============== Modal to Show Image ==============  -->
    <modal-show-image v-if="showImageView"
                      :image="restaurantImage"
                      @onCloseModal="onCloseModal"
    />
  </div>
</template>

<script src="./Restaurant.js"></script>

<style src="./Restaurant.css" scoped></style>
