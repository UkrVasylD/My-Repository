<template>
  <div>
    HOME

    <product-list />
  </div>
</template>

<script>
import ProductList from "../../components/ProductList";

export default {
  name: "FirstComponentHome",
  components: {
    ProductList,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
