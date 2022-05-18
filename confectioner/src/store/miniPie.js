export default {
  state: {
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
  },
  getters: {
    getPizzaList: (state) => state.pizzaList,
  },
  mutations: {
    addToCart(state, pizzaId) {
      console.log(pizzaId);
      if (state.cartList.faind((item) => item.id == pizzaId)) {
        console.log(state.cartList.faind((item) => item.id == pizzaId));
      } else {
        console.log(35);
      }
    },
  },
  actions: {
    addToCart({ commit }, pizzaId) {
      commit("addToCart", pizzaId);
    },
  },
};
