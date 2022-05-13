<template>
  <div>
    <div>
      <button @click="onAddNewUser">Add new user</button>
    </div>
    <div>
      <label>
        Search User Name
        <input type="text" v-model="searchUser" />
      </label>
    </div>
    <div v-if="filteredUsersList.length">
      <user-card
        v-for="user in filteredUsersList"
        :key="user.id"
        :user="user"
        @show-info="onShowInfo(user.id)"
      />
    </div>
    <div v-else>No data</div>
  </div>
</template>

<script>
import UserCard from "./UserCard";
import { mapGetters } from "vuex";
export default {
  name: "UsersList",

  components: {
    UserCard,
  },

  data() {
    return {
      // usersList: [],
      searchUser: null,
    };
  },

  computed: {
    ...mapGetters(["getUsers"]),
    filteredUsersList() {
      if (this.searchUser)
        return this.getUsers.filter((user) =>
          user.secondName.includes(this.searchUser)
        );
      else return this.getUsers;
    },
  },

  methods: {
    onAddNewUser() {
      this.$router.push({ name: "edit" });
    },
    onShowInfo(userId) {
      this.$router.push({ name: "edit", params: { id: userId } });
    },
  },
};
</script>

<style lang="scss" scoped></style>
