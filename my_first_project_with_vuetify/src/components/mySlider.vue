<template>
  <!-- <v-carousel v-model="model">
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">Slide {{ i + 1 }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel> -->
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  // data: () => ({
  //   model: 0,
  //   colors: [
  //     "primary",
  //     "secondary",
  //     "yellow darken-2",
  //     "red",
  //     "orange",
  //     "white",
  //   ],
  // }),
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
