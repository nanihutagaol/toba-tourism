<template>
  <div id="app">
    <Header class="header-app"/>
    <router-view class="router-app"/>
    <Footer class="footer-app"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.router-app {
  min-height: 100px;
}

.footer-app {
  width: 100%;
  bottom: 0px;
}

/* Toba Tourism Default CSS*/

.toba-btn-success {
  background-color: #63E882;
  border-radius: 10px;
  color: #fff;
}

.toba-btn-success:hover {
  border: 1px solid #63E882;
  background-color: #B6EEC3;
  color: #fff;
}

.toba-btn-info {
  background-color: #63E3E8;
  border-radius: 10px;
  color: #fff;
}

.toba-btn-success:hover {
  border: 1px solid #63E3E8;
  background-color: #A8E8EB;
  color: #fff;
}

.toba-btn-danger {
  background-color: #FF3D3D;
  border-radius: 10px;
  color: #fff;
}

.toba-btn-danger:hover {
  border: 1px solid #FF3D3D;
  background-color: #F16C6C;
  color: #fff;
}
</style>
