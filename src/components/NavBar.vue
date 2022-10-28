<template>
   
   <div class="hi">
   <div class="classHeader">
    <img class="logo" src="../assets/logoCritique.png"/>
    <p class="pHeader"> CRITIQUE </p>   
     <b-button class="preguntas" variant="primary">Nueva reseña</b-button>
     <b-button class="profile" variant="danger">Cerrar sesion</b-button>
    </div>
    </div>
</template>

<script>

export default {
  name: 'NavBar',
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
    margin-right: 65%;
    
}

.logo {
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

.preguntas {
    margin-right: 2%;
}

.profile {
    margin-left: 2%;
}

</style>