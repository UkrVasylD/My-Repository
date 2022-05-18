import { createStore } from "vuex";

import miniPie from "./miniPie.js";
import pie from "./pie.js";
import cart from "./cart";

// import { v4 as uuidv4 } from "uuid";

// Create a new store instance.
const store = createStore({
  //Розділ, де описумєо глобальні змінні додатку
  state() {
    return {};
  },
  //Функції, які здійснюють зчитування значень з стейта і які ми можемо використати у компонентах
  getters: {},
  //Розділ, де описуємо функції, які мають право робити зміни у стейті
  mutations: {},
  //Розділ, де описуємо функції, які викликаємо у копонентах, якщо хочемо змінити стейт
  actions: {},
  modules: {
    miniPie,
    pie,
    cart,
  },
});
export default store;
