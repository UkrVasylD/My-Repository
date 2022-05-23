<template>
  <div>
    <!-- Shopping -->
    <main-master-page>
      <template v-slot:kontent>
        <product-list :productList="getPieList"
      /></template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterPage/MainMasterPage.vue";
import ProductList from "@/components/ProductList";
import { mapGetters } from "vuex";

export default {
  name: "Shopping",

  components: {
    MainMasterPage,
    ProductList,
  },

  computed: {
    ...mapGetters(["productToRender", "getPieList"]),
  },
};
</script>

<style lang="scss" scoped></style>
