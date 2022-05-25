<template>
  <div class="container">
    <div>
      <my-header />
    </div>

    <slot name="kontent"> </slot>

    <div>
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
  max-width: 900px;
  margin: 0 auto;
}
</style>
