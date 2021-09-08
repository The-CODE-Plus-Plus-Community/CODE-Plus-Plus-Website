<template>
  <div class="container">
      <h2 class="container-heading">Mentors</h2>
        <!-- <div class="background"></div> -->
      <div class="cards">
          <!-- mentor 1 -->
          <div class="card mentor-1">
              <div class="card-image"></div>
              <div class="card-text">
                  <h2>Name 1</h2>
                  <h4>Occupation</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim omnis repellat temporibus, saepe soluta a similique voluptas tempore explicabo voluptatem.</p>
              </div>
              <div class="card-status">
                  <div class="linkedin stat">
                    <linkedinIcon class="image-style"/>
                  </div>
                  <div class="youtube stat">
                    <twitterIcon class="image-style"/>
                  </div>
                  <div class="twitter stat">
                    <youtubeIcon class="image-style"/>
                  </div>
              </div>
          </div>
          <!-- mentor 2 -->
          <div class="card mentor-2">
              <div class="card-image"></div>
              <div class="card-text">
                  <h2>Name 2</h2>
                  <h4>Occupation</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim omnis repellat temporibus, saepe soluta a similique voluptas tempore explicabo voluptatem.</p>
              </div>
              <div class="card-status">
                  <div class="linkedin stat">
                    <linkedinIcon class="image-style" />
                  </div>
                  <div class="youtube stat">
                    <twitterIcon class="image-style"/>
                  </div>
                  <div class="twitter stat">
                    <youtubeIcon class="image-style"/>
                  </div>
              </div>
          </div>
          <!-- mentor 3 -->
          <div class="card mentor-3">
              <div class="card-image"></div>
              <div class="card-text">
                  <h2>Name 3</h2>
                  <h4>Occupation</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim omnis repellat temporibus, saepe soluta a similique voluptas tempore explicabo voluptatem.</p>
              </div>
              <div class="card-status">
                  <div class="linkedin stat">
                    <linkedinIcon class="image-style" />
                  </div>
                  <div class="youtube stat">
                    <twitterIcon class="image-style"/>
                  </div>
                  <div class="twitter stat">
                    <youtubeIcon class="image-style"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import linkedinIcon from "./../assets/Icons/linkedin-brands.svg";
import twitterIcon from "./../assets/Icons/twitter-brands.svg";
import youtubeIcon from "./../assets/Icons/youtube-brands.svg";
export default {
    components:{
        linkedinIcon ,
        twitterIcon ,
        youtubeIcon 
    }
}
</script>

<style lang="scss" scoped>

.container{
    max-width: 1800px;
    padding: 10px;
    margin: 2%;
    border-radius: 10px;
    background: rgba(207, 207, 240, 0.432);
    
    .container-heading{
        text-align: center;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 3rem;
        margin: 2.5rem;
    }
}

.cards{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 4rem;
}

.card{
    display: grid;
    grid-template-columns: 300px ;
    grid-template-rows: 210px 210px 80px;
    grid-template-areas:"image" "text" "socials" ;

    border-radius:18px ;
    background: white;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
    font-family: sans-serif;
    text-align: center;
    transition: all 0.3s ease;

    &:hover{
        transform: scale(1.01);
        box-shadow: 2px 2px 4px rgba(0,0,0,0.9);
    }
}

.card-image {
  grid-area: image;
}
.card-text {
  grid-area: text;
}
.card-status {
  grid-area: socials; 
}


.mentor-1 .card-image{
    grid-area: image;
    background: url("./../assets/MentorPhotos/mentor-1.jpg");
    border-top-left-radius: 15px ;
    border-top-right-radius: 15px;
    background-size:cover ;
}

.mentor-2 .card-image{
    grid-area: image;
    background: url("./../assets/MentorPhotos/mentor-2.jpg");
    border-top-left-radius: 15px ;
    border-top-right-radius: 15px;
    background-size:cover ;
}

.mentor-3 .card-image{
    grid-area: image;
    background: url("./../assets/MentorPhotos/mentor-1.jpg");
    border-top-left-radius: 15px ;
    border-top-right-radius: 15px;
    background-size:cover ;
}

.card-text{
    grid-area: text;
    margin: 25px;
}

.card-status{
    grid-area: socials;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;

    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background: #4bbad688;

    .youtube{
        border-right: 1px solid rgba(0, 0, 0, 0.2);
        border-left: 1px solid rgba(0, 0, 0, 0.2);
    }

    .stat{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: black;
        padding: 10px;

        .image-style{
            width: 40px;
            cursor: pointer;
        }
    }
}

// media queires
$breakpoint-tablet:1200px;
$breakpoint-mobile: 800px;

@media (max-width:$breakpoint-tablet){
    .card{
        grid-template-columns: 230px;
        grid-template-rows: 210px 250px 80px;
    }
}

@media (max-width: $breakpoint-mobile){
    .cards{
        display: flex;
        flex-direction: column;
    }

    .card{
        grid-template-columns: 300px;
        margin: 1rem;
    }
}

</style>
