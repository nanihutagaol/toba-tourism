<template>
  <div class="culinary-by-admin">
    <banner-category bannerCaption="TRANSPORTASI" :bannerImage="bannerImage">
      <div slot="left-banner">
        <button-search/>
      </div>
      <div slot="right-banner">
        <button class="btn toba-btn-success" @click="showCreateForm=true">
          <i class="fa fa-plus"></i> Tambah
        </button>
      </div>
    </banner-category>

    <div class="container" v-if="transportationList.length === 0">
      <loading/>
    </div>

    <div class="container">
      <div class="row">
        <div class="culinary-row row ">
          <div class="col-sm-12 food-cart animate-bottom" v-for="transportation in transportationList" :key="transportation.transportationId">
            <div class="">
              <card-item-transportation
                :transportation="transportation"
                :isAdminMode="true"
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

    <!--  ============== Modal to Show Create transportation Form ==============  -->
    <modal-form v-if="showCreateForm" @onCloseModal="onCloseModal">
      <div slot="modal-title">
        TAMBAH TRANSPORTASI
      </div>
      <div slot="modal-body">
        <form-create class="col-sm-12"
                    @onSubmitTransportation="onSubmitTransportation"
        />
      </div>
    </modal-form>

    <!--  ============== Modal to Show Update transportation Form ==============  -->
    <modal-form v-if="showUpdateForm" @onCloseModal="onCloseModal">
      <div slot="modal-title">
        UBAH DATA TRANSPORTASI
      </div>
      <div slot="modal-body">
        <form-update class="col-sm-12"
                    @onSubmitTransportation="onSubmitTransportation"
                    :formData="transportation"
        />
      </div>
    </modal-form>

    <!--  ============== Modal to Approval Delete ==============  -->
    <modal-approval v-if="showDeleteForm"
                    message="Lanjutkan Hapus Restoran?"
                    @onClickContinue="onDeleteTransportation"
                    @onCloseModal="onCloseModal"
    />

    <!--  ============== Modal to Show Approval Update Image ==============  -->
    <modal-approval v-if="showImageForm"
                    message="Lanjutkan Mengubah Gambar?"
                    @onClickContinue="onEditTransportationImage"
                    @onCloseModal="onCloseModal"
    />

    <!--  ============== Modal to Show Image ==============  -->
    <modal-show-image v-if="showImageView"
                      :image="transportationImage"
                      @onCloseModal="onCloseModal"
    />
  </div>
</template>

<script src="./Transportation.js"></script>

<style src="./Transportation.css" scoped></style>
