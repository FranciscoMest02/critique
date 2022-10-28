<template>

<div class="NuevoPost">

    <NavBar/>
    <br>

    <div class="cuadroPost">


        <p class="tituloCrear"> Editar publicación </p>

        <p class="tituloCategoria">Categoría: </p>

        <b-form-select class = "categoriaForm" v-model="selected" :options="options"></b-form-select>
        <br>
        <br>
        
        <label for="text-user">Título: </label>
        <b-form-input v-model="title" type="text" id="text-user"></b-form-input>
        <br>

        <label for="text">Reseña: </label> 
        <b-form-textarea id="textarea" v-model="review" placeholder="Escribe la reseña" rows="3" max-rows="6" ></b-form-textarea>
        <br>
        <label>Tu calificación:  </label>
        <b-form-rating size="lg" id="rating-10" variant="warning" v-model="value10" stars="10" show-clear ></b-form-rating>
        <p class="ratingUsuario">{{ value10 }}/10 estrellas</p>
        <div class="botones">
            <b-button variant="outline-secondary" class="btnVolver" href="#/"> Volver</b-button>
            <b-button variant="primary" class="btnCrearPost" v-on:click="handleSubmit" href="#/">Guardar</b-button>
        </div>
    </div>
</div>
    
</template>

<script>

import axios from "axios"

import Header from './Header.vue';
import NavBar from './NavBar.vue';



export default {

    data() {
      return {
        selected: '',
        options: [
          { value: null, text: '' },
          { value: 'Música', text: 'Música' },
          { value: 'Película', text: 'Película' },
          { value: 'Serie', text: 'Serie' },
          { value: 'Libro', text: 'Libro' },
        ],
        value10: null,
        review: '',
        title: '',
      }
    },
    methods: {
        handleSubmit() {
            axios.post("http://127.0.0.1:5000/post/new", {
                "category": this.selected,
                "rating": this.value10,
                "review": this.review,
                "title": this.title,
                "username": localStorage.username
            })
        },
        handleInfo() {
            const url = "http://127.0.0.1:5000/getpost/" + this.$route.params.id
            axios.get(url).then((result) => {
            this.value10 = result.data.rating
            this.review = result.data.review
            this.title = result.data.title
            this.selected = result.data.category
        })
        }
    },

     mounted(){

            this.handleInfo()
            
        },

  name: 'EditarPost',
  props: {
  }, 
  components:{
    Header, NavBar
}
}
</script>

<style scoped>
.cuadroPost{
    width: 40%;
    margin: auto;

}
.tituloCrear{
    margin-top: 4%;
    font-size: 40px;
    font-weight: bolder;
    border-radius: 2;
}

.categoriaForm {
    width: 30%;
    font-size: 15px;
    margin-bottom: 2%;
}

.textoCategoria{
    font-size: 20px;
}

.tituloCategoria{
    margin: 0;
    margin-bottom:1%;
}

.ratingUsuario{
    text-align: right;
    margin-top:0.5%;
}

.btnCrearPost {
    margin-top:40%;
    margin-left:5%;
    display:inline;

}

.btnVolver {
    display:inline;
    text-align: left;
    margin-top:40%;
    margin-left: 35%;;
}
</style>