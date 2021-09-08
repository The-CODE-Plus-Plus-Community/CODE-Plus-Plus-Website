<template>
  <header>
      <nav class="container">
          <div class="branding">
              <router-link class="header" :to="{name: 'Home'}">
                Code ++
              </router-link>
          </div>
          <div class="nav-links">
              <ul v-show="!mobile">
                  <router-link class="link" to="#">Challenge</router-link>
                  <router-link class="link" to="#">Resource</router-link>
                  <router-link class="link" to="#">Contact-Us</router-link>
                  <router-link class="link" to="#">Login/Signup</router-link>
              </ul>
          </div>
      </nav>
      <menuIcon @click="toggleMobileNav" v-show="mobile" class="menu-icon"/>
      <transition name="mobile-nav">
          <ul class="mobile-nav" v-show="mobileNav">
            <router-link class="link" to="#">Challenge</router-link>
            <router-link class="link" to="#">Resource</router-link>
            <router-link class="link" to="#">Contact-Us</router-link>
            <router-link class="link" to="#">Login/Signup</router-link>
          </ul>
      </transition>
  </header>
</template>

<script>
import menuIcon from './../assets/Icons/bars-regular.svg';
// import Logo from "./../assets/logo.svg";

export default {
    name:'navigation',
    components:{
        menuIcon,
        // Logo
    },
    data() {
        return{
            mobile:null, 
            mobileNav: null,
            windowWidth: null,
            // scrollSize:null,
            // fixedNav:null
        };
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <=800) {
                this.mobile = true;
                return 0;
            }
            this.mobile = false;
            this.mobileNav = false;
            this.windowWidth = false;
            return;
        },

        toggleMobileNav () {
            this.mobileNav = !this.mobileNav;
        }
    }
}
</script>

<style lang="scss" scoped>
    header{
        background-color: #fff ;
        padding:0 25px ;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .link{
        font-weight: 500;
        padding: 0 8px;
        transition: 0.3s color ease;
        &:hover{
            color: #1eb8b8;
        }
    }
    nav{
        display: flex;
        padding: 25px 0px ;

        .branding{
            display: flex;
            align-items: center;

            .header{
                font-weight: 600;
                font-size: 24px;
                color: black;
                text-decoration: none;
            }
        }
        .nav-links{
        position: relative;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: flex-end;
        ul{
            .link{
                margin-right: 32px;
            }
            .link:last-child{
                margin-right: 0;
            }
        }
    }
    }
    .menu-icon{
        cursor: pointer;
        position: absolute;
        top: 32px;
        right: 25px;
        height: 25px;
        width: auto;
    }
    .mobile-nav{
        padding: 20px;
        width: 70%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 100%;
        background-color: #303030;
        top: 0;
        left: 0;
        .link{
            padding: 15px;
            color: #fff;
            transition: 0.3s all ease;
            &:hover{
                border-radius: 20px ;
                background: #ccf1653a;
                color: #000;
            }
        }
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
        transition: all 0.5s ease;
    }
    .mobile-nav-enter{
        transform: translateX(-250px);
    }
    .mobile-nav-enter-to{
        transform: translateX(0px);
    }
    .mobile-nav-leave-to{
        transform: translateX(-250px);
    }
</style>