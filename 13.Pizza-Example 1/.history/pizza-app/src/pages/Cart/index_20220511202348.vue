<template>
  <div>
    <main-master-page>
      <h1>Cart</h1>
      <div><router-link to="/">Home</router-link></div>
      <cart-list />
    </main-master-page>
  </div>
</template>

<script>
import CartList from "@/components/CartList";
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
export default {
  name: "Cart",

  components: {
    MainMasterPage,
    CartList,
  },
};
</script>

<style lang="scss" scoped>
</style>