import { v4 as uuidv4 } from "uuid";
import cart from "./cart";

export default {
  state: {
    productList: [
      {
        id: "1",
        imgSrc:
          "https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1615293629102-SPPMKW7XFBO2Y78C2N71/01-IMG_0045.JPG?format=1500w",
        name: "Pie 1",
        price: 11,
      },
      {
        id: "2",
        imgSrc:
          "https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1615293629063-6MZC0M70FQSWUGZIFG0W/03-IMG_0166.JPG?format=1000w",
        name: "Pie 2",
        price: 11,
      },
      {
        id: "30",
        imgSrc:
          "https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1615293629781-VZ5HNSCQAEJMKXJUPM22/04-IMG_0041.JPG?format=1500w",
        name: "Pie 3",
        price: 11,
      },
      {
        id: "11",
        imgSrc:
          "https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1615293629102-SPPMKW7XFBO2Y78C2N71/01-IMG_0045.JPG?format=1500w",
        name: "Pie 1",
        price: 11,
      },
      {
        id: "21",
        imgSrc:
          "https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1615293629063-6MZC0M70FQSWUGZIFG0W/03-IMG_0166.JPG?format=1000w",
        name: "Pie 2",
        price: 11,
      },
      {
        id: "31",
        imgSrc:
          "https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1615293629781-VZ5HNSCQAEJMKXJUPM22/04-IMG_0041.JPG?format=1500w",
        name: "Pie 3",
        price: 11,
      },
    ],
  },
  getters: {
    getProductList: (state) => state.productList,
    getProductById: (state) => (sherchPoductId) =>
      state.productList.find((item) => item.id === sherchPoductId),
  },
  mutations: {
    addProduct(state, prodObj) {
      let productItem = {
        id: uuidv4(),
        imgSrc: prodObj.imgSrc,
        name: prodObj.name,
        price: prodObj.price,
        description: prodObj.description,
      };
      state.productList.push(productItem);
    },

    saveProduct(state, prodObj) {
      const indexEditProd = state.productList.findIndex(
        (item) => item.id === prodObj.id
      );
      state.productList[indexEditProd].imgSrc = prodObj.imgSrc;
      state.productList[indexEditProd].name = prodObj.name;
      state.productList[indexEditProd].price = prodObj.price;
      state.productList[indexEditProd].description = prodObj.description;
    },

    delProduct(state, prodidToDel) {
      state.productList = state.productList.filter(
        (item) => item.id !== prodidToDel
      );
    },
  },
  actions: {
    saveProduct({ commit }, prodObj) {
      commit("saveProduct", prodObj);
    },

    addProduct({ commit }, prodObj) {
      commit("addProduct", prodObj);
    },

    delProduct({ commit }, prodidToDel) {
      commit("delProduct", prodidToDel);
    },
  },
};
