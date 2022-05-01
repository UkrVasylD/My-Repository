<template>
  <div class="product_cart">
    <div>
      <img
        class="product_cart_imeges"
        :src="require('../../../assets/img/' + product_data.img)"
      />
    </div>
    <div class="product_cart_name">{{ product_data.Name }}</div>
    <div class="product_cart_price">
      Ціна товару {{ product_data.Price }} грн
    </div>
    <div>
      <button class="add_to cart_btn btn" @click="sendDataToParent">
        Додати в кошик
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCart",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
    // imgSrc: {
    //   type: String,
    //   default: null,
    // },
    // productName: {
    //   type: String,
    //   default: "No name",
    // },
    // productPrice: {
    //   type: Number,
    //   default: null,
    // },
    // available: {
    //   type: Number,
    //   default: null,
    // },
  },
  methods: {
    sendDataToParent() {
      // console.log(this.product_data.id);
      this.$emit("sendId", this.product_data.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.product_cart {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 black;
  padding: 16px;
  margin-bottom: 16px;
}

.product_cart_imeges {
  max-width: 150px;
}
</style>
