<template>
  <div>
    <div class="imeges">
      <img src="imgSrc" />
    </div>
    <div>
      Ціна товару {{ productPrice }} грн Наявність товару {{ productCount }} шт
    </div>
    <div class="discout">{{ productDiscount }}</div>
    <div>
      <button>Додати в кошик</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCart",
  props: {
    imgSrc: {
      type: String,
      default: null,
    },
    productCount: {
      type: Number,
      default: null,
    },
    productPrice: {
      type: Number,
      default: null,
    },
    productDiscount: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
