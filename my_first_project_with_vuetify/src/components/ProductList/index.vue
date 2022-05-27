<template>
  <div class="ProductList-wraper">
    <product-item
      v-for="product in getProductList"
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

  computed: {
    ...mapGetters("productToRender", ["getProductList"]),
  },
};
</script>

<style lang="scss" scoped>
.ProductList-wraper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
