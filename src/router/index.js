import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from '../views/Register'
import Login from '../views/Login'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      isHideFooter: true
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      isHideFooter: true
    },
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
