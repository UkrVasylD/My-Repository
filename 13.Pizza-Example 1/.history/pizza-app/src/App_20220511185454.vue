<template>
  <main-master-page :owner="owner">
    <template v-slot:header>
      <h1>Welcome</h1>
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

  data() {
    return {
owner:{
  name:'Ivan',
  secondName:'Grigor',
  age:34
}      
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
