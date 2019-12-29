<template>
  <div class="culinary-by-admin">
    <banner-category bannerCaption="Kuliner Populer"/>

    <div class="container">
      <div class="row">

        <div class="container" v-if="restaurantList.length === 0">
          <loading/>
        </div>

        <div v-else class="culinary-row animate-bottom">
          <div class="row">
            <div class="col-sm-3">
              <div style="margin-bottom: 1em">
                <SortCulinary
                  @onClickedSort="onSort"
                />
              </div>
              <div>
                <FilterCulinary
                  :culinaryList="restaurantList"
                  @onFilterByName="onFilterByName"
                />
              </div>
            </div>

            <div class="col-sm-9" >
              <div class="" v-for="restaurant in restaurantList" :key="restaurant.restaurantId" >
                <div class="row food-cart" >
                  <div class="col-sm-4" v-for="culinary in restaurant.culinaryList" :key="culinary.culinaryId">
                    <CardItemCulinary
                      :restaurant="restaurant"
                      :culinary="culinary"
                      :isAdminMode="false"
                      @onClickImage="onClickImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!--  ============== Modal to Show Image ==============  -->
    <modal-show-image v-if="showImageView"
                      :image="culinaryImage"
                      @onCloseModal="onCloseModal"
    />
  </div>
</template>

<script src="./Culinary.js"></script>

<style src="./Culinary.css" scoped></style>
