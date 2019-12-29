<template>
 <div class="RestaurantDetail">
   <div class="container" v-if="restaurantDetail.length === 0">
     <loading/>
   </div>

   <div v-else class="restaurant-group">
     <div class="restaurant-image">
       <img :src="restaurantDetail.restaurantImage[0]" class="carousel-image">
       <div class="content-group">
         <p class="content-title">
           {{restaurantDetail.restaurantName}}
         </p>
         <p class="content-location">
           <img src="@/image/Icon/location.png" alt="altText" class="caption_icon">
           {{restaurantDetail.restaurantLocation}}
         </p>
         <p class="content-contact">
           <img src="@/image/Icon/phone.png" alt="altText" class="caption_icon">
           {{restaurantDetail.restaurantContact}}
         </p>
       </div>
     </div>

     <div class="container container-kuliner">
       <div class="row kuliner-title">
         <div class="col-sm-9 left-kuliner-title">
           <h2 style="text-align: left">List Kuliner</h2>
         </div>
         <div class="col-sm-3 right-kuliner-title">
           <button class="btn toba-btn-success" @click="showCreateForm=true"><i class="fa fa-plus"></i> Tambah</button>
         </div>
       </div>
       <hr>

       <div class="row kuliner-group">
         <carousel :per-page="4" :speed="500" slidesToScroll="auto" :scrollPerPage="false">
           <slide v-for="culinary in restaurantDetail.culinaryList" :key="culinary.culinaryId">
             <card-item-restaurant-detail
               class="list-kuliner"
               :restaurant="restaurantDetail"
               :culinary="culinary"
               :isAdminMode="true"
               @onClickEdit="onClickEdit"
               @onClickDelete="onClickDelete"
               @onClickImage="onClickImage"
               @onClickCamera="onClickCamera"
             />
           </slide>
         </carousel>
       </div>
     </div>
   </div>

   <!--  ============== Modal to Show Create Culinary Form ==============  -->
   <modal-form v-if="showCreateForm" @onCloseModal="onCloseModal">
     <div slot="modal-title">
       TAMBAH KULINER
     </div>
     <div slot="modal-body">
       <form-create class="col-sm-12"
                    :restaurantId="restaurantId"
                    :formData="culinary"
                    @onSubmitCulinary="onSubmitCulinary"
       />
     </div>
   </modal-form>

   <!--  ============== Modal to Show Update Culinary Form ==============  -->
   <modal-form v-if="showUpdateForm" @onCloseModal="onCloseModal">
     <div slot="modal-title">
       UBAH DATA KULINER
     </div>
     <div slot="modal-body">
       <form-update class="col-sm-12"
                    :restaurantId="restaurantId"
                    :formData="culinary"
                    @onSubmitCulinary="onSubmitCulinary"
       />
     </div>
   </modal-form>

   <!--  ============== Modal to Approval Delete Culinary ==============  -->
   <modal-approval v-if="showDeleteForm"
                   message="Lanjutkan Hapus Kuliner?"
                   @onClickContinue="onDeleteCulinary"
                   @onCloseModal="onCloseModal"
   />

   <!--  ============== Modal to Show Approval Update Image ==============  -->
   <modal-approval v-if="showImageForm"
                   message="Lanjutkan Mengubah Gambar?"
                   @onClickContinue="onEditCulinaryImage"
                   @onCloseModal="onCloseModal"
   />

   <!--  ============== Modal to Show Image ==============  -->
   <modal-show-image v-if="showImageView"
                     :image="culinaryImage"
                     @onCloseModal="onCloseModal"
   />
 </div>
</template>

<script src="./RestaurantDetail.js"></script>

<style src="./RestaurantDetail.css" scoped></style>
