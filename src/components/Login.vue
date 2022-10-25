<template>
    <div>
        <b-container fluid>
            <b-row>
                <b-col cols="5" style="background-color: #F0F0F0">1 of 2

                </b-col>
                <b-col cols="7">
                    <p class="movieTitle">The Batman, 2022</p>
                    <img alt="Batman poster" src="../assets/imageLogin.jpg">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
}

.movieTitle {
    position: absolute;
    top: 93%;
    right: 5%;
    color: #FFFFFF;
}
</style>