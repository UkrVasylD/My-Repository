<template>
  <main-master-page>
    <template v-slot:header="{ pOwner }">
      <h1>Welcome - {{ pOwner.secondName }}</h1>
      <p>
        You are the best
        <button>Confirm!</button>
      </p>
    </template>
    Hello here!
  </main-master-page>
</template>

<script>
import MainMasterPage from "./masterpages/MainMasterPage.vue";

export default {
  name: "App",
  components: {
    MainMasterPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
