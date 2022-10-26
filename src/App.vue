<template>
  <div id="app">  
    <NavBar/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Header from './components/Header.vue'
import Registro from './components/Registro.vue'
import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    Login, Header, Registro, NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
