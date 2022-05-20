<template>
  <div>
    Cart
    <div>
      <main-master-page>
        <template v-slot:kontent>
          <cart-list />
        </template>
      </main-master-page>
    </div>
  </div>
</template>

<script>
import mainMasterPage from "@/masterpage/mainMasterPage.vue";
import CartList from "@/components/CartList";

export default {
  name: "Cart",

  components: {
    mainMasterPage,
    CartList,
  },
};
</script>

<style lang="scss" scoped></style>
