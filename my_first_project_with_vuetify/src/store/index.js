import { createStore } from "vuex";
import productToRender from "./productToRender";
import cart from "./cart";
import popUp from "./popUp";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    productToRender,
    cart,
    popUp,
  },
});
