<template>
  <div>
    <main-master-page>
      <h1>Cart</h1>
      <div><router-link to="/cart">Go to Edit</router-link></div>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
export default {
  name: "Cart",

  components: {
    MainMasterPage,
  },
};
</script>

<style lang="scss" scoped>
</style>