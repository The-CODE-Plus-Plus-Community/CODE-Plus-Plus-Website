<template>
  <div class="modal" ref="modal">
      <div class="modal-content">
          <div class="card-item">
            <img :src="this.resourceCoverPhoto" class="img">
            <div class="icons">
                <div class="icon">
                    <img src="../assets/Icons/editing.png" >
                </div>
                <div class="icon">
                    <img src="../assets/Icons/delete.png" >
                </div>
            </div>
            <div class="name">{{this.Title}}</div>
            <div class="description" v-html="content"></div>
            <a :href="openLink" target="_blank">View More</a>
        </div>
        <button @click="closePreview">Close</button>
      </div>
  </div>
</template>

<script>
export default {
methods :{
    closePreview() {
        return this.$store.commit("openResourcePreview");
    },
},
computed: {
    resourceCoverPhoto() {
      return this.$store.state.resourcePhotoFileURL;
    },
    content() {
        return this.$store.state.resourceHTML;
    },
    openLink() {
        return this.$store.state.resourceLink;
    },
    Title() {
        return this.$store.state.resourceTitle;
    }
}
}
</script>

<style scoped>
.modal {
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.modal-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-radius: 12px;
    background-color: #fff;
    height: 550px;
    width: 600px;
    padding: 50px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.card-item {
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
.card-item:hover{
    transform: rotate(-2deg);
}
.card-item .name{
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    margin: 10px;
    text-decoration: underline;
}
.card-item .description{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 0.8rem;
    padding: 5px 10px 0 10px;
}
.card-item a{
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
.card-item .img{
    width: 340px;
    height: 190px;
    overflow: hidden;
    transition: .5s all ease;
}
.card-item .img:hover{
    transform: scale(1.1);
}
.card-item .icons{
    position: absolute;
    top: 10px;
    right: 0;
}
.card-item .icons .icon{
    display: inline-block;
    height: 45px;
    width: 45px;
    background: gainsboro;
    border-radius: 30px;
    margin-right: 4px;
}
.card-item .icons .icon img{
    width: 25px;
    margin: 10px;
}
.card-item .icons:hover{
    cursor: pointer;
}
</style>