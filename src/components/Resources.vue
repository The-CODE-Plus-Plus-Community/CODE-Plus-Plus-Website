<template>
  <div class="resources">
      <div class="background"></div>
      <div class="title"><h1>RESOURCES</h1>
      </div>
      <div class="resource-cards">
        <div class="card-item">
            <img src="../assets/blogCards/stock-1.jpg" alt="" class="img">
            <div class="name">Html&Css</div>
            <p class="description">
                This resources are provided for absolute beginners, if you are just starting out you can go through these and start working with projects next week onwards...
            </p>
            <a href="#">View More</a>
        </div>
        <div class="card-item">
            <img src="../assets/blogCards/stock-2.jpg" alt="" class="img">
            <div class="name">Html&Css</div>
            <p class="description">
                This resources are provided for absolute beginners, if you are just starting out you can go through these and start working with projects next week onwards...
            </p>
            <a href="#">View More</a>
        </div>
        <div class="card-item">
            <img src="../assets/blogCards/stock-3.jpg" alt="" class="img">
            <div class="name">Html&Css</div>
            <p class="description">
                This resources are provided for absolute beginners, if you are just starting out you can go through these and start working with projects next week onwards...
            </p>
            <a href="#">View More</a>
        </div>
        <div class="card-item">
            <img src="../assets/blogCards/stock-1.jpg" alt="" class="img">
            <div class="name">Html&Css</div>
            <p class="description">
                This resources are provided for absolute beginners, if you are just starting out you can go through these and start working with projects next week onwards...
            </p>
            <a href="#">View More</a>
        </div>
        <div class="card-item">
            <img src="../assets/blogCards/stock-4.jpg" alt="" class="img">
            <div class="name">Html&Css</div>
            <p class="description">
                This resources are provided for absolute beginners, if you are just starting out you can go through these and start working with projects next week onwards...
            </p>
            <a href="#">View More</a>
        </div>
        <div class="card-item">
            <img src="../assets/blogCards/stock-3.jpg" alt="" class="img">
            <div class="name">Html&Css</div>
            <p class="description">
                This resources are provided for absolute beginners, if you are just starting out you can go through these and start working with projects next week onwards...
            </p>
            <a href="#">View More</a>
        </div>
    </div>
        <div class="resource-route">
        <p>SEE MORE</p>
    </div>
  </div>
</template>
<script>
export default {
    name: "Resources",
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;1,200;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;1,200&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
.resources{
    margin-top: 100px;
    overflow-x: hidden;
}
.title { 
    position: relative;
    margin: 30px 0;
    width: 98vw;
    text-align: center;
    text-transform: capitalize;
    padding-top: 10px;
    z-index: -1;
}
.title h1{
 font-family: 'Roboto', sans-serif; 
 font-size: 1.3em;
    color: #fff;
}
 .background{
    position: absolute;
    left: 2vw;
    height: 40vh;
    width: 96vw;
    min-width: 90vw;
    background:linear-gradient(rgb(62, 84, 163) 0%, rgb(62, 84, 163) 30rem, transparent 30rem);
    z-index: -1;
    border-radius: 10px 10px 0 0; 
 }
.resource-cards{
    display: grid;
    width: 100%;
    /* height: 50vh; */
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    z-index: 99;
}
.resource-cards .card-item {
    position: relative;
    height: 400px;
    width: 340px;
    margin: 20px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2);
    transition: 0.3s all ease;
    z-index: 99;
    background-color: #fff;

}
.resource-cards .card-item:hover{
    transform: rotate(-2deg);
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
    height: max-content;
    overflow: hidden;
    transition: .5s all ease;
}
.resource-cards .card-item .img:hover{
    transform: scale(1.1);
}
@media(max-width: 1100px){
    .resource-cards{
        grid-template-columns: repeat(2, 1fr);
    }
}
@media(max-width: 750px){
    .resource-cards{
        grid-template-columns: repeat(1, 1fr);
    }
    .resource-cards .card-item{
        width: 320px;
        height: 375px;
    }
}
.resource-route {
    margin: 50px 0px;
    margin-left: 46vw;
    transition: .3s all ease-in;
    transform-origin: center;
    font-weight: 800;
}
.resource-route:hover{
    cursor: pointer;
    transform: scale(1.01);
    text-decoration: underline;
}
</style>>