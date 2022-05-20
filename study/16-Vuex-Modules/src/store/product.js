export default {
  namespaced: true,
  state: () => ({
    productList: [
      {
        id: 1,
        title: "Title1",
        price: 11,
      },
      {
        id: 2,
        title: "Title2",
        price: 22,
      },
      {
        id: 3,
        title: "Title3",
        price: 3,
      },
    ],
  }),
  mutations: {
    delProd(state, id) {
      state.productList = state.productList.filter((prod) => prod.id !== id);
    },
  },
  actions: {
    deleteProduct({ commit }, id) {
      commit("delProd", id);
    },
  },
  getters: {
    getProductList: (state) => state.productList,
  },
};
