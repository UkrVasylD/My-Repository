<template>
  <div>
    <div>
      <button @click="onLoad">Load</button>
    </div>
    <div v-for="product in productList" :key="product.id">
      <product-item
        :productObj="product"
        @edit="onShowEditPage(product.id)"
        @delete="onDelete(product.id)"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";
import store from "@/store";

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

  methods: {
    onLoad() {
      this.productList = store.readProducts();
    },
    onShowEditPage(idToEdit) {
      this.$router.push({ name: "Edit", params: { id: idToEdit } });
    },
    onDelete(idToDelete) {
      store.deleteProduct(idToDelete);
      this.onLoad();
    },
  },

  mounted() {
    this.onLoad();
  },
};
</script>

<style lang="css" scoped></style>
