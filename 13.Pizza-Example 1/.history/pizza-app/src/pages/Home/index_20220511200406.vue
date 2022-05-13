<template>
  <div>
    <main-master-page>
      <h1>Home</h1>
      <div>
        <span @click="goToCart">Cart</span>
        <span></span>
      </div>
      <pizza-list />
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import PizzaList from "@/components/PizzaList";
export default {
  name: "Home",

  components: {
    MainMasterPage,
    PizzaList,
  },

  methods: {
    goToCart() {
      this.$router.push({ name: "cart" });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>