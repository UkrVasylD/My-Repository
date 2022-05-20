export default {
  namespaced: true,
  state: () => ({
    usersList: [
      {
        id: 1,
        name: "User1",
      },
      {
        id: 2,
        name: "User2",
      },
      {
        id: 3,
        name: "User3",
      },
    ],
  }),
  mutations: {
    // increment(state) {
    //   // `state` is the local module state
    //   state.count++;
    // },
  },
  getters: {
    getUsersList: (state) => state.usersList,
  },
};
