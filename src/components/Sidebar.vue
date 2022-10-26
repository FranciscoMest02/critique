<template>
    <div id="sidebar" class="sticky">
        <div class="search-container">
            <form action="/action_page.php">
                <input type="text" placeholder="Busca" name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>

        <h4>Menu</h4>
        <!-- faltan los icons lol -->
        <div class="link-container">
            <i class="fa fa-search"></i> <a href="#" class="web-bar-item"> {{ Category1 }} </a>
        </div>
        <div class="link-container">
            <i class="fa fa-search"></i> <a href="#" class="web-bar-item"> {{ Category2 }} </a>
        </div>
        <div class="link-container">
            <i class="fa fa-search"></i> <a href="#" class="web-bar-item"> {{ Category3 }} </a>
        </div>

        <div class="link-container">
            <i class="fa fa-search"></i> <a href="#" class="web-bar-item"> {{ Category4 }} </a>
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
#sidebar {
    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: bold;
    text-align: left;
    color: #000000;
    max-width: 525px;
    padding: 16px 0px 16px 0px;
    height: 100%;
    position:fixed!important;

}

h4 {
    color: #808080;
    padding-left: 50px;
    font-size: 12px;
    font-weight: normal;
    margin: 16px 0 0 0;
}

body {
  font-size: 13px;
  text-align: center;
}

a {
  text-decoration: none;
  color: inherit;
  line-height: 1;
}

div a:after {
    align-content: left;
    content: "";
    display: block;
    height: 0;
    width: 1px;
}

div a:hover{
    color: #4A87CE;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: white;
}

.link-container{
    background: linear-gradient(90deg, #afd4ff, white) no-repeat right bottom / 0 var(--bg-h);
    transition: background-size 500ms;
    --bg-h: 100%;
    flex-wrap: wrap;
    padding: 16px 50px 16px 50px;
    margin: 10px 0 10px 0;
    text-align: left;
}

.search-container{
    position: relative;
    display: block;
    margin: 16px 50px 16px 50px;
    text-align: left;

}


.link-container:where(:hover, :focus-visible) {
  background-size: 100% var(--bg-h);
  background-position-x: left;
}

input[type=text] {
    width: 25%;
    padding: 4px;
    margin: 0 8px 32px 0;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
  width: 80%;
}


</style>