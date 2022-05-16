import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

// Create a new store instance.
const store = createStore({
  //Розділ, де описумєо глобальні змінні додатку
  state() {
    return {
      pizzaList: [
        {
          id: "1",
          imgSrc:
            "https://images.prom.ua/3345864188_w640_h640_modulnaya-kartina-art-wood.jpg",
          name: "Pizza1",
          price: 11,
        },
        {
          id: "2",
          imgSrc:
            "https://images.prom.ua/3345864188_w640_h640_modulnaya-kartina-art-wood.jpg",
          name: "Pizza2",
          price: 11,
        },
        {
          id: "3",
          imgSrc:
            "https://images.prom.ua/3345864188_w640_h640_modulnaya-kartina-art-wood.jpg",
          name: "Pizza3",
          price: 11,
        },
      ],
      cartList: [
        {
          id: "132",
          pizzaId: "1",
          count: 1,
        },
        {
          id: "1382",
          pizzaId: "2",
          count: 1,
        },
      ],
    };
  },
  //Функції, які здійснюють зчитування значень з стейта і які ми можемо використати у компонентах
  getters: {
    getPizzaList: (state) => state.pizzaList,
    getcartList: (state) => state.cartList,
    getPizzaById: (state) => (pizzaId) =>
      state.pizzaList.find((item) => item.id === pizzaId),
    getTotalPrice: (state) =>
      state.cartList.reduce((prevSum, cartItem) => {
        const pizza = state.pizzaList.find(
          (item) => item.id === cartItem.pizzaId
        );
        return prevSum + cartItem.count * pizza.price;
      }, 0),
  },
  //Розділ, де описуємо функції, які мають право робити зміни у стейті
  mutations: {
    addToCart(state, pizzaId) {
      let pizzaItem = state.cartList.find((item) => item.pizzaId === pizzaId);

      if (pizzaItem) {
        pizzaItem.count++;
      } else {
        pizzaItem = {
          id: uuidv4(),
          pizzaId: pizzaId,
          count: 1,
        };
        state.cartList.push(pizzaItem);
      }
    },
    decrement(state, cartPizzaId) {
      const indexPizza = state.cartList.findIndex(
        (item) => item.id === cartPizzaId
      );
      state.cartList[indexPizza].count--;
    },
    increment(state, cartPizzaId) {
      const indexPizza = state.cartList.findIndex(
        (item) => item.id === cartPizzaId
      );
      state.cartList[indexPizza].count++;
    },
    del(state, cartPizzaId) {
      state.cartList = state.cartList.filter((item) => item.id !== cartPizzaId);
    },
  },
  //Розділ, де описуємо функції, які викликаємо у копонентах, якщо хочемо змінити стейт
  actions: {
    addToCart({ commit }, pizzaId) {
      commit("addToCart", pizzaId);
    },
    increment({ commit }, cartPizzaId) {
      commit("increment", cartPizzaId);
    },
    decrement({ commit }, cartPizzaId) {
      commit("decrement", cartPizzaId);
    },
    del({ commit }, cartPizzaId) {
      commit("del", cartPizzaId);
    },
  },
});
export default store;
