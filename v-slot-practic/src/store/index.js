import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

// Create a new store instance.
const store = createStore({
  //Розділ, де описумєо глобальні змінні додатку
  state() {
    return {
      userList: [],
    };
  },
  //Функції, які здійснюють зчитування значень з стейта і які ми можемо використати у компонентах
  getters: {
    //   getCount: {count} => count
    getUsers: (state) => state.userList,
    // getUserById: (state, id) => state.userList.find((item) => item.id === id),
  },
  //Розділ, де описуємо функції, які мають право робити зміни у стейті
  mutations: {
    addUser(state, userData) {
      const user = {
        id: uuidv4(),
        ...userData,
      };
      state.userList.push(user);
    },
    updateUser(state, user) {
      const userIndex = state.userList.findIndex((item) => item.id === user.id);
      if (userIndex >= 0)
        state.userList[userIndex] = {
          ...user,
        };
    },
    deleteUser(state, idToDelete) {
      state.userList = state.userList.filter((item) => item.id !== idToDelete);
    },
  },
  //Розділ, де описуємо функції, які викликаємо у копонентах, якщо хочемо змінити стейт
  actions: {
    addUser({ commit }, userData) {
      commit("addUser", userData);
    },
    updateUser({ commit }, user) {
      commit("updateUser", user);
    },
    deleteUser({ commit }, idToDelete) {
      commit("deleteUser", idToDelete);
    },
  },
});
export default store;
