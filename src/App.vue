<template>
  <div id="app">  
    <Login />
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Header from './components/Header.vue'
import Registro from './components/Registro.vue'


export default {
  name: 'App',
  components: {
    Login, Header, Registro
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
