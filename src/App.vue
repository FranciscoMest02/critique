<template>
  <div id="app"> 
    <router-view :key="$route.fullPath"> </router-view>
  </div>
</template>

<script>

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
