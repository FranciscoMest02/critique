<template>
  <div id="app">  
    <Header/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Login, Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
