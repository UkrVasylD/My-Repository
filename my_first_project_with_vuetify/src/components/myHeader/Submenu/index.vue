<template>
  <div class="Submenu-container">
    <div></div>
    <div class="Submenu-column2">
      <div v-for="(value, name, index) in submenu.columnList" :key="index">
        <p @click="goToRoutName(value)" @mouseover="showImage(name)">
          {{ name }}
        </p>
      </div>
    </div>

    <div class="Submenu-column4">
      <!-- <img :src="showImage" alt="" /> -->

      <img :src="submenuImage" alt="" v-if="submenuNameImage" />
      <img :src="submenu.img['headerImage']" alt="" v-if="!submenuNameImage" />
    </div>
    <div>
      <!-- {{ submenuImage }} -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Submenu",
  data() {
    return {
      submenuNameImage: null,
    };
  },
  computed: {
    submenuImage() {
      return this.submenu.img[this.submenuNameImage];
    },
  },
  props: {
    submenu: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    goToRoutName(routName) {
      this.$router.push({ name: routName });
    },
    showImage(imageName) {
      // return this.submenu.img[imageName];
      return (this.submenuNameImage = imageName);
    },
  },
};
</script>

<style lang="scss" scoped>
.Submenu-container {
  max-width: 900px;
  min-width: 65vw;
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.5fr 1fr 0.1fr;
  justify-items: center;
  .Submenu-column2 {
    grid-column-start: 2;
    grid-column-end: 3;
    font-size: 150%;
  }
  .Submenu-column4 {
    grid-column-start: 4;
    grid-column-end: 5;
    img {
      max-width: 100%;
    }
  }
  .Submenu-column2 p {
    &:hover {
      color: rgb(60, 82, 60);
      cursor: pointer;
    }
  }
}
</style>
