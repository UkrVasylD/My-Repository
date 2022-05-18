import { createStore } from "vuex";
import users from "./users";
import product from "./product";
import dogs from "./dogs";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    product,
    dogs,
  },
});
