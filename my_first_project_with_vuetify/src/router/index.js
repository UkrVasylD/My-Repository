import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutConfectioner from "../views/AboutConfectioner.vue";
import Pie from "../views/Pie.vue";
import Cart from "../views/Cart.vue";
import EditPage from "../views/EditPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/pie/:id?",
    name: "pie",
    component: Pie,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/editor/:id?",
    name: "editor",
    component: EditPage,
  },
  {
    path: "/about",
    name: "AboutConfectioner",
    component: AboutConfectioner,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
