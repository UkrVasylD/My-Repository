<template>
  <div>
    <h2>Login</h2>
    <div>Please log in</div>
    <div>
      email :
      <input type="text" v-model="user.email" placeholder="Email" />
    </div>
    <div class="form-group">
      password :
      <input type="password" v-model="user.password" placeholder="Password" />
    </div>
    <div class="form-group error" v-if="user.message">{{ message }}</div>
    <div class="form-group">
      <button class="btn btn-primary" @click="submit">Login</button>
      <router-link to="/signup" class="btn btn-link">Sign up</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      user: {},
    };
  },

  methods: {
    ...mapActions("auth", ["login", "logout"]),

    async submit() {
      try {
        const result = await this.login(this.user);

        if (result === true) {
          this.message = "";

          this.$router.push({ path: "/" });
        } else {
          this.message = "Login error!";
        }
      } catch (err) {
        this.message = err.response.data.error;
      }
    },
  },

  created() {
    this.logout();
  },
};
</script>
