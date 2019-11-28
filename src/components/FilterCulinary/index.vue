<template>
<div class="filter-kuliner">
  <div class="filter-content">
    <Collapsible label="Filter Berdasar restaurant">
      <div slot="content">
        <div class="filter-input" v-for="restaurant in listOfRestaurant" :key="restaurant.restoran_id" >
          <input class="filter-checkbox" type="checkbox"
                 :value="restaurant.restoran_id"
                 :checked="restaurant.isActive"
                 @click="onCheckRestaurant(restaurant)">
          <span class="filter-name">{{ restaurant.restoran_nama }}</span>
        </div>
      </div>
    </Collapsible>
  </div>
</div>
</template>

<script src="./FilterCulinary.js"></script>

<style scoped src="./FilterCulinary.css"></style>
