<template>
  <div class="editor_container">
    <div class="">
      <img :src="imgSrc" alt="" />
    </div>
    <div>
      <p>Input image src</p>
      <input v-model="imgSrc" type="text" />
    </div>
    <div>Input product name <input v-model="name" type="text" /></div>
    <div>Input product price <input v-model="price" type="number" /></div>
    <div>
      Input product description <input v-model="description" type="text" />
    </div>
    <div>
      <button @click="add_savePoduct">{{ btn1Text }}</button>
      <button @click="cansel_delPoduct">{{ btn2Text }}</button>
    </div>
    {{ this.$route.params.id }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Editor",
  data() {
    return {
      btn1Text: "Add",
      btn2Text: "Cansel",

      imgSrc: null,
      name: null,
      price: null,
      description: null,
    };
  },

  computed: {
    ...mapGetters("productToRender", ["getProductById"]),
  },

  methods: {
    ...mapActions("productToRender", [
      "saveProduct",
      "addProduct",
      "delProduct",
    ]),

    add_savePoduct() {
      const prodObj = {
        id: this.$route.params.id,
        imgSrc: this.imgSrc,
        name: this.name,
        price: this.price,
        description: this.description,
      };
      if (this.$route.params.id) {
        this.saveProduct(prodObj);
      } else {
        this.addProduct(prodObj);
      }
      this.$router.push({ name: "pie" });
    },

    cansel_delPoduct() {
      if (this.$route.params.id) {
        this.delProduct(this.$route.params.id);
      } else {
        this.$router.push({ name: "pie" });
      }
      this.$router.push({ name: "pie" });
    },
  },

  mounted() {
    if (this.$route.params.id) {
      this.btn1Text = "Save";
      this.btn2Text = "Del";

      const prodObj = this.getProductById(this.$route.params.id);

      this.imgSrc = prodObj.imgSrc;
      this.name = prodObj.name;
      this.price = prodObj.price;
      this.description = prodObj.description;
    }
  },
};
</script>

<style lang="scss" scoped>
.editor_container {
  margin: 0 auto;
  max-width: 900px;
  background-color: rgb(58, 54, 59);
  color: azure;
  div {
    padding: 1% 3%;
    display: grid;
    grid-auto-flow: column;
    input {
      border: solid 2px blue;
      border-radius: 30px;
      background-color: bisque;
    }
    img {
      max-width: 250px;
    }
    button {
      background-color: rgb(120, 241, 183);
      color: black;
      padding: 1% 5%;
      border-radius: 15px;
      margin: 0% 5%;
      max-width: 25%;
    }
  }
}
</style>
