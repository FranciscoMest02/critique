<template>
    <div>
        <NavBar />
        <b-container fluid>
            <b-row>
                <b-col cols="3">
                    <Sidebar />
                </b-col>
                <b-col cols="9">
                    <div class="publications" v-if="posts">
                        <div v-for="post in posts" :key="post._id">
                            <Post 
                                :username=post.username
                                :date=post.date
                                :title=post.title 
                                :review=post.review 
                                :category=post.category 
                                :rating=post.rating
                                :id=post._id
                            />
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from "axios"

import Post from './Post.vue'
import Sidebar from './Sidebar.vue'
import NavBar from './NavBar.vue'

export default {
    name: 'Home',
    components: {
        Post, Sidebar, NavBar
    },
    data: () => ({
        posts: null
    }),
    created(){
        const url = "http://127.0.0.1:5000/post/titulo/" + this.$route.params.titulo
        axios.get(url).then((result) => {
            this.posts = result.data
        })
    }
}


</script>


<style scoped>
.publications{
    padding-bottom: 50px;
}
</style>