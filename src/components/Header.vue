
<template>
   
   <div class="hola">
   <div class="classHeader">
    <img class="lapiz" src="../assets/logoCritique.png"/>
    <p class="pHeader"> CRITIQUE </p>   
     <b-button class="registro" variant="primary">Regístrate</b-button>
     <b-button variant="secondary">Inicia sesión</b-button>
    </div>
    </div>
</template>



<script>



export default {
  name: 'Header',
  props: {
  }, 
}
</script>

<style scoped>
.pHeader {
    display:inline-block;
    margin-left: 2%;
    font-weight: bolder;
    font-size: 18px;
    margin-left: 1%;
    margin-right: 70%;
    
}

.lapiz {
    display: inline-block;
    margin-left: 3%;
    width: 40px;
}

.classHeader {

    padding-top: 1%;
    padding-bottom: 0.5%;
    border-bottom-style: solid;
    border-bottom-color: gray;

}

.perro {
    margin-right: 2%;
}

.espacio {
    margin-right: 2%;
    display: inline-block;
}

.registro {
    margin-right: 2%;
}

</style>
