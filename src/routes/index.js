import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home/Home.vue";
import Details from "../views/details/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:alpha",
    name: "Details",
    component: Details,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
