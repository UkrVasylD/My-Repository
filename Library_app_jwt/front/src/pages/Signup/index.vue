<template>
  <div>
    <h2>Sign up</h2>
    <div>
      Name :
      <input type="text" v-model="user.name" placeholder="Name" />
    </div>
    <div>
      email :
      <input type="text" v-model="user.email" placeholder="Email" />
    </div>
    <div class="form-group">
      Password :
      <input type="password" v-model="user.password" placeholder="Password" />
    </div>
    <div v-if="user.message">{{ user.message }}</div>
    <div>
      <button @click="submit">Sign up</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Signup",
  data() {
    return {
      user: {},
    };
  },

  methods: {
    ...mapActions("auth", ["signup", "logout"]),

    async submit() {
      try {
        const result = await this.signup(this.user);

        if (result === true) {
          this.message = "";
          this.$router.push({
            path: "/login",
            query: { signedup: "true" },
          });
        } else {
          this.message = result; //'SignUp error!';
        }
      } catch (err) {
        this.message = err.message;
      }
    },
  },

  created() {
    this.logout();
  },
};
</script>
