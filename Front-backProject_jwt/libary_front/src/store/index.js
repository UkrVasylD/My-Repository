import { createStore } from "vuex";

import book from "./book";
import author from "./author";

const store = createStore({
  modules: {
    book,
    author,
  },
});

export default store;
