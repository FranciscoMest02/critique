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
        </div>
    </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    username: String,
    date: String,
    category: String,
    title: String,
    review: String,
    rating: Number
  }, 
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