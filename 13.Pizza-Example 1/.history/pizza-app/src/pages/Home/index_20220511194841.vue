<template>
  <div>
    <main-master-page>
      <h1>Home</h1>
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
};
</script>

<style lang="scss" scoped>
</style>