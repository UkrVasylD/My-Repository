import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  //Розділ, де описумєо глобальні змінні додатку
  state() {
    return {
      count: 0,
      pizzaList: [
        {
          id: "1",
          imgSrc:
            "http://pizzawood.com.ua/image/cache/catalog/5_element-200x200.jpg",
          title: "Pizza 1",
          price: "11",
        },
        {
          id: "2",
          imgSrc:
            "http://pizzawood.com.ua/image/cache/catalog/al_capone-200x200.jpg",
          title: "Pizza 2",
          price: "22",
        },
        {
          id: "3",
          imgSrc:
            "http://pizzawood.com.ua/image/cache/catalog/aquaman-200x200.jpg",
          title: "Pizza 3",
          price: "33",
        },
        {
          id: "4",
          imgSrc: "",
          title: "Pizza 4",
          price: "44",
        },
      ],
    };
  },
  //Функції, які здійснюють зчитування значень з стейта і які ми можемо використати у компонентах
  getters: {
    //   getCount: {count} => count
    getCount: (state) => state.count,
    getMessage: (state) => state.message,
    getMyText: (state) => state.input_message,
  },
  //Розділ, де описуємо функції, які мають право робити зміни у стейті
  mutations: {
    increment(state, val) {
      state.count += val;
    },
    setMessage(state, newMessage) {
      state.message = newMessage;
    },
    setMyText(state, newText) {
      state.input_message = newText;
    },
  },
  //Розділ, де описуємо функції, які викликаємо у копонентах, якщо хочемо змінити стейт
  actions: {
    updateValue({ commit }, payload) {
      commit("increment", payload);
    },
    updateMessage({ commit }, newMsg) {
      commit("setMessage", newMsg);
    },
    updateMyText({ commit, dispatch }, newText) {
      commit("setMyText", newText);
      dispatch("updateValue", 5);
    },
  },
});
export default store;
