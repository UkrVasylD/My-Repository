<template>
  <div>
    <div>About</div>
    <main-master-page>
      <template v-slot:header>
        This my project <button @click="goToHome">Home</button>
      </template>
      <template v-slot:kontent1>
        <p>Autor:</p>
        <ul>
          <li>I</li>
          <li>my godfather</li>
          <li>my neighbor</li>
        </ul>
      </template>
      <template v-slot:kontent2>
        Main idea. jointly explore the meaning of life</template
      >
    </main-master-page>
  </div>
</template>

<script>
import mainMasterPage from "@/masterpage/mainMasterPage.vue";

export default {
  name: "About",

  components: {
    mainMasterPage,
  },

  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
