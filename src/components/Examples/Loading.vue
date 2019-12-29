<template>
<div class="loading">
  <div class="loader"> </div>
  <label>Loading..</label>
</div>
</template>

<script>
export default {
  name: 'ProgressLine'
}
</script>

<style scoped>
.loading {
  padding: 5em 0;
}
label {
  font-size: 48px;
  color: #ccc;
  margin-top: 2em;
}
.loader {
  position: absolute;
  left: 45%;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #ccc;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
