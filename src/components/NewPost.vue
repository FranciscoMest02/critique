<template>
    <div class="new-post">
        <div class="form">
            <form action="Post">
                <label for="Categoria"></label>
                <input type="Select" id="Category" name="Category" value="Category">
                <label for=""></label>
                <input type="text" id="Title" name="Title" value="Escribe un Titulo para tu Publicacion">
                <label></label>
                <input type="text">
            </form>

        </div>
        <div class="buttons">
            <button>Agrega Imagen</button>
            <button>Guardar Borrador</button>
            <button>Publicar</button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            Category1: 'Reseñas',
            Category2: 'Peliculas',
            Category3: 'Canciones',
            Category4: 'Libros'
        }
    }
}
</script>

<style scooped>

.new-post{
    display:flex;
    flex-direction:column;

    background-color: aquamarine;
}

form input{
    width:max-content;
}

</style>
