import { createStore } from "vuex";
// import { v4 as uuidv4 } from "uuid";

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
  },
  //Розділ, де описуємо функції, які мають право робити зміни у стейті
  mutations: {
    addToCart(state, pizzaId) {
      console.log(pizzaId);
      if (state.cartList.faind((item) => item.id == pizzaId)) {
        console.log(state.cartList.faind((item) => item.id == pizzaId));
      } else {
        console.log(35);
      }

      // const cartPizza = {
      //   id: uuidv4(),
      //   ...userData,
      // };
      // state.userList.push(user);
    },
    updateUser(state, user) {
      const userIndex = state.userList.findIndex((item) => item.id === user.id);
      if (userIndex >= 0)
        state.userList[userIndex] = {
          ...user,
        };
    },
    deleteUser(state, idToDelete) {
      state.userList = state.userList.filter((item) => item.id !== idToDelete);
    },
  },
  //Розділ, де описуємо функції, які викликаємо у копонентах, якщо хочемо змінити стейт
  actions: {
    addToCart({ commit }, pizzaId) {
      commit("addToCart", pizzaId);
    },
    updateUser({ commit }, user) {
      commit("updateUser", user);
    },
    deleteUser({ commit }, idToDelete) {
      commit("deleteUser", idToDelete);
    },
  },
});
export default store;
