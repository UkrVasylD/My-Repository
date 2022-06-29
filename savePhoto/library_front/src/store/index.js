import { createStore } from "vuex";
import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

const store = createStore({
  state: {
    books: [],
    authors: [],

    loading: false, //індикатор завантаження
    error: false, //індикатор помилки
  },
  getters: {
    books: (state) => state.books,
    authors: (state) => state.authors,

    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    setAuthors(state, authors) {
      state.authors = authors;
    },
    addBookToList(state, book) {
      state.books.push(book);
    },
    deleteBookFromList(state, bookId) {
      state.books = state.books.filter((book) => book._id !== bookId);
    },

    setLoading(state, data) {
      state.loading = data;
    },
    setError(state, data) {
      state.error = data;
    },
  },
  actions: {
    loadBooks({ commit }) {
      commit("setLoading", true);
      commit("setError", null);
      //Запит на сервер
      axios
        .get(apiEndpoints.books.readList) //Асинхронна дія
        .then(
          //Якщо добре
          (res) => res.data
        )
        .then((resData) => {
          if (resData.success) commit("setBooks", resData.data);
          else throw new Error("Fatch failed!");
        })
        .catch((err) => {
          //Якщо погано
          commit("setError", err);
        })
        .finally(
          //Завжди
          () => commit("setLoading", false)
        );
    },
    loadAuthor({ commit }) {
      commit("setLoading", true);
      commit("setError", null);
      //Запит на сервер
      axios
        .get(apiEndpoints.authors.readList) //Асинхронна дія
        .then(
          //Якщо добре
          (res) => res.data
        )
        .then((resData) => {
          if (resData.success) commit("setAuthors", resData.data);
          else throw new Error("Fatch failed!");
        })
        .catch((err) => {
          //Якщо погано
          commit("setError", err);
        })
        .finally(
          //Завжди
          () => commit("setLoading", false)
        );
    },

    addBook({ commit }, book) {
      commit("setLoading", true);
      commit("setError", null);

      return new Promise((resolve, reject) => {
        axios
          .post(apiEndpoints.books.add, book)
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(true);
            else throw new Error("Fatch failed!");
          })
          .catch((err) => {
            //Якщо погано
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },
    addAuthor({ commit }, author) {
      commit("setLoading", true);
      commit("setError", null);

      return new Promise((resolve, reject) => {
        axios
          .post(apiEndpoints.authors.add, author)
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(true);
            else throw new Error("Fatch failed!");
          })
          .catch((err) => {
            //Якщо погано
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },

    updateBook({ commit }, book) {
      commit("setLoading", true);
      commit("setError", null);

      return new Promise((resolve, reject) => {
        axios
          .put(apiEndpoints.books.update, book)
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(true);
            else throw new Error("Fatch failed!");
          })
          .catch((err) => {
            //Якщо погано
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },

    getBookById({ commit }, id) {
      commit("setLoading", true);
      commit("setError", null);
      return new Promise((resolve, reject) => {
        axios
          .get(apiEndpoints.books.getBookById(id))
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(resData.data);
            else throw new Error("Fatch failed!");
          })
          .catch((err) => {
            //Якщо погано
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },
    deleteBook({ commit }, id) {
      commit("setLoading", true);
      commit("setError", null);
      new Promise((resolve, reject) => {
        axios
          .delete(apiEndpoints.books.delete, { data: { id } })
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            console.log("-resData");
            console.log(resData);
            if (resData.success) {
              commit("deleteBookFromList", id);
              resolve(true);
            } else throw new Error("Delete failed!");
          })
          .catch((err) => {
            //Якщо погано
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },
  },
});

export default store;
