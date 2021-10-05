import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Profile from '../views/Profile.vue';
import AddResource from '../views/AddResource.vue'
import Resource from '../views/Resources.vue'
import EditResource from '../views/EditResource.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
        title: "Home",
        requiresAuth:false
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
        title: "Login",
        requiresAuth:false
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
        title: "Register",
        requiresAuth: false
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
        title: "Profile",
        requiresAuth: true
    }
  },
  {
    path: "/add-resource",
    name: "AddResource",
    component: AddResource,
    meta: {
        title: "AddResource",
        requiresAuth: true
    }
  },
  {
    path: "/resources",
    name: "Resource",
    component: Resource,
    meta: {
        title: "Resource",
        requiresAuth: true
    }
  },
  {
    path: "/edit-resource/:resourceid",
    name: "EditResource",
    component: EditResource,
    meta: {
        title: "EditResource",
        requiresAuth: true
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach(async (to, from, next) => {
    let user = firebase.auth().currentUser;
    if( to.matched.some((res) => res.meta.requiresAuth)) {
        if(user) {
            return next();
        }
        return next({ name: 'Login'});
    }
    return next();
})

export default router;
