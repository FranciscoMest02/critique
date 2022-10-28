<template>
    <div>
        <div class="post">
            <b-container>
                <b-row>
                    <b-col cols="1">
                        <img class="profilePicture" alt="Profile picture" src="../assets/imageLogin.jpg"/>
                    </b-col>
                    <b-col cols="6">
                        <p class="username">{{username}}</p>
                        <p class="date">{{date}}</p>
                    </b-col>
                    <b-col cols="3"><b-button disabled variant="outline-dark">{{category}}</b-button></b-col>
                    <b-col cols="2"><p class="postInfo">{{rating}} estrellas</p></b-col>
                </b-row>
            </b-container>
            <p class="title">{{title}}</p>
            <p class="review">{{review}}</p>
            <b-container v-if="myReview">
                <b-row>
                    <b-col cols="8"></b-col>
                    <b-col cols="2"><b-button variant="danger" v-on:click="handleDelete">Borrar</b-button></b-col>
                    <b-col cols="2"><b-button v-on:click="handleEdit">Editar</b-button></b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'Post',
  props: {
    username: String,
    date: String,
    category: String,
    title: String,
    review: String,
    rating: Number,
    myReview: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        default: ''
    }
  },
  methods: {
    handleDelete() {
        if(this.id != ''){
            const url = "http://127.0.0.1:5000/post/delete/" + this.id;
            axios.delete(url).then(() => {
                console.log("Borrado")
                this.$router.go()
            })
        }
    },
    handleEdit() {
        if(this.id != ''){
            const url = "#/editarpost/" + this.id
            window.location.href = url
        }
    }
  }
}
</script>

<style scoped>
.post {
    height: 20%;
    width: 85%;
    box-shadow: 2px 2px 5px #aaaaaa;
    padding: 40px;
    border-radius: 10px;
    margin: auto;
    margin-top: 40px;
}

.title {
    font-weight: bold;
    font-size: large;
    margin-top: 20px;
}

.review{
    font-size: small;
    margin-top: 20px;
}

.profilePicture {
    width: 60px;
    height: 60px;
    border-radius: 999px;
}

.username {
    font-size: large;
    margin-top: 10px;
    margin-bottom: 0px;
}

.date {
    font-size: small;
    color: #aaaaaa;
}

.postInfo{
    margin-top: 15px;
}

</style>