import axios from "axios";
import apiRoutes from "@/constants/apiRoutes.js";
export default {
  namespaced: true,
  state: () => ({
    dogsList: [],
    loading: false,
    error: null,
  }),
  mutations: {
    addDog(state, dog) {
      state.dogsList.push(dog);
    },
    setError(state, error) {
      state.error = error;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    loadDog({ commit }) {
      commit("setError", null);
      commit("setLoading", true);
      //get dog from server
      axios
        .get(apiRoutes.dogs.loadDog)
        .then((res) => res.data)
        .then(function (resObj) {
          // handle success
          commit("addDog", {
            id: new Date().getTime(),
            src: resObj.message,
          });
        })
        .catch(function (error) {
          // handle error
          commit("setError", error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    },
  },
  getters: {
    getDogsList: (state) => state.dogsList,
    getError: (state) => state.error,
    isLoading: (state) => state.loading,
  },
};
