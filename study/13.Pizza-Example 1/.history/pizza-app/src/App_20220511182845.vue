<template>
  <main-master-page> Hello here! </main-master-page>
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
