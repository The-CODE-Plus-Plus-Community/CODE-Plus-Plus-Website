<template>
  <div class="login">
        <div class="background">
            <div class="signup">
                <h3>Don't have an account already ?</h3>
                <router-link class="button" :to="{ name: 'Register'}">SIGNUP</router-link>
            </div>
        </div>
        <div>
            <div class="login-content">
                    <img src="../assets/Profile-login.png" alt="">
                <h1>Login to your Account</h1>
                <div class="inputs">
                    <input type="text" placeholder="Enter your email" v-model="email"> <br>
                    <input type="password" placeholder="Enter your password" v-model="password">
                    <a href="#">Forgot your Password?</a>
                </div>
                <div v-show="error" class="error">{{ this.errorMsg }}</div>
                <button @click.prevent="signIn">Login</button>
            </div>
        </div>
        <div class="mobile-nav-content">
            <h3>Don't have an account already ?</h3>
            <router-link class="button" :to="{ name: 'Register'}">SIGNUP</router-link>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            error: null,
            errorMsg: ""
        }
    },
    methods: {
        signIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                this.$router.push({ name:'Home'});
                this.error = false;
                this.errorMsg = "";
                console.log(firebase.auth().currentUser.uid);
            } ).catch( (err) => {
                this.error = true;
                this.errorMsg = err.message;
            })

        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;1,200&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    transition: .3s all ease;
}

.login{
    height: 100vh;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
}

.background{
    margin-top: -15vh;
    margin-left: -10vw;
    height: 120vh;
    width: 60vw;
    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #414141 84%);
    transform: rotate(5deg);
}
.background .signup{
    transform: rotate(-5deg);
    margin-top: 45%;
    margin-left: 10%;
    font-size: 2rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.89);
}
.background .signup .button{
    margin-top: 100px;
    padding: 10px 120px;
    border: none;
    outline: none;
    border: 3px solid #fff;
    background: transparent;
    border-radius: 60px;
    font-size: 1.4rem;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.89);
    font-weight: 800;
    box-shadow: 4px 10px 27px rgba(7, 4, 4, 0.332);
    text-decoration: none;
}
.background .signup .button:hover{
    box-shadow: 4px 20px 17px rgba(7, 4, 4, 0.332);
    cursor: pointer;
}
.mobile-nav-content{
    display: none;
}
.login-content{
    padding: 10vh;
    padding-top: 20vh;
    display: flex;
    height: 60vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    text-align: center;
}
.login-content img{
    width: 200px;
}
.login-content h1, .login-content button{
    margin-top: 0 20px;
    /* padding: 20px; */
}
.login-content .inputs{
    margin: 20px;
}
.login-content input{
    margin: 5px 0;
    width: 100%;
    padding: 10px 20px;
    border: 1px solid #000;
    border-radius: 5px;
    outline: none;
}
.login-content button{
    margin: 10px 120px;
    padding: 5px 40px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background: #303030;
font-size: 1.2rem;
color: #fff;
text-decoration: none;
}
@media(max-width: 1300px){
    .mobile-nav-content{
        width: 100%;
        height: 200px;
        background-color: #303030;
        display: block;
        text-align: center;
    }
    .login{
        flex-direction: column;
    }
    .login-content{
        font-size: 1rem;
    }
    .background{
        display: none;
    }
    .login-content{
        padding-top: 5vh;
        width: 100vw;
        /* align-items: center; */
    }
    .mobile-nav-content h3{
        margin: 30px 0;
        color:rgba(255, 255, 255, 0.89);
        font-size: 1.5rem;
    }
    
    .mobile-nav-content .button{
        padding: 10px 120px;
        border: none;
        outline: none;
        border: 3px solid #fff;
        background: transparent;
        border-radius: 60px;
        font-size: 1.4rem;
        letter-spacing: 2px;
        color: rgba(255, 255, 255, 0.89);
        font-weight: 800;
        box-shadow: 4px 10px 27px rgba(7, 4, 4, 0.332);
        text-decoration: none;
    }
    .mabile-nav-content .button:hover{
        box-shadow: 4px 20px 17px rgba(7, 4, 4, 0.332);
        cursor: pointer;
    }
}
@media(max-width: 500px){
    .login-content input{
        width: 70vw;
    }
}
</style>