<template>
  <div id="app">
    <Header class="header-app"/>
    <router-view class="view two"/>
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
  color: #000;
}

.toba-btn-info {
  background-color: #63E3E8;
  border-radius: 10px;
  color: #fff;
}

.toba-btn-info:hover {
  border: 1px solid #63E3E8;
  background-color: #A8E8EB;
  color: #000;
}

.toba-btn-danger {
  background-color: #FF3D3D;
  border-radius: 10px;
  color: #fff;
}

.toba-btn-danger:hover {
  border: 1px solid #FF3D3D;
  background-color: #F16C6C;
  color: #000;
}

.toba-btn-basic {
  background-color: #b3b3b3;
  border-radius: 10px;
  color: #fff;
}

.toba-btn-basic:hover {
  border: 1px solid #b3b3b3;
  background-color: #dedede;
  color: #000;
}
.animate-bottom {
  position: relative;
  animation-name: animatebottom;
  animation-duration: 1.5s
}
.fa-map-marker, .fa-whatsapp, .fa-road, .fa-home {
  font-size: 25px;
  padding: 0 0.2em;
}
.fa-map-marker {
  font-size: 30px;
  color: #FF3D3D;
  horiz-align: center;
}
.fa-whatsapp {
  color: rgb(13, 193, 67);
}
.fa-whatsapp:hover{
  cursor: pointer;
}
.fa-home {
  font-size: 22px;
  color: #336eff;
}
.display-flex {
  display: flex;
  justify-content: left;
  text-align: justify;
}

@keyframes animatebottom {
  from{ bottom:-100px; opacity:0 }
  to{ bottom:0; opacity:1 }
}
.btn {
  /*height: 20px;*/
  padding: 0.5em;
}
</style>
