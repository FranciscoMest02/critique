<template>
    <div>
        <Header />
        <b-container fluid>
            <b-row>
                <b-col cols="5">
                    <div class="form">
                        <p class="title">Únete a millones de críticos</p>
                        <p class="subtitle">Forma parte de la comunidad de Critique, y 
                            comparte tu opinion sobre los ultimos estrenos y mas.</p>
                        <div class="nombre">
                            <b-form @submit.stop.prevent>
                                <label for="text-nombre">Nombre</label>
                                <b-form-input v-model="nombre" type="text" id="text-nombre"></b-form-input>
                            </b-form>
                        </div>
                        <div class="email">
                            <b-form @submit.stop.prevent>
                                <label for="text-email">Email</label>
                                <b-form-input v-model="mail" type="email" id="text-email"></b-form-input>
                            </b-form>
                        </div>
                        <div class="user">
                            <b-form @submit.stop.prevent>
                                <label for="text-user">Usuario</label>
                                <b-form-input v-model="username" type="text" id="text-user"></b-form-input>
                            </b-form>
                        </div>
                        <div class="password">
                            <b-form @submit.stop.prevent>
                                <label for="text-password">Contraseña</label>
                                <b-form-input v-model="password" type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
                            </b-form>
                        </div>
                        <b-button class="logIn" variant="primary" v-on:click="handleSubmit">Regístrate</b-button><br><br>
                        <p v-if="confirmMsg" id="confirmMsg"> {{ confirmMsg }} </p>
                        <b-button class="logIn" variant="outline-dark">Regístrate con Google</b-button>
                        <b-button class="logIn" variant="outline-dark">Regístrate con Apple</b-button>
                    </div>
                </b-col>
                <b-col cols="7">
                    <p class="movieTitle">The Greatest Showman, 2017</p>
                    <img alt="Batman poster" src="../assets/imagenRegistro.jpg">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from "axios"

import Header from './Header.vue'

export default {
  name: 'Registro',
  components: {
    Header
  },
  data() {
    return {
        nombre: '',
        username: '',
        mail: '',
        password: '',
        confirmMsg: null
    }
  },
  methods: {
    handleSubmit() {
            axios.post("http://127.0.0.1:5000/user/new", {
                "nombre": this.nombre,
                "username": this.username,
                "mail": this.mail,
                "password": this.password,
            }).then(() => {
                this.confirmMsg = "Usuario creado correctamente, ve a la pagina de inicio de sesion para entrar"
            })
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logIn{
    width: 100%;
    margin-top: 10px;
}

.register {
    margin-right: 15px;
    width: 46%;
}

.title {
    font-weight: bold;
    font-size: x-large;
}

.subtitle{
    font-size: medium;
}

.password , .user, .nombre, .email {
    margin-bottom: 20px;
}

.form{
    margin-top: 5%;
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

#confirmMsg{
    font-size: small;
    color: #6ef947;
}
</style>