<template>
  <div class="culinary-by-admin">
    <BannerCategory/>

    <div class="container">
      <div class="row">
        <div class="culinary-row">
          <h1>
            Kuliner Populer
          </h1>
        </div>

        <div class="culinary-row culinary-add-button">
          <div class="row">
            <div class="col-sm-3">
            </div>

            <div class="col-sm-9">
              <button class="btn btn-success"><i class="fa fa-plus"></i> Tambah</button>
            </div>
          </div>
        </div>

        <div class="culinary-row">
          <div class="row">
            <div class="col-sm-3">
              <div style="margin-bottom: 1em">
                <SortCulinary
                  @onSortBy="onSortBy"
                />
              </div>

              <div>
                <FilterCulinary
                  :restaurantList="restaurantList"
                  @onFilterByName="onFilterByName"
                />
              </div>
            </div>

            <div class="col-sm-9">
              <div class="row" v-for="restaurant in filteredRestaurantList" :key="restaurant.restaurantId">
                <div class="col-sm-4 food-cart" v-for="food in restaurant.foodList" :key="food.foodId">
                  <div class="">
                    <CardCulinary :food="food"/>
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
