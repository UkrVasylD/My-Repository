<template>
  <div>Home</div>
  <div>
    <product-list />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
export default {
  name: "v-Home",

  components: {
    ProductList,
  },
  data() {
    return {};
  },
  computed: {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
