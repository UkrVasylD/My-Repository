import { v4 as uuidv4 } from "uuid";
import cart from "./cart";

export default {
  state: {
    pieList: [
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
        id: "3",
        imgSrc:
          "https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1615293629781-VZ5HNSCQAEJMKXJUPM22/04-IMG_0041.JPG?format=1500w",
        name: "Pie 3",
        price: 11,
      },
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
        id: "3",
        imgSrc:
          "https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1615293629781-VZ5HNSCQAEJMKXJUPM22/04-IMG_0041.JPG?format=1500w",
        name: "Pie 3",
        price: 11,
      },
    ],
  },
  getters: {
    getPieList: (state) => state.pieList,
  },
  mutations: {
    addToCart(state, productId) {
      // console.log(cart.state.cartList);
      let productItem = cart.state.cartList.find(
        (item) => item.productId === productId
      );

      if (productItem) {
        productItem.count++;
      } else {
        productItem = {
          id: uuidv4(),
          productId: productId,
          count: 1,
        };
        state.cartList.push(productItem);
      }
    },
  },
  actions: {
    addToCart({ commit }, productId) {
      commit("addToCart", productId);
    },
  },
};
