import { createRouter, createWebHashHistory } from "vue-router";
// 1. Define route components.
// These can be imported from other files
import V_Home from "@/Pages/V_Home";
import V_Edit from "@/Pages/V_Edit";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: V_Home, name: "Home" },
  {
    path: "/edit/:id?",
    component: V_Edit,
    name: "Edit",
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
