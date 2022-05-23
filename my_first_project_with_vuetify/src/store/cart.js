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
    value: (state) => {
      return state.value;
    },
  },
  mutations: {
    updateValue(state, payload) {
      state.value = payload;
    },
  },
  actions: {
    updateValue({ commit }, payload) {
      commit("updateValue", payload);
    },
  },
};
