<template>
  <div id="app">  
    <router-view> </router-view>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Header from './components/Header.vue'
import Registro from './components/Registro.vue'


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
