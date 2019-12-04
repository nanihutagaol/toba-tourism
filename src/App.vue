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
</style>
