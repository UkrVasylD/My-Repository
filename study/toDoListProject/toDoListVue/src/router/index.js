import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import Home from "@/components/Home.vue";
import ToDoList from "@/components/ToDoList.vue";
import ToDoListEdit from "@/components/ToDoListEdit.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/toDoList",
    name: "toDoList",
    component: ToDoList,
  },
  {
    path: "//toDoList/:id",
    name: "/ToDoListEdit",
    component: ToDoListEdit,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
