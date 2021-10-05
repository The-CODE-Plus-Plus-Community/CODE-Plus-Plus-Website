<template>
  <div class="resource-cards">
      <div class="card-item">
            <img :src="post.resourceCoverPhoto" alt="" class="img">
            <div class="icons">
                <div class="icon" @click="editPost">
                    <img src="../assets/Icons/editing.png" alt="" >
                </div>
                <div class="icon"  @click="deletePost">
                    <img src="../assets/Icons/delete.png" alt="" >
                </div>
            </div>
            <div class="name">{{ post.resourceTitle }}</div>
            <p class="description" v-html="post.resourceHTML">
            </p>
            <a :href="this.resourceLink">View More</a>
        </div>
  </div>
</template>

<script>
export default {
    name: "ResourceCard",
    props: ["post"],
    methods: {
        deletePost () {
            console.log(this.post.resourceID);
            this.$store.dispatch("deletePost", this.post.resourceID);
        },
        editPost() {
            this.$router.push({name: 'EditResource', params: { resourceid: this.post.resourceID }});
        }
    }
}
</script>

<style scoped>
.resource-cards .card-item {
    position: relative;
    height: 400px;
    width: 340px;
    /* margin: 20px; */
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2);
    transition: 0.3s all ease;
    z-index: 99;
    background-color: #fff;
}
.resource-cards .card-item .name{
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    margin: 10px;
    text-decoration: underline;
}
.resource-cards .card-item .description{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 0.8rem;
    padding: 5px 10px 0 10px;
}
.resource-cards .card-item a{
    position: absolute;
    bottom: 10px;
    text-decoration: none;
    left: 32%;
    padding: 10px 20px;
    background-color: #303030;
    color: #fff;
    border-radius: 20px;
    text-align: center;
}
.resource-cards .card-item .img{
    width: 100%;
    height: 190px;
    overflow: hidden;
    transition: .5s all ease;
}
.resource-cards .card-item .img:hover{
    transform: scale(1.1);
}
.resource-cards .card-item .icons{
    position: absolute;
    top: 10px;
    right: 0;
}
.resource-cards .card-item .icons .icon{
    display: inline-block;
    height: 45px;
    width: 45px;
    background: gainsboro;
    border-radius: 30px;
    margin-right: 4px;
    transition: .3s all ease;
}
.resource-cards .card-item .icons .icon img{
    width: 25px;
    margin: 10px;
}
.resource-cards .card-item .icons:hover{
    cursor: pointer;
}
</style>