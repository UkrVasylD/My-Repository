<template>
  <div>
    MiniPie
    <div>
      <main-master-page>
        <template v-slot:kontent>
          <product-list :productList="getPieList" />
        </template>
      </main-master-page>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import mainMasterPage from "@/masterpage/mainMasterPage.vue";
import ProductList from "@/components/ProductList";

export default {
  name: "MiniPie",
  components: {
    mainMasterPage,
    ProductList,
  },

  computed: {
    ...mapGetters(["pie", "getPieList"]),
    name() {
      return this.data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
