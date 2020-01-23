<template>
  <div class="culinary-by-admin">
    <banner-category bannerCaption="Pariwisata" :bannerImage="bannerImage">
      <div slot="right-banner">
        <button class="btn toba-btn-success" @click="showCreateForm=true">
          <i class="fa fa-plus"></i> Tambah
        </button>
      </div>
    </banner-category>

    <div class="container" v-if="tourismList.length === 0">
      <loading/>
    </div>

    <div class="container">
      <div class="row">
        <div class="culinary-row row ">
          <div class="col-sm-12 food-cart animate-bottom" v-for="tourism in tourismList" :key="tourism.tourismId">
            <div class="">
              <card-item-tourism
                :tourism="tourism"
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

    <!--  ============== Modal to Show Create tourism Form ==============  -->
    <modal-form v-if="showCreateForm" @onCloseModal="onCloseModal">
      <div slot="modal-title">
        TAMBAH PARIWISATA
      </div>
      <div slot="modal-body">
        <form-create class="col-sm-12"
                    @onSubmitTourism="onSubmitTourism"
        />
      </div>
    </modal-form>

    <!--  ============== Modal to Show Update tourism Form ==============  -->
    <modal-form v-if="showUpdateForm" @onCloseModal="onCloseModal">
      <div slot="modal-title">
        UBAH DATA PARIWISATA
      </div>
      <div slot="modal-body">
        <form-update class="col-sm-12"
                    @onSubmitTourism="onSubmitTourism"
                    :formData="tourism"
        />
      </div>
    </modal-form>

    <!--  ============== Modal to Approval Delete ==============  -->
    <modal-approval v-if="showDeleteForm"
                    message="Lanjutkan Hapus Restoran?"
                    @onClickContinue="onDeleteTourism"
                    @onCloseModal="onCloseModal"
    />

    <!--  ============== Modal to Show Approval Update Image ==============  -->
    <modal-approval v-if="showImageForm"
                    message="Lanjutkan Mengubah Gambar?"
                    @onClickContinue="onEditTourismImage"
                    @onCloseModal="onCloseModal"
    />

    <!--  ============== Modal to Show Image ==============  -->
    <modal-show-image v-if="showImageView"
                      :image="tourismImage"
                      @onCloseModal="onCloseModal"
    />
  </div>
</template>

<script src="./Tourism.js"></script>

<style src="./Tourism.css" scoped></style>
