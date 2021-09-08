<template>
  <div class="container">
        <div class="title">
            <h2>How we Work</h2>
        </div>
        <div class="working-cards">
            <div class="working-card">
                <download class="img" />
                <h3>Pick up your Challenges</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus provident, blanditiis qui eius libero dolore a soluta ducimus distinctio voluptatem, at et, incidunt dicta. Ipsa iste possimus autem temporibus debitis.</p>
            </div>
            <div class="working-card">
                <Solve class="img" />
                <h3>Code it out!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus provident, blanditiis qui eius libero dolore a soluta ducimus distinctio voluptatem, at et, incidunt dicta. Ipsa iste possimus autem temporibus debitis.</p>
            </div>
            <div class="working-card">
                <resources class="img" />
                <h3>Do self-learning through resources</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus provident, blanditiis qui eius libero dolore a soluta ducimus distinctio voluptatem, at et, incidunt dicta. Ipsa iste possimus autem temporibus debitis.</p>
            </div>
            <div class="working-card">
                <question class="img" />
                <h3>Take help from mentors</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus provident, blanditiis qui eius libero dolore a soluta ducimus distinctio voluptatem, at et, incidunt dicta. Ipsa iste possimus autem temporibus debitis.</p>
            </div>
        </div>
    </div>
</template>

<script>
import download from '../assets/blogCards/undraw_Download_re_li50.svg'
import Solve from '../assets/blogCards/undraw_Code_review_re_woeb.svg'
import resources from '../assets/blogCards/undraw_Operating_system_re_iqsc.svg'
import question from '../assets/blogCards/undraw_Questions_re_1fy7.svg'
export default {
    name: "Working",
    components: {
         resources, question, Solve, download
    }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;1,200;1,300&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.container{
    max-width: 1770px;
}
.container .title{
    /* width: 100%; */
    /* background: #303030; */
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
    /* padding: 4vh 0; */
    color: rgb(34, 81, 168);
}
.container .working-cards{
    display: flex;
    width: 98vw;
    /* background: #303030; */
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    /* font-size: 1.1rem; */
}
.container .working-cards .img{
    width: 150px;
    margin-bottom: 10px;
}
.container .working-card{
    width: 22vw;
    text-align: center;
}
.container .working-card h3{
    padding: 20px;
}
@media(max-width:1000px) {
    .container .working-card{
        width: 330px;
        margin-bottom: 20px
    }
}
.imag{
    height: 100px;
    width: 100px;
    background: url('../assets/blogCards/undraw_Download_re_li50.svg');
    background-size: cover;
}
</style>