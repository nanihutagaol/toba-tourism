<template>
  <div class="culinary-by-admin">
    <BannerCategory bannerCaption="Kuliner Populer"/>

    <div class="container">
      <div class="row">

<!--        <div class="culinary-row culinary-add-button">-->
<!--          <div class="row">-->
<!--            <div class="col-sm-3">-->
<!--            </div>-->

<!--            <div class="col-sm-9">-->
<!--              <button class="btn btn-success"><i class="fa fa-plus"></i> Tambah</button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

        <div class="culinary-row">
          <div class="row">
            <div class="col-sm-3">
              <div style="margin-bottom: 1em">
                <SortCulinary
                  @onClickedSort="onSort"
                />
              </div>

              <div>
                <FilterCulinary
                  :culinaryList="culinaryList"
                  @onFilterByName="onFilterByName"
                />
              </div>
            </div>

            <div class="col-sm-9" >
              <div class="" v-for="restoran in filteredRestaurantList" :key="restoran.restoran_id">
                <div class="col-sm-4 food-cart" v-for="kuliner in restoran.kuliner_list" :key="kuliner.kuliner_id">
                  <div class="">
                    <CardItemCulinary :restaurant="restoran" :culinary="kuliner"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script src="./Culinary.js"></script>

<style src="./Culinary.css" scoped></style>
