<template>
<div class="filter-kuliner">
  <div class="filter-content">
    <Collapsible label="Filter Berdasar Restoran">
      <div slot="content">
        <div class="filter-input" v-for="restaurant in listOfRestaurant" :key="restaurant.restaurantId" >
          <input class="filter-checkbox" type="checkbox"
                 :value="restaurant.restaurantId"
                 :checked="restaurant.isActive"
                 @click="onCheckRestaurant(restaurant)">
          <span class="filter-name">{{ restaurant.restaurantName }}</span>
        </div>
      </div>
    </Collapsible>
  </div>
</div>
</template>

<script src="./FilterCulinary.js"></script>

<style scoped src="./FilterCulinary.css"></style>
