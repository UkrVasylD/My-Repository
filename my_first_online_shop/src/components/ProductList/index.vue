<template>
  <div class="product-list-wraper">
    <product-cart
      v-for="product in productArr"
      :key="product.id"
      @sendId="showGoodsIdToConsole"
      :product_data="product"
    />
  </div>
</template>

<script>
import ProductCart from "./ProductCart";

export default {
  name: "ProductList",

  data() {
    return {
      productArr: [
        {
          id: "1",
          img: "4039.jpg",
          Name: "Goods 1",
          Price: 200,
          available: true,
        },
        {
          id: "2",
          img: "Bez_imeni_1.jpg",
          Name: "Goods 2",
          Price: 150,
          available: true,
        },
        {
          id: "3",
          img: "bloki_striotelinie.png",
          Name: "Goods 3",
          Price: 300,
          available: true,
        },
        {
          id: "4",
          img: "kirpich.png",
          Name: "Goods 2",
          Price: 400,
          available: true,
        },
        {
          id: "5",
          img: "stroitelinaia_himia.png",
          Name: "Goods 2",
          Price: 500,
          available: true,
        },
        {
          id: "6",
          img: "stroitelinaia_setka_i_plenka.png",
          Name: "Goods 6",
          Price: 600,
          available: true,
        },
      ],
    };
  },
  components: {
    ProductCart,
  },
  methods: {
    showGoodsIdToConsole(id) {
      console.log(id);
    },
  },
};
</script>

<style lang="css" scoped>
.product-list-wraper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>
