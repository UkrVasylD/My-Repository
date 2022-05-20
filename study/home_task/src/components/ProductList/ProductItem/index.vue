<template>
  <div class="product-item">
    <div>{{ productObj.title }}</div>
    <div>{{ productObj.price }}</div>
    <div><button @click="$emit('edit')">Edit</button></div>
    <div><button @click="$emit('delete')">Delete</button></div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",

  props: {
    productObj: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="css" scoped>
.product-item {
  display: flex;
}
</style>
