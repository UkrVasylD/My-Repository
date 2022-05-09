import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  //Розділ, де описумєо глобальні змінні додатку
  state() {
    return {
      inputText: null,
    };
  },
  //Функції, які здійснюють зчитування значень з стейта і які ми можемо використати у компонентах
  getters: {
    //   getCount: {count} => count
    getInpText: (state) => state.inputText,
  },
  //Розділ, де описуємо функції, які мають право робити зміни у стейті
  mutations: {
    setInputText(state, newText) {
      state.inputText = newText;
    },
  },
  //Розділ, де описуємо функції, які викликаємо у копонентах, якщо хочемо змінити стейт
  actions: {
    updateMyText({ commit }, newText) {
      commit("setInputText", newText);
    },
  },
});
export default store;
