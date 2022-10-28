<template>
    <div>
        <Header />
        <b-container fluid>
            <b-row>
                <b-col cols="5">
                    <div class="form">
                        <p class="title">Bienvenido de nuevo, critiquer</p>
                        <p class="subtitle">Inicia sesión para continuar compartiendo 
                            las criticas de lo que más te gusta y ver lo que los demás opinan.</p>
                        <div class="user">
                            <b-form @submit.stop.prevent>
                                <label for="text-user">Usuario</label>
                                <b-form-input type="text" id="text-user"></b-form-input>
                            </b-form>
                        </div>
                        <div class="password">
                            <b-form @submit.stop.prevent>
                                <label for="text-password">Contraseña</label>
                                <b-form-input type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
                            </b-form>
                        </div>

                        <b-button class="logIn" variant="primary" href="#/">Iniciar sesión</b-button>

                    </div>
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
import Header from './Header.vue'

export default {
  name: 'Login',
  components: {
    Header
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logIn{
    width: 100%;
    margin-top: 15px;
}

.title {
    font-weight: bold;
    font-size: x-large;
}

.subtitle{
    font-size: medium;
}

.password , .user {
    margin-bottom: 20px;
}

.form{
    margin-top: 30%;
    margin-left: 15%;
    width: 70%;
}

img {
    height: 90vh;
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