<template>
  <div class="wraper_container">
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
.wraper_container {
  min-height: 100vh;
  display: grid;
  grid-template: minmax(100px, auto) 1fr minmax(100px, auto) / 1fr;
  background: url("@/assets/bg_repeat.jpg") repeat;
}
</style>
