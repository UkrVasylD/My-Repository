<template>
  <v-app>
    <v-main>
      <HelloWorld />
      <mySlider />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import mySlider from "./components/myComponent/mySlider.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    mySlider,
  },

  data: () => ({
    //
  }),
};
</script>
