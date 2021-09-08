<template>
  <div class="footer">
        <div>
        <div class="title">Code++ Community</div>
        <div class="icons">
            <youtube class="img"/>
            <twitter class="img"/>
            <instagram class="img"/>
            <linkedin class="img"/>
        </div>
    </div>
        <div class="nav">
            <a href="#">Home</a>
            <a href="#">Resources</a>
            <a href="#">Challenges</a>
            <a href="#">Login/Register</a>
        </div>
        <div class="copyright">
            &copy; Code++ Community all rights reserved
        </div>
    </div>
</template>

<script>
import youtube from '../assets/Icons/youtube-brands.svg'
import instagram from '../assets/Icons/instagram-brands.svg'
import linkedin from '../assets/Icons/linkedin-brands.svg'
import twitter from '../assets/Icons/twitter-brands.svg'
export default {
    name: "Footer",
    components : {
        youtube, instagram, linkedin, twitter
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
.footer{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 40px 40px;
    color: beige;
    background-color: #303030;
}
.footer .title{
    font-size: 22px;
    font-weight: 700;
}
.footer .icons{
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    padding: 20px 0;
    margin-left: -20px;
}

.footer .icons .img{
    height: 30px;
}
.footer .nav{
    display: flex;
    flex-direction: column;
    height: 100%;
}
.footer .nav a{
    text-decoration: none;
    text-transform: uppercase;
    color: beige;
    /* color: ; */
}
@media (max-width:800px) {
    .footer{
        flex-direction: column;
        padding: 20px 100px;
        text-align: center;
    }
    .nav , .copyright{
        padding: 10px;
    }
}
.img{
    width: 200px;
    height: 200px;
}

</style>