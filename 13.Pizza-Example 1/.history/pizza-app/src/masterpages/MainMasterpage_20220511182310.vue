<template>
  <div>
    <div>
      <slot name="header"> Моя піцерія </slot>
    </div>
    <div></div>
    <div>
      <slot name="footer"> Моя піцерія </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMasterPage",
};
</script>

<style lang="scss" scoped>
</style>