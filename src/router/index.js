import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Profile from '../views/Profile.vue';
import AddResource from '../views/AddResource.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
        title: "Home"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
        title: "Login"
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
        title: "Register"
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
        title: "Profile"
    }
  },
  {
    path: "/add-resource",
    name: "AddResource",
    component: AddResource,
    meta: {
        title: "AddResource"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
