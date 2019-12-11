<template>
<div class="footer-component">

  <div class="container">
    <div class="flex-footer col-sm-12 ">
      <div class="my-col col-sm-4">
        <div class="my-col-title">
          Quick Links
        </div>
        <div>
          <a class="" href="#">Home</a>
        </div>
        <div>
          <a class="" href="#">About Company</a>
        </div>
        <div>
          <a class="" href="#">Testimonials</a>
        </div>
        <div>
          <a class="" href="#">Infrastructure</a>
        </div>
      </div>
      <div class="my-col col-sm-4">
        <div class="my-col-title">
          Support
        </div>
        <div>
          <a class="" href="#">Get Started</a>
        </div>
        <div>
          <a class="" href="#">About Company</a>
        </div>
        <div>
          <a class="" href="#">Testimonials</a>
        </div>
        <div>
          <a class="" href="#">Infrastructure</a>
        </div>
      </div>
      <div class="my-col col-sm-4">
        <div class="my-col-title">
          Address
        </div>
        <div>
          <a class="" href="#">Toba Samosir, Sumatera Utara, Indonesia</a>
        </div>
        <div>
          <a class="" href="#">Contact person: 08xxx xxxx xxxx</a>
        </div>
      </div>
    </div>
  </div>

  <div class="container col-sm-12 default-footer">
    Tourism &copy; All Rights Reserved
  </div>

</div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.footer-component {
  background-color: #2c3e50;
  color: white;
  font-size: 12px;
  margin-top: 5em;
}

.my-col {
  text-align: center;
  padding: 1em;
}

.my-col div {
  padding: 0.25em;
}

a {
  color: white;
}

.my-col-title {
  font-weight: bold;
  font-size: 14px;
}

.flex-footer {
  display: flex;
  justify-content: space-between;
}

.default-footer {
  border-top: 1px solid white;
  padding: 1em;
}
</style>
