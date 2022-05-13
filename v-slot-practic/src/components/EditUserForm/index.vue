<template>
  <div>
    <div>
      <img :src="photoSrc" alt="" />
    </div>
    <div>
      <label>
        Name
        <input type="text" v-model="user.name" />
      </label>
    </div>
    <div>
      <label>
        Second name
        <input type="text" v-model="user.secondName" />
      </label>
    </div>
    <div>
      <label>
        Address
        <input type="text" v-model="user.address" />
      </label>
    </div>
    <div>
      <label>
        Email
        <input type="email" v-model="user.email" />
      </label>
    </div>
    <div>
      <button @click="onSave">{{ saveBtnTitle }}</button>
      <button @click="onDelete">{{ delBtnTitle }}</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "EditUserForm",

  data() {
    return {
      user: {},
    };
  },

  computed: {
    ...mapGetters(["getUsers"]),
    photoSrc() {
      return this.user.photoSrc ?? require("@/assets/images/user.png");
    },
    currentUserId() {
      return this.$route.params.id;
    },
    saveBtnTitle() {
      return this.currentUserId ? "Save" : "Add";
    },
    delBtnTitle() {
      return this.currentUserId ? "Delete" : "Cancel";
    },
  },

  methods: {
    ...mapActions(["addUser", "updateUser", "deleteUser"]),
    onSave() {
      if (this.currentUserId) this.updateUser(this.user);
      else this.addUser(this.user);
      this.$router.push({ name: "home" });
    },
    onDelete() {
      if (this.currentUserId) this.deleteUser(this.currentUserId);

      this.$router.push({ name: "home" });
    },
  },

  mounted() {
    if (this.$route.params.id) {
      this.user = this.getUsers.find(
        (item) => item.id === this.$route.params.id
      );
    }
  },
};
</script>

<style lang="css" scoped></style>
