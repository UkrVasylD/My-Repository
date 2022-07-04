import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/Home";
import Books from "@/pages/Books";
import BookEdit from "@/pages/BookEdit";
import AuthorEdit from "@/pages/AuthorEdit";
import Authors from "@/pages/Authors";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/books", component: Books, name: "books" },
  { path: "/book/:id?", component: BookEdit, name: "bookEdit" },

  { path: "/authors", component: Authors, name: "authors" },
  { path: "/author/:id?", component: AuthorEdit, name: "authorEdit" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
