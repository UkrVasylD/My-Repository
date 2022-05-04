import { createRouter, createWebHashHistory } from "vue-router";
// 1. Define route components.
// These can be imported from other files
import FirstComponentHome from "@/Pages/FirstComponentHome";
import SecondComponent from "@/Pages/SecondComponent";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: FirstComponentHome, name: "First" },
  {
    path: "/SecondComponent/:id?",
    component: SecondComponent,
    name: "Second",
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
export default router;
