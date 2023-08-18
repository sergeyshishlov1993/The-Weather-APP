import { createRouter, createWebHistory } from "vue-router";
import TheFirstPage from "../views/TheFirstPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: TheFirstPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
