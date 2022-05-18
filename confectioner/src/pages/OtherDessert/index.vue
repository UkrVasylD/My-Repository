<template>
  <div>
    MiniPie
    <div>
      <main-master-page>
        <template v-slot:kontent>
          <product-list> gfhdhgd</product-list>
        </template>
      </main-master-page>
    </div>
  </div>
</template>

<script>
import mainMasterPage from "@/masterpage/mainMasterPage.vue";
import ProductList from "@/components/ProductList";

export default {
  name: "MiniPie",
  components: {
    mainMasterPage,
    ProductList,
  },
};
</script>

<style lang="scss" scoped></style>
