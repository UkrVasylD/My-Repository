<template>
  <div class="container">
    <div class="head-titel">Яна кондитер</div>
    <div class="navigation">
      <div class="navigation-list">
        <div
          class="navigation-item"
          v-for="(value, nameObj, index) in menuListObj"
          :key="index"
          @click="goToRoutName(value.router)"
          @mouseover="onMouseover(value.submenu)"
        >
          {{ nameObj }}
        </div>
        <submenu
          class="submenu"
          v-if="showSubmenu"
          :submenu="submenuData"
          @mouseleave="onMouseleave"
        />
      </div>
      <div class="menu-rigth-column">
        <div class="navigation-item phone_svg" @click="changePopUpVisible">
          <img
            :src="require('@/assets/Icons/phone-icon.svg')"
            alt=""
            max-width="50px"
          />
        </div>
        <div class="navigation-item" @click="goToRoutName('cart')">
          <!-- Cart -->
          <img :src="require('@/assets/Icons/cart-icon.svg')" alt="" />
          {{ getTotalPrice }} грн.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { menuListObj } from "./setting.js";
import Submenu from "@/components/myHeader/Submenu";

export default {
  name: "myHeader",

  components: {
    Submenu,
  },

  data() {
    return {
      menuListObj,
      submenuData: null,
      showSubmenu: false,
    };
  },

  computed: {
    ...mapGetters("cart", ["getTotalPrice"]),
  },

  methods: {
    ...mapActions("popUp", ["changePopUpVisible"]),
    onMouseleave() {
      if (this.showSubmenu === true) {
        this.showSubmenu = false;
      }
    },

    onMouseover(submenuItem) {
      if (submenuItem) {
        this.showSubmenu = true;
      }
      this.submenuData = submenuItem;
    },

    goToRoutName(routName) {
      this.$router.push({ name: routName });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(172, 146, 185);
  color: azure;

  .head-titel {
    text-align: center;
    font-size: 200%;
    padding: 30px 0;
  }
  .navigation {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr minmax(auto, 800px) 1fr 1fr;

    .navigation-list {
      display: grid;
      grid-auto-flow: column;
      justify-items: center;
      grid-template-rows: 1fr;
      grid-column-start: 2;
      // grid-auto-columns: ;
      .space-end {
        grid-column-end: end;
      }
      .navigation-item {
        &:hover {
          color: rgb(60, 82, 60);
          cursor: pointer;
        }
      }
    }
    .menu-rigth-column {
      display: grid;
      grid-auto-flow: column;
      justify-items: center;
      .phone_svg {
        min-width: 20px;
        max-width: 30px;
      }
    }
  }
}
.submenu {
  position: absolute;
  z-index: 1;
  top: 138px;
  background-color: rgb(172, 146, 185, 0.9);
  color: azure;
}
</style>
