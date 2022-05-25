export default {
  state: {
    cartList: [
      {
        id: "132",
        productId: "1",
        count: 1,
      },
      {
        id: "1382",
        productId: "2",
        count: 1,
      },
    ],
  },
  getters: {
    getCartList: (state) => {
      return state.cartList;
    },
  },
  mutations: {
    increment(state, cartItemId) {
      const indexItem = state.cartList.findIndex(
        (item) => item.id === cartItemId
      );
      state.cartList[indexItem].count++;
    },

    decrement(state, cartItemId) {
      const indexItem = state.cartList.findIndex(
        (item) => item.id === cartItemId
      );
      if (state.cartList[indexItem].count > 1) {
        state.cartList[indexItem].count--;
      }
    },

    del(state, cartItemId) {
      state.cartList = state.cartList.filter((item) => item.id !== cartItemId);
    },

    addToCart(state, productId) {
      console.log(productId);
      const indexItem = state.cartList.findIndex(
        (item) => item.productId === productId
      );
      if (indexItem > 0) {
        state.cartList[indexItem].count++;
      } else {
        const cartProduct = {
          id: new Date().getTime(),
          productId: productId,
          count: 1,
        };
        state.cartList.push(cartProduct);
      }
    },
  },
  actions: {
    del({ commit }, cartItemId) {
      commit("del", cartItemId);
    },
    decrement({ commit }, cartItemId) {
      commit("decrement", cartItemId);
    },
    increment({ commit }, cartItemId) {
      commit("increment", cartItemId);
    },
    addToCart({ commit }, productId) {
      commit("addToCart", productId);
    },
  },
};
