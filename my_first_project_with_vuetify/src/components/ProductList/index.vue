<template>
  <div class="PizaaList-wraper">
    <product-item
      v-for="product in productList"
      :key="product.id"
      :productItem="product"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductItem from "@/components/ProductList/ProductItem.vue";

export default {
  name: "ProductList",
  components: {
    ProductItem,
  },

  props: {
    productList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters(["getPizzaList"]),
    name() {
      return this.data;
    },
  },
};
</script>

<style lang="css" scoped>
.PizaaList-wraper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
