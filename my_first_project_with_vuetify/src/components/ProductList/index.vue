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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-around;
  grid-auto-rows: 1fr;
  column-gap: 20px;
  row-gap: 50px;
}
</style>
