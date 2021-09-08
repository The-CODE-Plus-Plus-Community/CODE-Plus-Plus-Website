<template>
  <div class="hero-section">
        <div class="content">
            <h2>CODE++ | A Community to bring out the plus in you</h2>
            <p>CODE++ is the community for programmers and people learning to code. CODE++ mostly comprises of web designers and developers to discuss everything web development from HTML, CSS, JavaScript, PHP, MERN, MEAN, Java Full Stack, .NET Full-Stack, and more. CODE++ is also into DSA and Competitive Coding along with automation stacks such as Devops and Azure.</p>
            <a href="#" class="link">GET STARTED</a>
        </div>
        <div class="banner">
            <img src="../assets/Web-Developers-1.jpg" alt="" class="img">
        </div>
    </div>
</template>

<script>
export default {
    name: "Hero-Section"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;1,100;1,200&family=Poppins:ital,wght@0,200;0,300;1,200;1,300&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.hero-section{
    display: flex;
    max-width: 100vw;
    align-items: center;
    justify-content: space-evenly;
    margin: 80px 0;
}
.content{
    width: 40%;
    display: flex;
    max-height: 372px;
    flex-direction: column;
    justify-content: space-between;
}
.content h2{
    color: rgb(62, 84, 163);
    font-size: 2.5rem;
    font-weight: 800;
    text-align: start;
}
.content p{
    padding: 10px 0;
    font-size: 1rem;
}
.content .link{
    width: max-content;
    letter-spacing: 3px;
    font-weight: 800;
    padding: 8px 30px;
    color: azure;
    text-decoration: none;
    background-color: rgb(237, 44, 73);
    border-radius: 20px;
    margin-top: 10px;
}
@media (max-width: 1100px){
    .banner{
        display: none;
    }
    .content{
        width: 80%;
        margin: 0 10%;
        text-align: center;
        align-items: center;
    }
    .content h2{
        font-size: 2.2rem;
        text-align: center;
    }
}
@media(max-width:500px){
    .content h2{
        font-size: 1.8rem;
        text-align: center;
    }
}
</style>