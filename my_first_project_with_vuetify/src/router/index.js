import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutConfectioner from "../views/AboutConfectioner.vue";
import Shopping from "../views/Shopping.vue";

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Shopping",
    name: "Shopping",
    component: Shopping,
  },
  {
    path: "/About%20Confectioner",
    name: "AboutConfectioner",
    component: AboutConfectioner,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
