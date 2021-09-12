<template>
  <div class="app-wrapper">
    <div class="app">
      <Navbar v-if="!navigation"/>
      <router-view />
      <Footer v-if="!navigation"/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navigation.vue";
import Footer from './components/footer.vue'
import firebase from 'firebase/app'
import 'firebase/app'
export default {
  name: "app",
  components: {Navbar, Footer},
  data() {
    return {
        navigation: null,
    };
  },
  created() {
      firebase.auth().onAuthStateChanged((user) => {
          this.$store.commit("updateUser", user);
          if(user){
              this.$store.dispatch("getCurrentUser");
              console.log(this.$store.state.profileEmail);
          }
      })
      this.checkRoute();
  },
  mounted() {},
  methods: {
      checkRoute() {
          if(this.$route.name ==='Login' || this.$route.name === 'Register'){
            this.navigation=true;
            return;
          }
        this.navigation=false;
      }
  },
  watch: {
      $route(){
          this.checkRoute();
      }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}
.error{
    text-align: center;
    font-size: 12px;
    color: red;
}

.link-light {
  color: #fff;
}
</style>
