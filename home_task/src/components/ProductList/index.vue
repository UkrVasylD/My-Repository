<template>
  <div>
    <div v-if="isDataEmpty">
      The product list is not define. Please load data
      <button>Load</button>
    </div>
    <div v-else>
      <product-item
        v-for="product in productList"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductList/ProductItem";
export default {
  name: "ProductList",

  components: {
    ProductItem,
  },

  data() {
    return {
      productList: [],
    };
  },
  computed: {
    isDataEmpty() {
      return this.productList.length === 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
