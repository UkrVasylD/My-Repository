<template>
  <div class="container">
    <div class="header">
      <my-header />
    </div>
    <div class="kontent">
      <slot name="kontent"> </slot>
    </div>

    <div class="footer">
      <my-footer />
    </div>
  </div>
</template>

<script>
import myFooter from "@/components/myFooter.vue";
import myHeader from "@/components/myHeader.vue";

export default {
  name: "MainMasterPage",

  components: {
    myFooter,
    myHeader,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: 1fh 8fr 1fr;
  // max-width: 900px;
  // margin: 0 auto;
}
</style>
