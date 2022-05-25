<template>
  <div>
    <div>
      <img
        src="https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1628688275216-BCFB0HFGKW724M6652JE/Anton_amp_amp_Ksyusha_wed-851.jpg?format=2500w"
        alt=""
      />
    </div>
    <div class="carousel">
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://klike.net/uploads/posts/2019-06/1560061011_1.jpg",
        },
        {
          src: "https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1630575153524-FYJJ58XO51580O6HQXGR/image-asset.jpeg?format=500w",
        },
        {
          src: "https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1630059535890-RKSYFP3I4PCBOM6A68AN/image-asset.jpeg?format=500w",
        },
        {
          src: "https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1629998604106-YUFI323YY4M7O7RCQQ9R/image-asset.jpeg?format=500w",
        },
        {
          src: "https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1629887771776-G7J1KPJ9VF6WY1GZMV18/image-asset.jpeg?format=500w",
        },
        {
          src: "https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1629799579112-C0VN3MGE75MSE0GV295H/image-asset.jpeg?format=500w",
        },
        {
          src: "https://images.squarespace-cdn.com/content/v1/56b25779e32140ec4133a635/1629799579112-IXXEPCMHXQPEOZN8A4BY/image-asset.jpeg?format=500w",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
}
.carousel {
  max-width: 100%;
  margin: 0 auto;
  background-color: rgb(219, 240, 233);
}
</style>
