<template>
  <div>
    <div v-for="product in productArr" :key="product.id">
      <product-cart
        :imgSrc="product.imgSrc"
        :productCount="product.productCount"
        :productPrice="product.productPrice"
        :productDiscount="product.productDiscount"
      />
    </div>
  </div>
</template>

<script>
import ProductCart from "./ProductCart";

export default {
  name: "ProductList",

  components: {
    ProductCart,
  },
  data() {
    return {
      id: 1,
      productArr: [
        {
          imgSrc: "",
          productCount: 1,
          productPrice: 100,
          productDiscount: 10,
        },
        {
          id: 2,
          imgSrc: "",
          productCount: 1,
          productPrice: 150,
          productDiscount: 10,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
