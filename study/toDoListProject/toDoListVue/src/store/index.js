import { createStore } from "vuex";

export default createStore({
  state: {
    toDoList: [],

    loading: false, //індикатор завантаження
    error: false, //індикатор помилки
  },
  getters: {
    toDoList: (state) => state.toDoList,

    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },
  mutations: {
    setToDoList(state, toDoList) {
      state.toDoList = toDoList;
    },

    addBookToList(state, task) {
      state.toDoList.push(task);
    },
  },

  actions: {
    loadToDoList({ commit }) {
      commit("setLoading", true);
      commit("setError", null);
      //Запит на сервер
      axios
        .get(apiEndpoints.toDoList.readList) //Асинхронна дія
        .then(
          //Якщо добре
          (res) => res.data
        )
        .then((resData) => {
          if (resData.success) commit("setToDoList", resData.data);
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

    addTask({ commit }, task) {
      commit("setLoading", true);
      commit("setError", null);

      const formData = new FormData();
      for (const key in task) {
        formData.append(key, task[key]);
      }
      return new Promise((resolve, reject) => {
        axios
          .post(apiEndpoints.toDoList.add, formData)
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
  },
  modules: {},
});
