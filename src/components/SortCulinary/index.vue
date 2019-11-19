<template>
<div class="filter-kuliner">
  <div class="filter-content">
    <Collapsible label="Urut Berdasarkan">
      <div slot="content">
        <div class="filter-input" v-for="criteria in listOfSortCriteria" :key="criteria.idx" >
          <input class="filter-check"
            :value="criteria.sortParam+criteria.type"
            type="radio"
            name="listOfSort"
            :checked="criteria.isActive" @click="onClickedSort(criteria)"/>
          <span class="filter-name">{{ criteria.sortName}}</span>
        </div>
      </div>
    </Collapsible>
  </div>
</div>
</template>

<script src="./SortCulinary.js"></script>

<style scoped src="./SortCulinary.css"></style>
