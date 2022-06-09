<template>
  <div class="wraper_container">
    <div class="header">
      <my-header />
    </div>
    <popUp v-if="getPopUpVisible" />
    <div class="kontent">
      <slot name="kontent"> </slot>
    </div>
    <button></button>
    <div class="footer">
      <my-footer />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import myFooter from "@/components/myFooter.vue";
import myHeader from "@/components/myHeader.vue";
import popUp from "@/components/popUp.vue";

export default {
  name: "MainMasterPage",

  components: {
    myFooter,
    myHeader,
    popUp,
  },

  computed: {
    ...mapGetters("popUp", ["getPopUpVisible"]),
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
