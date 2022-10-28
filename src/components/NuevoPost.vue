<template>

<div class="NuevoPost">

    <Header/>

    <br>

    <div class="cuadroPost">

        <p class="tituloCrear"> Crear nueva publicación </p>

        <p class="tituloCategoria">Categoría: </p>

        <b-form-select class = "categoriaForm" v-model="selected" :options="options"></b-form-select>
         <br>
         <br>
             <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> 
        
        <label for="text-user">Título: </label>
        <b-form-input v-model="title" type="text" id="text-user"></b-form-input>
        <br>

        <label for="text">Reseña: </label> 
        <b-form-textarea id="textarea" v-model="review" placeholder="Escribe la reseña" rows="3" max-rows="6" ></b-form-textarea>
        <br>
        <label>Tu calificación:  </label>
        <b-form-rating size="lg" id="rating-10" variant="warning" v-model="value10" stars="10" show-clear ></b-form-rating>
        <p class="ratingUsuario">{{ value10 }}/10 estrellas</p>
        <b-button variant="primary" class="btnCrearPost" v-on:click="handleSubmit">Publicar</b-button>



    </div>
</div>
    
</template>

<script>
import axios from "axios"

import Header from './Header.vue';

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
                "username": "PanchitoM"
            })
        }
    },

  name: 'NuevoPost',
  props: {
  }, 
  components:{
    Header
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
    margin-top:8%;
    margin-left:42%;;
}
</style>