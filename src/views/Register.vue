<template>
  <div class="login">
        <div>
            <div class="login-content">
                <h1>Create a account</h1>
                <div class="inputs">
                    <input type="text" placeholder="Enter your first name" v-model="firstName"> <br>
                    <input type="text" placeholder="Enter your last name" v-model="lastName"> <br>
                    <input type="text" placeholder="Enter your full name" v-model="username"> <br>
                    <input type="text" placeholder="Enter your email" v-model="email"> <br>
                    <input type="password" placeholder="Enter your password" v-model="password">
                </div>
                <div v-show="error" class="error">{{ this.errorMsg }}</div>
                <button @click.prevent="register">Register</button>
            </div>
        </div>
        <div class="background">
            <div class="signup">
                <h3>Already have an account ?</h3>
                <router-link class="button" :to="{ name: 'Login'}">LOGIN</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../firebase/firebaseInit'
export default {
    name: "Register",
    data() {
        return {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        error: null,
        errorMsg: "",
        };
    },
    methods: {
        async register() {
            if (
                this.email !== "" &&
                this.password !== "" &&
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.username !== ""
            ) {
                this.error = false;
                this.errorMsg = "";
                const firebaseAuth = await firebase.auth();
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                const result = await createUser;
                const dataBase = db.collection("users").doc(result.user.uid);
                await dataBase.set({
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.username,
                email: this.email,
                });
                this.$router.push({ name: "Home" });
                return;
            }
            this.error = true;
            this.errorMsg = "Please fill out all the fields!";
            return;
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
    margin-top: -10vh;
    /* margin-left: 20vw; */
    margin-right: -5vw;
    height: 120vh;
    width: 60vw;
    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #414141 84%);
    transform: rotate(5deg);
}
.background .signup{
    transform: rotate(-5deg);
    margin-top: 45%;
    /* margin-left: 10%; */
    font-size: 2rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.89);
}
.background .signup .button{
    margin-top: 30px;
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
.login-content{
    padding: 10vh;
    padding-top: 20vh;
    display: flex;
    height: 60vh;
    margin-left: 60px;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.2rem;
    text-align: center;
}
.login-content h1, .login-content button{
    margin-top: 0 20px;
    /* padding: 20px; */
}
.login-content .inputs{
    margin: 20px 0;
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
    margin: 10px 80px;
    padding: 5px 10px;
    border-radius: 15px;
    border: none;
    background: #303030;
    cursor: pointer;
    text-decoration: none;
font-size: 1.2rem;
color: #fff;
}
</style>