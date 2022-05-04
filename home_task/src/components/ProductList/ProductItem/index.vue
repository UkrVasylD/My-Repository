<template>
  <div>
    <div>
      {{ product.title }}
    </div>
    <div>
      {{ product.price }}
    </div>
    <div>
      <button @click="$emit('edit')">Edit</button>
    </div>
    <div>
      <button @click="$emit('delete')">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",

  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
