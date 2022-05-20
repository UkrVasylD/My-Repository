<template>
  <v-app>
    <v-main>
      <HelloWorld />
      <mySlider />
      <vVasyl />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import mySlider from "./components/myComponent/mySlider.vue";
import vVasyl from "./components/myComponent/vVasyl.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    mySlider,
    vVasyl,
  },

  data: () => ({
    //
  }),
};
</script>
