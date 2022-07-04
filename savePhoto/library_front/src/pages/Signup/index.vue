<template>
  <div>
    <h2>Sign up</h2>
    <div>
      Nick :
      <input type="text" v-model="user.nick" placeholder="Nick" />
    </div>
    <div>
      email :
      <input type="text" v-model="user.email" placeholder="Email" />
    </div>
    <div class="form-group">
      Password :
      <input type="password" v-model="user.password" placeholder="Password" />
    </div>
    <div v-if="user.message">{{ message }}</div>
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
        console.log(this.user);
        const user = {
          nick: this.nick,
          email: this.email,
          password: this.password,
        };
        const result = await this.signup(user);
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

<style lang="scss" scoped></style>
